import createSanityClient from "@sanity/client";

export const projectConfig = {
  dataset: "production",
  projectId: "04ng9ubp",
  apiVersion: "2021-10-21", // Learn more: https://www.sanity.io/docs/api-versioning
  useCdn: process.env.NODE_ENV === "production",
  token: process.env.SANITY_READ_TOKEN,
};

export const sanityClient = createSanityClient(projectConfig);
