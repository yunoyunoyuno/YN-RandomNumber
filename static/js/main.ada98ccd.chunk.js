(this.webpackJsonprndmath=this.webpackJsonprndmath||[]).push([[0],{21:function(e,t,n){e.exports=n(42)},26:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},34:function(e,t,n){e.exports=n.p+"static/media/math.19ad2786.png"},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(18),i=n.n(r),l=(n(26),n(9)),o=(n(27),n(8)),m=(n(28),function(e){return c.a.createElement("header",{className:"main-header"},c.a.createElement("div",{className:"main-header__container"},c.a.createElement(o.b,{to:"/"},c.a.createElement("img",{alt:"Logo",src:n(34),className:"main-header__brand"}))),c.a.createElement("nav",{className:"main-nav"},c.a.createElement("ul",{className:"main-nav__items"},c.a.createElement(o.c,{to:"/setting"},"Setting"))))}),u=n(6),s=(n(35),function(e){return c.a.createElement("h1",{className:"title"},e.children)}),f=n(20),d=(n(36),function(e){var t=e.onClick,n=e.style,a="btn";return"picked"===e.btnType&&(a="btn btn-picked"),c.a.createElement("button",{className:a,style:Object(f.a)({},n),onClick:t},e.children)}),E=(n(37),function(e){return c.a.createElement("div",{className:"card"},c.a.createElement("h1",{className:"class__header"},e.children))}),b=(n(38),function(e){var t=e.title,n=e.description,a=e.onClick;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"blackdrop",onClick:a}),c.a.createElement("div",{className:"modal"},c.a.createElement("h1",{className:"modal__title"},t),c.a.createElement("h2",{className:"modal__description"},n),c.a.createElement(d,{onClick:a},"OK")))}),h=(n(39),function(e){var t=e.fakeDB,n=Object(a.useState)("\u0e40\u0e25\u0e02\u0e17\u0e35\u0e48\u0e2d\u0e2d\u0e01"),r=Object(u.a)(n,2),i=r[0],l=r[1],o=Object(a.useState)(!1),m=Object(u.a)(o,2),f=m[0],h=m[1],p=Object(a.useState)(!1),v=Object(u.a)(p,2),g=v[0],k=v[1],j=Object(a.useCallback)((function(e,t){return k(!0),Math.ceil(Math.random()*(t-e+1))}),[]),O=function(){h((function(e){return!e})),k(!1)},N="";g&&(N="picked");var x="\u0e22\u0e31\u0e07\u0e44\u0e21\u0e48\u0e44\u0e14\u0e49\u0e2a\u0e38\u0e48\u0e21",C="\u0e23\u0e2d\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e19\u0e46\u0e1e\u0e35\u0e48\u0e46\u0e19\u0e49\u0e2d\u0e07\u0e46\u0e2b\u0e19\u0e39\u0e46 \u0e40\u0e25\u0e37\u0e2d\u0e01\u0e2d\u0e22\u0e39\u0e48\u0e19\u0e30";return"string"!==typeof i&&(C="".concat(t[+i-1].text),x="\u0e40\u0e25\u0e02 ".concat(i," !")),c.a.createElement(c.a.Fragment,null,f&&c.a.createElement(b,{title:x,description:C,onClick:O}),c.a.createElement("div",{className:"gameZone"},c.a.createElement(s,null,"\u0e21\u0e32\u0e40\u0e2a\u0e35\u0e48\u0e22\u0e07\u0e17\u0e32\u0e22\u0e01\u0e31\u0e19\u0e40\u0e16\u0e2d\u0e30\u0e19\u0e48\u0e32"),c.a.createElement("div",{className:"gameZone__btn-Container"},c.a.createElement(d,{onClick:function(){l(j(1,t.length))},style:{margin:"0.5rem 1.2rem"}},"\u0e2a\u0e38\u0e48\u0e21\u0e40\u0e25\u0e22!"),c.a.createElement(d,{style:{margin:"0.5rem 1.2rem"},onClick:O,btnType:N},"\u0e1c\u0e25\u0e25\u0e31\u0e1e\u0e18\u0e4c")),c.a.createElement("div",{className:"gameZone__result"},c.a.createElement(E,null,i))))}),p=function(e){var t=e.fakeDB;return c.a.createElement(c.a.Fragment,null,c.a.createElement(m,null),c.a.createElement(h,{fakeDB:t}))},v=n(1),g=(n(40),function(e){var t=e.type,n=e.value,a=e.onChange,r=e.id,i=e.onClick,l="password"===t?"password":"text";return c.a.createElement("div",{className:"inputCtn"},c.a.createElement("input",{type:l,value:n,onChange:function(e){return a(r,e)},placeholder:"\u0e01\u0e23\u0e38\u0e13\u0e32\u0e23\u0e30\u0e1a\u0e38",className:"input"}),c.a.createElement("span",{className:"input-span",onClick:function(){return i(r)}},"\u0e2b\u0e32\u0e22\u0e44\u0e1b"))}),k=(n(41),function(e){var t=e.fakeDB,n=e.setDummyData,r=t.map((function(e){return{id:e.id,text:e.text}})),i=Object(a.useState)(r),o=Object(u.a)(i,2),m=o[0],s=o[1],f=Object(a.useState)(!1),E=Object(u.a)(f,2),h=E[0],p=E[1],k=Object(a.useState)(!1),j=Object(u.a)(k,2),O=j[0],N=j[1],x=function(e,t){t.preventDefault();var n=t.target.value,a=Object(l.a)(m),c=a.findIndex((function(t){return t.id===e}));a[c].text=n,a[c].isValid=!0,s(Object(l.a)(a))},C=function(e){var t=m.filter((function(t){return t.id!==e}));if(t.length+1===1)return p(!0);s(t)},y=m.map((function(e){return c.a.createElement(g,{key:e.id,id:e.id,value:e.text,isValid:e.isValid,onChange:x,onClick:C})}));Object(a.useEffect)((function(){n(m)}));return c.a.createElement(c.a.Fragment,null,O&&c.a.createElement(v.a,{to:"/"}),h&&c.a.createElement(b,{onClick:function(){p(!1)},title:"\u0e40\u0e15\u0e37\u0e2d\u0e19\u0e01\u0e48\u0e2d\u0e19\u0e19\u0e30",description:"\u0e15\u0e49\u0e2d\u0e07\u0e40\u0e2b\u0e25\u0e37\u0e2d\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e19\u0e49\u0e2d\u0e22 1 \u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25"}),c.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}},c.a.createElement("h1",{className:"form-title"},"\u0e04\u0e31\u0e2a\u0e15\u0e49\u0e2d\u0e21 \u0e04\u0e48\u0e32\u0e41\u0e23\u0e19\u0e14\u0e49\u0e2d\u0e21"),c.a.createElement(d,{onClick:function(){return s((function(e){return e.concat({id:e.length+1,text:"\u0e44\u0e2e \u0e02\u0e2d\u0e1a\u0e04\u0e38\u0e13\u0e17\u0e35\u0e48\u0e2a\u0e23\u0e49\u0e32\u0e07\u0e09\u0e31\u0e19"})}))}},"+")),c.a.createElement("form",{className:"our-form",onSubmit:function(e){return function(e){e.preventDefault();var t=[];m.forEach((function(e){return t.push({id:e.id,text:e.text})})),n(t),N(!0)}(e)}},y,c.a.createElement("button",{className:"btn-form"},"Submit")),");")}),j=function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement(m,null),c.a.createElement(k,{fakeDB:e.fakeDB,setDummyData:e.setDummyData}))},O=[{id:"r1",text:"\u0e42\u0e0a\u0e04\u0e23\u0e49\u0e32\u0e22"},{id:"r2",text:"\u0e42\u0e0a\u0e04\u0e14\u0e35"},{id:"r3",text:"\u0e23\u0e48\u0e33\u0e23\u0e27\u0e22"},{id:"r4",text:"\u0e15\u0e31\u0e07\u0e04\u0e4c\u0e2b\u0e32\u0e22"},{id:"r5",text:"\u0e1e\u0e1a\u0e42\u0e2d\u0e01\u0e32\u0e2a"},{id:"r6",text:"\u0e40\u0e2a\u0e35\u0e22\u0e42\u0e2d\u0e01\u0e32\u0e2a"}],N=function(){var e=Object(a.useRef)(Object(l.a)(O)),t=function(t){e.current=Object(l.a)(t)};return c.a.createElement(o.a,null,c.a.createElement(v.b,{path:"/setting",render:function(n){return c.a.createElement(j,Object.assign({fakeDB:e.current},n,{setDummyData:t}))}}),c.a.createElement(v.b,{path:"/",exact:!0,render:function(t){return c.a.createElement(p,Object.assign({fakeDB:e.current},t))}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.ada98ccd.chunk.js.map