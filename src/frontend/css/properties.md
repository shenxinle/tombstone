# 常用 CSS 属性

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


## 字体样式

* color
* font-family
* font-size
* font-style
  * normal, italic
* font-weight
  * light, normal, bold, 100-900
* text-transform
  * uppercase, lowercase, capitalize
* text-decoration
  * underline, overline, line-through
  * 可以接收多个值，还可以设置样式和颜色
* text-shadow
  * `none | [ <length>{2,3} && <color>? ]`
  * 四个值对应： 水平偏移（可为负）， 垂直偏移（可为负）， 模糊半径，颜色
  * 可以设置多重阴影，用逗号分隔即可

## 文本布局

* text-align
  * left, right, center, justify
* line-height
  * 无单位值（表示 font-size 的倍数）， 有单位值
* letter-spacing
  * 对中文也有作用
* word-spacing
* text-indent
* text-overflow
  * clip, ellipsis
* white-space
  * normal, nowrap, pre, pre-wrap, pre-line, break-spaces
  * [空格、换行符、自动换行处理方式](https://developer.mozilla.org/zh-CN/docs/Web/CSS/white-space)
* word-break
  * normal, break-word, break-all, keep-all

```css
/* 单行溢出时显示省略号 */
white-space: nowrap;
text-overflow: ellipsis;
overflow: hidden;

/* 多行文本溢出时显示省略号 */
text-overflow: ellipsis;
overflow: hidden;
display: -webkit-box;
-webkit-box-orient: vertical;
-webkit-line-clamp: 2;
```


## 链接

注意顺序： a, :link(未点击), :visited, :focus, :hover, :active(点击中时)

```css
/* 覆盖默认样式 */
a {
  outline: none; /* 覆盖 focus 时的 outline */
  text-decoration: none;
}

/* 链接后加图标 */
a[href*="http"] {
  background: url('https://mdn.mozillademos.org/files/12982/external-link-52.png') no-repeat right center/16px;
  padding-right: 20px;
}
```

## 图片

img、video、 iframe、 embed 等是[可替换元素](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Replaced_element)

### 控制对象位置
* object-fit
  * 类似于 background-size
  * none, cover(裁剪以适应), contain（留白以适应）, fill(拉伸以正好填充)
* object-position
  * 类似于 background-position
  * left top, right bottom, center center, 10% 50%, 20px 30px, ...


## 列表

`<ul>`, `<ol>`, `<li>`

* list-style-type
  * none, disc(默认), circle, square, decimal, lower-alpha, upper-alpha, trad-chinese-informal(中文一、二、三...), `<string>`, ...
  * 应用于 display 为 list-item 的元素（如 li），因为可继承，所以可以直接加载 ul, ol 上。
* list-style-position
  * outside(默认), inside
* list-style-image
  * url(xxx.png)

合写： `list-style: square inside;`

#### 管理有序列表计数

```html
<!-- 4, 5 -->
<ol start="4">
  <li>hehe</li>
  <li>haha</li>
</ol>

<!-- 4, 3 -->
<ol start="4" reversed>
  <li>hehe</li>
  <li>haha</li>
</ol>

<!-- 2, 4 -->
<ol>
  <li value="2">hehe</li>
  <li value="4">haha</li>
</ol>
```


## background

* background-color
  * 从边框开始覆盖
* background-image
  * url(./assets/star.png) 或者 渐变。
  * 设置多个背景图时用逗号分隔，相应的 repeat/size/position 一样， 写在前面的背景图展示在更上层。
  * 和 background-color 同时设置时，显示在 background-color 上面。
  * 从内边距开始覆盖。
* background-repeat
  * 控制背景图的平铺方式
  * repeat(默认), no-repeat, repeat-x, repeat-y
* background-size
  * 调整背景图大小
  * 80px 60px, cover, contain
* background-position
  * 0 0, top center, 20px 10%
* background-attachment
  * scroll, fixed, local
  * [示例](https://mdn.github.io/learning-area/css/styling-boxes/backgrounds/background-attachment.html)

#### 组合写法

* 多张背景图用逗号分隔，有背景色的话再在最后加上背景色。
* background-color 只能在所有背景图之后指定。
* background-size 值只能包含在背景位置之后，用'/'字符分隔，例如：center/80%

```css
/* 示例 */
background: linear-gradient(105deg, rgba(255,255,255,.2) 39%, rgba(51,56,57,1) 96%) center center/160px 80px no-repeat,
url(https://mdn.github.io/css-examples/learn/backgrounds-borders/big-star.png) center no-repeat, rebeccapurple;
```

## overflow

属性：overflow, overflow-x, overflow-y

取值：visible(默认), hidden, scroll, auto

overflow 可以赋两个值，分别给 overflow-x, overflow-y。


## box-shadow

语法： `none | [inset? && [ <offset-x> <offset-y> <blur-radius>? <spread-radius>? ] && <color>? ]#`

说明：
* 逗号分隔多个值
* inset: 阴影默认在边框外，有 inset 时在边框内
* offset-x: 正右负左
* offset-y: 正下负上
* blur-radius: 不能为负，default: 0
* spread-radius: 正扩展负收缩，default: 0
* color: 不填的话由浏览器决定

```css
box-shadow: inset 5px 5px 5px 2px rgba(255, 0, 0, 1),
    5px 5px 5px 2px rgba(0, 255, 0, 1);
```


## linear-gradient

语法： `linear-gradient( [ <angle> | to <side-or-corner> ,]? <color-stop> [, <color-stop>]+ )`

说明：
* `<angle>`: 0deg, ..., 360deg,  或其他[`<angle>`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/angle)单位
* `<side-or-corner>`: `[left | right] || [top | bottom]`
* `<color-stop>`: `<color> [ <percentage> | <length> ]?`

* to top(0 deg), to right(90 deg), to bottom(180deg), to left(270deg/-90deg)
* 默认 to bottom
* 多个渐变用逗号分隔

```css
/* 中转点默认在中间 50% */
background: linear-gradient(red 10%, blue 90%);

/* 中转点在 30% 处 */
background: linear-gradient(red 10%, 30%, blue 90%);

/* 右下 */
background: linear-gradient(to right bottom, red, rgba(0,0,0,0));

/* 多个值 */
background: linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70.71%),
            linear-gradient(127deg, rgba(0,255,0,.8), rgba(0,255,0,0) 70.71%),
            linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%);
```


## transform

### transform-origin

* 可以是一个、两个或三个值， 初始值 `50% 50% 0`
* x-offset: left, center, right, 长度 或 百分比
* y-offset: top, center, bottom, 长度 或 百分比
* z-offset: 长度

### transform 语法

`transform: none | <transform-function>+`

transform-function:

* translate(tx), translate(tx, ty)
* translate3d(tx, ty, tz)
* translateX(t), translateY(t), translateZ(t)
* scale(sx), scale(sx, sy)
* scale3d(sx, sy, sz)
* scaleX(s), scaleY(s), scaleZ(s)
* rotate(a)
  * 参数 a 表示 `<angle>`, 代表旋转的角度。正角表示顺时针旋转，负角表示逆时针旋转。
* rotate3d(x, y, z, a)
* rotateX(a), rotateY(a), rotateZ(a)
* ...


## transition

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

```css
/* property name | duration */
transition: margin-right 4s;

/* property name | duration | delay */
transition: margin-right 4s 1s;

/* property name | duration | timing function */
transition: margin-right 4s ease-in-out;

/* property name | duration | timing function | delay */
transition: margin-right 4s ease-in-out 1s;


/* 例 */
.sec1 {
  height: 100px;
  background: #999;
  transition: margin-right 2s, height 1s;
}
.sec1:hover {
  margin-right: 200px;
  height: 300px;
}
```


## animation

```css
<single-animation>#
where 
<single-animation> = <time> || <timing-function> || <time> || <single-animation-iteration-count> || <single-animation-direction> || <single-animation-fill-mode> || <single-animation-play-state> || [ none | <keyframes-name> ]
```

* animation-duration: 0s(初始值)
* animation-timing-function: ease (初始值), ease-in, ease-out, ease-in-out, linear, ...
* animation-delay: 0s(初始值)
* animation-iteration-count: 1(初始值), infinite
* animation-direction: normal(初始值), alternate, reverse, alternate-reverse
* animation-fill-mode: none(初始值), forwards, backwards, both
* animation-play-state: running(初始值), paused
* animation-name: @keyframes 定义的名称


