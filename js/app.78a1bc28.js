(function(t){function n(n){for(var o,i,s=n[0],c=n[1],a=n[2],l=0,d=[];l<s.length;l++)i=s[l],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);f&&f(n);while(d.length)d.shift()();return u.push.apply(u,a||[]),e()}function e(){for(var t,n=0;n<u.length;n++){for(var e=u[n],o=!0,s=1;s<e.length;s++){var c=e[s];0!==r[c]&&(o=!1)}o&&(u.splice(n--,1),t=i(i.s=e[0]))}return t}var o={},r={app:0},u=[];function i(n){if(o[n])return o[n].exports;var e=o[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=t,i.c=o,i.d=function(t,n,e){i.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,n){if(1&n&&(t=i(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)i.d(e,o,function(n){return t[n]}.bind(null,o));return e},i.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(n,"a",n),n},i.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},i.p="/calculator/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=n,s=s.slice();for(var a=0;a<s.length;a++)n(s[a]);var f=c;u.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("cd49")},"5c0b":function(t,n,e){"use strict";e("e332")},cd49:function(t,n,e){"use strict";e.r(n);e("cadf"),e("551c"),e("f751"),e("097d");var o=e("2b0e"),r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("div",{ref:"stack",staticClass:"stack"},t._l(t.displayedStack,(function(n,o){return e("p",{key:o},[t._v("\n      "+t._s(n)+"\n    ")])})),0),e("div",{ref:"buffer",staticClass:"buffer",style:{fontSize:5-(t.displayedBuffer.length>7?(t.displayedBuffer.length-5)/3:0)+"rem"}},[t._v("\n    "+t._s(t.displayedBuffer)+"\n  ")]),e("table",{staticClass:"calc"},[e("tbody",[e("tr",[e("td",[t.bufferEmpty?e("button",{staticClass:"btn-light",on:{touchend:function(n){return t.clearAll()}}},[t._v("\n            AC\n          ")]):e("button",{staticClass:"btn-light",on:{touchend:function(n){return t.clear()}}},[t._v("\n            C\n          ")])]),e("td",[e("button",{staticClass:"btn-light",on:{touchend:function(n){return t.toggleNegative()}}},[t._v("\n            +/-\n          ")])]),e("td",[e("button",{staticClass:"btn-light",class:t.second&&"active",on:{touchend:function(n){t.second=!t.second}}},[t._v("\n            2"),e("sup",[t._v("nd")])])]),e("td",[e("button",{staticClass:"btn-orange",on:{touchend:function(n){return t.divide()}}},[t._v("\n            ÷\n          ")])])]),e("tr",[e("td",[t.second?e("button",{staticClass:"btn-orange",on:{touchend:function(n){return t.square()}}},[t._v("\n            x"),e("sup",[t._v("2")])]):e("button",{staticClass:"btn-num",on:{touchend:function(n){return t.type(7)}}},[t._v("\n            7\n          ")])]),e("td",[t.second?e("button",{staticClass:"btn-orange",on:{touchend:function(n){return t.rootn()}}},[e("sup",[t._v("y")]),t._v("√x\n          ")]):e("button",{staticClass:"btn-num",on:{touchend:function(n){return t.type(8)}}},[t._v("\n            8\n          ")])]),e("td",[e("button",{staticClass:"btn-num",on:{touchend:function(n){return t.type(9)}}},[t._v("\n            9\n          ")])]),e("td",[e("button",{staticClass:"btn-orange",on:{touchend:function(n){return t.multiply()}}},[t._v("\n            ×\n          ")])])]),e("tr",[e("td",[t.second?e("button",{staticClass:"btn-orange",on:{touchend:function(n){return t.sqrt()}}},[t._v("\n            √\n          ")]):e("button",{staticClass:"btn-num",on:{touchend:function(n){return t.type(4)}}},[t._v("\n            4\n          ")])]),e("td",[t.second?e("button",{staticClass:"btn-orange",on:{touchend:function(n){return t.power()}}},[t._v("\n            x"),e("sup",[t._v("y")])]):e("button",{staticClass:"btn-num",on:{touchend:function(n){return t.type(5)}}},[t._v("\n            5\n          ")])]),e("td",[e("button",{staticClass:"btn-num",on:{touchend:function(n){return t.type(6)}}},[t._v("\n            6\n          ")])]),e("td",[e("button",{staticClass:"btn-orange",on:{touchend:function(n){return t.subtract()}}},[t._v("\n            −\n          ")])])]),e("tr",[e("td",[e("button",{staticClass:"btn-num",on:{touchend:function(n){return t.type(1)}}},[t._v("\n            1\n          ")])]),e("td",[e("button",{staticClass:"btn-num",on:{touchend:function(n){return t.type(2)}}},[t._v("\n            2\n          ")])]),e("td",[e("button",{staticClass:"btn-num",on:{touchend:function(n){return t.type(3)}}},[t._v("\n            3\n          ")])]),e("td",[e("button",{staticClass:"btn-orange",on:{touchend:function(n){return t.add()}}},[t._v("\n            +\n          ")])])]),e("tr",[e("td",{attrs:{colspan:"2"}},[e("button",{staticClass:"btn-num",on:{touchend:function(n){return t.type(0)}}},[t._v("\n            0\n          ")])]),e("td",[e("button",{staticClass:"btn-num",on:{touchend:function(n){return t.type(".")}}},[t._v("\n            .\n          ")])]),e("td",[e("button",{staticClass:"btn-orange",on:{touchend:function(n){return t.push()}}},[t._v("\n            ⌤\n          ")])])])])])])},u=[],i=(e("6762"),e("2fdb"),e("a481"),e("2909")),s=(e("6b54"),e("28a5"),e("4f96")),c=function(t){var n=t.toString().split("."),e=Object(s["a"])(n),o=e[0],r=e.slice(1);return[o.replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,")].concat(Object(i["a"])(r.map((function(t){return t.slice(0,6)})))).join(".")},a=o["a"].extend({data:function(){return{buffer:"0",nextTypeWillPush:!1,nextTypeWillClear:!1,stack:[],second:!1}},computed:{displayedBuffer:function(){return c(this.buffer)},displayedStack:function(){return this.stack.map(c)},bufferEmpty:function(){return"0"===this.buffer}},watch:{stack:function(){var t=this;this.$nextTick((function(){var n=t.$refs.stack;n.scrollTop=n.scrollHeight}))},buffer:function(){var t=this;this.second=!1,this.$nextTick((function(){var n=t.$refs.buffer;n.scrollLeft=n.scrollWidth}))}},methods:{clear:function(){this.buffer="0",this.second=!1},clearAll:function(){this.clear(),this.stack=[]},type:function(t){this.nextTypeWillPush&&(this.nextTypeWillPush=!1,this.stack.push(+this.buffer),this.clear()),this.nextTypeWillClear&&(this.nextTypeWillClear=!1,this.clear()),"number"===typeof t?this.buffer+=t:"."!==t||this.buffer.includes(".")||(this.buffer+="."),this.buffer=this.buffer.replace(/^0([^.])/,"$1")},push:function(){this.stack.push(parseFloat(this.buffer)),this.nextTypeWillClear=!0},toggleNegative:function(){this.buffer=(-this.buffer).toString()},add:function(){this.operation((function(t,n){return t+n}))},subtract:function(){this.operation((function(t,n){return t-n}))},multiply:function(){this.operation((function(t,n){return t*n}))},divide:function(){this.operation((function(t,n){return t/n}))},sqrt:function(){this.unaryOperation((function(t){return Math.sqrt(t)}))},square:function(){this.unaryOperation((function(t){return t*t}))},power:function(){this.operation((function(t,n){return Math.pow(t,n)}))},rootn:function(){this.operation((function(t,n){return Math.pow(t,1/n)}))},unaryOperation:function(t){var n=+this.buffer;this.buffer=t(n).toString(),this.nextTypeWillPush=!0},operation:function(t){var n=+this.buffer,e=this.stack.pop()||0;this.buffer=t(e,n).toString(),this.nextTypeWillPush=!0}}}),f=a,l=(e("5c0b"),e("2877")),d=Object(l["a"])(f,r,u,!1,null,null,null),p=d.exports,h=e("9483");Object(h["a"])("".concat("/calculator/","service-worker.js"),{registrationOptions:{scope:"calculator"},ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh."),navigator.serviceWorker.addEventListener("controllerchange",(function(){confirm("New version available!  Refresh?")&&window.location.reload()}))},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}}),o["a"].config.productionTip=!1,new o["a"]({render:function(t){return t(p)}}).$mount("#app")},e332:function(t,n,e){}});
//# sourceMappingURL=app.78a1bc28.js.map