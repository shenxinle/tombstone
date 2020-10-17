export const debounce = (fn: (...params: any[]) => any, ms: number) => {
  let timer: number;
  return function(...params: any[]) {
    clearTimeout(timer);
    timer = window.setTimeout(() => {
      // @ts-ignore
      fn.apply(this, params);
    }, ms);
  }
}