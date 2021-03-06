# TypeScript

## 前言
* 是什么
* 解决了什么问题
* 为什么是它， 解决这个问题还有其他选择吗， 有什么独特优势
* 引入成本， 会导致什么问题
* 综合结论

### 是什么

> TypeScript is a typed superset of JavaScript that compiles to plain JavaScript

### 解决了什么问题

* 静态检查
  * ESLint 检测不出来
  * 类似低级错误： error TS2339: Property 'localCompare' does not exist on type 'string'
  * 非空判断

    ```js
    let data = {
      list: null,
      success: true
    };
    const value = data.list.length;

    // error TS2532: Object is possibly 'null'.
    ```
  * 类型推断
* 面向对象编程增强
  * 访问权限控制
    * 例如 private, protected 属性
  * 接口（interface）
  * 泛型

  ```ts
  class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
  }

  let myGenericNumber = new GenericNumber<number>();
  myGenericNumber.zeroValue = 0;
  myGenericNumber.add = function(x, y) { return x + y; }
  ```

* 类型系统
* 模块系统增强
  * 支持 namespace

### 为什么是它， 解决这个问题还有其他选择吗， 有什么独特优势

* 对比 Flow
  * TS 生态、社区资源更强
* 应用最广泛？
* 微软背书？

### 引入成本， 会导致什么问题

* 学习成本
* 老项目
  * 渐进式迁移
  * 参考 TS 官方、 React 官方迁移教程
* 新项目
  * 参考官方 Starter



## 使用

```sh
npm install -g typescript

tsc helloworld.ts
```

## 内容

* Basic Types
* Variable Declarations
* Interfaces
* Classes
* Functions
* Generics
* Enums
* Type Inference
* Typs Compatibility
* Advanced Types
* Symbols
* Iterators and Generators
* Modules
* Namespaces
* Namespaces and Modules
* Module Resolution
* Declaration Merging
* JSX
* Decorators
* Mixins
* Triple-Slash Directives

### 基本类型

```ts
// Boolean
let isDone: boolean = false;

// Number
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b10010;
let octal: number = 0o744;

// String
let str: string = 'hehe';

// Array
let list: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2];

// Tuple 元组
let tup: [string, number, number[]] = ['hehe', 2, [1]];

// Enum 枚举
enum Color { Red, Green, Blue }
let color: Color = Color.Green;

// Any
let any: any = 'any';
let listAny: any[] = [1, 'hehe', [], {}];

// Void
function warnUser(): void {
    console.log("This is my warning message");
}
let unusable: void = void 0;
unusable = null; // // OK if `--strictNullChecks` is not given

// Null and Undefined
let undef: undefined = void 0;
let nu: null = null;

// Never
// Function returning never must have unreachable end point
function error(message: string): never {
  throw new Error(message);
}

// Object
// object is a type that represents the non-primitive type, i.e. anything that is not number, string, boolean, symbol, null, or undefined
let obj: object = {};

// Type assertions
let someValue: any = 'hehe';
let strLength: number = (<string>someValue).length;
let strLength2: number = (someValue as string).length;
```

### 接口

```ts
interface Config {
    label: string;   // 必须
    color?: string;  // 可选
    readonly x: number;
}
let config: Config = {
    label: '',
    x: 1
};

// function
interface TestFunc {
    (src: string, subStr: string): boolean
}
let fn: TestFunc = (src, subStr) => src.indexOf(subStr) > -1;

// array
interface StringArray {
    [index: number]: string;
}
let arr: StringArray = ['1'];

// class
interface ClockInterface {
    currentTime: Date;
    setTime(d: Date): void;
}
class Clock implements ClockInterface {
    currentTime: Date = new Date();
    setTime(d: Date) {
        this.currentTime = d;
    }
}

// extends
interface Shape {
    color: string;
}
interface PenStroke {
    penWidth: number;
}
interface Square extends Shape, PenStroke {
    sideLength: number;
}

let square = {} as Square;
square.color = "blue";
square.sideLength = 10;
square.penWidth = 5.0;
```


## 参考文档
* [http://www.typescriptlang.org/docs/home.html](http://www.typescriptlang.org/docs/home.html)
* [https://github.com/dzharii/awesome-typescript](https://github.com/dzharii/awesome-typescript)
* [TypeScript安利指南](https://juejin.im/post/5d8efeace51d45782b0c1bd6)
* [TypeScript 入门教程](https://github.com/xcatliu/typescript-tutorial/blob/master/README.md)
* [深入理解 TypeScript](https://jkchao.github.io/typescript-book-chinese/)


