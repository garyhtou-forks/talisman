webpackJsonp([13],{0:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var a=r(1),s=n(a),u=r(14),l=r(11),i=n(l),o=r(271);(0,u.render)(s.default.createElement(i.default,{algorithm:o.singularize}),document.getElementById("singularize-mount"))},7:function(e,t){"use strict";function r(e,t){var r=[];if(!e.global){var n=e.exec(t);return n&&r.push(n),r}for(var a=void 0;a=e.exec(t);)r.push(a);return e.lastIndex=0,r}function n(e){return"string"==typeof e?e.split(""):e}function a(e){for(var t="string"==typeof e,r=n(e),a=[r[0]],s=1,u=r.length;s<u;s++)r[s]!==r[s-1]&&a.push(r[s]);return t?a.join(""):a}function s(e,t){var r={};if(e=e.split(""),t=t.split(""),e.length!==t.length)throw Error("talisman/helpers#translation: given strings don't have the same length.");for(var n=0,a=e.length;n<a;n++)r[e[n]]=t[n];return r}Object.defineProperty(t,"__esModule",{value:!0}),t.findall=r,t.seq=n,t.squeeze=a,t.translation=s},11:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=r(1),s=n(a),u=r(13),l=r(12),i=n(l),o=function(e){return e},c=function(e,t){return e===t},d=(0,u.compose)((0,u.withState)("wordOne","setWordOne",""),(0,u.withState)("wordTwo","setWordTwo","")),f=d(function(e){var t=e.algorithm,r=e.codeRenderer,n=void 0===r?o:r,a=e.comparator,u=void 0===a?c:a,l=e.wordOne,d=e.wordTwo,f=e.setWordOne,m=e.setWordTwo,v=l?t(l):null,g=d?t(d):null,h=v?n(v):"",p=g?n(g):"",$="·",w="default";return v&&g&&(console.log(v,g),u(v,g)?($="=~",w="success"):($="!~",w="error")),s.default.createElement("table",null,s.default.createElement("tbody",null,s.default.createElement("tr",null,s.default.createElement("td",null,s.default.createElement(i.default,{placeholder:"Word 1",value:l,onChange:function(e){return f(e.target.value)},status:w})),s.default.createElement("td",{style:{width:"15%",textAlign:"center"}},s.default.createElement("strong",null,$)),s.default.createElement("td",null,s.default.createElement(i.default,{placeholder:"Word 2",value:d,onChange:function(e){return m(e.target.value)},status:w}))),s.default.createElement("tr",null,s.default.createElement("td",{style:{fontSize:"1.3em",textAlign:"center"}},h," "),s.default.createElement("td",null),s.default.createElement("td",{style:{fontSize:"1.3em",textAlign:"center"}},p," "))))});t.default=f},271:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.singularize=void 0;var n=r(272);t.singularize=n.singularize},272:function(e,t,r){"use strict";function n(e,t){for(var r="",n=0,a=t.length;n<a;n++){var s=e[n].toLowerCase()===e[n]?"toLowerCase":"toUpperCase";r+=t[n][s]()}return r}function a(e){var t=e.toLowerCase();if(i.has(t))return e;var r=c[e];if(r)return n(e,r);for(var a=0,s=l.length;a<s;a++){var o=l[a],d=o[0],f=o[1],m=o[2],v=d.test(e);if(v){var g=void 0;return g=m?e.replace(d,function(e,t,r){return u[t]+r}):e.replace(d,f)}}return e}Object.defineProperty(t,"__esModule",{value:!0}),t.singularize=a;var s=r(7),u=(0,s.translation)("AEIOUaeiou","ÁÉÍÓÚáéíóú"),l=[[/^([bcdfghjklmnñpqrstvwxyz]*)([aeiou])([ns])es$/i,"$1$2$3"],[/([aeiou])([ns])es$/i,"$1$2",!0],[/shes$/i,"sh"],[/oides$/i,"oide"],[/(sis|tis|xis)$/i,"$1"],[/(é)s$/i,"$1"],[/(ces)$/i,"z"],[/([^e])s$/i,"$1"],[/([bcdfghjklmnñprstvwxyz]{2,}e)s$/i,"$1"],[/([ghñptv]e)s$/i,"$1"],[/jes$/i,"je"],[/ques$/i,"que"],[/es$/i,""]],i=new Set(["lunes","martes","miércoles","jueves","viernes","paraguas","tijeras","gafas","vacaciones","víveres","cumpleaños","virus","atlas","sms","hummus"]),o={base:"bases","carácter":"caracteres","champú":"champús",curriculum:"currículos","espécimen":"especímenes",jersey:"jerséis","memorándum":"memorandos","menú":"menús",no:"noes","país":"países","referéndum":"referendos","régimen":"regímenes","sándwich":"sándwiches",si:"sis",taxi:"taxis","ultimátum":"ultimatos"},c={};for(var d in o)c[o[d]]=d}});