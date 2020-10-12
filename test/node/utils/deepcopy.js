function deepCopy(source) {
  let map = new WeakMap();
  function _copy(source) {
    if (typeof source !== 'object') return source;
    if (source === null) return source;
    if (map.has(source)) return map.get(source);

    let isArray = Array.isArray(source);
    let target = isArray ? [] : {};
    map.set(source, target);

    for (let i in source) {
      if (Object.prototype.hasOwnProperty.call(source, i)) {
        target[i] = _copy(source[i]);
      }
    }
    return target;
  }

  return _copy(source);
}

let obj = {
  a: 1,
  b: [2, 3],
  c: {
    d: {
      e: 5
    }
  }
}

let arr = [7, {
  h: 0
}, 9]

obj.c.i = arr;
arr[1].o = obj;

let _obj = deepCopy(obj);
let _arr = deepCopy(arr);
console.log(_obj);
console.log(_arr);
