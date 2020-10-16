# JS 中常见算法

## 排序

### Array.prototype.sort

```js
// 会改变原数组
function nativeSort(arr) {
  return arr.sort((a, b) => (a - b));
}
```

### 快排

* 选一个基准元素，将剩余元素和基准元素对比，小的放在左边数组， 大于等于的放在右边数组。
* 递归处理上面的左边数组和右边数组。
* 合并左边数组、基准元素、右边数组。

```js
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
```

### 归并排序

* 取数组的中间 index, 将数组一分为二。
* 递归上面两个数组，递归即返回排序好的数组。
* 遍历两个数组按顺序生成排序好的数组。

```js
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
```

### 冒泡

```js
function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }
  return arr;
}
```


## 递归

### 爬楼梯问题

假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
注意：给定 n 是一个正整数。

```js
// 递归解法
// f(n) = f(n - 1) + f(n - 2) 
// 从 n - 1 阶爬一阶，或从 n - 2 阶爬两阶
var climbStairs = function(n) {
  if (n === 1) {
    return 1;
  } else if (n === 2) {
    return 2;
  } else {
    return climbStairs(n - 2) + climbStairs(n - 1);
  }
};
```

```js
// 迭代写法
var climbStairs = function(n) {
  if (n === 1) {
    return 1;
  } else if (n === 2) {
    return 2;
  } else {
    let i = 3;
    let prev2 = 1;
    let prev = 2;
    let current;
    while(i <= n) {
      current = prev2 + prev;
      prev2 = prev;
      prev = current;
      i++;
    }
    return current;
  }
};
```

### 二分查找

```js
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
```

## 树



## 随机

将有序的数组完全打乱

```js
function randomArr(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let randomIndex = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]];
  }
  return arr;
}
```


## 其他

### 版本号比较

类似 v1.2.3 的版本号，入参两个版本号， 返回 1/0/-1

```js
function versionCompare(v1, v2) {
  const toArray = (v) => {
    return v.replace(/v/i, '')
      .split('.');
  }
  let arr1 = toArray(v1);
  let arr2 = toArray(v2);
  let maxLen = Math.max(arr1.length, arr2.length);
  let i = 0;

  while(i < maxLen) {
    let n1 = Number(arr1[i] || 0);
    let n2 = Number(arr2[i] || 0);

    if (n1 !== n2) {
      return n1 > n2 ? 1 : -1;
    }
    i++;
  }

  return 0;
}
```

```js
// 转为字符串比较
// 缺点 versionCompare('v1.2.3.0', 'V1.2.3') => 1
function versionCompare(v1, v2) {
  const format = (v) => {
    return v.replace(/v/i, '')
      .split('.')
      .map(v => v.padStart(5, '0'))
      .join();
  }
  v1 = format(v1);
  v2 = format(v2);

  if (v1 === v2) {
    return 0;
  } else {
    return v1 > v2 ? 1 : -1;
  }
}
```
