import React from "react";
import { galleryImages } from "./galleryImages";
import styles from "./GalleryView.module.css"; // Import CSS module for styling
import Image from "next/image";
import Link from "next/link";

type GalleryViewProps = {
  id: string;
};

const GalleryView = ({ id }: GalleryViewProps) => {
  return (
    <div className={styles.gallery}>
      <div>
        {galleryImages.map((image) => {
          return (
            <Link
              href={{
                pathname: "/gallery/[slug]",
                query: { slug: image.url },
              }}
              key={image.id}
              className={styles.item}
            >
              <Image
                src={image.url}
                alt=""
                height={image.height}
                width={image.width}
                className={styles.image}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default GalleryView;
