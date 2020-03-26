import elementInViewport from "../helpers/elementInViewport";

export default {
  init: (countupElements, inViewportElement) => {
    const startCounter = () => {
      countupElements.forEach(el => {
        let start;
        const final = parseInt(el.textContent, 10);
        const duration = 2000;
        const step = ts => {
          if (!start) {
            start = ts;
          }
          let progress = (ts - start) / duration;

          el.textContent = Math.floor(progress * final);
          if (progress < 1) {
            requestAnimationFrame(step);
          }
        };
        requestAnimationFrame(step);
      });
    };
    const inViewPortHandler = () => {
      
      let inViewport = elementInViewport(inViewportElement);
      if (inViewport) {
        document.removeEventListener("scroll", inViewPortHandler);
        startCounter();
      }
    };

    document.addEventListener("scroll", inViewPortHandler);
  }
};
