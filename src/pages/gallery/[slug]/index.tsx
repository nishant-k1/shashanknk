import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "./Slug.module.css";
import RootLayout from "@/app/layout";

type Props = {};

type Image = {
  id?: string;
  url?: string;
};
const GalleryImage = (props: Props) => {
  const router = useRouter();
  const src = router.query.slug as string;
  return (
    <RootLayout>
      <div className={styles.imageContaner}>
        <Image
          height="1600"
          width="2100"
          // fill={true}
          alt="image"
          src={src}
          className={styles.img}
        />
      </div>
    </RootLayout>
  );
};

export default GalleryImage;
