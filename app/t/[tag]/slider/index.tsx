"use client";
import { useKeenSlider } from "keen-slider/react";
import React, { useEffect } from "react";

import { KeyboardControls } from "./keyboard-control";

export function Slider({
  children,
  duration = 500,
  loop = true,
  auto = true,
  pauseTime = 5000,
  onSlider = null,
  onSlideChange = null,
  ...props
}) {
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>(
    {
      defaultAnimation: {
        duration,
      },
      loop,
    },
    [KeyboardControls]
  );

  function slideChanged(...params) {
    if (onSlideChange) {
      onSlideChange(...params);
    }
  }

  useEffect(() => {
    if (onSlider) {
      onSlider(slider);
    }

    slider.current.on("slideChanged", slideChanged);

    if (auto) {
      const id = setInterval(() => {
        if (slider) {
          slider.current.next();
        }
      }, pauseTime);
      return () => clearInterval(id);
    }
    return function () {
      slider?.current?.on("slideChanged", slideChanged, true);
    };
  }, [slider]);

  return (
    <div ref={sliderRef} className="keen-slider" {...props}>
      {children.map((c, ind) => (
        <div key={ind} className="keen-slider__slide">
          {c}
        </div>
      ))}
    </div>
  );
}
