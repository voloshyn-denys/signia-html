export default {
  init: (links, sections) => {
    sections.forEach(el => {
      const changeLinkState = () => {
        const bounds = el.getBoundingClientRect();
    
        if (
          window.scrollY + 50 > bounds.top + window.scrollY &&
          window.scrollY + 50 < bounds.bottom + window.scrollY
        ) {
            let idx = Array.prototype.indexOf.call(sections, el);
            links.forEach((link) => link.classList.remove('active'));
            links[idx].classList.add('active');
        }
      };
    
      document.addEventListener("scroll", changeLinkState);
    });
  }
};
