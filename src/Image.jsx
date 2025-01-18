import React, { useState } from "react";
import clsx from "clsx";

export const Image = ({ src, alt, skeleton = true, ...props }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showSkeleton, setShowSkeleton] = useState(skeleton);

  return (
    <div
      className={clsx("imageWrapper", { skeleton: showSkeleton })}
      style={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
      }}
    >
      {/* Skeleton */}
      {showSkeleton && (
        <div
          className="skeleton"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "#f0f0f0",
            backgroundImage: `linear-gradient(
              90deg,
              rgba(255, 255, 255, 0) 0%,
              rgba(255, 255, 255, 0.2) 20%,
              rgba(255, 255, 255, 0.5) 60%,
              rgba(255, 255, 255, 0)
            )`,
            animation: "shimmer 2s infinite",
          }}
        ></div>
      )}

      {/* Image */}
      <img
        src={src}
        alt={alt}
        onLoad={() => {
          setIsLoaded(true);
          setShowSkeleton(false);
        }}
        style={{
          width: "100%",
          height: "auto",
          display: isLoaded ? "block" : "none",
          transition: "opacity 0.5s ease-in-out",
        }}
        {...props}
      />
    </div>
  );
};
