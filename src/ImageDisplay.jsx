import React, { useState } from "react";

function ImageDisplay({ fileName, aspectRatio = "4:3" }) {
  const [isLoaded, setIsLoaded] = useState(false);

  const [width, height] = aspectRatio.split(":").map(Number);
  const paddingTop = (height / width) * 100;

  return (
    <div
      style={{
        width: "100%",
        height: 0,
        paddingTop: `${paddingTop}%`,
        position: "relative",
        backgroundColor: "#e0e0e0", // Background for the container
        overflow: "hidden", // Ensures image doesn't spill out
      }}
    >
      {/* Image Element */}
      <img
        src={`/images/${fileName}`}
        alt={fileName}
        onLoad={() => setIsLoaded(true)}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          maxHeight: "100%",
          maxWidth: "100%",
          objectFit: "contain", // Ensures the entire image fits
          opacity: isLoaded ? 1 : 0,
          transition: "opacity 0.5s ease-in-out",
        }}
      />

      {/* Loading Placeholder */}
      {!isLoaded && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "#d0d0d0", // Grey placeholder background
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#808080", // Text color
            fontSize: "1.2rem",
            fontWeight: "bold",
          }}
        >
          Loading Image...
        </div>
      )}
    </div>
  );
}

export default ImageDisplay;
