import React from "react";
import { Carousel } from "antd";
import styles from "../HomeView/HomeView.module.css";
import Image from "next/image";

export default function CarouselView() {
  return (
    <Carousel autoplay autoplaySpeed={2000}>
      <div>
        <Image
          src="/heroAssets/shashank-modiji.jpeg"
          height="900"
          width="2100"
          alt={""}
          className={styles.heroImage}
        />
      </div>
      <div>
        <Image
          src="/heroAssets/hero2.jpeg"
          height="900"
          width="2100"
          alt={""}
          className={styles.heroImage}
        />
      </div>
      <div>
        <Image
          src="/heroAssets/hero3.jpeg"
          height="900"
          width="2100"
          alt={""}
          className={styles.heroImage}
        />
      </div>
      <div>
        <Image
          src="/heroAssets/hero4.jpeg"
          height="900"
          width="2100"
          alt={""}
          className={styles.heroImage}
        />
      </div>
    </Carousel>
  );
}
