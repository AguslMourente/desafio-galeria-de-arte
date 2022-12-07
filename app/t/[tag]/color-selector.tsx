"use client";
import styles from "./styles.module.css";
import { useColors } from "lib/hooks";
import { clsx } from "clsx";

export function ColorSelector() {
  const { colors, color, setColor } = useColors();

  return (
    <div className={styles.colorSelector}>
      {colors.map((c) => (
        <div
          key={c}
          className={clsx(styles.colorButton, { selected: color === c })}
          style={{ backgroundColor: c }}
          onClick={() => setColor(c)}
        />
      ))}
    </div>
  );
}
