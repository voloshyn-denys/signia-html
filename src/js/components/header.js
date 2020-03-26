export default {
  init: (headerElement) => {
    const fixedHeaderHandler = () => {
      let scrollY = window.scrollY;
      if (scrollY === 0) {
        headerElement.classList.remove("active");
      } else {
        headerElement.classList.add("active");
      }
    };

    document.addEventListener("scroll", fixedHeaderHandler);
  }
};
