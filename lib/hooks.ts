"use client";
import { useEffect, useState } from "react";
import constate from "constate";

const colors = [
  "#CDCDCD",
  "#0DBB72",
  "#0D48BB",
  "#BB0D37",
  "#6F0DBB",
  "#BB950D",
];

const [ColorsProvider, useColors] = constate(function () {
  const [color, setColorState] = useState(colors[0]);

  function setColor(c) {
    setColorState(c);
    localStorage.setItem("color", c);
  }
  useEffect(() => {
    setColorState(localStorage.getItem("color"));
  });

  return { color, setColor, colors };
});

export { ColorsProvider, useColors };
