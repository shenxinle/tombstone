# JS API


## 数据类型
* 7 中原始类型： number、 bigint、 string、 boolean、 null、 undefined、 symbol
* Object

为了在原始类型上访问方法和属性，创建了提供额外功能的特殊“对象包装器”，使用后即被销毁。“对象包装器”对于每种原始类型都是不同的，它们被称为 String、Number、Boolean 和 Symbol。因此，它们提供了不同的方法。
* 构造器 String/Number/Boolean 不推荐通过 new 方式创建包装对象来使用
  * `typeof new Number(0)  // object`
* null/undefined 没有任何方法

### number
包括整数、浮点数、特殊数值（`Infinity`、`-Infinity`、`NaN`）
* `Infinity` 表示无穷大，比任何一个数值都大
  ```js
  1 / 0 === Infinity // true
  -1 / 0 === -Infinity // true
  ```
* `NaN` 代表一个计算错误
  ```js
  isNaN('1a' - 1) // true
  ```
* *在 JavaScript 中做数学运算是安全的。我们可以做任何事：除以 0，将非数字字符串视为数字，等等。脚本永远不会因为一个致命的错误（“死亡”）而停止。最坏的情况下，我们会得到 NaN 的结果。*
* 简写
```js
1.23e6 // 1.23 * 1000000
1e-6 // 0.000001
```
* 十六进制，二进制和八进制数字
```js
0xff // 255
0b11111111 // 255
0o377 // 255
```

* num.toString(base)， base 范围为 2 到 36， 表示进制。


### BigInt
在 JavaScript 中，Number 类型无法表示大于 (253-1)（即 9007199254740991），或小于 -(253-1) 的整数。这是其内部表示形式导致的技术限制。
```js
// 尾部的 "n" 表示这是一个 BigInt 类型
const bigInt = 1234567890123456789012345678901234567890n;
```

### typeof
两种使用方式
* 作为运算符：typeof x。
* 函数形式：typeof(x)。

```js
typeof undefined // "undefined"
typeof 0 // "number"
typeof 10n // "bigint"
typeof true // "boolean"
typeof "foo" // "string"
typeof Symbol("id") // "symbol"
typeof Math // "object"
typeof null // "object"
typeof alert // "function"
```



## 常用 JS API

### String

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


### Array

#### 会改变自身的方法

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

#### 不改变自身的方法

* indexOf(searchElement, fromIndex)
  * fromIndex 可选，默认 0
  * 返回首个被找到的元素在数组中的索引位置; 若没有找到则返回 -1
* lastIndexOf()
  * 从 fromIndex 往左找
* concat(v1, v2, ...)   *将数组或值连接成新数组*
* join(separator)   *separator 缺省则为 `,`*
* slice(begin, end)
* toString()


#### 遍历方法

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


### RegExp

[RegExp](https://shenxinle.github.io/jekyll/update/2015/03/11/RegExp-in-JavaScript)

### Math


## Proxy

语法： `let proxy = new Proxy(target, handler)`
* `target`  要使用 Proxy 包装的目标对象（可以是任何类型的对象，包括原生数组，函数，甚至另一个代理）。
* `handler`  一个通常以函数作为属性的对象，各属性中的函数分别定义了在执行各种操作时代理的行为。

可以拦截的方法列表
<table>
  <thead>
    <tr>
      <th>内部方法</th>
      <th>Handler 方法</th>
      <th>何时触发</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>[[Get]]</code></td>
      <td><code>get</code></td>
      <td>读取属性</td>
    </tr>
    <tr>
      <td><code>[[Set]]</code></td>
      <td><code>set</code></td>
      <td>写入属性</td>
    </tr>
    <tr>
      <td><code>[[HasProperty]]</code></td>
      <td><code>has</code></td>
      <td><code>in</code> 操作符</td>
    </tr>
    <tr>
      <td><code>[[Delete]]</code></td>
      <td><code>deleteProperty</code></td>
      <td><code>delete</code> 操作符</td>
    </tr>
    <tr>
      <td><code>[[Call]]</code></td>
      <td><code>apply</code></td>
      <td>函数调用</td>
    </tr>
    <tr>
      <td><code>[[Construct]]</code></td>
      <td><code>construct</code></td>
      <td><code>new</code> 操作符</td>
    </tr>
    <tr>
      <td><code>[[GetPrototypeOf]]</code></td>
      <td><code>getPrototypeOf</code></td>
      <td><a
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf">Object.getPrototypeOf</a>
      </td>
    </tr>
    <tr>
      <td><code>[[SetPrototypeOf]]</code></td>
      <td><code>setPrototypeOf</code></td>
      <td><a
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf">Object.setPrototypeOf</a>
      </td>
    </tr>
    <tr>
      <td><code>[[IsExtensible]]</code></td>
      <td><code>isExtensible</code></td>
      <td><a
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible">Object.isExtensible</a>
      </td>
    </tr>
    <tr>
      <td><code>[[PreventExtensions]]</code></td>
      <td><code>preventExtensions</code></td>
      <td><a
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions">Object.preventExtensions</a>
      </td>
    </tr>
    <tr>
      <td><code>[[DefineOwnProperty]]</code></td>
      <td><code>defineProperty</code></td>
      <td><a
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty">Object.defineProperty</a>,
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties">Object.defineProperties</a>
      </td>
    </tr>
    <tr>
      <td><code>[[GetOwnProperty]]</code></td>
      <td><code>getOwnPropertyDescriptor</code></td>
      <td><a
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor">Object.getOwnPropertyDescriptor</a>,
        <code>for..in</code>,
        <code><a class="vglnk" href="http://Object.keys/values/entries" rel="nofollow"><span>Object</span><span>.</span><span>keys</span><span>/</span><span>values</span><span>/</span><span>entries</span></a></code>
      </td>
    </tr>
    <tr>
      <td><code>[[OwnPropertyKeys]]</code></td>
      <td><code>ownKeys</code></td>
      <td><a
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames">Object.getOwnPropertyNames</a>,
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols">Object.getOwnPropertySymbols</a>,
        <code>for..in</code>, <code>Object/keys/values/entries</code></td>
    </tr>
  </tbody>
</table>

### `get(target, property, receiver)`

```js
// 获取不存在的数组项时返回 0
let numbers = [0, 1, 2];
let numbersProxy = new Proxy(numbers, {
  get(target, prop) {
    if (prop in target) {
      return target[prop];
    } else {
      return 0;
    }
  }
})

console.log(`index 1: ${numbersProxy[1]}`); // 1
console.log(`index 5: ${numbersProxy[5]}`); // 0
```

### `set(target, property, value, receiver)`

```js
// 只允许添加数字的数组
let numbers = [];
let numbersProxy = new Proxy(numbers, {
  set(target, prop, value) {
    console.log(`---, ${prop}, ${value}`);
    if (typeof value === 'number') {
      target[prop] = value;
      return true;
    } else {
      console.error('only accept number');
      return false;
    }
  }
})

numbersProxy.push(1); // set 触发两次，设置 index 0 和 length
console.log(numbers);
numbersProxy.unshift(0); // set 触发三次
console.log(numbers);
numbersProxy.push(true); // TypeError
```



