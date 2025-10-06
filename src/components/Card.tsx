import styles from "../styles/Card.module.css";
import type { CardData } from "../data/CardData";

export default function Card({
  variant = "light",
  height = 200,
  children,
  centered = false,
  extraMargin = false,
}: CardData) {
  return (
    <div
      className={`${styles.card} ${extraMargin && styles.extraMargin} ${
        styles[variant]
      }`}
      style={{ height }}
    >
      <div className={`${styles.children} ${centered && styles.centered}`}>
        {children}
      </div>
    </div>
  );
}
