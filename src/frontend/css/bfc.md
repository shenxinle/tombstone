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

* 根元素（`<html>`）
* 浮动元素（元素的 float 不是 none）
* 绝对定位元素（元素的 position 为 absolute 或 fixed）
* 行内块元素（元素的 display 为 inline-block）
* 表格单元格（元素的 display 为 table-cell，HTML表格单元格默认为该值）
* 表格标题（元素的 display 为 table-caption，HTML表格标题默认为该值）
* 匿名表格单元格元素（元素的 display 为 table、table-row、 table-row-group、table-header-group、* table-footer-group（分别是HTML table、row、tbody、thead、tfoot 的默认属性）或 inline-table）
* overflow 值不为 visible 的块元素
* display 值为 flow-root 的元素
* contain 值为 layout、content 或 paint 的元素
* 弹性元素（display 为 flex 或 inline-flex 元素的直接子元素）
* 网格元素（display 为 grid 或 inline-grid 元素的直接子元素）
* 多列容器（元素的 column-count 或 column-width 不为 auto，包括 column-count 为 1）
* column-span 为 all 的元素始终会创建一个新的BFC，即使该元素没有包裹在一个多列容器中（标准变更，Chrome bug）。


Flex and Grid items also create something like a BFC, except they are described as a Flex Formatting Context and Grid Formatting Context respectively.

上面的都是有特殊用途的 CSS 属性能创建 BFC。 `display: flow-root`（兼容性不好） 是专门用来创建 BFC 的。


## 参考文章
* [Understanding CSS Layout And The Block Formatting Context](https://www.smashingmagazine.com/2017/12/understanding-css-layout-block-formatting-context/)