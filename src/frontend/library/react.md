# React

* API
  * React
  * Component
  * ReactDOM / ReactDOMServer
* LifeCycle
* Context
* Refs && Forwarding Refs
* Higher-Order Components
* Render Props
* Error Boundaries
* Portals
* Reconciliation
* SyntheticEvent
* Hooks
* ...

## 组件生命周期

* mount
  * `constructor(props)` => `static getDerivedStateFromProps()` => `UNSAFE_componentWillMount()` => `render()` => `ComponentDidMount()`
* update
  * `static getDerivedStateFromProps()` => `UNSAFE_componentWillReceiveProps()` => `shouldComponentUpdate()` => `UNSAFE_componentWillUpdate()` => `render()` => `getSnapshotBeforeUpdate()` => `componentDidUpdate()`
* unmount
  * `componentWillUnmount()`
* error handling
  * `static getDerivedStateFromError()`
  * `componentDidCatch()`


[生命周期图](http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)



## Hooks

### 动机
* 难以在组件间复用状态逻辑
  * 类组件间复用状态逻辑的方式是 render props 和 high-order components
  * 上面两种方式需要重新组织组件结构，改动大量代码；且容易形成 “wrapper hell” 
  * hooks 能够轻松抽取状态逻辑，独立测试，方便复用
* 复杂组件变得难以理解
  * 类组件是根据生命周期来组织代码的，同一逻辑的代码被拆分到不同的生命周期里，而不同逻辑的代码被组合到同一生命周期
  * 复杂逻辑的类组件很难拆分成更小的组件
  * hooks 的 useEffect 专门用来把同一逻辑的副作用组合到一起
* 相对于 function, class 更容易使人和机器困惑
  * 如 this 绑定
  * 类组件更难优化（类似 Angular 的 ahead-of-time compilation）

### 规则
* Only Call Hooks at the Top Level
  * 不能在循环、条件判断、嵌套的函数内使用 hooks
* Only Call Hooks from React Functions
  * 函数组件内
  * 自定义 hooks 内

[eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)

### Hooks API




## 参考文档
* [Thinking in React Hooks](https://wattenberger.com/blog/react-hooks)
* [https://github.com/gragland/usehooks](https://github.com/gragland/usehooks)

