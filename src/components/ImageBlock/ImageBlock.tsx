import React from "react";
import styles from "./ImageBlock.module.scss";

const ImageBlock: React.FC = () => {
  return (
    <div className={styles.photo}>
      <img src="flowerBg.jpg" alt="Image by Freepik" />
      <div className={styles.relatedText}>
        <p className={styles.quoteSymbol}>&#8220;</p>
        <p className={styles.title}>Make a Dream</p>
        <p className={styles.addText}>Explore your Creativity!</p>
      </div>
    </div>
  );
};

export default ImageBlock;
