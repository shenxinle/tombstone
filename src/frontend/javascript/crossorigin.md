# 浏览器同源策略与 ajax 跨域方法

## 同源策略

url 中 protocol 协议、host 域名、port 端口这三个部分都相同时，就是同源。

同源策略限制是出于安全考虑，以下操作受到限制：
* ajax 请求
* dom 操作
* cookie, localStorage, indexDB 等

script, style, img, video, audio, iframe 等不收限制


## ajax 请求跨域方法

### 使用代理

将非同源移到服务端，浏览器端同源

### CORS(Cross-Origin Resource Sharing)

发送非同源请求时浏览器会自动带上 Origin 请求头 `origin: https://m.xxx.com`， 服务端响应带上头信息 `access-control-allow-origin: https://m.xxx.com`， 即可跨域。如果将 `Access-Control-Allow-Origin` 的值设置为 *，则会接受所有域的请求。

响应头 `Access-Control-Allow-Credentials` 设为 true 时表示服务器允许该请求内包含cookie信息，Access-Control-Allow-Origin 设置为 * 时无效， 客户端 `xhr.withCredentials` 设为 true 即可带上 cookie。

`Access-Control-Expose-Headers` 头让服务器把允许浏览器访问的头放入白名单

非简单请求时浏览器会发 OPTIONS 预检请求

### JSONP

步骤：
1. 客户端定义全局的回调函数 callback_uid
2. 动态创建 script, src 为 `https://api.xxx.com/getproductinfo/jsonp?cb=callback_uid`
3. 服务端响应数据用 callback_uid 包裹， `callback_uid(dataString)`
4. 客户端收到响应后会执行 callback_uid，执行后清理掉 callback_uid 和 script。