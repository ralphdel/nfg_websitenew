import { createClient } from "@sanity/client";

export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2026-05-06";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "3hx8h0xy";

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true
});
