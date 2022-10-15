!function(){"use strict";var e,s,t,n={829:function(e,s,t){var n=t(294),i=t(745),r=t(818),c=t(893),a=function({setSearchInput:e}){return(0,c.jsxs)("form",{className:"search",children:[(0,c.jsx)("input",{className:"search__input",type:"text",id:"search-input",onChange:function(s){e(s.target.value)}}),(0,c.jsx)("label",{className:"search__label",htmlFor:"search-input",children:(0,c.jsx)("span",{className:"_icon-search"})})]})},o=function({setShow:e,searchInput:s}){const[t,i]=(0,n.useState)([]),[r,a]=(0,n.useState)([]);function o(e,s){if((s=s.trim().toLowerCase()).length>0){let t,n=s.replace(/[\\\[\]\(\)\{\}]/g,""),i=new RegExp(n,"i");return e.filter((e=>{let s=e.name;return t=s.trim().toLowerCase(),i.test(t)}))}return e}return(0,n.useEffect)((()=>{(async()=>{const e=await fetch("http://127.0.0.1:3000/").then((e=>e.json()));i(e),a(o(e,s))})()}),[]),(0,n.useEffect)((()=>{a(o(t,s))}),[s]),(0,c.jsx)("ul",{className:"user-cards",children:r.map((s=>(0,c.jsx)("li",{onClick:()=>function(s){e(s)}(s),children:(0,c.jsxs)("div",{className:"user-card",children:[(0,c.jsx)("div",{className:"user-card__title",children:s.name}),(0,c.jsxs)("div",{className:"user-card__info",children:[(0,c.jsxs)("div",{className:"info-item",children:[(0,c.jsx)("span",{className:"_icon-phone"}),(0,c.jsx)("div",{className:"info-item__description",children:s.phone})]}),(0,c.jsxs)("div",{className:"info-item",children:[(0,c.jsx)("span",{className:"_icon-email"}),(0,c.jsx)("div",{className:"info-item__description",children:s.email})]})]})]})},s.name)))})},l=function({show:e,setShow:s}){return(0,c.jsx)("div",{className:e?"popup__wrapper show":"popup__wrapper",children:(0,c.jsxs)("div",{className:"popup",children:[(0,c.jsx)("button",{type:"submit",className:"popup__button",onClick:function(){s(!1)},children:(0,c.jsx)("span",{className:"_icon-close"})}),(0,c.jsx)("div",{className:"popup__title",children:e.name}),(0,c.jsxs)("div",{className:"popup__info",children:[(0,c.jsxs)("div",{className:"popup-item",children:[(0,c.jsx)("span",{className:"popup-item__title",children:"Телефон:"}),(0,c.jsx)("div",{className:"popup-item__description",children:e.phone})]}),(0,c.jsxs)("div",{className:"popup-item",children:[(0,c.jsx)("span",{className:"popup-item__title",children:"Почта:"}),(0,c.jsx)("div",{className:"popup-item__description",children:e.email})]}),(0,c.jsxs)("div",{className:"popup-item",children:[(0,c.jsx)("span",{className:"popup-item__title",children:"Дата приема:"}),(0,c.jsx)("div",{className:"popup-item__description",children:e.hire_date})]}),(0,c.jsxs)("div",{className:"popup-item",children:[(0,c.jsx)("span",{className:"popup-item__title",children:"Должность:"}),(0,c.jsx)("div",{className:"popup-item__description",children:e.position_name})]}),(0,c.jsxs)("div",{className:"popup-item",children:[(0,c.jsx)("span",{className:"popup-item__title",children:"Подразделение:"}),(0,c.jsx)("div",{className:"popup-item__description",children:e.department})]})]}),(0,c.jsxs)("div",{className:"popup-item _column",children:[(0,c.jsx)("span",{className:"popup-item__title",children:"Дополнительная информация:"}),(0,c.jsx)("div",{className:"popup-item__description",children:e.address})]})]})})},p=function(){const[e,s]=(0,n.useState)(!1),[t,i]=(0,n.useState)("");return(0,c.jsx)("div",{className:"wrapper",children:(0,c.jsx)("div",{className:"content",children:(0,c.jsxs)("div",{className:"container",children:[(0,c.jsx)(a,{setSearchInput:i}),(0,c.jsx)(o,{setShow:s,searchInput:t}),(0,c.jsx)(l,{show:e,setShow:s})]})})})},u=function(){return(0,c.jsx)("div",{children:(0,c.jsx)(p,{})})};i.createRoot(document.getElementById("root")).render((0,c.jsx)(n.StrictMode,{children:(0,c.jsx)(r.VK,{children:(0,c.jsx)(u,{})})}))}},i={};function r(e){var s=i[e];if(void 0!==s)return s.exports;var t=i[e]={exports:{}};return n[e](t,t.exports,r),t.exports}r.m=n,e=[],r.O=function(s,t,n,i){if(!t){var c=1/0;for(p=0;p<e.length;p++){t=e[p][0],n=e[p][1],i=e[p][2];for(var a=!0,o=0;o<t.length;o++)(!1&i||c>=i)&&Object.keys(r.O).every((function(e){return r.O[e](t[o])}))?t.splice(o--,1):(a=!1,i<c&&(c=i));if(a){e.splice(p--,1);var l=n();void 0!==l&&(s=l)}}return s}i=i||0;for(var p=e.length;p>0&&e[p-1][2]>i;p--)e[p]=e[p-1];e[p]=[t,n,i]},t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},r.t=function(e,n){if(1&n&&(e=this(e)),8&n)return e;if("object"==typeof e&&e){if(4&n&&e.__esModule)return e;if(16&n&&"function"==typeof e.then)return e}var i=Object.create(null);r.r(i);var c={};s=s||[null,t({}),t([]),t(t)];for(var a=2&n&&e;"object"==typeof a&&!~s.indexOf(a);a=t(a))Object.getOwnPropertyNames(a).forEach((function(s){c[s]=function(){return e[s]}}));return c.default=function(){return e},r.d(i,c),i},r.d=function(e,s){for(var t in s)r.o(s,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:s[t]})},r.o=function(e,s){return Object.prototype.hasOwnProperty.call(e,s)},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},function(){var e={261:0};r.O.j=function(s){return 0===e[s]};var s=function(s,t){var n,i,c=t[0],a=t[1],o=t[2],l=0;if(c.some((function(s){return 0!==e[s]}))){for(n in a)r.o(a,n)&&(r.m[n]=a[n]);if(o)var p=o(r)}for(s&&s(t);l<c.length;l++)i=c[l],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return r.O(p)},t=self.webpackChunkGlobexIT=self.webpackChunkGlobexIT||[];t.forEach(s.bind(null,0)),t.push=s.bind(null,t.push.bind(t))}();var c=r.O(void 0,[216],(function(){return r(829)}));c=r.O(c)}();