export default {
  init: (parallaxScene, parallaxLayer) => {
    const parallaxTextHandler = evt => {
      parallaxLayer.style.transform = `translateY(${-evt.y / 4}px) translateX(${evt.x / 18}px)`;
    };

    parallaxScene.addEventListener("mousemove", parallaxTextHandler);
  }
};
