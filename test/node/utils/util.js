function nativeSort(arr) {
  return arr.sort((a, b) => (a - b));
}

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  } else {
    let left = [];
    let right = [];
    let base = arr[0];

    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < base) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }

    return quickSort(left).concat(base, quickSort(right));
  }
}

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  } else {
    let middle = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, middle));
    let right = mergeSort(arr.slice(middle));
    let result = [];
    let i = 0, j = 0;

    while(i < left.length && j < right.length) {
      if (left[i] < right[j]) {
        result.push(left[i++]);
      } else {
        result.push(right[j++]);
      }
    }
    while(i < left.length) result.push(left[i++]);
    while(j < right.length) result.push(right[j++]);

    return result;
  }
}

function binaryFind(arr, target) {
  const find = (start, end) => {
    if (start > end) return -1;

    let middle= Math.floor((start + end) / 2);

    if (arr[middle] === target) {
      return middle;
    } else if (arr[middle] > target) {
      return find(start, middle - 1);
    } else {
      return find(middle + 1, end);
    }
  }

  return find(0, arr.length - 1);
}



var arr = [4, 3, 9, 1, 2, 7, 5, 8, 6];

// console.log(nativeSort(arr));
// console.log(quickSort(arr));
// console.log(mergeSort(arr));

console.log(binaryFind([1,2,3,4,5], 7));