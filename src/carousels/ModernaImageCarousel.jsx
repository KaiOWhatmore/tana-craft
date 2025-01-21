import React from "react";
import ImageCarousel from "./ImageCarousel";

const ModernaImageCarousel = ({ aspectRatio }) => {
  const images = [
    "moderna_x_saisho-table-home-banner.jpg",
    "moderna_x_PXL_20241223_081506152.MP.jpg",
    "moderna_x_PXL_20241223_081413147.jpg",
    "moderna_x_PXL_20241223_081435391.MP.jpg",
  ];

  return <ImageCarousel images={images} aspectRatio={aspectRatio} />;
};

export default ModernaImageCarousel;
