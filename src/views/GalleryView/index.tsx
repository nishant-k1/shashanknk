import React, { useEffect, useRef } from "react";
import { galleryImages } from "./galleryImages";
import styles from "./GalleryView.module.css";
import Image from "next/image";
import Link from "next/link";

type GalleryViewProps = {
  id: string;
};

const GalleryView = ({ id }: GalleryViewProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (container) {
      const children = Array.from(container.children) as HTMLElement[];
      children.forEach((child) => {
        const img = child.querySelector("img");
        if (img) {
          img.onload = () => {
            const height = img.naturalHeight;
            const width = img.naturalWidth;
            const aspectRatio = height / width;

            // Dynamically calculate and set row span
            const rowSpan = Math.ceil(aspectRatio * 10); // Matches grid-auto-rows value
            child.style.setProperty("--row-span", rowSpan.toString());
          };
        }
      });
    }
  }, []);

  return (
    <div className={styles.gallery} ref={containerRef}>
      {galleryImages.map((image) => (
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
      ))}
    </div>
  );
};

export default GalleryView;
