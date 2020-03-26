export default el => {
  const bounds = el.getBoundingClientRect();
  return (
    bounds.top + bounds.height > 0 &&
    window.innerHeight - bounds.top > 0 &&
    bounds.left + bounds.width > 0 &&
    window.innerWidth - bounds.left > 0
  );
};
