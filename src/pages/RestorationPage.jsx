import React from "react";
import styles from "./RestorationPage.module.css";
import BlueToolBoxImageCarousel from "../components/carousels/BlueToolBoxImageCarousel";
import GreenToolBoxImageCarousel from "../components/carousels/GreenToolBoxImageCarousel";

const RestorationPage = () => {
  return (
    <div className={styles.container}>
      {/* Moderna Coffee Table */}
      <div className={styles.row}>
        <div className={styles.textColumn}>
          <h2 className={styles.title}>Vintage Rota 3 Tier Tool Box</h2>
          <p className={styles.description}>
            3 Tier Tool Box restored to store drill bits, grinder disks, pin punches, glue and other tool accessories.
            Painted with four layers of primer and three layers of marine blue epoxy paint
          </p>
        </div>
        <div className={styles.carouselColumn}>
          <BlueToolBoxImageCarousel />
        </div>
      </div>

      <hr style={{ border: "0", borderTop: "1px solid #ccc", margin: "20px 0", width: "95%" }} />

      <div className={styles.row}>
        <div className={styles.textColumn}>
          <h2 className={styles.title}>Rota Green Toolbox</h2>
          <p className={styles.description}>
            Toolbox restored to store woodwork clamps.  3 layers of primer with 4 satin green top coats
          </p>
        </div>
        <div className={styles.carouselColumn}>
          <GreenToolBoxImageCarousel />
        </div>
      </div>

    </div>
  );
};

export default RestorationPage;
