import { createClient } from "@sanity/client";

export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2026-05-06";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "3hx8h0xy";
const token = process.env.SANITY_API_READ_TOKEN || undefined;

// Server-side: skip CDN for fresh data on every revalidation
// Client-side: use CDN for fast reads
const isServer = typeof window === "undefined";

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: !isServer,
  token,
  perspective: "published"
});
