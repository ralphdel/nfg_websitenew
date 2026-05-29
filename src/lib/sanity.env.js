export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2026-05-06";
export const projectId = (process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "").trim() || "replace-me";
export const dataset = (process.env.NEXT_PUBLIC_SANITY_DATASET || "").trim();

export const hasSanityConfig = projectId !== "replace-me" && Boolean(dataset);
export const isProductionDataset = dataset === "production";

export function getStudioSanityConfig() {
  if (!hasSanityConfig) {
    throw new Error(
      "Missing NEXT_PUBLIC_SANITY_PROJECT_ID or NEXT_PUBLIC_SANITY_DATASET. Set them in .env.local so local Studio does not silently point to the wrong dataset."
    );
  }

  return { projectId, dataset, apiVersion };
}

