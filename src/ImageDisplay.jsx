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
        backgroundColor: "#f0f0f0",
      }}
    >
      <img
        src={`/images/${fileName}`} // Use relative path
        alt={fileName}
        onLoad={() => setIsLoaded(true)}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: isLoaded ? 1 : 0,
          transition: "opacity 0.5s ease-in-out",
        }}
      />
      {!isLoaded && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "#e0e0e0",
          }}
        ></div>
      )}
    </div>
  );
}

export default ImageDisplay;
