import React from "react";
import ImageCarousel from "./ImageCarousel";

const BBVanCarousel = ({ aspectRatio }) => {
  const images = [
    "BB-PXL_20250331_061947960.jpg",
    "BB-PXL_20250403_072658629.jpg", 
    "BB-PXL_20250331_062227879.jpg", 
    "BB-PXL_20250403_072632480.jpg",
    "BB-PXL_20250403_072627227.jpg", 
    "BB-PXL_20250331_063214929.jpg", 
    "BB-PXL_20250403_072653957.jpg",
  ];

  return <ImageCarousel images={images} aspectRatio={aspectRatio} />;
};

export default BBVanCarousel;
