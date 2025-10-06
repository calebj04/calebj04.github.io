import { motion } from "framer-motion";
import Card from "./Card";
import styles from "../styles/MasonryGrid.module.css";
import { cards } from "../data/CardData";
import type { CardData } from "../data/CardData";

export default function MasonryGrid() {
  return (
    <div className={styles.masonry}>
      {cards.map((card: CardData, i: number) => (
        <Card
          key={i}
          height={card.height}
          variant={card.variant}
          centered={card.centered}
          extraMargin={card.extraMargin}
        >
          {card.children}
        </Card>
      ))}
    </div>
  );
}
