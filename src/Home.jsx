import React from "react";
import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.container}>
      {/* Welcome Section */}
      <section className={styles.welcomeSection}>
      </section>

      {/* Images and Content Section */}
      <section className={styles.contentSection}>
        {/* First Row: Image + Text */}
        <div className={styles.row}>
          <div className={styles.welcomeSection}>
            <h1>Welcome to Tana Craft.</h1>
          </div>
          <div className={styles.imageContainer}>
            {/* Placeholder for Image 1 */}
            <div className={styles.imagePlaceholder}>Image 1</div>
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.imageContainer}>
            {/* Placeholder for Image 1 */}
            <div className={styles.imagePlaceholder}>Image 1</div>
          </div>
          <div className={styles.textContainer}>
            <h2>What We Do</h2>
            <p>
              Founded by Kai, Tana Craft endeavors to create beautiful handmade
              furniture and restore vintage items to their former glory.
            </p>
            <p>
              Like what you see?{" "}
              <a href="/portfolio" className={styles.link}>
                Click here for our portfolio of work
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
