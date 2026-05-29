import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createClient } from "@sanity/client";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");

loadEnvFile(path.join(rootDir, ".env.local"));

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || process.env.SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || process.env.SANITY_DATASET || "production";
const readToken = process.env.SANITY_API_READ_TOKEN || process.env.SANITY_READ_TOKEN;
const writeToken = process.env.SANITY_API_WRITE_TOKEN || process.env.SANITY_AUTH_TOKEN;
const queryApiVersion = "2026-05-06";
const historyApiVersion = "v2025-02-19";

const args = new Map(
  process.argv
    .slice(2)
    .filter((arg) => arg.startsWith("--"))
    .map((arg) => {
      const [key, ...rest] = arg.slice(2).split("=");
      return [key, rest.length ? rest.join("=") : true];
    })
);

const restoreTime = String(args.get("restore-time") || "2026-05-29T07:00:00Z");
const updatedSince = String(args.get("updated-since") || "2026-05-29T07:00:00Z");
const applyRestore = args.has("apply");

if (!projectId || !readToken) {
  console.error("Missing Sanity project configuration or read token in .env.local.");
  process.exit(1);
}

if (applyRestore && !writeToken) {
  console.error("Missing SANITY_API_WRITE_TOKEN or SANITY_AUTH_TOKEN for restore.");
  process.exit(1);
}

const readClient = createClient({
  projectId,
  dataset,
  apiVersion: queryApiVersion,
  useCdn: false,
  token: readToken,
  perspective: "published"
});

const writeClient = applyRestore
  ? createClient({
      projectId,
      dataset,
      apiVersion: queryApiVersion,
      useCdn: false,
      token: writeToken,
      perspective: "published"
    })
  : null;

async function main() {
  console.log(`Scanning dataset ${projectId}/${dataset}`);
  console.log(`Updated since: ${updatedSince}`);
  console.log(`Restore time: ${restoreTime}`);

  const affectedDocs = await readClient.fetch(
    `*[_updatedAt >= $updatedSince] | order(_updatedAt desc){_id,_type,_updatedAt,_rev}`,
    { updatedSince }
  );

  if (!affectedDocs.length) {
    console.log("No documents matched the recovery window.");
    return;
  }

  const recoveryDir = path.join(rootDir, "tmp", "sanity-recovery");
  fs.mkdirSync(recoveryDir, { recursive: true });

  const stamp = new Date().toISOString().replace(/[:.]/g, "-");
  const backupPath = path.join(recoveryDir, `backup-current-${stamp}.json`);
  const restorePath = path.join(recoveryDir, `restore-payload-${stamp}.json`);

  fs.writeFileSync(backupPath, JSON.stringify(affectedDocs, null, 2));

  const restoreDocuments = [];
  for (const doc of affectedDocs) {
    const historical = await fetchHistoricalDocument(doc._id, restoreTime);
    if (historical) restoreDocuments.push(historical);
  }

  fs.writeFileSync(restorePath, JSON.stringify(restoreDocuments, null, 2));

  console.log(`Matched ${affectedDocs.length} current documents.`);
  console.log(`Recovered ${restoreDocuments.length} historical documents.`);
  console.log(`Current-state backup: ${backupPath}`);
  console.log(`Restore payload: ${restorePath}`);

  if (!applyRestore) {
    console.log("Dry run complete. Re-run with --apply to restore these revisions.");
    return;
  }

  let transaction = writeClient.transaction();
  for (const document of restoreDocuments) {
    transaction = transaction.createOrReplace(document);
  }
  await transaction.commit();

  console.log(`Restore applied: ${restoreDocuments.length} documents written back to Sanity.`);
}

async function fetchHistoricalDocument(documentId, time) {
  const url = new URL(
    `https://${projectId}.api.sanity.io/${historyApiVersion}/data/history/${dataset}/documents/${encodeURIComponent(documentId)}`
  );
  url.searchParams.set("time", time);

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${readToken}`
    }
  });

  if (!response.ok) {
    console.error(`History lookup failed for ${documentId}: ${response.status} ${response.statusText}`);
    return null;
  }

  const payload = await response.json();
  const document = payload.documents?.[0];

  if (!document) {
    console.warn(`No historical document found for ${documentId} at ${time}`);
    return null;
  }

  return document;
}

function loadEnvFile(filePath) {
  if (!fs.existsSync(filePath)) return;

  for (const line of fs.readFileSync(filePath, "utf8").split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;

    const index = trimmed.indexOf("=");
    if (index === -1) continue;

    const key = trimmed.slice(0, index).trim();
    const value = trimmed.slice(index + 1).trim();
    if (!process.env[key]) process.env[key] = value;
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
