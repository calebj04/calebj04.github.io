// import { motion } from "framer-motion";
// import type { Transition } from "framer-motion";
import { useState } from "react";
import Card from "./Card";
import styles from "../styles/MasonryGrid.module.css";
import { cards } from "../data/CardData";
import type { CardData } from "../data/CardData";
import { ExpandedCardData } from "../data/ExpandedCardData";

export default function MasonryGrid() {
  // Reorder array to move clicked item to target position
  function reorder_array(arr: Array<CardData>, index: number) {
    const target = 2 * Math.trunc(index / 4) + Math.trunc(index / 2);
    const [value] = arr.splice(index, 1);
    arr.splice(target, 0, value);
    return arr;
  }

  // Spring transition for layout changes
  // const spring: Partial<Transition> = {
  //   type: "spring",
  //   damping: 20,
  //   stiffness: 200,
  // };

  // State for current order of cards and active index
  const [order, setOrder] = useState(cards);
  const [activeIndex, setActiveIndex] = useState(null as number | null);

  const collapsed = activeIndex == null;

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
        <div //motion div
          key={item.id}
          // layout
          // transition={spring}
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
            {collapsed
              ? item.children
              : index === activeIndex
              ? ExpandedCardData[item.id!]
              : item.children}
          </Card>
        </div> //motion div
      ))}
    </div>
  );
}
