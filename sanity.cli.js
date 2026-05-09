const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "3hx8h0xy";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export default {
  api: {
    projectId,
    dataset
  }
};
