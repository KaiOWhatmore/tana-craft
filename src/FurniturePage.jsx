import React from "react";
import ImageCarousel from "./ImageCarousel";
import styles from "./FurniturePage.module.css";

const FurniturePage = () => {
  const modernaTable = [
    "moderna_x_saisho-table-home-banner.jpg",
    "moderna_x_PXL_20241223_081506152.MP.jpg",
    "moderna_x_PXL_20241223_081413147.jpg",
    "moderna_x_PXL_20241223_081435391.MP.jpg",
  ];

  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <h1 style={{ textAlign: "center" }}>Furniture Showcase</h1>
        <ImageCarousel images={modernaTable} />
      </div>
    </div>
  );
};

export default FurniturePage;
