import React, { Component } from "react";
import Slider from "react-slick";
import styles from "./CustomSlides.module.css"; 
import ImageDisplay from "./ImageDisplay";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green", borderRadius:"50%" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red", borderRadius:"50%"  }}
      onClick={onClick}
    />
  );
}

function CustomSlide(props) { 
  const { index, ...otherProps } = props;
  return (
    <div {...otherProps}>
      <h3>{index}</h3>
    </div>
  );
}

function CustomSlides() {  
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
    <div >
      <Slider {...settings}>
        <CustomSlide index={1} />
        <CustomSlide index={2} />
        <CustomSlide index={3} />
        <CustomSlide index={4} />
        <CustomSlide index={5} />
        <CustomSlide index={6} />
      </Slider>
    </div>
  );
}

export default CustomSlides;
