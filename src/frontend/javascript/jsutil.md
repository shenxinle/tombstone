# 常用 JS 工具方法

## 深拷贝

```js
// 只处理了基本数据类型、数组和普通对象
function deepCopy(source) {
  let map = new WeakMap();
  function _copy(source) {
    if (typeof source !== 'object') return source;
    if (source === null) return source;
    if (map.has(source)) return map.get(source); // 循环引用

    let isArray = Array.isArray(source);
    let target = isArray ? [] : {};
    map.set(source, target);

    for (let i in source) {
      if (Object.prototype.hasOwnProperty.call(source, i)) {
        target[i] = _copy(source[i]);
      }
    }
    return target;
  }

  return _copy(source);
}
```

## EventEmitter

```js
class EventEmitter {
  constructor() {
    this.listeners = {};
  }

  on(name, fn) {
    const fns = this.listeners[name] || (this.listeners[name] = []);
    fns.push(fn);
  }

  once(name, fn) {
    const wrapFn = (...args) => {
      fn.apply(null, args);
      this.off(name, wrapFn);
    };
    this.on(name, wrapFn);
  }

  off(name, fn) {
    const fns = this.listeners[name] || (this.listeners[name] = []);

    if (fn) {
      this.listeners[name] = fns.filter((thisFn) => thisFn !== fn);
    } else {
      this.listeners[name] = null;
    }
  }

  emit(name, ...args) {
    const fns = this.listeners[name] || (this.listeners[name] = []);
    fns.forEach((fn) => {
      fn.apply(null, args);
    });
  }
}
```

## jsonp

```js
function getFullUrl(url, params) {
  Object.keys(params).forEach((key) => {
    let str = encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
    if (url.indexOf('?') === -1) {
      url += '?' + str;
    } else {
      url += '&' + str;
    }
  });
  return url;
}

function jsonp(url, params) {
  let callbackName = 'callback' + String(Math.random()).slice(-8);
  let fullUrl = getFullUrl(url, Object.assign({}, params, {
    callback: callbackName
  }));
  let script = document.createElement('script');
  script.src = fullUrl;
  document.body.appendChild(script);

  let toResolve, toReject;
  const cleanup = () => {
    document.body.removeChild(script);
    window[callbackName] = void 0;
  }

  window[callbackName] = (data) => {
    toResolve(data);
    cleanup();
  };
  script.onerror = (err) => {
    toReject(err);
    cleanup();
  };

  return new Promise((resolve, reject) => {
    toResolve = resolve;
    toReject = reject;
  });
}

// 测试
// jsonp('https://api.asilu.com/weather/',{ city: '上海' }).then((data) => {console.log(data)}, (err) => {console.error(err)})
```

## request

```js
// 待完善 progress, upload.progress, abort...
function request(options) {
  let finalOptions = {
    method: 'GET',
    url: '',
    params: null,
    withCredentials: true,
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers
    }
  }
  let { method, url, params, withCredentials, headers } = finalOptions;
  let fullUrl, data;
  if (/GET/i.test(method)) {
    fullUrl = getFullUrl(url, params);
    data = null;
  } else {
    fullUrl = url;
    data = params ? JSON.stringify(params) : null;
  }

  let xhr = new XMLHttpRequest();
  if (withCredentials) {
    xhr.withCredentials = true;
  }
  xhr.open(method, fullUrl, true);
  for (let key in headers) {
    xhr.setRequestHeader(key, headers[key]);
  }
  xhr.send(data || '');

  return new Promise((resolve, reject) => {
    xhr.onload = () => {
      if (xhr.status === 200) {
        resolve(JSON.parse(xhr.response));
      } else {
        reject({
          status: xhr.status,
          statusText: xhr.statusText
        });
      }
    };

    xhr.onerror = (err) => {
      reject(err);
    };
  });
}
```

## 防抖和节流

```js
function debounce(fn, delay) {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  }
}

// 简单的
function throttle(fn, delay) {
  let isThrotting = false;
  return function (...args) {
    if (isThrotting) return;
    isThrotting = true;
    setTimeout(() => {
      fn.apply(this, args);
      isThrotting = false;
    }, delay);
  }
}
```


