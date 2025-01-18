import React, { useState, useEffect } from "react";
import { storage, ref, getDownloadURL } from "./firebase";

function ImageDisplay({ fileName }) {
  const [imageURL, setImageURL] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isVisible) {
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
    }
  }, [isVisible, fileName]);

  return (
    <div
      style={{ minHeight: "200px", backgroundColor: "#f0f0f0" }}
      ref={(el) => {
        if (el && "IntersectionObserver" in window) {
          new IntersectionObserver(
            ([entry], observer) => {
              if (entry.isIntersecting) {
                setIsVisible(true);
                observer.disconnect();
              }
            },
            { threshold: 0.1 }
          ).observe(el);
        } else {
          setIsVisible(true);
        }
      }}
    >
      {imageURL ? <img src={imageURL} alt={fileName} style={{ maxWidth: "100%" }} /> : <p>Loading...</p>}
    </div>
  );
}

export default ImageDisplay;
