import styles from "../styles/Grid.module.css";

export default function Box() {
  return (
    <div className={styles.grid}>
      <div style={{height: "200px"}} className={styles.light}>1</div>
      <div style={{height: "300px"}} className={styles.dark}>2</div>
      <div style={{height: "300px"}} className={styles.light}>3</div>
      <div style={{height: "200px"}} className={styles.dark}>4</div>
      <div style={{height: "400px"}} className={styles.dark}>5</div>
      <div style={{height: "300px"}} className={styles.light}>6</div>
      <div style={{height: "300px"}} className={styles.dark}>7</div>
      <div style={{height: "400px"}} className={styles.light}>8</div>
    </div>
  );
}
