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