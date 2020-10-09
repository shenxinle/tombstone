(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{140:function(t,e,a){t.exports=a.p+"assets/img/dom-class-hierarchy.0359ef30.svg"},141:function(t,e,a){t.exports=a.p+"assets/img/dom-links.af2075d9.svg"},142:function(t,e,a){t.exports=a.p+"assets/img/dom-links-elements.0c4f945d.svg"},159:function(t,e,a){"use strict";a.r(e);var n=a(0),s=Object(n.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"dom"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#dom","aria-hidden":"true"}},[t._v("#")]),t._v(" DOM")]),t._v(" "),n("p",[t._v("Document Object Model（文档对象模型）是用来呈现以及与任意 HTML 或 XML文档交互的API。")]),t._v(" "),n("p",[t._v("在DOM编程时，通常使用的最多的就是 Document 和 window 对象。简单的说， window 对象表示浏览器中的内容，而 document 对象是文档本身的根节点。Element 继承了通用的 Node 接口, 将这两个接口结合后就提供了许多方法和属性可以供单个元素使用。在处理这些元素所对应的不同类型的数据时，这些元素可能会有专用的接口，如 table 对象实现了 HTML Table Element Interface。")]),t._v(" "),n("p",[t._v("下面列出一些最常用的 api。")]),t._v(" "),n("h2",{attrs:{id:"常用-dom-api"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#常用-dom-api","aria-hidden":"true"}},[t._v("#")]),t._v(" 常用 dom api")]),t._v(" "),n("p",[t._v("Node 继承了 EventTarget； Document、Element、Attr、CharacterData (which Text, Comment, and CDATASection inherit) 等继承了 Node。")]),t._v(" "),n("p",[n("img",{attrs:{src:a(140),alt:"hierarchy"}})]),t._v(" "),n("h3",{attrs:{id:"eventtarget"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#eventtarget","aria-hidden":"true"}},[t._v("#")]),t._v(" EventTarget")]),t._v(" "),n("p",[t._v("EventTarget 是一个由可以接收事件的对象实现的接口，并且可以为它们创建侦听器。")]),t._v(" "),n("h4",{attrs:{id:"方法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#方法","aria-hidden":"true"}},[t._v("#")]),t._v(" 方法")]),t._v(" "),n("ul",[n("li",[t._v("addEventListener(type, listener, useCapture/options)")]),t._v(" "),n("li",[t._v("removeEventListener(type, listener, useCapture/options)")]),t._v(" "),n("li",[t._v("dispatchEvent(event)")])]),t._v(" "),n("h3",{attrs:{id:"node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#node","aria-hidden":"true"}},[t._v("#")]),t._v(" Node")]),t._v(" "),n("h4",{attrs:{id:"属性"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#属性","aria-hidden":"true"}},[t._v("#")]),t._v(" 属性")]),t._v(" "),n("ul",[n("li",[t._v("nodeName\n"),n("ul",[n("li",[t._v("只读， HTMLElement的名字跟它所关联的标签对应, Text节点对应的是 '#text', 还有Document节点对应的是 '#document'")])])]),t._v(" "),n("li",[t._v("nodeType\n"),n("ul",[n("li",[t._v("只读， 1 元素， 2 属性， 3 文本， 8 注释， 9 文档， 11 fragment")])])]),t._v(" "),n("li",[t._v("nodeValue\n"),n("ul",[n("li",[t._v("返回或设置当前节点的值， 元素节点为 null, 文本节点就是文本值")])])]),t._v(" "),n("li",[t._v("parentNode   "),n("em",[t._v("只读， 返回父节点或null")])]),t._v(" "),n("li",[t._v("parentElement   "),n("em",[t._v("只读，返回一个当前节点的父节点 Element 。 如果当前节点没有父节点或者说父节点不是一个元素(Element), 这个属性返回null")])]),t._v(" "),n("li",[t._v("previousSibling   "),n("em",[t._v("只读，返回一个当前节点同级的前一个结点或null")])]),t._v(" "),n("li",[t._v("nextSibling   "),n("em",[t._v("只读，返回与该节点同级的下一个节点 Node，如果没有返回null")])]),t._v(" "),n("li",[t._v("childNodes   "),n("em",[t._v("只读，返回一个包含了该节点所有子节点的实时的NodeList")])]),t._v(" "),n("li",[t._v("firstChild   "),n("em",[t._v("只读，返回该节点的第一个子节点Node或null")])]),t._v(" "),n("li",[t._v("lastChild    "),n("em",[t._v("只读，返回该节点的最后一个子节点Node或null")])]),t._v(" "),n("li",[t._v("textContent    "),n("em",[t._v("返回或设置一个元素内所有子结点及其后代的文本内容")])])]),t._v(" "),n("h4",{attrs:{id:"方法-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#方法-2","aria-hidden":"true"}},[t._v("#")]),t._v(" 方法")]),t._v(" "),n("ul",[n("li",[t._v("appendChild(childNode)\n"),n("ul",[n("li",[t._v("将指定的 childNode 参数作为最后一个子节点添加到当前节点。")]),t._v(" "),n("li",[t._v("如果参数引用了 DOM 树上的现有节点，则节点将从当前位置分离，并附加到新位置。")])])]),t._v(" "),n("li",[t._v("cloneNode(deep)\n"),n("ul",[n("li",[t._v("克隆一个 Node，并且可以选择是否克隆这个节点下的所有内容")])])]),t._v(" "),n("li",[t._v("contains(node)\n"),n("ul",[n("li",[t._v("包含，包括是本身时，返回 true")])])]),t._v(" "),n("li",[t._v("getRootNode()  "),n("em",[t._v("正常文档中为 document")])]),t._v(" "),n("li",[t._v("hasChildNodes()\n"),n("ul",[n("li",[t._v("等价于 node.firstChild !== null 或 node.childNodes.length > 0")])])]),t._v(" "),n("li",[t._v("parentNode.insertBefore(newNode, referenceNode)")]),t._v(" "),n("li",[t._v("parentNode.removeChild(childNode)")]),t._v(" "),n("li",[t._v("parentNode.replaceChild(newChild, oldChild)")])]),t._v(" "),n("p",[n("img",{attrs:{src:a(141),alt:"node"}})]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 移除所有子节点")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("removeAllChildren")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("node")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("node"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("firstChild"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    node"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("removeChild")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("node"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("firstChild"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// or")]),t._v("\n  node"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("textContent "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 遍历节点树")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("eachNodeTree")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("node"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" callback")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("node"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("callback")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("node"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Array")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("forEach")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("call")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("node"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("childNodes"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("childNode")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("eachNodeTree")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("childNode"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" callback"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h4",{attrs:{id:"nodelist"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nodelist","aria-hidden":"true"}},[t._v("#")]),t._v(" NodeList")]),t._v(" "),n("p",[t._v("NodeList 对象是一个节点的集合，是由 Node.childNodes 和 document.querySelectorAll 返回的.")]),t._v(" "),n("p",[t._v("在一些情况下，NodeList 对象是一个实时集合，也就是说，如果文档中的节点树发生变化，则已经存在的实时 NodeList 对象也会随之变化。例如，Node.childNodes 是实时的")]),t._v(" "),n("ul",[n("li",[t._v("属性和方法\n"),n("ul",[n("li",[t._v("length")]),t._v(" "),n("li",[t._v("item(index)")])])]),t._v(" "),n("li",[t._v("遍历\n"),n("ul",[n("li",[t._v("for 循环")]),t._v(" "),n("li",[t._v("Array.prototype.forEach.call(nodeList, node => {...})")])])])]),t._v(" "),n("h3",{attrs:{id:"element"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#element","aria-hidden":"true"}},[t._v("#")]),t._v(" Element")]),t._v(" "),n("h4",{attrs:{id:"属性-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#属性-2","aria-hidden":"true"}},[t._v("#")]),t._v(" 属性")]),t._v(" "),n("ul",[n("li",[t._v("tagName  "),n("em",[t._v("只读")])]),t._v(" "),n("li",[t._v("attributes  "),n("em",[t._v("只读")])]),t._v(" "),n("li",[t._v("dataset "),n("em",[t._v("以 data- 开头的特性")])]),t._v(" "),n("li",[t._v("id")]),t._v(" "),n("li",[t._v("className")]),t._v(" "),n("li",[t._v("classList  "),n("em",[t._v("只读")]),t._v(" "),n("ul",[n("li",[t._v("value")]),t._v(" "),n("li",[t._v("item(index)")]),t._v(" "),n("li",[t._v("add(str1, ...)")]),t._v(" "),n("li",[t._v("remove(str1, ..)")]),t._v(" "),n("li",[t._v("toggle(str)")]),t._v(" "),n("li",[t._v("contains(str)")]),t._v(" "),n("li",[t._v("replace(oldClass, newClass)")])])]),t._v(" "),n("li",[t._v("clientWidth / clientHeight  "),n("em",[t._v("只读，截止内边距，四舍五入到整数，内联及没有 CSS 样式的元素为 0")])]),t._v(" "),n("li",[t._v("scrollWidth / scrollHeight  "),n("em",[t._v("只读")])]),t._v(" "),n("li",[t._v("scrollLeft / scrollTop")]),t._v(" "),n("li",[t._v("innerHTML")]),t._v(" "),n("li",[t._v("outHTML")])]),t._v(" "),n("h4",{attrs:{id:"方法-3"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#方法-3","aria-hidden":"true"}},[t._v("#")]),t._v(" 方法")]),t._v(" "),n("ul",[n("li",[t._v("getElementsByClassName(name)  "),n("em",[t._v("返回一个即时更新的（live） HTMLCollection")])]),t._v(" "),n("li",[t._v("getElementsByTagName(tagName)  "),n("em",[t._v("返回一个动态的包含所有指定标签名的元素的HTML集合HTMLCollection")])]),t._v(" "),n("li",[t._v("querySelector(selector)")]),t._v(" "),n("li",[t._v("querySelectorAll(selector)  "),n("strong",[t._v("返回一个non-live的NodeList")])]),t._v(" "),n("li",[t._v("matches(selector)  "),n("em",[t._v("返回 true/false")])]),t._v(" "),n("li",[t._v("closest(selector) "),n("em",[t._v("查找与 CSS 选择器匹配的最近的祖先")])]),t._v(" "),n("li",[t._v("getAttribute(attrName)")]),t._v(" "),n("li",[t._v("hasAttribute(attrName)")]),t._v(" "),n("li",[t._v("setAttribute(attrName, value)")]),t._v(" "),n("li",[t._v("removeAttribute(attrName)")]),t._v(" "),n("li",[t._v("toggleAttribute(attrName, force)")]),t._v(" "),n("li",[t._v("getAttributeNames()")]),t._v(" "),n("li",[t._v("getBoundingClientRect()\n"),n("ul",[n("li",[t._v("{top, bottom, left, right, width, height, x, y}")]),t._v(" "),n("li",[n("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIDOMClientRect",target:"_blank",rel:"noopener noreferrer"}},[t._v("解释"),n("OutboundLink")],1)])])]),t._v(" "),n("li",[t._v("scrollIntoView()\n"),n("ul",[n("li",[t._v("有兼容性， "),n("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Element/scrollIntoView",target:"_blank",rel:"noopener noreferrer"}},[t._v("解释"),n("OutboundLink")],1)])])])]),t._v(" "),n("p",[n("img",{attrs:{src:a(142),alt:"element"}})]),t._v(" "),n("h3",{attrs:{id:"document"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#document","aria-hidden":"true"}},[t._v("#")]),t._v(" Document")]),t._v(" "),n("ul",[n("li",[t._v("getElementById(id)")]),t._v(" "),n("li",[t._v("getElementsByClassName(name)")]),t._v(" "),n("li",[t._v("getElementsByTagName(tagName)")]),t._v(" "),n("li",[t._v("querySelector(selector)")]),t._v(" "),n("li",[t._v("querySelectorAll(selector)")]),t._v(" "),n("li",[t._v("createTextNode(data)")]),t._v(" "),n("li",[t._v("createElement(tagName[, options])")]),t._v(" "),n("li",[t._v("createDocumentFragment()")]),t._v(" "),n("li",[t._v("createComment(data)")]),t._v(" "),n("li",[t._v("...")])]),t._v(" "),n("h2",{attrs:{id:"参考文档"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#参考文档","aria-hidden":"true"}},[t._v("#")]),t._v(" 参考文档")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Document_Object_Model/Introduction",target:"_blank",rel:"noopener noreferrer"}},[t._v("DOM概述"),n("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=s.exports}}]);