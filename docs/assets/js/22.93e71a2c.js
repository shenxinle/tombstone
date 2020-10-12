(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{180:function(i,t,l){"use strict";l.r(t);var e=l(0),n=Object(e.a)({},(function(){var i=this,t=i.$createElement,l=i._self._c||t;return l("ContentSlotsDistributor",{attrs:{"slot-key":i.$parent.slotKey}},[l("h1",{attrs:{id:"层叠上下文"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#层叠上下文","aria-hidden":"true"}},[i._v("#")]),i._v(" 层叠上下文")]),i._v(" "),l("p",[i._v("文档中的层叠上下文由满足以下任意一个条件的元素形成：")]),i._v(" "),l("ul",[l("li",[i._v("文档根元素（"),l("code",[i._v("<html>")]),i._v("）；")]),i._v(" "),l("li",[i._v("position 值为 absolute（绝对定位）或  relative（相对定位）且 z-index 值不为 auto 的元素；")]),i._v(" "),l("li",[i._v("position 值为 fixed（固定定位）或 sticky（粘滞定位）的元素（沾滞定位适配所有移动设备上的浏览器，但老的桌面浏览器不支持）；")]),i._v(" "),l("li",[i._v("flex (flexbox) 容器的子元素，且 z-index 值不为 auto；")]),i._v(" "),l("li",[i._v("grid (grid) 容器的子元素，且 z-index 值不为 auto；")]),i._v(" "),l("li",[i._v("opacity 属性值小于 1 的元素（参见 the specification for opacity）；")]),i._v(" "),l("li",[i._v("mix-blend-mode 属性值不为 normal 的元素；")]),i._v(" "),l("li",[i._v("以下任意属性值不为 none 的元素：\n"),l("ul",[l("li",[i._v("transform")]),i._v(" "),l("li",[i._v("filter")]),i._v(" "),l("li",[i._v("perspective")]),i._v(" "),l("li",[i._v("clip-path")]),i._v(" "),l("li",[i._v("mask / mask-image / mask-border")])])]),i._v(" "),l("li",[i._v("isolation 属性值为 isolate 的元素；")]),i._v(" "),l("li",[i._v("-webkit-overflow-scrolling 属性值为 touch 的元素；")]),i._v(" "),l("li",[i._v("will-change 值设定了任一属性而该属性在 non-initial 值时会创建层叠上下文的元素（参考这篇文章）；")]),i._v(" "),l("li",[i._v("contain 属性值为 layout、paint 或包含它们其中之一的合成值（比如 contain: strict、contain: content）的元素。")])]),i._v(" "),l("p",[l("strong",[i._v("在层叠上下文中，子元素同样也按照上面解释的规则进行层叠。 重要的是，其子级层叠上下文的 z-index 值只在父级中才有意义。子级层叠上下文被自动视为父级层叠上下文的一个独立单元。")])])])}),[],!1,null,null,null);t.default=n.exports}}]);