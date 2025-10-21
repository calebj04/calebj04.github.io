import { motion } from "framer-motion";
import type { Transition } from "framer-motion";
import { useState } from "react";
import Card from "./Card";
import styles from "../styles/MasonryGrid.module.css";
import { cards } from "../data/CardData";
import type { CardData } from "../data/CardData";

export default function MasonryGrid() {
  // Reorder array to move clicked item to target position
  function reorder_array(arr: Array<CardData>, index: number) {
    const target = 2 * Math.trunc(index / 4) + Math.trunc(index / 2);
    const [value] = arr.splice(index, 1);
    arr.splice(target, 0, value);
    return arr;
  }
  const spring: Partial<Transition> = {
    type: "spring",
    damping: 20,
    stiffness: 200,
  };
  const [order, setOrder] = useState(cards);
  const [activeIndex, setActiveIndex] = useState(null as number | null);

  const handleClick = (index: number) => {
    if (activeIndex === index) {
      setOrder(cards.map((item) => ({ ...item }))); // reset
      setActiveIndex(null);
    } else {
      // find the original index of the clicked box
      const origIndex = cards.findIndex((item) => item.id === order[index].id);

      // make a fresh copy of initialOrder
      const newOrder = reorder_array(
        cards.map((item) => ({ ...item })),
        origIndex
      );

      setOrder(newOrder);
      setActiveIndex(2 * Math.trunc(origIndex / 4) + Math.trunc(origIndex / 2));
    }
  };

  return (
    <div className={styles.gridContainerColumns}>
      {order.map((item: CardData, index: number) => (
        <motion.div
          key={item.id}
          layout
          transition={spring}
          style={{
            //margin: "0.5rem",
            gridColumn: index === activeIndex ? "span 3" : "span 1",
            gridRow: index === activeIndex ? "span 3" : "span 1",
            gridAutoRows: "minmax(100px, auto)",
          }}
          onClick={() => handleClick(index)}
        >
          <Card
            height={
              activeIndex !== null
                ? index === activeIndex
                  ? "100%"
                  : 150
                : item.height
            }
            variant={item.variant}
            centered={activeIndex !== null ? true : item.centered}
            extraMargin={activeIndex !== null ? false : item.extraMargin}
          >
            {item.children}
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
