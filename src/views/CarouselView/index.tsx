import React from "react";
import { Carousel } from "antd";
import styles from "../HomeView/HomeView.module.css";
import Image from "next/image";

export default function CarouselView() {
  return (
    <Carousel autoplay autoplaySpeed={2500}>
      <div>
        <Image
          src="/heroAssets/shashank-modiji.jpeg"
          height="900"
          width="2100"
          alt="Shashank Shekhar with Prime Minister Narendra Modi"
          className={styles.heroImage}
          priority
        />
      </div>
      <div>
        <Image
          src="/heroAssets/hero2.jpeg"
          height="900"
          width="2100"
          alt="Shashank Shekhar - BJP Bihar Public Event"
          className={styles.heroImage}
        />
      </div>
      <div>
        <Image
          src="/heroAssets/hero3.jpeg"
          height="900"
          width="2100"
          alt="Shashank Shekhar - BJYM Youth Initiative"
          className={styles.heroImage}
        />
      </div>
      <div>
        <Image
          src="/heroAssets/hero4.jpeg"
          height="900"
          width="2100"
          alt="Shashank Shekhar - Community Engagement Begusarai"
          className={styles.heroImage}
        />
      </div>
    </Carousel>
  );
}
