(window.webpackJsonp=window.webpackJsonp||[]).push([[533],{753:function(t,s,e){"use strict";e.r(s);var a=e(0),n=Object(a.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),e("div",{staticClass:"warning custom-block"},[e("p",{staticClass:"custom-block-title"},[t._v("NOTE")]),t._v(" "),e("p",[t._v("The following documentation comes directly from the "),e("a",{attrs:{href:"https://router.vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("router.vuejs.org"),e("OutboundLink")],1),t._v(".")])]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),e("p",[t._v("The argument can be a string path, or a location descriptor object. Examples:")]),t._v(" "),t._m(7),t._m(8),t._v(" "),t._m(9),t._m(10),t._v(" "),t._m(11),t._v(" "),e("p",[e("strong",[t._v("Note:")]),t._v(" If the destination is the same as the current route and only params are changing (e.g. going from one profile to another "),e("code",[t._v("/users/1")]),t._v(" -> "),e("code",[t._v("/users/2")]),t._v("), you will have to use "),e("router-link",{attrs:{to:"./dynamic-matching.html#reacting-to-params-changes"}},[e("code",[t._v("beforeRouteUpdate")])]),t._v(" to react to changes (e.g. fetching the user information).")],1),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),e("p",[t._v("Examples")]),t._v(" "),t._m(17),t._m(18),t._v(" "),e("p",[t._v("You may have noticed that "),e("code",[t._v("router.push")]),t._v(", "),e("code",[t._v("router.replace")]),t._v(" and "),e("code",[t._v("router.go")]),t._v(" are counterparts of "),e("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/History",target:"_blank",rel:"noopener noreferrer"}},[e("code",[t._v("window.history.pushState")]),t._v(", "),e("code",[t._v("window.history.replaceState")]),t._v(" and "),e("code",[t._v("window.history.go")]),e("OutboundLink")],1),t._v(", and they do imitate the "),e("code",[t._v("window.history")]),t._v(" APIs.")]),t._v(" "),e("p",[t._v("Therefore, if you are already familiar with "),e("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/History_API",target:"_blank",rel:"noopener noreferrer"}},[t._v("Browser History APIs"),e("OutboundLink")],1),t._v(", manipulating history will be super easy with Vue Router.")]),t._v(" "),t._m(19)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"programmatic-navigation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#programmatic-navigation","aria-hidden":"true"}},[this._v("#")]),this._v(" Programmatic Navigation")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Aside from using "),s("code",[this._v("<router-link>")]),this._v(" to create anchor tags for declarative navigation, we can do this programmatically using the router's instance methods.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"router-push-location-oncomplete-onabort"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#router-push-location-oncomplete-onabort","aria-hidden":"true"}},[this._v("#")]),this._v(" "),s("code",[this._v("router.push(location, onComplete?, onAbort?)")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("Note: Inside of a Vue instance, you have access to the router instance as "),s("code",[this._v("$router")]),this._v(". You can therefore call "),s("code",[this._v("this.$router.push")]),this._v(".")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("To navigate to a different URL, use "),s("code",[this._v("router.push")]),this._v(". This method pushes a new entry into the history stack, so when the user clicks the browser back button they will be taken to the previous URL.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("This is the method called internally when you click a "),s("code",[this._v("<router-link>")]),this._v(", so clicking "),s("code",[this._v('<router-link :to="...">')]),this._v(" is the equivalent of calling "),s("code",[this._v("router.push(...)")]),this._v(".")])},function(){var t=this.$createElement,s=this._self._c||t;return s("table",[s("thead",[s("tr",[s("th",[this._v("Declarative")]),this._v(" "),s("th",[this._v("Programmatic")])])]),this._v(" "),s("tbody",[s("tr",[s("td",[s("code",[this._v('<router-link :to="...">')])]),this._v(" "),s("td",[s("code",[this._v("router.push(...)")])])])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// literal string path")]),t._v("\nrouter"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'home'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// object")]),t._v("\nrouter"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" path"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'home'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// named route")]),t._v("\nrouter"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" name"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'user'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" params"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" userId"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'123'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// with query, resulting in /register?plan=private")]),t._v("\nrouter"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" path"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'register'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" query"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" plan"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'private'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",[e("strong",[t._v("Note")]),t._v(": "),e("code",[t._v("params")]),t._v(" are ignored if a "),e("code",[t._v("path")]),t._v(" is provided, which is not the case for "),e("code",[t._v("query")]),t._v(", as shown in the example above. Instead, you need to provide the "),e("code",[t._v("name")]),t._v(" of the route or manually specify the whole "),e("code",[t._v("path")]),t._v(" with any parameter:")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" userId "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'123'")]),t._v("\nrouter"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" name"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'user'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" params"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" userId "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// -> /user/123")]),t._v("\nrouter"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" path"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token template-string"}},[e("span",{pre:!0,attrs:{class:"token string"}},[t._v("`/user/")]),e("span",{pre:!0,attrs:{class:"token interpolation"}},[e("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("userId"),e("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("`")])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// -> /user/123")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// This will NOT work")]),t._v("\nrouter"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" path"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/user'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" params"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" userId "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// -> /user")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("The same rules apply for the "),s("code",[this._v("to")]),this._v(" property of the "),s("code",[this._v("router-link")]),this._v(" component.")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",[t._v("In 2.2.0+, optionally provide "),e("code",[t._v("onComplete")]),t._v(" and "),e("code",[t._v("onAbort")]),t._v(" callbacks to "),e("code",[t._v("router.push")]),t._v(" or "),e("code",[t._v("router.replace")]),t._v(" as the 2nd and 3rd arguments. These callbacks will be called when the navigation either successfully completed (after all async hooks are resolved), or aborted (navigated to the same route, or to a different route before current navigation has finished), respectively.\nIn 3.1.0+, you can ommit the 2nd and 3rd parameter and "),e("code",[t._v("router.push")]),t._v("/"),e("code",[t._v("router.replace")]),t._v(" will return a promise instead if Promises are supported.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"router-replace-location-oncomplete-onabort"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#router-replace-location-oncomplete-onabort","aria-hidden":"true"}},[this._v("#")]),this._v(" "),s("code",[this._v("router.replace(location, onComplete?, onAbort?)")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("It acts like "),s("code",[this._v("router.push")]),this._v(", the only difference is that it navigates without pushing a new history entry, as its name suggests - it replaces the current entry.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("table",[s("thead",[s("tr",[s("th",[this._v("Declarative")]),this._v(" "),s("th",[this._v("Programmatic")])])]),this._v(" "),s("tbody",[s("tr",[s("td",[s("code",[this._v('<router-link :to="..." replace>')])]),this._v(" "),s("td",[s("code",[this._v("router.replace(...)")])])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"router-go-n"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#router-go-n","aria-hidden":"true"}},[this._v("#")]),this._v(" "),s("code",[this._v("router.go(n)")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("This method takes a single integer as parameter that indicates by how many steps to go forwards or go backwards in the history stack, similar to "),s("code",[this._v("window.history.go(n)")]),this._v(".")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// go forward by one record, the same as history.forward()")]),t._v("\nrouter"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("go")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// go back by one record, the same as history.back()")]),t._v("\nrouter"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("go")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// go forward by 3 records")]),t._v("\nrouter"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("go")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// fails silently if there aren't that many records.")]),t._v("\nrouter"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("go")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nrouter"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("go")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"history-manipulation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#history-manipulation","aria-hidden":"true"}},[this._v("#")]),this._v(" History Manipulation")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",[t._v("It is worth mentioning that Vue Router navigation methods ("),e("code",[t._v("push")]),t._v(", "),e("code",[t._v("replace")]),t._v(", "),e("code",[t._v("go")]),t._v(") work consistently in all router modes ("),e("code",[t._v("history")]),t._v(", "),e("code",[t._v("hash")]),t._v(" and "),e("code",[t._v("abstract")]),t._v(").")])}],!1,null,null,null);s.default=n.exports}}]);