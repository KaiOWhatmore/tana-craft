import React from "react";
import styles from "./FurniturePage.module.css";
import ModernaImageCarousel from "./carousels/ModernaImageImageCarousel";
import FloatingBookshelfImageCarousel from "./carousels/FloatingBookshelfImageCarousel";
import ButchersBlockImageCarousel from "./carousels/ButchersBlockImageCarousel";
import VanDrawersImageCarousel from "./carousels/VanDrawersImageCarousel";
import KodoTableCarousel from "./carousels/KodoTableCarousel";
import BBVanCarousel from "./carousels/BBVanCarousel";

const FurniturePage = () => {
  const bannerStyle = {
    backgroundImage: `url('/images/furniture-banner.avif')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div>
    {/* Banner Section */}
      <div className={styles.banner} style={bannerStyle}>
        <div className={styles.bannerContent}>
          <h1 style={{ letterSpacing: "0.05rem" }}>Choose sustainable, locally made furniture to suit your needs</h1>
          <p style={{ fontSize: '22px', letterSpacing: "0.05rem" }}>Tired of mass produced furniture? Browse our products that will last generations.</p>
        </div>
    </div>
    <div className={styles.container}>

      {/* Moderna Coffee Table */}
      <div className={styles.row}>
        <div className={styles.textColumn}>
          <h2 className={styles.title}>Oka Coffee Table</h2>
          <p className={styles.description}>
            Mountain Ash hardwood with tapered legs. Treated with hard wax oil and Carnauba wax buffed to a mirror finish.
          </p>
        </div>
        <div className={styles.carouselColumn}>
          <ModernaImageCarousel aspectRatio={"4:3"} />
        </div>
        {/* <hr style={{ border: "0", borderTop: "10px solid black", margin: "20px 0" }} /> */}
      </div>

      <hr style={{ border: "0", borderTop: "1px solid #ccc", margin: "20px 0", width: "95%" }} />
      

      {/* Kodo Coffee Table */}
      <div className={styles.row}>
        <div className={styles.textColumn}>
          <h2 className={styles.title}>The Kodo Table</h2>
          <p className={styles.description}>
            Reclaimed mountain ash and Tasmanian oak from a winery, built with dressed aprons and matching legs.  Hardwax, buffed and polished finish.  Ideal addition for any lounge or living room.
          </p>
        </div>
        <div className={styles.carouselColumn}>
          <KodoTableCarousel aspectRatio={"4:3"} />
        </div>
        {/* <hr style={{ border: "0", borderTop: "10px solid black", margin: "20px 0" }} /> */}
      </div>

      <hr style={{ border: "0", borderTop: "1px solid #ccc", margin: "20px 0", width: "95%" }} />


       {/* BB Van */}
       <div className={styles.row}>
        <div className={styles.textColumn}>
          <h2 className={styles.title}>"BB" Renault Trafic Van Build</h2>
          <p className={styles.description}>
            Renault Trafic built for weekend getaways, long term road trips or the permanent van lifer.  Kitted out with rear drawers, side cupboards, overhead cabinets, fridge and inverter.  Rock and roll bed allows full recline or sofa setup. 
          </p>
        </div>
        <div className={styles.carouselColumn}>
          <BBVanCarousel aspectRatio={"4:3"} />
        </div>
        {/* <hr style={{ border: "0", borderTop: "10px solid black", margin: "20px 0" }} /> */}
      </div>

      <hr style={{ border: "0", borderTop: "1px solid #ccc", margin: "20px 0", width: "95%" }} />


      {/* Floating Bookshelf */}
      <div className={styles.row}>
        <div className={styles.textColumn}>
          <h2 className={styles.title}>Floating Bookshelf</h2>
          <p className={styles.description}>
            Radiata Pine assembled with floating shelves to accompany books, plants and vases. Treated with tung oil and carnauba wax.
          </p>
        </div>
        <div className={styles.carouselColumn}>
          <FloatingBookshelfImageCarousel />
        </div>
      </div>

      <hr style={{ border: "0", borderTop: "1px solid #ccc", margin: "20px 0", width: "95%" }} />


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

      <hr style={{ border: "0", borderTop: "1px solid #ccc", margin: "20px 0", width: "95%" }} />


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
          <VanDrawersImageCarousel />
        </div>
      </div>
    </div>
    </div>
  );
};

export default FurniturePage;
