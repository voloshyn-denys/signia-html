import elementInViewport from "../helpers/elementInViewport";

export default {
  init: sectionsElements => {
    sectionsElements.forEach(sectionElementInView => {
      const inViewPortHandler = () => {
        let inViewport = elementInViewport(sectionElementInView);
        if (inViewport) {
          document.removeEventListener("scroll", inViewPortHandler);
          sectionElementInView.classList.add("animation");
        }
      };

      document.addEventListener("scroll", inViewPortHandler);
    });
  }
};
