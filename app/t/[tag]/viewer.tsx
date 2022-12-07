"use client";
import { useColors } from "lib/hooks";
import styles from "./styles.module.css";
import { Slider } from "./slider";
import { useState } from "react";
import { ChevronRight, ChevronLeft } from "react-feather";

function resizeCloudinaryURL(url: string) {
  return url.replace("/upload", "/upload/h_900");
}

export function PhotoViewer({ photos = [] }) {
  const { color } = useColors();
  const [slider, setSlider] = useState(null);

  return (
    <div className={styles.viewerContainer} style={{ backgroundColor: color }}>
      <ChevronLeft
        className={styles.arrow}
        style={{ left: 50 }}
        onClick={() => slider.current.prev()}
      >
        Prev
      </ChevronLeft>
      <ChevronRight
        className={styles.arrow}
        style={{ right: 50 }}
        onClick={() => slider.current.next()}
      >
        Next
      </ChevronRight>
      <div className={styles.sliderContainer}>
        <Slider
          auto={false}
          onSlider={setSlider}
          style={{ height: "100%", width: "100%" }}
        >
          {photos.map((p) => (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                height: "100%",
              }}
              key={p._id}
            >
              <img
                style={{ height: "100%" }}
                src={resizeCloudinaryURL(p.url)}
                alt={p.title || "Photo"}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
