import { motion } from "framer-motion";
import { useState } from "react";
import styles from "../../styles/Languages.module.css";

export default function Languages() {
  const icons = [
    "/icons/Python icon.svg",
    "/icons/React icon.svg",
    "/icons/Java icon.svg",
    "/icons/HTML icon.svg",
    "/icons/C icon.svg",
    "/icons/CSS icon.svg",
    "/icons/R icon.svg",
    "/icons/JavaScript icon.svg",
  ];

  // Track active state for each icon
  const [activeStates, setActiveStates] = useState<boolean[]>(
    new Array(icons.length).fill(false)
  );

  const handleClick = (e: React.MouseEvent<HTMLImageElement>, index: number) => {
    e.stopPropagation();
    setActiveStates((prev) => {
      const newStates = [...prev];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        justifyItems: "center",
      }}
    >
      {icons.map((icon, index) => (
        <motion.img
          initial={{ opacity: 0, y: 20 }}
          key={index}
          src={icon}
          className={styles.svgStyle}
          onClick={(e) => handleClick(e, index)}
          animate={
            activeStates[index]
              ? { opacity: 1, x: -100, y: 0, rotate: 360 }
              : {opacity: 1, x: 0, y: 0, rotate: 0 }
          }
          transition={{ duration: 0.5,  delay: index * 0.1}}
          style={{ cursor: "pointer" }}
        />
      ))}
    </div>
  );
}
