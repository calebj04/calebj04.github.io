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

  const descriptions = [
    "A versatile language known for its readability and wide range of applications, from web development to data science.",
    "A popular JavaScript library for building user interfaces, particularly single-page applications, using a component-based architecture.",
    "An object-oriented programming language commonly used for building enterprise-scale applications.",
    "The standard markup language for creating web pages and web applications, providing the basic structure of websites.",
    "A powerful systems programming language that provides low-level access to memory often used in operating systems and embedded systems.",
    "A stylesheet language used for describing the presentation of a document written in HTML or XML, enabling the separation of content and design on the web.",
    "A programming language and environment commonly used for statistical computing and graphics, favored by statisticians and data miners for data analysis.",
    "A high-level, dynamic programming language that is a core technology of the World Wide Web, enabling interactive web pages and is an essential part of web applications.",
  ];

  const match = (icon: string) => {
    return icon.match(/\/icons\/(.+?)\sicon\.svg$/);
  };

  const language = (matched: RegExpMatchArray | null) => {
    return matched ? matched[1] : null;
  };

  // Track active state for each icon
  const [activeStates, setActiveStates] = useState<boolean[]>(
    new Array(icons.length).fill(false)
  );
  const [clicked, setClicked] = useState(false);

  const handleClick = (
    e: React.MouseEvent<HTMLImageElement>,
    index: number
  ) => {
    e.stopPropagation();
    setActiveStates((prev) => {
      const newStates = [...prev];
      newStates[index] = !newStates[index];
      return newStates;
    });
    setClicked(true);
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
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <motion.img
            initial={{ opacity: 0, y: 20 }}
            key={index}
            src={icon}
            className={styles.svgStyle}
            onClick={(e) => handleClick(e, index)}
            animate={
              activeStates[index]
                ? { opacity: 1, x: -10, y: 0, rotate: 0 }
                : { opacity: 1, y: 0, rotate: 0 }
            }
            transition={{ duration: 0.5, delay: clicked ? 0 : index * 0.1 }}
            style={{ cursor: "pointer" }}
          />
          <motion.p
            initial={{ opacity: 0, y: clicked ? 20 : 0 }}
            transition={{ duration: 0.5, delay: clicked ? 0 : index * 0.1 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {!activeStates[index] ? (
              <p style={{ width: "100px" }}>{language(match(icon))}</p>
            ) : (
              <motion.div
                initial={{ opacity: 0, x: 0 }}
                transition={{ duration: 0.5 }}
                animate={{ opacity: 1, x: -20, rotate: 0 }}
              >
                <p style={{ fontSize: "1rem" }}>{descriptions[index]}</p>
              </motion.div>
            )}
          </motion.p>
        </div>
      ))}
    </div>
  );
}
