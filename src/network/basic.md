# 网络基础

## TCP

传输控制协议（Transmission Control Protocol）

特点： 面向连接、全双工通信、可靠、面向字节流。
* 优点：数据传输可靠
* 缺点：效率慢（因需建立连接、发送确认包等）

应用场景： HTTP、HTTPS、FTP、POP、SMTP、TELNET等。


### 连接

三次握手

* 客户端向服务器发送连接请求报文（SYN=1, seq=x）
* 服务端响应确认报文（SYN=1, ACK=1, seq=y, ack=x+1）
* 客户端发出确认连接报文（ACK=1, seq=x+1, ack=y+1）


### 释放

四次挥手

* 客户端没有数据再传输了，向服务端发出一个连接释放的报文；
* 服务端响应确认释放报文；
  * 此时服务端还可以向客户端继续传输报文
* 服务端数据传输完后，向客户端发出连接释放的报文；
* 客户端响应确认释放报文。


## UDP

用户数据报协议（User Datagram Protocol）

特点： 无连接、不可靠、面向报文、无拥塞控制。
* 优点：速度快
* 缺点：消息易丢失（特别是 网络较差时）

应用场景：DNS、FTP、NFS


## HTTP

### 状态码

* 100 Continue
* 200 OK
  * 201 Created, 成功创建了一个新的资源，通常是在POST请求，或是某些PUT请求之后返回的响应。
  * 202 Accepted, 请求已经接收到，但还未响应，没有结果。如批处理。
  * 203 [Non-Authoritative Information](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status/203)
  * 204 No Content
  * 205 Reset Content
  * 206 Partial Content
* 300 Multiple Choice, 用来表示重定向的响应状态码，表示该请求拥有多种可能的响应。用户代理或者用户自身应该从中选择一个。由于没有如何进行选择的标准方法，这个状态码极少使用。
  * 301 Moved Permanently, 永久重定向
  * 302 Found, 临时重定向
  * 303 See Other, 通常作为 PUT 或 POST 操作的返回结果，它表示重定向链接指向的不是新上传的资源，而是另外一个页面，比如消息确认页面或上传进度页面。而请求重定向页面的方法要总是使用 GET。
  * 304 Not Modified， 根据 If-None-Match / If-Modified-Since 判断
  * 307 Temporary Redirect，临时重定向
  * 308 Permanent Redirect，永久重定向

**状态码 307 与 302 之间的唯一区别在于，当发送重定向请求的时候，307 状态码可以确保请求方法和消息主体不会发生变化。如果使用 302 响应状态码，一些旧客户端会错误地将请求方法转换为 GET：也就是说，在 Web 中，如果使用了 GET 以外的请求方法，且返回了 302 状态码，则重定向后的请求方法是不可预测的；但如果使用 307 状态码，之后的请求方法就是可预测的。对于 GET 请求来说，两种情况没有区别。**

**308 和 301 的区别，308 在重定向过程中，请求方法和消息主体不会发生改变，然而在返回 301 状态码的情况下，请求方法有时候会被客户端错误地修改为 GET 方法。**

* 400 Bad Request
  * 401 Unauthorized
  * 403 Forbidden
  * 404 Not Found
  * 405 Method Not Allowed
* 500 Internal Server Error
  * 501 Not Implemented
  * 502 Bad Gateway
  * 503 Service Unavailable
  * 504 Gateway Timeout
  * 505 HTTP Version Not Supported


### HTTP2

优势：

* 对HTTP头字段进行数据压缩(即HPACK算法)；
* HTTP/2 服务端推送(Server Push)；
* 请求流水线；
* 修复HTTP/1.0版本以来未修复的队头阻塞问题；
* 对数据传输采用多路复用，让多个请求合并在同一 TCP 连接内。

#### 二进制分帧机制

* 数据流：已建立的连接内的双向字节流，可以承载一条或多条消息。
* 消息：与逻辑请求或响应消息对应的完整的一系列帧。
* 帧：HTTP/2 通信的最小单位，每个帧都包含帧头，至少也会标识出当前帧所属的数据流。


这些概念的关系总结如下：

* 所有通信都在一个 TCP 连接上完成，此连接可以承载任意数量的双向数据流。
* 每个数据流都有一个唯一的标识符和可选的优先级信息，用于承载双向消息。
* 每条消息都是一条逻辑 HTTP 消息（例如请求或响应），包含一个或多个帧。
* 帧是最小的通信单位，承载着特定类型的数据，例如 HTTP 标头、消息负载等等。 来自不同数据流的帧可以交错发送，然后再根据每个帧头的数据流标识符重新组装。



## 参考

* [计算机网络：这是一份全面 & 详细 的TCP协议攻略](https://www.jianshu.com/p/65605622234b)
* [https://developers.google.com/web/fundamentals/performance/http2?hl=zh-cn](https://developers.google.com/web/fundamentals/performance/http2?hl=zh-cn)
* [High Performance Browser Networking](https://hpbn.co/)