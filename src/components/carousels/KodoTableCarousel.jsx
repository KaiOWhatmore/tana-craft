import React from "react";
import ImageCarousel from "./ImageCarousel";

const KodoTableCarousel = ({ aspectRatio }) => {
  const images = [
    "kodo-table-PXL_20250302_082118856.jpg",
    " kodo-table-PXL_20250302_082204786.jpg", 
    "kodo-table-PXL_20250302_082206981.jpg", 
    "kodo-table-PXL_20250302_082414599.jpg"
  ];

  return <ImageCarousel images={images} aspectRatio={aspectRatio} />;
};

export default KodoTableCarousel;
