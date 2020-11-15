# Redux

Redux is a predictable state container for JavaScript apps.

* 单一数据源（store）
* state 是只读的(通过触发 action 来修改 state)
* 使用纯函数来执行修改（reducer）

## 使用

```js
import { createStore } from 'redux'

/**
 * This is a reducer, a pure function with (state, action) => state signature.
 */
function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

// Its API is { subscribe, dispatch, getState }.
let store = createStore(counter)

// You can use subscribe() to update the UI in response to state changes.
// Normally you'd use a view binding library (e.g. React Redux) rather than subscribe() directly.
// However it can also be handy to persist the current state in the localStorage.
store.subscribe(() => console.log(store.getState()))

// The only way to mutate the internal state is to dispatch an action.
// The actions can be serialized, logged or stored and later replayed.
store.dispatch({ type: 'INCREMENT' })
// 1
store.dispatch({ type: 'INCREMENT' })
// 2
store.dispatch({ type: 'DECREMENT' })
// 1
```

## API

* createStore
  * `createStore(reducer, [preloadedState], enhancer)`
* store
  * { getState, subscribe, dispatch }
    * store.getState() 获取 state
    * store.subscribe(fn) 添加订阅，每次 dispatch action 时执行 fn
    * store.dispatch(action) 触发 action
      * action: { type, payload }
      * 内部执行 `currentState = currentReducer(currentState, action)`， 并触发所有 subscribe 添加的订阅
  * 是 createStore 的返回值
* combineReducers
  * `let reducer = combineReducers({key1: reducer1, key2: reducer2})`
  * 将多个 reducer 组合成一个 reducer, 作为 createStore 的第一个参数
  * state[key1] 对应于 reducer1
* bindActionCreators
  * `bindActionCreators(actionCreators, dispatch)`
* applyMiddleware
  * 包装/增强 dispatch，使之能接受函数处理其他（异步）逻辑后再真正 dispatch action。
* compose
  * compose(f, g, h)  相当于  (...args) => f(g(h(...args)))


## compose 实现

```js
// 方法1
function compose(...fns) {
  if (fns.length === 0) {
    return arg => arg;
  }
  
  return function (...args) {
    let result;
    for (let i = fns.length - 1; i >= 0; i--) {
      if (i === fns.length - 1) {
        result = fns[i](...args);
      } else {
        result = fns[i](result);
      }
    }
    return result;
  }
}

// 方法2
function compose(...fns) {
  if (fns.length === 0) {
    return arg => arg;
  }
  
  return function (...args) {
    return fns.reduceRight((acc, fn, index) => {
      if (index === 0) {
        return fn(...acc);
      } else {
        return fn(acc);
      }  
    }, args);
  }
}

// 官方
function compose(...funcs) {
  if (funcs.length === 0) {
    return arg => arg;
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce((a, b) => (...args) => a(b(...args)));
}
```

## 和 React 绑定

todo


## 简单实现

[https://github.com/shenxinle/js-snippets/blob/master/src/redux/index.js](https://github.com/shenxinle/js-snippets/blob/master/src/redux/index.js)



## 参考文档
* [https://github.com/reduxjs/redux](https://github.com/reduxjs/redux)

