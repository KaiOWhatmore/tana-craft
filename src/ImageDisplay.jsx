import React, { useState, useEffect } from "react";
import { storage, ref, getDownloadURL } from "./firebase";

function ImageDisplay({ fileName, aspectRatio = "4:3" }) {
  const [imageURL, setImageURL] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  // Calculate padding-top from the aspect ratio
  const [width, height] = aspectRatio.split(":").map(Number);
  const paddingTop = (height / width) * 100; // Convert aspect ratio to percentage

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const imageRef = ref(storage, `public/${fileName}`);
        const url = await getDownloadURL(imageRef);
        setImageURL(url);
      } catch (error) {
        console.error("Error fetching image:", error.message);
      }
    };

    fetchImage();
  }, [fileName]);

  return (
    <div
      style={{
        width: "100%",
        height: 0, // Set height to 0
        paddingTop: `${paddingTop}%`, // Maintain the aspect ratio
        position: "relative", // Required for absolutely positioning the image
        backgroundColor: "#f0f0f0", // Placeholder background
      }}
    >
      {imageURL && (
        <img
          src={imageURL}
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
      )}
      {!isLoaded && (
        <div
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
