import React from "react";
import ImageCarousel from "./ImageCarousel";
import styles from "./FurniturePage.module.css";

const FurniturePage = () => {
  // Define the rows with text and images
  const rows = [
    {
      title: "Table Showcase",
      description:
        "Experience the elegance of our handcrafted tables, designed to last generations.",
      images: [
        "moderna_x_saisho-table-home-banner.jpg",
        "moderna_x_PXL_20241223_081506152.MP.jpg",
        "moderna_x_PXL_20241223_081413147.jpg",
      ],
    },
    {
      title: "Chopsticks Making Process",
      description: "Learn how we craft beautiful handmade chopsticks.",
      images: ["chopsticks-whittled.jpg", "image2.jpg", "image3.jpg"],
    },
    
    {
      title: "Restoration Work",
      description:
        "We restore vintage furniture with care, preserving its timeless appeal.",
      images: ["restoration1.jpg", "restoration2.jpg", "restoration3.jpg"],
    },
    {
      title: "Van Drawers",
      description:
        "Our custom van drawers are perfect for the intrepid adventurer.",
      images: ["drawer1.jpg", "drawer2.jpg", "drawer3.jpg"],
    },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Welcome to Tana Craft</h1>
      {rows.map((row, index) => (
        <div
          key={index}
          className={`${styles.row} ${
            index % 2 === 0 ? styles.normalOrder : styles.reverseOrder
          }`}
        >
          {/* Left Column (Text) */}
          <div className={styles.textColumn}>
            <h2 className={styles.title}>{row.title}</h2>
            <p className={styles.description}>{row.description}</p>
          </div>

          {/* Right Column (Carousel) */}
          <div className={styles.carouselColumn}>
            <ImageCarousel images={row.images} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default FurniturePage;
