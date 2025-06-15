import React, { useState, useRef, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ImageDisplay from "../ImageDisplay";

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 1920 }, items: 1 },
  desktop: { breakpoint: { max: 1920, min: 1024 }, items: 1 },
  tablet: { breakpoint: { max: 1024, min: 768 }, items: 1 },
  mobile: { breakpoint: { max: 768, min: 0 }, items: 1 },
};

const ImageCarousel = ({ images, aspectRatio = "4:3" }) => {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef(0);

  // record touch start X
  const onTouchStart = e => {
    touchStartX.current = e.touches[0].clientX;
  };
  // detect swipe
  const onTouchEnd = e => {
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (dx > 50) setCurrent(i => (i - 1 + images.length) % images.length);
    if (dx < -50) setCurrent(i => (i + 1) % images.length);
  };

  // keyboard nav & ESC
  useEffect(() => {
    if (!open) return;
    const onKey = e => {
      if (e.key === "Escape") setOpen(false);
      if (e.key === "ArrowLeft") setCurrent(i => (i - 1 + images.length) % images.length);
      if (e.key === "ArrowRight") setCurrent(i => (i + 1) % images.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, images.length]);

  return (
    <>
      {/* --- your existing carousel container --- */}
      <div
        style={{
          width: "100%",
          maxWidth: "600px",
          margin: "0 auto",
        }}
      >
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={false}
          arrows={true}
          showDots={true}
          containerClass="carousel-container"
          swipeable
          draggable
        >
          {images.map((image, index) => (
            <div
              key={index}
              style={{
                padding: "10px",
                marginTop: "30px",
                marginBottom: "30px",
                cursor: "pointer",
              }}
              onClick={() => { setCurrent(index); setOpen(true); }}
            >
              <ImageDisplay fileName={image} aspectRatio={aspectRatio} />
            </div>
          ))}
        </Carousel>
      </div>

      {/* --- full-screen overlay --- */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          style={{
            position: "fixed",
            top: 0, left: 0,
            width: "100vw", height: "100vh",
            background: "rgba(0,0,0,0.85)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
          }}
        >
          <div
            onClick={e => e.stopPropagation()}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
            style={{
              position: "relative",
              width: "90vw",
              maxWidth: 800,
              width: "95vw",
              maxWidth: "none",   // let it grow wider
            }}
          >
            {/* displayed image */}
            <img
              src={`/images/${images[current]}`}
              alt=""
              style={{
                width: "100%",
                height: "auto",
                objectFit: "contain",
                maxWidth: "100vw",                // fill viewport width
                maxHeight: "95vh",                //
              }}
            />

            {/* prev arrow */}
            <button
              onClick={() => setCurrent(i => (i - 1 + images.length) % images.length)}
              style={{
                position: "absolute",
                top: "50%",
                left: 10,
                transform: "translateY(-50%)",
                fontSize: "2rem",
                color: "white",
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
            >‹</button>

            {/* next arrow */}
            <button
              onClick={() => setCurrent(i => (i + 1) % images.length)}
              style={{
                position: "absolute",
                top: "50%",
                right: 10,
                transform: "translateY(-50%)",
                fontSize: "2rem",
                color: "white",
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
            >›</button>

            {/* close × */}
            <button
              onClick={() => setOpen(false)}
              style={{
                position: "absolute",
                top: 10,
                right: 10,
                fontSize: "2rem",
                color: "white",
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
            >&times;</button>
          </div>
        </div>
      )}
    </>
  );
};

export default ImageCarousel;
