import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"; // Default carousel styles
import ImageDisplay from "./ImageDisplay";

const responsive = {
  superLargeDesktop: {
    // screens >= 1920px
    breakpoint: { max: 4000, min: 1920 },
    items: 1,
  },
  desktop: {
    // screens >= 1024px
    breakpoint: { max: 1920, min: 1024 },
    items: 1,
  },
  tablet: {
    // screens >= 768px
    breakpoint: { max: 1024, min: 768 },
    items: 1,
  },
  mobile: {
    // screens < 768px
    breakpoint: { max: 768, min: 0 },
    items: 1,
  },
};

const ImageCarousel = ({ images }) => {
  return (
    <div style={{ margin: "20px" }}>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={false}
        autoPlaySpeed={500}
        arrows={true}
        showDots={true}
      >
        {images.map((image, index) => (
          <div key={index} style={{ padding: "10px", margin: "20px" }}>
            <ImageDisplay fileName={image}/>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
