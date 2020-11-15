# rollup

[官方文档](https://www.rollupjs.org/guide/en/)


## 配置

```js
// rollup.config.js
// or rollup.config.cjs(commonjs 语法， module.exports 导出配置)
export default { // can be an array (for multiple inputs), or a promise (resolves to an object or an array)
  input: 'src/main.js',
  output: { // can be an array (for multiple outputs)
    file: 'bundle.js',
    format: 'cjs'
  }
};


// 配置文件也可以是一个函数，函数执行后返回上面任一种格式的配置，函数的入参是命令行选项（可以自定义 config 开头的命令行选项）
// 如下配置执行: rollup --config --configDebug
// rollup.config.js
import defaultConfig from './rollup.default.config.js';
import debugConfig from './rollup.debug.config.js';

export default commandLineArgs => {
  if (commandLineArgs.configDebug === true) {
    return debugConfig;
  }
  return defaultConfig;
}
```

## 命令行

[详细的命令行 flags](https://www.rollupjs.org/guide/en/#command-line-flags)

```sh
# 配置文件 --config or -c
# 提供 --config 但不提供值时默认尝试加载顺序: rollup.config.mjs -> rollup.config.cjs -> rollup.config.js
rollup --config my.config.js

# 输出格式 --format or -f
# 输出 --file or -o
# watch --watch or -w
# sourcemap --sourcemap or -m
```
