import React from "react";
import ImageCarousel from "./ImageCarousel";

const VanDrawersImageCarousel = ({ aspectRatio }) => {
  const images = [
    "van_drawer_slides_e7326a_ae7184968cc14ff992936db5cfff222b~mv2.jpg",
    "van_slides474595831_590098767140327_9081876036428856801_n.jpg",
    "van_slides472911146_956760222659372_4037709023051454085_n.jpg",
    "van_slides473277702_1413043766342814_4394868142814474552_n.jpg",
    "van_slides473373276_9548186588545300_1612114651895378644_n.jpg",
  ];

  return <ImageCarousel images={images} aspectRatio={aspectRatio} />;
};

export default VanDrawersImageCarousel;
