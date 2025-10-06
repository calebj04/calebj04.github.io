import { motion } from "framer-motion";
import { useState } from "react";
import Card from "./Card";
import styles from "../styles/MasonryGrid.module.css";
import { cards } from "../data/CardData";
import type { CardData } from "../data/CardData";

export default function MasonryGrid() {
  function move_shift(arr: Array<CardData>, index: number) {
    const target = 2 * Math.trunc(index / 4) + Math.trunc(index / 2);
    const [value] = arr.splice(index, 1);
    arr.splice(target, 0, value);
    return arr;
  }

  const [order, setOrder] = useState(cards);
  const [activeIndex, setActiveIndex] = useState(null as number | null);

  const referenceOrder = cards.map((item) => ({ ...item }));

  const handleClick = (index: number) => {
    if (activeIndex === index) {
      setOrder(cards.map((item) => ({ ...item }))); // reset
      setActiveIndex(null);
    } else {
      // find the original index of the clicked box
      const origIndex = referenceOrder.findIndex(
        (item) => item.id === order[index].id
      );

      // make a fresh copy of initialOrder
      const newOrder = move_shift(
        cards.map((item) => ({ ...item })),
        origIndex
      );

      setOrder(newOrder);
      setActiveIndex(2 * Math.trunc(origIndex / 4) + Math.trunc(origIndex / 2));
    }
  };

  return (
    <div className={styles.masonry}>
      {order.map((item: CardData, index: number) => (
        <motion.div
          key={item.id} // use fixed id
          layout
          //transition={spring}
          style={{
            gridColumn: index === activeIndex ? "span 1" : "span 1",
            gridRow: index === activeIndex ? "span 3" : "span 1",
          }}
          onClick={() => handleClick(index)}
        >
          <Card
            key={index}
            height={item.height}
            variant={item.variant}
            centered={item.centered}
            extraMargin={item.extraMargin}
          >
            {item.children}
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
