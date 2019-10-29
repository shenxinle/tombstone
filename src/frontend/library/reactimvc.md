# React-IMVC

## 实现
### 技术选型
* Router: create-app = history + path-to-regexp
* View: React = renderToDOM || renderToString
* Model: relite = redux-like library
* Ajax: isomorphic-fetch

### create-app 实现同构的方式
* 输入 url，router 根据 url 的格式，匹配出对应的 controller 模块
* 调用 module-loader 加载 controller 模块，拿到 Controller 类
* View 和 Model 从属于 Controller 类的属性
* new Controller(location, context) 得到 controller 实例
* 调用 controller.init 方法，该方法必须返回 view 的实例
* 调用 view-engine 将 view 的实例根据环境渲染成 html 或者 dom 或者 native-ui 等

客户端和服务端通过配置来处理不一致

```js
const app = createApp({
  type: 'createHistory',
  container: '#root',
  context: {
    isClient: true|false,
    isServer: false|true,
    ...injectFeatures
  },
  loader: webpackLoader|commonjsLoader,
  routes: routes,
  viewEngine: ReactDOM|ReactDOMServer,
})
app.start() || app.render(url, context)
```

create-app 的服务端渲染

```js
const app = createApp(serverSettings)
router.get('*', async (req, res, next) => {
  try {
    const { content } = await app.render(req.url, serverContext)
    res.render('layout', { content })
  } catch(error) {
    next(error)
  }
})
```


## 参考文档
* [https://github.com/Lucifier129/react-imvc](https://github.com/Lucifier129/react-imvc)
* [https://github.com/Lucifier129/create-app](https://github.com/Lucifier129/create-app)
* [IMVC（同构 MVC）的前端实践 ](https://github.com/Lucifier129/Lucifier129.github.io/issues/14)
