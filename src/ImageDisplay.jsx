import React, { useState } from "react";

function ImageDisplay({ fileName, aspectRatio = "4:3" }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageAspectRatio, setImageAspectRatio] = useState(null);

  const [width, height] = aspectRatio.split(":").map(Number);
  const paddingTop = (height / width) * 100;

  const isSmallImage = (fileName) => {
    // Remove the extension (everything after the last dot)
    const baseName = fileName.substring(0, fileName.lastIndexOf('.'));
    console.log(fileName)
    console.log(baseName.endsWith('_small'))
    return baseName.endsWith('_small');
  };
  

  const handleImageLoad = (e) => {
    const img = e.target;
    const imgAspectRatio = img.naturalWidth / img.naturalHeight;
    setImageAspectRatio(imgAspectRatio);
    setIsLoaded(true);
  };

  const isTransformed = imageAspectRatio && imageAspectRatio !== width / height;

  return (
    <div
      style={{
        width: "100%",
        height: 0,
        paddingTop: `${paddingTop}%`,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Show a spinner or placeholder while the image is loading */}
      {!isLoaded && isSmallImage(fileName) && (
          <img src={`/images-copy/${fileName}`} alt="Loading..." />
      )}

      {/* Background layer for blur effect */}
      {isTransformed && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `url(/images/${fileName})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(4px) brightness(0.65)",
            zIndex: 1,
          }}
        />
      )}

      {/* Main image */}
      <img
        src={`/images/${fileName}`}
        alt={fileName}
        loading="lazy"
        onLoad={handleImageLoad}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          maxHeight: "100%",
          maxWidth: "100%",
          objectFit: "contain",
          // opacity: isLoaded ? 1 : 0,
          // transition: "opacity 0.5s ease-in-out",
          zIndex: 2,
        }}
      />
    </div>
  );
}

export default ImageDisplay;
