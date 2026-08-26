import React from "react";
import { Carousel } from "antd";
import styles from "../HomeView/HomeView.module.css";
import Image from "next/image";

interface SlideItem {
  src: string;
  alt: string;
  position?: string;
}

const HERO_SLIDES: SlideItem[] = [
  {
    src: "/heroAssets/shashank-modiji.jpeg",
    alt: "Shashank Shekhar with Prime Minister Narendra Modi",
    position: "center 20%",
  },
  {
    src: "/heroAssets/hero2.jpeg",
    alt: "Shashank Shekhar - BJP Bihar Public Event",
    position: "center center",
  },
  {
    src: "/heroAssets/hero3.jpeg",
    alt: "Shashank Shekhar - BJYM Youth Initiative",
    position: "center center",
  },
  {
    src: "/heroAssets/hero4.jpeg",
    alt: "Shashank Shekhar - Community Engagement Begusarai",
    position: "center center",
  },
  {
    src: "/heroAssets/hero5.jpeg",
    alt: "Shashank Shekhar - BJP Bihar Gathering",
    position: "center center",
  },
];

export default function CarouselView() {
  return (
    <div className={styles.heroCarouselContainer}>
      <Carousel autoplay autoplaySpeed={3500} effect="fade" pauseOnHover={false}>
        {HERO_SLIDES.map((slide, index) => (
          <div key={slide.src} className={styles.heroSlideWrapper}>
            <div className={styles.heroSlide}>
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                loading={index === 0 ? "eager" : "lazy"}
                sizes="100vw"
                style={{
                  objectFit: "cover",
                  objectPosition: slide.position || "center center",
                }}
                quality={90}
              />
              <div className={styles.heroOverlay} />
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
