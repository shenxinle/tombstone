(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{358:function(t,s,a){t.exports=a.p+"assets/img/runtime.30ab862a.png"},359:function(t,s,a){t.exports=a.p+"assets/img/callstack.0340408b.png"},360:function(t,s,a){t.exports=a.p+"assets/img/libuveventloop.72d26b0e.png"},361:function(t,s,a){t.exports=a.p+"assets/img/eventloopcompare.336c06ec.png"},362:function(t,s,a){t.exports=a.p+"assets/img/allocation.9e8b0ab8.png"},363:function(t,s,a){t.exports=a.p+"assets/img/marksweep.0833d209.gif"},395:function(t,s,a){"use strict";a.r(s);var n=a(40),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"js-是怎么工作的"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#js-是怎么工作的"}},[t._v("#")]),t._v(" JS 是怎么工作的")]),t._v(" "),n("h2",{attrs:{id:"the-js-engine"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#the-js-engine"}},[t._v("#")]),t._v(" The JS Engine")]),t._v(" "),n("p",[t._v("最常见的 JS 引擎是 Chrome 和 Node.js 使用的 Google's V8 Engine。引擎一般由两部分组成：")]),t._v(" "),n("ul",[n("li",[t._v("Memory Heap(内存堆) -- 负责内存分配")]),t._v(" "),n("li",[t._v("Call Stack(调用栈) -- 代码执行时分配 stack frames(栈帧)")])]),t._v(" "),n("h2",{attrs:{id:"the-runtime-运行时"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#the-runtime-运行时"}},[t._v("#")]),t._v(" The Runtime (运行时)")]),t._v(" "),n("p",[t._v("以浏览器为例，除了 JS 引擎， 还提供 Web APIs， Event Loop， Callback Quene 等。")]),t._v(" "),n("p",[n("img",{attrs:{src:a(358),alt:"runtime"}})]),t._v(" "),n("h2",{attrs:{id:"the-call-stack"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#the-call-stack"}},[t._v("#")]),t._v(" The Call Stack")]),t._v(" "),n("p",[t._v("JS 是单线程的，只有一个调用栈，一次只能做一件事情。")]),t._v(" "),n("p",[t._v("调用栈是记录程序执行位置的数据结构，开始执行一个函数时，往栈里推入一个栈帧，函数执行结束时，弹出顶部的栈帧。")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("multiply")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" x "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" y"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("printSquare")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("x")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" s "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("multiply")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("printSquare")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("p",[n("img",{attrs:{src:a(359),alt:"call stack"}})]),t._v(" "),n("p",[t._v("调用栈有最大栈帧数（maximum Call Stack size）限制，超过了就抛出爆栈错误。比如递归没加退出条件。")]),t._v(" "),n("h2",{attrs:{id:"the-event-loop"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#the-event-loop"}},[t._v("#")]),t._v(" The Event Loop")]),t._v(" "),n("h3",{attrs:{id:"概念"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#概念"}},[t._v("#")]),t._v(" 概念")]),t._v(" "),n("ul",[n("li",[t._v("event loop\n"),n("ul",[n("li",[t._v("为了协调事件，用户交互，脚本，渲染，网络等，用户代理必须使用 event loop")])])]),t._v(" "),n("li",[t._v("task\n"),n("ul",[n("li",[t._v("一个event loop有一个或者多个task队列")]),t._v(" "),n("li",[t._v("当用户代理安排一个任务，必须将该任务增加到相应的event loop的一个tsak队列中")]),t._v(" "),n("li",[t._v("每一个task都来源于指定的任务源，比如可以为鼠标、键盘事件提供一个task队列，其他事件又是一个单独的队列。可以为鼠标、键盘事件分配更多的时间，保证交互的流畅。")]),t._v(" "),n("li",[t._v("task 任务源\n"),n("ul",[n("li",[t._v("script 整体代码")]),t._v(" "),n("li",[t._v("setTimeout, setInterval, setImmediate")]),t._v(" "),n("li",[t._v("I/O")]),t._v(" "),n("li",[t._v("UI rendering")])])])])]),t._v(" "),n("li",[t._v("microtask\n"),n("ul",[n("li",[t._v("每一个 event loop 都有一个 microtask 队列，一个 microtask 会被排进 microtask 队列而不是 task 队列。")]),t._v(" "),n("li",[t._v("microtask 任务源\n"),n("ul",[n("li",[t._v("process.nextTick")]),t._v(" "),n("li",[t._v("Promise")]),t._v(" "),n("li",[t._v("Object.observe")]),t._v(" "),n("li",[t._v("MutationObserver")])])]),t._v(" "),n("li",[t._v("注：Promise 规范里提及 then 方法可以采用宏任务，也可以采用微任务来实现。普遍共识是用微任务。")])])])]),t._v(" "),n("h3",{attrs:{id:"event-loop-处理过程-processing-model"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#event-loop-处理过程-processing-model"}},[t._v("#")]),t._v(" event loop 处理过程（Processing model）")]),t._v(" "),n("blockquote",[n("p",[t._v("一个event loop只要存在，就会不断执行下边的步骤：")]),t._v(" "),n("ol",[n("li",[t._v("在tasks队列中选择最老的一个task,用户代理可以选择任何task队列，如果没有可选的任务，则跳到下边的microtasks步骤。")]),t._v(" "),n("li",[t._v("将上边选择的task设置为正在运行的task。")]),t._v(" "),n("li",[t._v("Run: 运行被选择的task。")]),t._v(" "),n("li",[t._v("将event loop的currently running task变为null。")]),t._v(" "),n("li",[t._v("从task队列里移除前边运行的task。")]),t._v(" "),n("li",[t._v("Microtasks: 执行microtasks任务检查点。（也就是执行microtasks队列里的任务）")]),t._v(" "),n("li",[t._v("更新渲染（Update the rendering）...")]),t._v(" "),n("li",[t._v("如果这是一个worker event loop，但是没有任务在task队列中，并且WorkerGlobalScope对象的closing标识为true，则销毁event loop，中止这些步骤，然后进行定义在Web workers章节的run a worker。")]),t._v(" "),n("li",[t._v("返回到第一步。")])])]),t._v(" "),n("p",[t._v("event loop 不断循环上面的步骤， 其中第七步更新渲染是可能有的。")]),t._v(" "),n("p",[t._v("关于渲染更新：")]),t._v(" "),n("ul",[n("li",[t._v("在一轮event loop中多次修改同一dom，只有最后一次会进行绘制。")]),t._v(" "),n("li",[t._v("渲染更新（Update the rendering）会在event loop中的tasks和microtasks完成后进行，但并不是每轮event loop都会更新渲染，这取决于是否修改了dom和浏览器觉得是否有必要在此时立即将新状态呈现给用户。如果在一帧的时间内（时间并不确定，因为浏览器每秒的帧数总在波动，16.7ms只是估算并不准确）修改了多处dom，浏览器可能将变动积攒起来，只进行一次绘制，这是合理的。")]),t._v(" "),n("li",[t._v("如果希望在每轮event loop都即时呈现变动，可以使用requestAnimationFrame。")])]),t._v(" "),n("h3",{attrs:{id:"node-js-中的-event-loop"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#node-js-中的-event-loop"}},[t._v("#")]),t._v(" Node.js 中的 Event Loop")]),t._v(" "),n("p",[t._v("Node.js 里的 Event Loop 和浏览器里的是完全不同的东西， 由 libuv 驱动。")]),t._v(" "),n("p",[n("img",{attrs:{src:a(360),alt:"libuv event loop"}})]),t._v(" "),n("p",[t._v("libuv 引擎中的事件循环分为 6 个阶段， 会按照顺序反复运行。外部输入数据–>轮询阶段(poll)–>检查阶段(check)–>关闭事件回调阶段(close callback)–>定时器检测阶段(timer)–>I/O 事件回调阶段(I/O callbacks)–>闲置阶段(idle, prepare)–>轮询阶段（按照该顺序反复运行）…")]),t._v(" "),n("ul",[n("li",[t._v("timers 阶段：这个阶段执行 timer（setTimeout、setInterval）的回调")]),t._v(" "),n("li",[t._v("I/O callbacks 阶段：处理一些上一轮循环中的少数未执行的 I/O 回调")]),t._v(" "),n("li",[t._v("idle, prepare 阶段：仅 node 内部使用")]),t._v(" "),n("li",[t._v("poll 阶段：获取新的 I/O 事件, 适当的条件下 node 将阻塞在这里")]),t._v(" "),n("li",[t._v("check 阶段：执行 setImmediate() 的回调")]),t._v(" "),n("li",[t._v("close callbacks 阶段：执行 socket 的 close 事件回调")])]),t._v(" "),n("h4",{attrs:{id:"poll"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#poll"}},[t._v("#")]),t._v(" poll")]),t._v(" "),n("p",[t._v("poll 是一个至关重要的阶段，这一阶段中，系统会做两件事情")]),t._v(" "),n("ul",[n("li",[t._v("回到 timer 阶段执行回调")]),t._v(" "),n("li",[t._v("执行 I/O 回调")])]),t._v(" "),n("p",[t._v("并且在进入该阶段时如果没有设定了 timer 的话，会发生以下两件事情")]),t._v(" "),n("ul",[n("li",[t._v("如果 poll 队列不为空，会遍历回调队列并同步执行，直到队列为空或者达到系统限制")]),t._v(" "),n("li",[t._v("如果 poll 队列为空时，会有两件事发生\n"),n("ul",[n("li",[t._v("如果有 setImmediate 回调需要执行，poll 阶段会停止并且进入到 check 阶段执行回调")]),t._v(" "),n("li",[t._v("如果没有 setImmediate 回调需要执行，会等待回调被加入到队列中并立即执行回调，这里同样会有个超时时间设置防止一直等待下去")])])])]),t._v(" "),n("p",[t._v("当然设定了 timer 的话且 poll 队列为空，则会判断是否有 timer 超时，如果有的话会回到 timer 阶段执行回调。")]),t._v(" "),n("h4",{attrs:{id:"注意点"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#注意点"}},[t._v("#")]),t._v(" 注意点")]),t._v(" "),n("ul",[n("li",[t._v("setTimeout 和 setImmediate\n"),n("ul",[n("li",[t._v("对于以下代码来说，setTimeout 可能执行在前，也可能执行在后。")]),t._v(" "),n("li",[t._v("首先 setTimeout(fn, 0) === setTimeout(fn, 1)，这是由源码决定的\n"),n("ul",[n("li",[t._v("进入事件循环也是需要成本的，如果在准备时候花费了大于 1ms 的时间，那么在 timer 阶段就会直接执行 setTimeout 回调")])])]),t._v(" "),n("li",[t._v("如果准备时间花费小于 1ms，那么就是 setImmediate 回调先执行了")])])])]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("timeout")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'timeout'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setImmediate")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("immediate")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'immediate'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("p",[t._v("但当二者在异步 i/o callback 内部调用时，总是先执行 setImmediate，再执行 setTimeout")]),t._v(" "),n("ul",[n("li",[t._v("precess.nextTick\n"),n("ul",[n("li",[t._v("这个函数其实是独立于 Event Loop 之外的，它有一个自己的队列，当每个阶段完成后，如果存在 nextTick 队列，就会清空队列中的所有回调函数，并且优先于其他 microtask 执行。")])])])]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'timer1'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nPromise"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'promise1'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nprocess"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("nextTick")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'nextTick'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n process"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("nextTick")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'nextTick'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n   process"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("nextTick")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'nextTick'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n     process"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("nextTick")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n       console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'nextTick'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n     "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n   "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// nextTick=>nextTick=>nextTick=>nextTick=>promise1=>timer1")]),t._v("\n")])])]),n("h3",{attrs:{id:"浏览器和-node-js-中-event-loop-对比"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#浏览器和-node-js-中-event-loop-对比"}},[t._v("#")]),t._v(" 浏览器和 Node.js 中 Event Loop 对比")]),t._v(" "),n("p",[t._v("浏览器环境下，microtasks 的任务队列是在每个 macrotask 执行完之后执行。而在 Node.js 中，microtasks 会在事件循环的各个阶段之间执行，也就是一个阶段执行完毕，就会去执行 microtasks 队列的任务。")]),t._v(" "),n("p",[n("img",{attrs:{src:a(361),alt:"event loop compare"}})]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'timer1'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    Promise"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'promise1'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'timer2'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    Promise"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'promise2'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 浏览器端运行结果：timer1=>promise1=>timer2=>promise2")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Node 端运行结果：timer1=>timer2=>promise1=>promise2")]),t._v("\n")])])]),n("h2",{attrs:{id:"内存管理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#内存管理"}},[t._v("#")]),t._v(" 内存管理")]),t._v(" "),n("p",[t._v("C 语言有 "),n("code",[t._v("malloc()")]),t._v(" 和 "),n("code",[t._v("free()")]),t._v(" 来分配和回收内存。")]),t._v(" "),n("p",[t._v("内存生命周期： "),n("code",[t._v("allocate memory")]),t._v(" --\x3e "),n("code",[t._v("use memory")]),t._v(" --\x3e "),n("code",[t._v("release memory")])]),t._v(" "),n("h3",{attrs:{id:"内存分配"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#内存分配"}},[t._v("#")]),t._v(" 内存分配")]),t._v(" "),n("ul",[n("li",[t._v("静态分配\n"),n("ul",[n("li",[t._v("内存分配在栈空间（stack space），分配固定的大小")]),t._v(" "),n("li",[t._v("函数调用函数时，每个函数获取对应的一块栈空间，用来保存本地变量")]),t._v(" "),n("li",[t._v("函数调用结束，按 LIFO(last-in-first-out) 顺序释放")])])])]),t._v(" "),n("div",{staticClass:"language-c extra-class"},[n("pre",{pre:!0,attrs:{class:"language-c"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 4 bytes")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// array of 4 elements, each 4 bytes")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("double")]),t._v(" m"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 8 bytes")]),t._v("\n")])])]),n("ul",[n("li",[t._v("动态分配：内存分配在堆空间（heap space）")])]),t._v(" "),n("p",[n("img",{attrs:{src:a(362),alt:"allocation"}})]),t._v(" "),n("h3",{attrs:{id:"垃圾回收"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#垃圾回收"}},[t._v("#")]),t._v(" 垃圾回收")]),t._v(" "),n("ul",[n("li",[t._v("引用计数（Reference-counting garbage collection）\n"),n("ul",[n("li",[t._v("一个对象被引用次数为 0 时，被认为是可回收的")]),t._v(" "),n("li",[t._v("没法解决循环引用的问题")])])])]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" o1 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  o2"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    x"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2 objects are created. ")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 'o2' is referenced by 'o1' object as one of its properties.")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// None can be garbage-collected")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" o3 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" o1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// the 'o3' variable is the second thing that ")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// has a reference to the object pointed by 'o1'. ")]),t._v("\n                                                       \no1 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("      "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// now, the object that was originally in 'o1' has a         ")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// single reference, embodied by the 'o3' variable")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" o4 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" o3"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("o2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// reference to 'o2' property of the object.")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// This object has now 2 references: one as")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// a property. ")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The other as the 'o4' variable")]),t._v("\n\no3 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'374'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The object that was originally in 'o1' has now zero")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// references to it. ")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// It can be garbage-collected.")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// However, what was its 'o2' property is still")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// referenced by the 'o4' variable, so it cannot be")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// freed.")]),t._v("\n\no4 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// what was the 'o2' property of the object originally in")]),t._v("\n           "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 'o1' has zero references to it. ")]),t._v("\n           "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// It can be garbage collected.")]),t._v("\n")])])]),n("p",[t._v("循环引用：")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("f")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" o1 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" o2 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  o1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("p "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" o2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// o1 references o2")]),t._v("\n  o2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("p "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" o1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// o2 references o1. This creates a cycle.")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("f")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("ul",[n("li",[t._v("标记清除（Mark-and-sweep algorithm）")])]),t._v(" "),n("p",[t._v("步骤：")]),t._v(" "),n("ol",[n("li",[t._v("Roots: In general, roots are global variables which get referenced in the code. In JavaScript for example, a global variable that can act as a root is the “window” object. The identical object in Node.js is called “global”. A complete list of all roots gets built by the garbage collector.")]),t._v(" "),n("li",[t._v("The algorithm then inspects all roots and their children and marks them as active (meaning, they are not garbage). Anything that a root cannot reach will be marked as garbage.")]),t._v(" "),n("li",[t._v("Finally, the garbage collector frees all memory pieces that are not marked as active and returns that memory to the OS.")])]),t._v(" "),n("p",[n("img",{attrs:{src:a(363),alt:"mark and sweep"}})]),t._v(" "),n("h3",{attrs:{id:"js-中常见的内存泄漏"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#js-中常见的内存泄漏"}},[t._v("#")]),t._v(" JS 中常见的内存泄漏")]),t._v(" "),n("ul",[n("li",[t._v("Global variables")]),t._v(" "),n("li",[t._v("Timers or Callbacks that are forgotten")]),t._v(" "),n("li",[t._v("Closures")]),t._v(" "),n("li",[t._v("Out of DOM references")])]),t._v(" "),n("h2",{attrs:{id:"参考文章"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#参考文章"}},[t._v("#")]),t._v(" 参考文章")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://blog.sessionstack.com/how-does-javascript-actually-work-part-1-b0bacc073cf",target:"_blank",rel:"noopener noreferrer"}},[t._v("How JavaScript works: an overview of the engine, the runtime, and the call stack"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/aooy/blog/issues/5",target:"_blank",rel:"noopener noreferrer"}},[t._v("从event loop规范探究javaScript异步及浏览器更新渲染时机"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://blog.fundebug.com/2019/01/15/diffrences-of-browser-and-node-in-event-loop/",target:"_blank",rel:"noopener noreferrer"}},[t._v("浏览器与Node的事件循环(Event Loop)有何区别"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://blog.sessionstack.com/how-javascript-works-memory-management-how-to-handle-4-common-memory-leaks-3f28b94cfbec",target:"_blank",rel:"noopener noreferrer"}},[t._v("How JavaScript works: memory management + how to handle 4 common memory leaks"),n("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=e.exports}}]);