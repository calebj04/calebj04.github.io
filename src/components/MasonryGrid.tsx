import { motion, velocityPerSecond } from "framer-motion";
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

  const spring = { type: "spring", damping: 20, stiffness: 200 };

  const [order, setOrder] = useState(cards);
  const [activeIndex, setActiveIndex] = useState(null as number | null);
  const [useGrid, setUseGrid] = useState(false);

  const referenceOrder = cards.map((item) => ({ ...item }));

  const handleClick = (index: number) => {
    if (activeIndex === index) {
      setOrder(cards.map((item) => ({ ...item }))); // reset
      setActiveIndex(null);
      setUseGrid(false);
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
      setUseGrid(true);
    }
  };

  return (
    <div
      className={
        useGrid ? styles.gridContainerGrid : styles.gridContainerColumns
      }
    >
      {order.map((item: CardData, index: number) => (
        <motion.div
          key={item.id}
          layout
          transition={spring}
          style={{
            gridColumn: index === activeIndex ? "span 3" : "span 1",
            gridRow: index === activeIndex ? "span 3" : "span 1",
            height: useGrid ? "auto" : item.height,
            aspectRatio: useGrid ? "2 / 1" : "auto",
          }}
          onClick={() => handleClick(index)}
        >
          <Card
            height={useGrid ? (index === activeIndex ? 470 : 150) : item.height}
            variant={item.variant}
            centered={item.centered}
            extraMargin={useGrid ? false : item.extraMargin}
          >
            {item.children}
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
