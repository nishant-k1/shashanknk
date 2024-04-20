import React from "react";
import { Carousel } from "antd";
import styles from "../HomeView/HomeView.module.css";
import Image from "next/image";

export default function CarouselView() {
  const contentStyle: React.CSSProperties = {
    height: "75vh",
    width: "100vw",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };

  return (
    <Carousel autoplay>
      <Carousel autoplay>
        <div>
          <div style={contentStyle}>
            <Image
              src="/hero.svg"
              height="300"
              width="300"
              alt={""}
              className={styles.heroImage}
            />
          </div>
        </div>
        <div>
          <div style={contentStyle}>
            <Image
              src="/hero.svg"
              height="300"
              width="300"
              alt={""}
              className={styles.heroImage}
            />
          </div>{" "}
        </div>
        <div>
          <div style={contentStyle}>
            <Image
              src="/hero.svg"
              height="300"
              width="300"
              alt={""}
              className={styles.heroImage}
            />
          </div>{" "}
        </div>
        <div>
          <div style={contentStyle}>
            <Image
              src="/hero.svg"
              height="300"
              width="300"
              alt={""}
              className={styles.heroImage}
            />
          </div>{" "}
        </div>
      </Carousel>
    </Carousel>
  );
}
