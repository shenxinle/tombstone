# 常用 JS API

## String

* lengh
* toUpperCase()
* toLowerCase()
* charAt(index)
  * index: 0 ~ length - 1
  * 返回指定位置的字符
* indexOf(searchValue, fromIndex)
  * searchValue: 查找的子串
  * fromIndex: 可选，开始查找的位置，默认 0
  * 返回指定值第一次出现的索引，没查到则返回 -1
* lastIndexOf(searchValue, fromIndex)
  * 从 fromIndex 往左查找
  * fromIndex 可选，默认值是 +Infinity
* split(separator, limit)
  * separator: 分隔符，为字符串或正则
  * limit: 限定返回的分割段数量
  * 返回分割的数组
* substring(indexStart, indexEnd)
  * indexEnd: 省略则提取到最后
* substr(start, length)
  * start: 可为负数， -2 即从倒数第二个开始
  * length: 提取的数量，省略则提取到末尾
* trim()
* trimLeft()
* trimRight()
* concat(str1, str2, ...)
* includes(searchString, position)
  * position: 可选，默认从 0 开始
* padStart(targetLength, padString)
* padEnd(targetLength, padString)

示例：
```js
'abc'.padStart(10);         // "       abc"
'abc'.padStart(10, "foo");  // "foofoofabc"
'abc'.padStart(6,"123465"); // "123abc"
'abc'.padStart(8, "0");     // "00000abc"
'abc'.padStart(1);          // "abc"
```


## Array

### 会改变自身的方法

* push(e1, e2, ...)   *返回数组新长度*
* pop()    *返回删除的元素*
* shift()   *删除第一个元素，返回这个元素*
* unshift(e1, e2, ...)   *返回数组新长度*
* reverse()
* sort(compareFunction)
  * compareFunction 可选， 默认排序顺序是在将元素转换为字符串，然后比较它们的UTF-16代码单元值序列时构建的
* splice(start, deleteCount, item1, item2, ...)
  * 从 start 位置开始删掉 deleteCount 个元素， 并插入 item1, item2,...
  * 只删除的话 item1 及之后不传， 只插入的话 deleteCount 传 0
  * 返回被删除的元素组成的数组
* fill(value, start, end)
  * start 可选，默认 0
  * end 可选，默认 this.length

```js
// sort 示例
[1, 30, 4, 21, 100000].sort(); // [1, 100000, 21, 30, 4]
[1, 30, 4, 21, 100000].sort((a, b) => (a - b)); // [1, 4, 21, 30, 100000]
```

### 不改变自身的方法

* indexOf(searchElement, fromIndex)
  * fromIndex 可选，默认 0
  * 返回首个被找到的元素在数组中的索引位置; 若没有找到则返回 -1
* lastIndexOf()
  * 从 fromIndex 往左找
* concat(v1, v2, ...)   *将数组或值连接成新数组*
* join(separator)   *separator 缺省则为 `,`*
* slice(begin, end)
* toString()


### 遍历方法

* forEach(callback, thisArg)   *遍历， 返回 undefined*
  * callback(currentValue, index, array)
* some()   *如果数组中至少有一个元素满足测试函数，则返回 true，否则返回 false*
* every()   *如果数组中的每个元素都满足测试函数，则返回 true，否则返回 false*
* map()   *返回一个由回调函数的返回值组成的新数组*
* filter()   *将所有在过滤函数中返回 true 的数组元素放进一个新数组中并返回*
* reduce(callback, initialValue)
  * callback(accumulator, currentValue, index, array)
  * 从左到右为每个数组元素执行一次回调函数，并把上次回调函数的返回值放在一个暂存器中传给下次回调函数，并返回最后一次回调函数的返回值。
* reduceRight()
* find(callback(element, index, array), thisArg)   *返回数组中第一个满足所提供测试函数的元素的值，否则返回 undefined*
* findIndex(callback, thisArg)  *返回数组中满足提供的测试函数的第一个元素的索引。否则返回-1*


## RegExp

[RegExp](https://shenxinle.github.io/jekyll/update/2015/03/11/RegExp-in-JavaScript)

## Math

