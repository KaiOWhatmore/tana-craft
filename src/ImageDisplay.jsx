import React, { useState, useEffect } from "react";
import { storage, ref, getDownloadURL } from "./firebase";

function ImageDisplay({ fileName }) {
  const [imageURL, setImageURL] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const [dimensions, setDimensions] = useState(null);

  useEffect(() => {
    const preloadImage = async () => {
      try {
        const imageRef = ref(storage, `public/${fileName}`);
        const url = await getDownloadURL(imageRef);

        // Use a native Image object to preload and get dimensions
        const img = new Image();
        img.src = url;
        img.onload = () => {
          setDimensions({ width: img.naturalWidth, height: img.naturalHeight });
          setImageURL(url);
        };
      } catch (error) {
        console.error("Error fetching image:", error.message);
      }
    };

    preloadImage();
  }, [fileName]);

  // Default aspect ratio (16:9) as a fallback
  const defaultAspectRatio = 16 / 9;
  const aspectRatio = dimensions
    ? dimensions.width / dimensions.height
    : defaultAspectRatio;

  return (
    <div
      className="imageContainer"
      style={{
        backgroundColor: "#f0f0f0", // Match the placeholder background color
        width: "100%", // Span the full grid column width
        paddingTop: `${100 / aspectRatio}%`, // Dynamically set the height using aspect ratio
        position: "relative",
        overflow: "hidden",
      }}
    >
      {imageURL && (
        <img
          src={imageURL}
          alt={fileName}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover", // Ensure it fills the container proportionally
            opacity: isLoaded ? 1 : 0,
            transition: "opacity 0.5s ease-in-out",
          }}
          onLoad={() => setIsLoaded(true)}
        />
      )}
      {!isLoaded && (
        <div
          className="imagePlaceholder"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "#e0e0e0", // Grey placeholder
          }}
        ></div>
      )}
    </div>
  );
}

export default ImageDisplay;
