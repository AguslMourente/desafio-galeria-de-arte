import { sanityClient } from "./sanity";
import { memo } from "radash";
const oneDay = 24 * 60 * 60 * 1000;

export const getPhotosByTag = memo(
  async function (tag): Promise<any[]> {
    return sanityClient.fetch(`*[_type == "photo" && $tag in tags[].label]`, {
      tag,
    });
  },
  {
    ttl: oneDay,
  }
);

interface Photo {
  tags: {
    label: string;
    value: string;
  }[];
}

export const getTags = memo(
  async function () {
    const photos: Photo[] = await sanityClient.fetch(
      `*[_type == "photo"]{ tags}`
    );

    const tags: { [tag: string]: number } = {};

    photos.forEach((p) => {
      p.tags.forEach((t: { label: string }) => {
        tags[t.label] ||= 0;
        tags[t.label]++;
      });
    });

    return Object.keys(tags).sort((a, b) => tags[b] - tags[a]);
  },
  {
    ttl: oneDay,
  }
);
