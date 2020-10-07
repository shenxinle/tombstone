# CSS 布局

## 正常文档流（Normal Flow）

在正常流中，元素盒子（boxes）会基于文档的写作模式（writing mode）一个接一个地排列。这就意味着，如果你的写作模式是水平方向的（句子是从左到右或从右到左书写），正常流会垂直地一个接一个排列页面的块级元素。


## 浮动（Float）

`float: none(默认) | left | right;`

### 清除浮动

当你不想要某个元素受到其之前的浮动元素影响时，为其添加clear属性即可。使用left值可以清除左浮动效果，right值为右浮动，both则会清除左右浮动。

`clear: both | left | right;`

```css
.clearfix::after {
  content: '';
  display: block;
  clear: both;
}
```

### 块级格式化上下文（Block Formatting Context）

清除浮动的另一个方法是在容器内创建BFC。一个BFC元素完全包裹住了它内部的所有元素，包括内部的浮动元素，保证浮动元素不会超出其底部。创建BFC的方式有很多种，其中最常用的一种清除浮动的方式是为元素设置除visible（默认）之外的overflow 属性值。

```css
.container {
  overflow: auto;
}
```

为了使清除浮动的意图更加直观，并且避免 overflow 创建 BFC 的负面影响，你可以使用flow-root作为display属性的值。display: flow-root做的唯一的一件事就是去创建一个BFC，因此可以避免其他创建BFC方法带来的问题。

```css
.container {
  /* 兼容性不太好 */
  display: flow-root;
}
```


[布局示例](https://codepen.io/shenxinle/pen/wvvWJbr)
```html
  <div class="container">
    <div class="left"></div>
    <div class="right"></div>
    <div class="content"></div>
  </div>
  <style>
    .container {
      width: 400px;
      border: 1px solid rgb(111,41,97);
    }
    .left, .right {
      width: 50px;
      height: 50px;
      float: left;
      background-color: rgba(111,41,97,.3);
    }
    .right {
      float: right;
    }
    .content {
      text-align: center;
    }
    .container::after {
      content: "";
      display: table;
      clear: both;
    }
  </style>
```


## 定位（Positioning）

当处于正常文档流时，元素的position属性为static。在块级维度上元素会一个接一个排列下去，当你滚动页面时元素也会随着滚动。

当你改变元素的position属性时，通常情况下你也会设置一些偏移量来使元素相对于参照点进行一定的移动。不同的position值会产生不同的参照点。

### 相对定位（relative postioning）

* 如果一个元素具有属性position: relative，那么它偏移的参照位是其原先在正常文档流中的位置。你可以使用top、left、bottom和right属性来相对其正常流位置进行移动。
* 页面上的其他元素并不会因该元素的位置变化而受到影响。该元素**在正常流中的位置会被保留**，因此你需要自己去处理一些元素内容覆盖的情况。

### 绝对定位（absolute postioning）

给一个元素设置position: absolute属性可以将其完全从正常流中移除。其原本占据的空间也会被移除。该元素的定位会相对于文档，除非其某个祖先元素也是定位元素（position值不为static），则相对于最近的设为定位的祖先元素。

### 固定定位（fixed positioning）

大多数情况下，position: fixed的元素会相对于视口定位，并且会从正常文档流中被移除，不会保留它所占据的空间。当页面滚动时，固定的元素会留在相对于视口的位置，而其他正常流中的内容则和通常一样滚动。

为了使一个固定定位的元素不相对于视口进行定位，你需要为容器元素设置transform、perspective、filter三个属性之一（不为默认值none）。这样固定的元素就会相对于该块级元素偏移，而非视口。

### STICKY 定位

设置position: sticky会让元素在页面滚动时如同在正常流中，但当其滚动到相对于视口的某个特定位置时就会固定在屏幕上，如同fixed一般。这个属性值是一个较新的CSS属性，在浏览器兼容性上会差一些，但在不兼容的浏览器中会被忽略并会退到正常的滚动情况。


## 弹性布局（Flex Layout）

使用display: flex来将元素变为弹性布局。
```css
.container {
  display: flex;
}
```

### 弹性盒子的轴（axes）

flex-direction的值被定义为弹性盒子的主轴（main axis）。默认的flex-direction值为row，row代表了文本的行文方向。由于我们工作的环境是英文（中文也是如此），一种自左向右的语言，行的开始位置就是在左边，因此我们的弹性项也是从左边开始的。

交叉轴（cross axis）则是和主轴垂直的一条轴。如果你的flex-direction是row并且弹性项是按照行内方向排列的，那么交叉轴就是块级元素的排列方向。如果flex-direction是column那么弹性项就会以块级元素排列的方向排布，然后交叉轴就会变为row。

### 方向和次序

弹性盒子模型让我们可以通过为flex-direction属性设置row-reverse或column-reverse值来改变主轴上弹性项的方向。

也可以通过order属性来改变某一个弹性项的顺序。


### Flex 属性

各个属性值的详细说明参考[A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

**容器属性**

* display: flex | inline-flex;
* flex-direction: row(默认) | row-reverse | column | column-reverse
* flex-wrap: nowrap(默认) | wrap | wrap-reverse
* flex-flow: flex-direction 和 flex-wrap 的合写
* justify-content: flex-start(默认) | flex-end | center | space-between | space-around
  * 主轴对齐方式
* align-items: flex-start | flex-end | center | baseline | stretch(默认)
  * 交叉轴对齐方式
* align-content: flex-start | flex-end | center | space-between | space-around | stretch
  * wrap 时多个主轴在交叉轴方向的对齐方式（类似主轴方向的 justify-content）

**item 属性**

* order: `<num>`
* flex-grow: `<num>` 默认 0
* flex-shrink: `<num>` 默认 1
* flex-basic: auto | `<length>`
* flex: flex-grow, flex-shrink, flex-basic 的简写
  * 单值语法: 值必须为以下其中之一:
    * 一个无单位数(number): 它会被当作 flex-grow 的值。
    * 一个有效的宽度(width)值: 它会被当作 flex-basis 的值。
    * 关键字none，auto或initial.
      * initail （0 1 auto）
      * auto (1 1 auto)
      * none (0 0 auto)
  * 双值语法: 第一个值必须为一个无单位数，并且它会被当作 flex-grow 的值。第二个值必须为以下之一：
    * 一个无单位数：它会被当作 flex-shrink 的值。
    * 一个有效的宽度值: 它会被当作 flex-basis 的值。
  * 三值语法:
    * 第一个值必须为一个无单位数，并且它会被当作 flex-grow 的值。
    * 第二个值必须为一个无单位数，并且它会被当作 flex-shrink 的值。
    * 第三个值必须为一个有效的宽度值， 并且它会被当作 flex-basis 的值。
  * 注：**当使用一个或两个无单位数时, flex-basis会从auto变为0.**
* algin-self: 同容器属性 align-items

[简单 flex 示例](https://codepen.io/shenxinle/pen/OJJXpKj)


## 网格布局（grid layout）

TODO


## 参考文章
* [一篇全面的CSS布局学习指南 [译]](https://juejin.im/post/5b3b56a1e51d4519646204bb)
* [A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)