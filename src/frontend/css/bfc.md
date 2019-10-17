# Block Formatting Context

## A BFC Is A Mini Layout In Your Layout

Once an element creates a BFC, everything is contained inside it.

### Features

* The BFC contains floats
  * 用来清除浮动
* The BFC prevents margins collapsing
  * 用来阻止父元素和子元素 margin-top / margin-bottom 重合
* A BFC stops content wrapping floats
  * 用来阻止 floated 元素后面的元素内的文本环绕前面 floated 元素，用来左右布局

[示例](https://codepen.io/rachelandrew/pen/WXyvpd)

注：关于第二点，只能阻止父子元素 margin 重叠，兄弟元素不行。**浮动元素、inline-block 元素、绝对定位元素的 margin 不会和垂直方向上相邻兄弟元素的 margin 折叠**，这是 BFC 的一个子集。

### 创建 BFC 的情形

* float 值不为 none
* overflow 值不为 visible
* position 为 absolute 或 fixed
* display 为 inline-block / table-cell / table-caption
* column-span: all

Flex and Grid items also create something like a BFC, except they are described as a Flex Formatting Context and Grid Formatting Context respectively.

上面的都是有特殊用途的 CSS 属性能创建 BFC。 `display: flow-root`（兼容性不好） 是专门用来创建 BFC 的。


## 参考文章
* [Understanding CSS Layout And The Block Formatting Context](https://www.smashingmagazine.com/2017/12/understanding-css-layout-block-formatting-context/)