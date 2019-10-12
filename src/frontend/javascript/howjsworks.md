# JS 是怎么工作的

## The JS Engine

最常见的 JS 引擎是 Chrome 和 Node.js 使用的 Google's V8 Engine。引擎一般由两部分组成：
* Memory Heap(内存堆) -- 负责内存分配
* Call Stack(调用栈) -- 代码执行时分配 stack frames(栈帧)


## The Runtime (运行时)

以浏览器为例，除了 JS 引擎， 还提供 Web APIs， Event Loop， Callback Quene 等。

![runtime](./assets/runtime.png)


## The Call Stack

JS 是单线程的，只有一个调用栈，一次只能做一件事情。

调用栈是记录程序执行位置的数据结构，开始执行一个函数时，往栈里推入一个栈帧，函数执行结束时，弹出顶部的栈帧。

```js
function multiply(x, y) {
  return x * y;
}
function printSquare(x) {
  var s = multiply(x, x);
  console.log(s);
}
printSquare(5);
```

![call stack](./assets/callstack.png)

调用栈有最大栈帧数（maximum Call Stack size）限制，超过了就抛出爆栈错误。比如递归没加退出条件。


## 内存管理

C 语言有 `malloc()` 和 `free()` 来分配和回收内存。

内存生命周期： `allocate memory` --> `use memory` --> `release memory`

### 内存分配

* 静态分配
  * 内存分配在栈空间（stack space），分配固定的大小
  * 函数调用函数时，每个函数获取对应的一块栈空间，用来保存本地变量
  * 函数调用结束，按 LIFO(last-in-first-out) 顺序释放

```c
int n; // 4 bytes
int x[4]; // array of 4 elements, each 4 bytes
double m; // 8 bytes
```

* 动态分配：内存分配在堆空间（heap space）

![allocation](./assets/allocation.png)

### 垃圾回收

* 引用计数（Reference-counting garbage collection）
  * 一个对象被引用次数为 0 时，被认为是可回收的
  * 没法解决循环引用的问题

```js
var o1 = {
  o2: {
    x: 1
  }
};
// 2 objects are created. 
// 'o2' is referenced by 'o1' object as one of its properties.
// None can be garbage-collected

var o3 = o1; // the 'o3' variable is the second thing that 
            // has a reference to the object pointed by 'o1'. 
                                                       
o1 = 1;      // now, the object that was originally in 'o1' has a         
            // single reference, embodied by the 'o3' variable

var o4 = o3.o2; // reference to 'o2' property of the object.
                // This object has now 2 references: one as
                // a property. 
                // The other as the 'o4' variable

o3 = '374'; // The object that was originally in 'o1' has now zero
            // references to it. 
            // It can be garbage-collected.
            // However, what was its 'o2' property is still
            // referenced by the 'o4' variable, so it cannot be
            // freed.

o4 = null; // what was the 'o2' property of the object originally in
           // 'o1' has zero references to it. 
           // It can be garbage collected.
```

循环引用：

```js
function f() {
  var o1 = {};
  var o2 = {};
  o1.p = o2; // o1 references o2
  o2.p = o1; // o2 references o1. This creates a cycle.
}
f();
```

* 标记清除（Mark-and-sweep algorithm）

步骤：
1. Roots: In general, roots are global variables which get referenced in the code. In JavaScript for example, a global variable that can act as a root is the “window” object. The identical object in Node.js is called “global”. A complete list of all roots gets built by the garbage collector.
2. The algorithm then inspects all roots and their children and marks them as active (meaning, they are not garbage). Anything that a root cannot reach will be marked as garbage.
3. Finally, the garbage collector frees all memory pieces that are not marked as active and returns that memory to the OS.

![mark and sweep](./assets/marksweep.gif)

### JS 中常见的内存泄漏

* Global variables
* Timers or Callbacks that are forgotten
* Closures
* Out of DOM references



## 参考文章
* [How JavaScript works: an overview of the engine, the runtime, and the call stack](https://blog.sessionstack.com/how-does-javascript-actually-work-part-1-b0bacc073cf)
* [How JavaScript works: memory management + how to handle 4 common memory leaks](https://blog.sessionstack.com/how-javascript-works-memory-management-how-to-handle-4-common-memory-leaks-3f28b94cfbec)
