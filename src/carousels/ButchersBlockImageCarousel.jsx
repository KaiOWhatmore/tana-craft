import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ImageDisplay from "../ImageDisplay";

const responsive = {
  allDevices: { breakpoint: { max: 4000, min: 0 }, items: 1 },
};


const FloatingBookshelfImageCarousel = ({ image, aspectRatio = "4:3" }) => {
  return (
    <div
      style={{
        width: "100%", // Ensure the carousel takes the full width of its container
        maxWidth: "1200px", // Restrict maximum width (adjust as needed)
        margin: "0 auto", // Center the carousel horizontally
      }}
    >
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={false}
        arrows={true}
        showDots={true}
        containerClass="carousel-container"
        itemClass="carousel-item"
      >
        {/* Pass the single image into the carousel */}
        <div key={image} style={{ marginBottom: "30px", marginTop: "30px"}}>
          <ImageDisplay fileName={"butchers_PXL_20241223_082127790.jpg"} aspectRatio={aspectRatio} />
        </div>
        <div key={image} style={{ marginBottom: "30px", marginTop: "30px"}}>
          <ImageDisplay fileName={"butchers_PXL_20241223_082133298.jpg"} aspectRatio={aspectRatio} />
        </div>
        <div key={image} style={{ marginBottom: "30px", marginTop: "30px"}}>
          <ImageDisplay fileName={"butchers_PXL_20241223_082222354.jpg"} aspectRatio={aspectRatio} />
        </div>
        <div key={image} style={{ marginBottom: "30px", marginTop: "30px"}}>
          <ImageDisplay fileName={"butchers_PXL_20241223_082236456.jpg"} aspectRatio={aspectRatio} />
        </div>
      </Carousel>
    </div>
  );
};

export default FloatingBookshelfImageCarousel;
