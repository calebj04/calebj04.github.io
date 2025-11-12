import { motion } from "framer-motion";
import type { Transition } from "framer-motion";
import { useState } from "react";
import Card from "./Card";
import styles from "../styles/MasonryGrid.module.css";
import { cards } from "../data/CardData";
import type { CardData } from "../data/CardData";
import { ExpandedCardData } from "../data/ExpandedCardData";

export default function MasonryGrid() {
  function reorderArray(array: Array<CardData>, index: number) {
    const target = 2 * Math.trunc(index / 4) + Math.trunc(index / 2);
    const [value] = array.splice(index, 1);
    array.splice(target, 0, value);
    return array;
  }

  // Spring transition for layout changes
  const spring: Partial<Transition> = {
    type: "spring",
    damping: 19,
    stiffness: 200,
  };

  // State for current order of cards and active index
  const [order, setOrder] = useState(cards);
  const [activeIndex, setActiveIndex] = useState(null as number | null);

  const collapsed = activeIndex == null;

  const handleClick = (index: number) => {
    if (activeIndex === index) {
      setOrder(cards.map((item) => ({ ...item }))); // reset
      setActiveIndex(null);
    } else {
      // find index of clicked box
      const origIndex = cards.findIndex((item) => item.id === order[index].id);

      // create new order
      const newOrder = reorderArray(
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
          layout="position"
          transition={spring}
          style={{
            gridColumn: index === activeIndex ? "span 3" : "span 1",
            gridRow: index === activeIndex ? "span 3" : "span 1",
          }}
          onClick={() => handleClick(index)}
        >
          <Card
            height={
              collapsed ? item.height : index === activeIndex ? "100%" : 150
            }
            variant={item.variant}
            centered={collapsed ? item.centered : true}
            extraMargin={collapsed ? item.extraMargin : false}
          >
            <motion.div
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {collapsed
                ? item.children
                : index === activeIndex
                ? ExpandedCardData[item.id!]
                : item.children}
            </motion.div>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
