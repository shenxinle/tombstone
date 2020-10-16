function permute(arr) {
  if (arr.length === 0) {
    return arr;
  } else if (arr.length === 1) {
    return [arr];
  } else {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      let item = arr[i];
      let rest = arr.slice(0);
      rest.splice(i, 1);
      let pRest = permute(rest);

      for (let j = 0; j < pRest.length; j++) {
        result.push([].concat(item, pRest[j]));
      }
    }
    return result;
  }
}

console.log(permute([1, 2, 3, 4]))