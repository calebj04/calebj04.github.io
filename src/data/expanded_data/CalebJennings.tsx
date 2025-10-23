import styles from "../../styles/CalebJennings.module.css";

export default function CalebJennings() {
  const images1 = [
    "groomsmen1.jpg",
    "groomsmen2.jpg",
    "groomsmen3.jpg",
    "groomsmen4.jpg",
    "groomsmen5.jpg",
  ];

  const images2 = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",
    "9.jpg",
    "10.jpg",
    "11.jpg",
    "12.jpg",
    "13.jpg",
    "14.jpg",
    "15.jpg",
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%",
      }}
    >
      <div className={styles.carousel}>
        <div className={`${styles.group} ${styles.fast}`}>
          {images1.map((image, index) => (
            <img
              key={index}
              className={styles.imgStyle}
              src={`/images/${image}`}
              alt={`Groomsmen Photo ${index + 1}`}
            />
          ))}
        </div>

        <div aria-hidden className={`${styles.group} ${styles.fast}`}>
          {images1.map((image, index) => (
            <img
              key={index}
              className={styles.imgStyle}
              src={`/images/${image}`}
              alt={`Groomsmen Photo ${index + 1}`}
            />
          ))}
        </div>
      </div>


      <div className={styles.carousel}>
        <div className={`${styles.group} ${styles.slow}`}>
          {images2.map((image, index) => (
            <img
              key={index}
              className={styles.imgStyle}
              src={`/images/${image}`}
              alt={`Photo ${index + 1}`}
            />
          ))}
        </div>

        <div aria-hidden className={`${styles.group} ${styles.slow}`}>
          {images2.map((image, index) => (
            <img
              key={index}
              className={styles.imgStyle}
              src={`/images/${image}`}
              alt={` Photo ${index + 1}`}
            />
          ))}
        </div>
      </div>

    </div>
  );
}
