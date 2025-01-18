import React, { useEffect, useState } from "react";
import { storage, ref, getDownloadURL } from "../firebase";

function ImageDisplay({ fileName }) {
  const [imageURL, setImageURL] = useState("");

  useEffect(() => {
    // Reference to the Firebase Storage file
    const imageRef = ref(storage, fileName);

    // Get the URL for the image
    getDownloadURL(imageRef)
      .then((url) => {
        setImageURL(url); // Save the URL to state
      })
      .catch((error) => {
        console.error("Error fetching image URL:", error);
      });
  }, [fileName]); // Dependency to re-run effect when fileName changes

  return (
    <div>
      {imageURL ? (
        <img src={imageURL} alt={fileName} style={{ maxWidth: "100%" }} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default ImageDisplay;
