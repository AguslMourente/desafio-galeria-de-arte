import { sanityClient, urlFor } from "./sanity";
import { memo } from "radash";
const oneDay = 24 * 60 * 60 * 1000;

export const getPhotosByTag = memo(
  async function (tag): Promise<any[]> {
    const photos = await sanityClient.fetch(
      `*[_type == "photo" && $tag in tags]`,
      {
        tag,
      }
    );

    return photos.map((p) => ({
      ...p,
      imageURL: urlFor(p.image),
    }));
  },
  {
    ttl: oneDay,
  }
);

interface Photo {
  tags: string[];
}

export const getTags = memo(
  async function () {
    const photos: Photo[] = await sanityClient.fetch(
      `*[_type == "photo"]{ tags}`
    );

    const tags: { [tag: string]: number } = {};

    photos.forEach((p) => {
      p.tags.forEach((t) => {
        tags[t] ||= 0;
        tags[t]++;
      });
    });

    return Object.keys(tags).sort((a, b) => tags[b] - tags[a]);
  },
  {
    ttl: oneDay,
  }
);
