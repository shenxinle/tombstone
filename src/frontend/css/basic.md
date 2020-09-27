# CSS基础

## CSS属性值表示规则

规则含义
* 并列单词必须以指定顺序给出（Several juxtaposed words mean that all of them must occur, in the given order）
* 以 | 分割的选项有且给出一个（A bar (|) separates two or more alternatives: exactly one of them must occur）
* 以 || 分割的选项需给出一个或多个，顺序不限（A double bar (||) separates two or more options: one or more of them must occur, in any order）
* 以 && 分割的组成部分，都要给出，顺序不限（A double ampersand (&&) separates two or more components, all of which must occur, in any order）
* [] 用来分组（Brackets ([ ]) are for grouping）

优先级： 并列单词 > && > || > |

装饰符
* `*` 号匹配 0 或多次
* `+` 号匹配 1 或多次
* `?` 号匹配 0 或 1 次
* `{m,n}` 匹配至少 m 次，至多 n 次
* `#` 号匹配 1 或多次，多次间用 `,` 号分割
* `!` 分组给出至少一个值，     如 `[ bold? smaller? ]!` 匹配 `bold`，`smaller`，`bold smaller`

## 部分CSS属性

### box-shadow

语法： `none | [inset? && [ <offset-x> <offset-y> <blur-radius>? <spread-radius>? ] && <color>? ]#`

说明：
* inset: 阴影默认在边框外，有 inset 时在边框内
* offset-x: 正右负左
* offset-y: 正下负上
* blur-radius: 不能为负，default: 0
* spread-radius: 正扩展负收缩，default: 0
* color: 不填的话由浏览器决定


### linear-gradient

语法： `linear-gradient( [ <angle> | to <side-or-corner> ,]? <color-stop> [, <color-stop>]+ )`

说明：
* `<angle>`: 0deg, ..., 360deg,  或其他[`<angle>`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/angle)单位
* `<side-or-corner>`: `[left | right] || [top | bottom]`
* `<color-stop>`: `<color> [ <percentage> | <length> ]?`


### transition

语法：
```css
<single-transition>#
where 
<single-transition> = [ none | <single-transition-property> ] || <single-transition-duration> || <single-transition-timing-function> || <single-transition-delay>

where 
<single-transition-property> = all | <custom-ident>
<single-transition-timing-function> = <single-timing-function>

where 
<single-timing-function> = linear | <cubic-bezier-timing-function> | <step-timing-function> | <frames-timing-function>

where 
<cubic-bezier-timing-function> = ease | ease-in | ease-out | ease-in-out | cubic-bezier(<number>, <number>, <number>, <number>)
<step-timing-function> = step-start | step-end | steps(<integer>[, [ start | end ] ]?)
<frames-timing-function> = frames(<integer>)
```

说明：
* transition-property: all (初始值)， none (没有动画)， 其他css属性
* transition-duration: 0s (初始值)
* transition-timing-function: ease (初始值), ease-in, ease-out, ease-in-out, linear, ...
* transition-delay: 0s (初始值)
