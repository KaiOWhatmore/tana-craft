import React, { useState } from "react";
import styles from "./FurniturePage.module.css";
import ImageDisplay from "./ImageDisplay";

const products = [
  {
    title: "Spine Coffee Table",
    description:
      "Mountain Ash hardwood with tapered legs. Treated with hard wax oil and Carnauba wax buffed to a mirror finish.",
    images: ["chopsticks-whittled.jpg", "chopsticks-whittled.jpg", "chopsticks-whittled.jpg"], // Placeholder for 4 dummy images
  },
 
];

const FurniturePage = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = (images) => {
    setSelectedImages(images);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImages([]);
    setModalOpen(false);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>
        Choose sustainable, locally made furniture to suit your needs
      </h1>
      <p className={styles.subheader}>
        Tired of mass-produced furniture? Browse our products that will last
        generations.
      </p>

      <div className={styles.products}>
        {products.map((product, index) => (
          <div key={index} className={styles.product}>
            <div className={styles.productText}>
              <h2 className={styles.productTitle}>{product.title}</h2>
              <p className={styles.productDescription}>{product.description}</p>
            </div>
            <div className={styles.productImages}>
            <div className={styles.carousel}>
              {product.images.map((imagePath, imageIndex) => (
                <ImageDisplay     
                  fileName={imagePath} 
                  // key={`${imageIndex}-${imagePath}`}
                  key={imageIndex}
                  aspectRatio="4:3"
                  alt={`${product.title} Image ${imageIndex + 1}`}
                />
            
          // <img
          //   key={imageIndex}
          //   src={imagePath}
          //   alt={`${product.title} Image ${imageIndex + 1}`}
          //   className={styles.productImage}
          //   onClick={() => openModal(product.images)}
          // />
        ))}
        </div>
      </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className={styles.modal} onClick={closeModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={closeModal}>
              &times;
            </button>
            {selectedImages.map((_, index) => (
              <div key={index} className={styles.modalImage}>
                Placeholder {index + 1}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FurniturePage;
