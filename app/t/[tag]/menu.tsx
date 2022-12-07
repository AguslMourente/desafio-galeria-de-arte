import { ColorSelector } from "./color-selector";
import styles from "./styles.module.css";
import Link from "next/link";

export function Menu({ tags = [] }) {
  return (
    <nav className={styles.menu}>
      <div className={styles.tagsContainer}>
        {tags.map((t) => (
          <Link href={"/t/" + t} key={t} className={styles.tagLink}>
            {t.toString()}
          </Link>
        ))}
      </div>
      <div style={{ position: "relative" }}>
        <nav className={styles.options}>
          <a target="_blank" href="https://apx.school">
            about
          </a>
          <a target="_blank" href="https://apx.school">
            apx.school
          </a>
        </nav>
        <ColorSelector />
      </div>
    </nav>
  );
}
