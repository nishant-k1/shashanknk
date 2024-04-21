import React from "react";
import { galleryImages } from "./galleryImages";
import styles from "./GalleryView.module.css"; // Import CSS module for styling
import Image from "next/image";

const GalleryView = () => {
  return (
    <div className={styles.gallery}>
      {galleryImages.map((image) => {
        return (
          <div key={image.id} className={styles.item}>
            <Image
              src={image.url}
              alt=""
              // fill={true}
              height={image.height}
              width={image.width}
              className={styles.image}
            />
          </div>
        );
      })}
    </div>
  );
};

export default GalleryView;
