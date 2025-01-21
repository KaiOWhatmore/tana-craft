import React from "react";
import styles from "./FurniturePage.module.css";
import ModernaImageCarousel from "./ModernaImageCarousel";

const FurniturePage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Welcome to Tana Craft</h1>
      <div className={styles.row}>
        {/* Left Column (Text) */}
        <div className={styles.textColumn}>
          <h2 className={styles.title}>Moderna Coffee Table</h2>
          <p className={styles.description}>Mountain Ash hardwood with tapered legs. 
          Treated with hard wax oil and Carnauba wax buffed to a mirror finish.</p>
        </div>

        {/* Right Column (Carousel) */}
        <div className={styles.carouselColumn}>
          <ModernaImageCarousel aspectRatio={"4:3"}/>
        </div>
      </div>
      <div className={styles.row}>
        {/* Left Column (Text) */}
        <div className={styles.textColumn}>
          <h2 className={styles.title}>Moderna Coffee Table</h2>
          <p className={styles.description}>Mountain Ash hardwood with tapered legs. 
          Treated with hard wax oil and Carnauba wax buffed to a mirror finish.</p>
        </div>

        {/* Right Column (Carousel) */}
        <div className={styles.carouselColumn}>
          <ModernaImageCarousel aspectRatio={"4:3"}/>
        </div>
      </div>
    </div>
  );
};

export default FurniturePage;
