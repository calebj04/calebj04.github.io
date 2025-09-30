import styles from "../styles/Card.module.css";

import type { CardData } from "./MasonryGrid";

export default function Card({
  variant = "light",
  height = 200,
  children,
  centered = false,
}: CardData) {
  return (
    <div className={`${styles.card} ${styles[variant]}`} style={{ height }}>
      <div className={`${styles.children} ${centered && styles.centered}`}>{children}</div>
    </div>
  );
}
