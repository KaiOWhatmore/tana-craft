import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ImageDisplay from "./ImageDisplay";

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 1920 }, items: 1 },
  desktop: { breakpoint: { max: 1920, min: 1024 }, items: 1 },
  tablet: { breakpoint: { max: 1024, min: 768 }, items: 1 },
  mobile: { breakpoint: { max: 768, min: 0 }, items: 1 },
};

const ImageCarousel = ({ images }) => {
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
        {images.map((image, index) => (
          <div key={index} style={{ padding: "10px", margin: "20px" }}>
            <ImageDisplay fileName={image} aspectRatio="4:3" />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
