import React, { useEffect, useState } from "react";
import { storage, ref, getDownloadURL } from "./firebase";

function ImageDisplay({ fileName }) {
  const [imageURL, setImageURL] = useState("");

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const imageRef = ref(storage, `public/${fileName}`); // Fetch from "public" folder
        const url = await getDownloadURL(imageRef);
        setImageURL(url);
      } catch (error) {
        console.error("Error fetching image:", error.message);
      }
    };

    fetchImage();
  }, [fileName]);

  return (
    <div>
      {imageURL ? <img src={imageURL} alt={fileName}style={{ maxWidth: "100%" }} /> : <p>Loading...</p>}
    </div>
  );
}

export default ImageDisplay;
