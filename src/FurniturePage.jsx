import React from "react";
import styles from "./FurniturePage.module.css";
import ModernaImageCarousel from "./carousels/ModernaImageCarousel";
import FloatingBookshelfImageCarousel from "./carousels/FloatingBookshelfImageCarousel";
import ButchersBlockImageCarousel from "./carousels/ButchersBlockImageCarousel";

const FurniturePage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Welcome to Tana Craft</h1>
      
      {/* Moderna Coffee Table */}
      <div className={styles.row}>
        <div className={styles.textColumn}>
          <h2 className={styles.title}>Moderna Coffee Table</h2>
          <p className={styles.description}>
            Mountain Ash hardwood with tapered legs. Treated with hard wax oil and Carnauba wax buffed to a mirror finish.
          </p>
        </div>
        <div className={styles.carouselColumn}>
          <ModernaImageCarousel aspectRatio={"4:3"} />
        </div>
      </div>

      {/* Floating Bookshelf */}
      <div className={styles.row}>
        <div className={styles.textColumn}>
          <h2 className={styles.title}>Floating Bookshelf</h2>
          <p className={styles.description}>
            Radiata Pine assembled with floating shelves to accompany books, plants and vases. Treated with tung oil and carnauba wax.
          </p>
        </div>
        <div className={styles.carouselColumn}>
          <FloatingBookshelfImageCarousel aspectRatio={"9:16"} />
        </div>
      </div>

      {/* Butcher's Block */}
      <div className={styles.row}>
        <div className={styles.textColumn}>
          <h2 className={styles.title}>Butchers Block</h2>
          <p className={styles.description}>
            Locally sourced mountain ash. Ideal for the avid cook. Treated with food-safe tung oil and citrus mineral oils.
          </p>
        </div>
        <div className={styles.carouselColumn}>
          <ButchersBlockImageCarousel aspectRatio={"4:3"} />
        </div>
      </div>

      {/* Rear Van Drawers */}
      <div className={styles.row}>
        <div className={styles.textColumn}>
          <h2 className={styles.title}>Rear Van Drawers</h2>
          <p className={styles.description}>
            Secured with industrial drawer slides and birch plywood. Right-hand drawers can act as a workbench with storage units.
            Left-hand drawer slides provide plenty of space for the intrepid van owner.
          </p>
        </div>
        <div className={styles.carouselColumn}>
          <ButchersBlockImageCarousel aspectRatio={"4:3"} />
        </div>
      </div>
    </div>
  );
};

export default FurniturePage;
