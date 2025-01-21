import React from "react";
import ImageCarousel from "./ImageCarousel";

const GreenToolBoxImageCarousel = ({ aspectRatio }) => {
  const basePath = "green-tool-box/"
  const images = [
    "after_front.jpg" ,
    "before_front.jpg" ,
    "after_front_open.jpg" ,
    "before_front_open.jpg" ,
    "after_underside_bottom.jpg" ,
    "before_underside_bottom.jpg",
   
  ].map(image => `${basePath}${image}`);

  return <ImageCarousel images={images} aspectRatio={aspectRatio} />;
};

export default GreenToolBoxImageCarousel;
