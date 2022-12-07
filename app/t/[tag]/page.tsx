import { Menu } from "./menu";
import { PhotoViewer } from "./viewer";
import styles from "./styles.module.css";
import { getPhotosByTag, getTags } from "lib/api";
import { use } from "react";

export const revalidate = 3600;

export default ({ params }) => {
  const tags = use(getTags());
  const tag = params.tag === "first" ? tags[0] : params.tag;
  const photos = use(getPhotosByTag(tag));

  return (
    <main className={styles.layout}>
      <PhotoViewer photos={photos} />
      <Menu tags={tags} />
    </main>
  );
};
