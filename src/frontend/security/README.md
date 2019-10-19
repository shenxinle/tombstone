# 前端安全问题

## XSS(Cross-Site Scripting)

跨站脚本攻击。

html 中以恶意 `<script>` 注入， 标签属性、事件以 `javascript:` 注入等

恶意内容来源
* url 参数
* input 输入
* innerHTML 使用
* href/src
* onload/onerror
* ...


## CSRF（Cross-site request forgery）

跨站请求伪造：攻击者诱导受害者进入第三方网站，在第三方网站中，向被攻击网站发送跨站请求。利用受害者在被攻击网站已经获取的注册凭证，绕过后台的用户验证，达到冒充用户对被攻击的网站执行某项操作的目的。

一个典型的CSRF攻击有着如下的流程：
* 受害者登录a.com，并保留了登录凭证（Cookie）。
* 攻击者引诱受害者访问了b.com。
* b.com 向 a.com 发送了一个请求：a.com/act=xx。浏览器会…
* a.com接收到请求后，对请求进行验证，并确认是受害者的凭证，误以为是受害者自己发送的请求。
* a.com以受害者的名义执行了act=xx。
* 攻击完成，攻击者在受害者不知情的情况下，冒充受害者，让a.com执行了自己定义的操作。



## 参考文章
* [如何防止XSS攻击？](https://tech.meituan.com/2018/09/27/fe-security.html)
* [如何防止CSRF攻击？](https://juejin.im/post/5bc009996fb9a05d0a055192)