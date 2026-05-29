import { createClient } from "@sanity/client";
import fs from "fs";
import path from "path";

// Read .env.local
const envPath = path.join(process.cwd(), ".env.local");
let projectId = "3hx8h0xy";
let dataset = "production";
let token = undefined;

if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, "utf8");
  const lines = envContent.split("\n");
  for (const line of lines) {
    const parts = line.split("=");
    if (parts.length >= 2) {
      const key = parts[0].trim();
      const value = parts.slice(1).join("=").trim();
      if (key === "NEXT_PUBLIC_SANITY_PROJECT_ID" || key === "SANITY_PROJECT_ID") projectId = value;
      if (key === "NEXT_PUBLIC_SANITY_DATASET" || key === "SANITY_DATASET") dataset = value;
      if (key === "SANITY_API_READ_TOKEN" || key === "SANITY_READ_TOKEN") token = value;
    }
  }
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: "2026-05-06",
  useCdn: false,
  token
});

async function main() {
  console.log(`Using Sanity Project: ${projectId}, Dataset: ${dataset}`);
  console.log("Fetching existing video URLs from Sanity...");
  try {
    const query = `*[_type == "homepage"][0]{
      heroSlides[]{
        headline,
        "videoUrl": media.videoFile.asset->url
      }
    }`;
    const result = await client.fetch(query);
    if (!result || !result.heroSlides) {
      console.log("No homepage hero slides found.");
    } else {
      console.log("\n--- Homepage Hero Slide Videos ---");
      result.heroSlides.forEach((slide, index) => {
        console.log(`\nSlide ${index + 1}: "${slide.headline}"`);
        if (slide.videoUrl) {
          console.log(`URL: ${slide.videoUrl}`);
        } else {
          console.log(`URL: (No video file uploaded)`);
        }
      });
    }

    // Also look for other file assets in the dataset that are videos
    console.log("\nSearching for all video assets in your Sanity dataset...");
    const allVideosQuery = `*[_type == "sanity.fileAsset" && mimeType match "video/*"]{
      originalFilename,
      url,
      size
    }`;
    const allVideos = await client.fetch(allVideosQuery);
    console.log(`\nFound ${allVideos.length} total video assets in the dataset:`);
    allVideos.forEach((vid, i) => {
      console.log(`\n[${i+1}] File: ${vid.originalFilename || "Unnamed"}`);
      console.log(`URL: ${vid.url}`);
      console.log(`Size: ${(vid.size / (1024 * 1024)).toFixed(2)} MB`);
    });

  } catch (error) {
    console.error("Error fetching video URLs:", error.message || error);
  }
}

main();
