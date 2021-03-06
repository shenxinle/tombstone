# 包含块


### 确定包含块

大多数情况下，包含块就是这个元素最近的祖先块元素的内容区，但也不是总是这样。

确定一个元素的包含块的过程完全依赖于这个元素的 position 属性：

* 如果 position 属性为 static 、 relative 或 sticky，包含块可能由它的最近的祖先块元素（比如说inline-block, block 或 list-item元素）或建立格式化上下文(比如说 a table container, flex container, grid container, 或者是 the block container 自身)的元素 的**内容区的边缘**组成。

* 如果 position 属性为 absolute ，包含块就是由它的最近的 position 的值不是 static （也就是值为fixed, absolute, relative 或 sticky）的祖先元素的**内边距区的边缘**组成。

* 如果 position 属性是 fixed，在连续媒体的情况下(continuous media)包含块是 viewport ,在分页媒体(paged media)下的情况下包含块是分页区域(page area)。

* 如果 position 属性是 absolute 或 fixed，包含块也可能是由满足以下条件的最近父级元素的**内边距区的边缘**组成的：
  * A transform or perspective value other than none
  * A will-change value of transform or perspective
  * A filter  value other than none or a will-change value of filter(only works on Firefox).
  * A contain value of paint (例如: contain: paint;)

**根元素(`<html>`)所在的包含块是一个被称为初始包含块的矩形。**

### 影响

元素的尺寸及位置，常常会受它的包含块所影响。对于一些属性，例如 width, height, padding, margin，绝对定位元素的偏移值 （比如 position 被设置为 absolute 或 fixed），当我们对其赋予百分比值时，这些值的计算值，就是通过元素的包含块计算得来。

* 要计算 height top 及 bottom 中的百分值，是通过包含块的 height 的值。如果包含块的 height 值会根据它的内容变化，而且包含块的 position 属性的值被赋予 relative 或 static ，那么，这些值的计算值为 auto。

* 要计算 width, left, right, **padding, margin** 这些属性由包含块的 width 属性的值来计算它的百分值。



