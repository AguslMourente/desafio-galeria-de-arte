import createSanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const projectConfig = {
  projectId: "2914ovtf",
  dataset: "production",
  apiVersion: "2021-10-21", // Learn more: https://www.sanity.io/docs/api-versioning
  useCdn: process.env.NODE_ENV === "production",
  token: process.env.SANITY_TOKEN,
};

export const sanityClient = createSanityClient(projectConfig);

const builder = imageUrlBuilder(projectConfig);

export function urlFor(image) {
  return builder.image(image).url();
}
