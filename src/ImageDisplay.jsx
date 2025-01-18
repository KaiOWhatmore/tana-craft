import React, { useEffect, useState } from "react";
import { storage, ref, getDownloadURL } from "../firebase";

function ImageDisplay() {
  const [imageURL, setImageURL] = useState("");

  useEffect(() => {
    // Reference to your Firebase Storage file
    const imageRef = ref(storage, "your-image-file-name.jpg");

    // Get the URL for the image
    getDownloadURL(imageRef)
      .then((url) => {
        setImageURL(url); // Save the URL to state
      })
      .catch((error) => {
        console.error("Error fetching image URL:", error);
      });
  }, []);

  return (
    <div>
      {imageURL ? <img src={imageURL} alt="Uploaded from Firebase" /> : <p>Loading...</p>}
    </div>
  );
}

export default ImageDisplay;
