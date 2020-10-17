export const getCoordsByDocument = (el: HTMLElement) => {
  let rect = el.getBoundingClientRect();
  let scrollX = window.scrollX;
  let scrollY = window.scrollY;

  return {
    x: rect.left + scrollX,
    y: rect.top + scrollY,
    width: rect.width,
    height: rect.height
  };
}

export const getCoordsByViewport = (el: HTMLElement) => {
  let rect = el.getBoundingClientRect();

  return {
    x: rect.left,
    y: rect.top,
    width: rect.width,
    height: rect.height
  };
}