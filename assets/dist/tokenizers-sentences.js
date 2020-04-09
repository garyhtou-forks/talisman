webpackJsonp([10],{0:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var r=n(1),u=a(r),l=n(14),o=n(20),i=a(o),d=n(367),c=a(d);(0,l.render)(u.default.createElement(i.default,{textarea:!0,flow:!1,tokenizer:c.default}),document.getElementById("naive-mount"))},19:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e){var t=e.value,n=void 0===t?"":t,a=e.placeholder,r=void 0===a?null:a,u=e.status,o=void 0===u?"default":u,i=e.onChange,d=void 0===i?Function.prototype:i,c=e.faded,s=void 0!==c&&c,f="bar-textarea";return"error"===o?f+=" error":"success"===o&&(f+=" success"),l.default.createElement("div",null,l.default.createElement("textarea",{placeholder:r,onChange:d,value:n,className:o+(s?" faded":"")}),l.default.createElement("span",{className:f}))}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;var u=n(1),l=a(u)},20:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),u=a(r),l=n(13),o=n(12),i=a(o),d=n(19),c=a(d),s=(0,l.compose)((0,l.withState)("input","setInput",""),(0,l.withState)("training","setTraining",function(e){return e.training||""})),f=s(function(e){var t=e.tokenizer,n=e.input,a=e.setInput,r=e.training,l=e.setTraining,o=e.textarea,d=void 0!==o&&o,s=e.trained,f=void 0!==s&&s,p=e.flow,v=void 0===p||p,E=d?c.default:i.default,m=void 0;return m=f?n?t(r)(n):[]:n?t(n):[],u.default.createElement("div",{style:{width:"55%"}},u.default.createElement("div",null,f&&u.default.createElement(c.default,{placeholder:"Enter training text here...",value:r,onChange:function(e){return l(e.target.value)},faded:!0}),u.default.createElement(E,{placeholder:"Enter raw text here to test the tokenizer...",value:n,onChange:function(e){return a(e.target.value)}}),u.default.createElement("p",{style:{width:"100%"}},m.map(function(e){return v?u.default.createElement("span",{className:"token",style:{float:"left"}},e):u.default.createElement("div",{className:"token"},e)}))),u.default.createElement("div",{style:{clear:"both"}}))});t.default=f},351:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.SINGLE_QUOTES="’‘`‛'",t.DOUBLE_QUOTES='«»„‟“”"',t.HYPHENS="\\-‐‒–—―−‑⁃",t.COMMAS=",،、"},367:function(e,t,n){"use strict";function a(e){e=e||{};var t=e.exceptions||[],n=new RegExp("("+t.map(function(e){return e+"\\."}).join("|")+")");return function(e){for(var t=e.replace(l,"$1$2").split(""),a=[],r="",u=void 0,s=0,f=t.length;s<f;s++)u=t[s],s===f-1||!n.test(u)&&!d.test(u)&&(c.test(u)||((r+u).match(o)||[]).length%2===0&&((r+u).match(i)||[]).length%2===0)?(a.push(r+(u&&r?" ":"")+u),r=""):r+=(r?" ":"")+u;return a}}Object.defineProperty(t,"__esModule",{value:!1}),t.createTokenizer=a;var r=n(351),u=["Dr","etc","Jr","M","Mgr","Mr","Mrs","Ms","Mme","Mlle","Prof","Sr","St","p","pp"],l=new RegExp(["([.?!…]+)","(["+r.DOUBLE_QUOTES+"*_]?[*_]?)","[\\s\\r\\n]+","(?=["+r.DOUBLE_QUOTES+r.SINGLE_QUOTES+"]?[_*\\[]*[A-Z0-9\\u00C0-\\u00DC])"].join(""),"g"),o=new RegExp("["+r.DOUBLE_QUOTES+"]","g"),i=/[(){}\[\]]/g,d=/^[A-Z0-9]\s?[.]\s*$/,c=/^[A-Za-z0-9]\s*\)/,s=a({exceptions:u});t.default=s,e.exports=t.default,t.default.createTokenizer=t.createTokenizer}});