import React from "react";
import ImageCarousel from "./ImageCarousel";

const BlueToolBoxImageCarousel = ({ aspectRatio }) => {
  const images = [
    "blue-tool-box/after_top_side_angle.jpg",
    "blue-tool-box/after_front_side_angle.jpg",
    "blue-tool-box/before_side_angle.jpg",
    "blue-tool-box/after_top_open.jpg",
    "blue-tool-box/before_top.jpg",
    "blue-tool-box/after_bottom.jpg",
    "blue-tool-box/before-underside.jpg",
  ];

  return <ImageCarousel images={images} aspectRatio={aspectRatio} />;
};

export default BlueToolBoxImageCarousel;
