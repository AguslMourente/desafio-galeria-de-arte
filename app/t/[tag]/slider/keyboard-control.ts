export const KeyboardControls = (slider) => {
  function eventKeydown(e) {
    switch (e.key) {
      default:
        break;
      case "Left":
      case "ArrowLeft":
        slider.prev();
        break;
      case "Right":
      case "ArrowRight":
        slider?.next();
        break;
    }
  }

  slider.on("created", () => {
    document.addEventListener("keydown", eventKeydown);
  });
};
