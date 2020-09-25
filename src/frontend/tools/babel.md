# Babel

## 使用

常用的模块包括
* @babel/core， @babel/cli, @babel/preset-env，@babel/preset-react，@babel/preset-typescript，@babel/plugin-transform-runtime
* @babel/polyfill， @babel/runtime

### @babel/core

提供核心的功能， 包括 parse, transform, generation

```js
const babel = require("@babel/core");
babel.transformSync(code, options) // => { code, map, ast }
```

### @babel/cli

```shell
// compile single file (--out-file or -o)
babel script.js --out-file script-compiled.js

// watch (--watch or -w)
babel script.js --watch --out-file script-compiled.js

// with source map
babel script.js --out-file script-compiled.js --source-maps

// with inline source map
babel script.js --out-file script-compiled.js --source-maps inline

// compile directory
babel src --out-dir lib

// output a single concatenated file
babel src --out-file script-compiled.js

// ignore files
babel src --out-dir lib --ignore "src/**/*.spec.js","src/**/*.test.js"

// plugins
babel script.js --out-file script-compiled.js --plugins=@babel/proposal-class-properties,@babel/transform-modules-amd

// presets
babel script.js --out-file script-compiled.js --presets=@babel/preset-env,@babel/flow

// ignore .babelrc.json
babel --no-babelrc script.js --out-file script-compiled.js --presets=@babel/preset-env,@babel/preset-react

// config file
babel --config-file /path/to/my/babel.config.json --out-dir dist ./src
```

### @babel/polyfill

```js
import "@babel/polyfill";
// 或者
import "core-js";
import "regenerator-runtime/runtime";
```

### @babel/plugin-transform-runtime

和 @babel/runtime 配合使用，用来去除编译后各个文件中重复的 helper 函数，统一引用 @babel/runtime 提供的 helper。

### 配置文件

babel.config.js 或者 babel.config.json 或者 .babelrc.js 或者 .babelrc.config 或者 package.json 里的 babel 字段

```js
module.exports = function (api) {
  // api.cache(true);

  return {
    presets: [
      ["@babel/preset-env", {
        // targets  // https://babeljs.io/docs/en/babel-preset-env#targets
        modules: false, // 保留 es modules, 其他值： "amd" | "umd" | "systemjs" | "commonjs" | "cjs" | "auto" | false, defaults to "auto"
        // useBuiltIns： "usage", // "usage" | "entry" | false, defaults to false
      }],
      "@babel/preset-react",
      "@babel/preset-typescript"
    ],
    plugins: []
  };
}
```

**transforms 顺序**

* Plugins run before Presets.
* Plugin ordering is first to last.
* Preset ordering is reversed (last to first).


### 使用案例

1. 安装依赖

```shell
npm install --save-dev @babel/core @babel/cli @babel/preset-env
npm install --save @babel/polyfill
```

2. 添加配置文件
```json
// babel.config.json
{
  "presets": [
    [
      "@babel/env",
      {
        "targets": {
          "edge": "17",
          "firefox": "60",
          "chrome": "67",
          "safari": "11.1",
        },
        "useBuiltIns": "usage",
        "corejs": "3.6.4",
      }
    ]
  ]
}
```

3. 执行编译

```shell
./node_modules/.bin/babel src --out-dir lib
```


## @babel/standalone

[文档链接](https://babeljs.io/docs/en/babel-standalone)

@babel/standalone 可以在浏览器运行时提供编译功能。适合写 demo 的时候使用。

比如写个 react demo，可以使用如下的配置。

```html
  <script crossorigin="anonymous" src="https://unpkg.com/@babel/standalone@7.11.6/babel.js"></script>

  <script crossorigin="anonymous" src="https://cdn.bootcdn.net/ajax/libs/react/16.9.0/umd/react.development.js"></script>
  <script crossorigin="anonymous" src="https://cdn.bootcdn.net/ajax/libs/react-dom/16.9.0/umd/react-dom.development.js"></script>

  <script src ="./index.js" type="text/babel" data-type="module" data-presets="react"></script>
```


## 编译器

[the-super-tiny-compiler](https://github.com/jamiebuilds/the-super-tiny-compiler)

[https://astexplorer.net/](https://astexplorer.net/)

[plugin-handbook](https://github.com/jamiebuilds/babel-handbook/blob/master/translations/en/plugin-handbook.md)

**编译一般包括三个阶段： Parsing, Transformation, and Code Generation**

1. *Parsing*： 将源码转换为抽象表示
2. *Transformation*：对上述抽象表示做任何编译器想要做的操作
3. *Code Generation*：将抽象表示转换为新的代码

**Parsing 包括两方面： Lexical Analysis and Syntactic Analysis**
1. *Lexical Analysis*： 使用称为 tokenizer (or lexer) 的东西将源码分割成称为 tokens 的东西（Tokens are an array of tiny little objects that describe an isolated piece of the syntax. They could be numbers, labels, punctuation, operators, whatever.）
2. *Syntactic Analysis*： 将 tokens 格式化为描述每一部分语法和相互间关系的表示，这种表示称为抽象语法树（Abstract Syntax Tree）