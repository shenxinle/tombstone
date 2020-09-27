# Markdown

## markdown语法

### Headings
h1~h6
```
# This is an <h1> tag
## This is an <h2> tag
###### This is an <h6> tag
```
加ID
```
# Hello {#id}
```

### Emphasis
*This text will be italic*      `*This text will be italic*`

_This will also be italic_      `_This will also be italic_`

**This text will be bold**      `**This text will be bold**`

__This will also be bold__      `__This will also be bold__`

~~This text will be crossed out.~~      `~~This text will be crossed out.~~`

_You **can** combine them_      `_You **can** combine them_`

### Lists
unordered
* Item 1
* Item 2
    * Item 2a
    * Item 2b

```
* Item 1
* Item 2
    * Item 2a
    * Item 2b
```

ordered
1. Item 1
2. Item 2
3. Item 3
    * Item 3a
    * Item 3b

```
1. Item 1
2. Item 2
3. Item 3
    * Item 3a
    * Item 3b
```

### Links
[baidu](https://www.baidu.com)      `[baidu](https://www.baidu.com)`

[baidu with title](https://www.baidu.com "baidu")     `[baidu with title](https://www.baidu.com "baidu")`

### Images
fire: ![fire](./assets/fire.jpg)    `fire: ![fire](./assets/fire.jpg)`

### Blockquotes
I say:
> 我们都有美好的明天

> 无论我们的背景

```
> 我们都有美好的明天

> 无论我们的背景
```

### Tables
| First Header  | Second Header |
| ------------- | ------------- |
| Content Cell  | Content Cell  |
| Content Cell  | Content Cell  |

```
| First Header  | Second Header |
| ------------- | ------------- |
| Content Cell  | Content Cell  |
| Content Cell  | Content Cell  |
```

### Code
```javascript
var i = 0;
console.log(i);
```

```
```javascript
var i = 0;
console.log(i);
```end
```
由于code嵌套code的原因，上述代码最后面的end是为了显示正常

**inline code**

`gitbook serve`

```
`gitbook serve`
```

### HTML
直接写html标签即可，标签内的markdown语法是不被解析的。

### Horizontal Rule
水平线使用3个或以上的\*号，\- 或 \_

---

***

