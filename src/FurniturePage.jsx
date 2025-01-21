import React, { useState } from "react";
import styles from "./FurniturePage.module.css";
import SimpleSlider from "./SimpleSlider"

const products = [
  {
    title: "Spine Coffee Table",
    description:
      "Mountain Ash hardwood with tapered legs. Treated with hard wax oil and Carnauba wax buffed to a mirror finish.",
    images: ["chopsticks-whittled.jpg", "chopsticks-whittled.jpg", "chopsticks-whittled.jpg"], // Placeholder for 4 dummy images
  },
 
];

const FurniturePage = () => {

  return (
    <div className={styles.container}>
      < SimpleSlider />
      <div className={styles.furniturePageBanner}>
        <h1 className={styles.header}>
          Choose sustainable, locally made furniture to suit your needs
        </h1>
        <p className={styles.subheader}>
          Tired of mass-produced furniture? Browse our products that will last
          generations.
        </p>
      </div>
    </div>
  );
};

export default FurniturePage;
