# 编辑器

## VS Code

### 快捷键

```
打开/关闭命令行面板： ^ `
```

### vscode 配置同步

[官方文档](https://code.visualstudio.com/docs/editor/settings-sync)


## 前端项目相关配置文件

### EditorConfig

```yaml
# .editorconfig
# http://editorconfig.org

# 当打开一个文件时，EditorConfig插件会在打开文件的目录和其每一级父目录查找.editorconfig文件，直到有一个配置文件root=true。
# 所以项目根目录的.editorconfig内加这一行
root = true

# 对所有文件生效
[*]
charset = utf-8
indent_style = space
indent_size = 2
end_of_line = lf
insert_final_newline = true
trim_trailing_whitespace = true

# 对后缀名为 md 的文件生效
[*.md]
trim_trailing_whitespace = false
```

### Prettier

```js
// .prettierrc.js
module.exports = {
  printWidth: 80,
  semi: true,
  singleQuote: true,
  trailingComma: 'none',
  bracketSpacing: true,
  jsxBracketSameLine: false,
  arrowParens: 'avoid',
  requirePragma: false,
  proseWrap: 'preserve'
};
```

### git

```yaml
# .gitignore
node_modules/
```

### npm

```yaml
# .npmrc
package-lock=false
```

