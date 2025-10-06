import { useState } from "react";
import { motion } from "framer-motion";

export default function Reordering() {
  function move_shift(arr, index) {
    const target = 4 * (index % 2) + Math.trunc(index / 4);
    const [value] = arr.splice(index, 1);
    arr.splice(target, 0, value);
    return arr;
  }

  let initialOrder = [
    { color: "#E6F0FF", id: 0, height: 200 },
    { color: "#B3D1FF", id: 1, height: 400 },
    { color: "#80B3FF", id: 2, height: 300 },
    { color: "#4D94FF", id: 3, height: 300 },
    { color: "#1A75FF", id: 4, height: 300 },
    { color: "#0052CC", id: 5, height: 300 },
    { color: "#003D99", id: 6, height: 200 },
    { color: "#001F4D", id: 7, height: 400 },
  ];

  const [order, setOrder] = useState(initialOrder);
  const [activeIndex, setActiveIndex] = useState(null);
  const [useGrid, setUseGrid] = useState(false);

  const referenceOrder = initialOrder.map((item) => ({ ...item }));

  const handleClick = (index) => {
    if (activeIndex === index) {
      setOrder(initialOrder.map((item) => ({ ...item })));
      setActiveIndex(null);
      setUseGrid(false);
    } else {
      const origIndex = referenceOrder.findIndex(
        (item) => item.id === order[index].id
      );

      // In grid mode: all cells are squares → no explicit height needed
      const newOrder = move_shift(
        initialOrder.map((item) => ({ ...item, height: 100 })), // fallback height for column layout
        origIndex
      );

      setOrder(newOrder);
      setActiveIndex(4 * (origIndex % 2) + Math.trunc(origIndex / 4));
      setUseGrid(true);
    }
  };

  return (
    <motion.div style={useGrid ? gridContainerGrid : gridContainerColumns}>
      {order.map((item, index) => (
        <motion.div
          key={item.id}
          layout
          transition={spring}
          style={{
            ...gridItem,
            backgroundColor: item.color,
            height: useGrid ? "auto" : item.height, // square from grid in grid mode
            aspectRatio: useGrid ? "2 / 1" : "auto", // 👈 ensures square cells
            gridColumn: index === activeIndex ? "span 3" : "span 1",
            gridRow: index === activeIndex ? "span 3" : "span 1",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontWeight: "bold",
            fontSize: "20px",
          }}
          onClick={() => handleClick(index)}
        >
          {item.id}
        </motion.div>
      ))}
    </motion.div>
  );
}

const spring = { type: "spring", damping: 20, stiffness: 200 };

const gridContainerColumns = {
  columnCount: "4",
  columnGap: "1rem",
  width: "1200px",
  height: "752px",
  margin: "50px auto",
};

const gridContainerGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(4, 300px)", // each cell 100px wide
  gridAutoRows: "150px",
  gap: "10px",
  width: "max-content",
  margin: "50px auto",
};

const gridItem = {
  borderRadius: "10px",
  cursor: "pointer",
  marginBottom: "1rem",
};
