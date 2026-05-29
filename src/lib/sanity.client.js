import { createClient } from "@sanity/client";
import { apiVersion, dataset, projectId } from "./sanity.env";

const token = process.env.SANITY_API_READ_TOKEN || undefined;

// Server-side: skip CDN for fresh data on every revalidation
// Client-side: use CDN for fast reads
const isServer = typeof window === "undefined";

export const sanityClient = createClient({
  projectId,
  dataset || "production",
  apiVersion,
  useCdn: !isServer,
  token,
  perspective: "published"
});
