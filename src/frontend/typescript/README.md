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

