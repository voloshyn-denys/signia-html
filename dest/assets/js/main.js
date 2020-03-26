("use strict");
// FIXED HEADER START
const headerElement = document.querySelector(".header");
const fixedHeaderHandler = () => {
  let scrollY = window.scrollY;
  if (scrollY === 0) {
    headerElement.classList.remove("active");
  } else {
    headerElement.classList.add("active");
  }
};
// FIXED HEADER END

// TEXT PARALLAX START
const parallaxScene = document.querySelector("#js-parallax-scene");
const parallaxLayer = document.querySelector("#js-parallax-layer");

const parallaxTextHandler = evt => {
  parallaxLayer.style.transform = `translateY(${-evt.y /
    4}px) translateX(${evt.x / 18}px)`;
};
// TEXT PARALLAX END

// COUNTER IN VIEWPORT START
const elementInViewport = el => {
  const bounds = el.getBoundingClientRect();
  return (
    bounds.top + bounds.height > 0 &&
    window.innerHeight - bounds.top > 0 &&
    bounds.left + bounds.width > 0 &&
    window.innerWidth - bounds.left > 0
  );
};
const startCounter = () => {
  const countupElements = document.querySelectorAll(".countup");

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
  let el = document.querySelector(".achives");
  let inViewport = elementInViewport(el);
  if (inViewport) {
    document.removeEventListener("scroll", inViewPortHandler);
    startCounter();
  }
};
// COUNTER IN VIEWPORT END

// REGISTER HANDLERS
document.addEventListener("scroll", inViewPortHandler);
document.addEventListener("scroll", fixedHeaderHandler);
parallaxScene.addEventListener("mousemove", parallaxTextHandler);