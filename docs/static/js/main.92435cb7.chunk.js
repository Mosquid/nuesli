(this.webpackJsonpnuesli=this.webpackJsonpnuesli||[]).push([[0],{160:function(e,t,n){},300:function(e,t,n){},302:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),i=n(16),a=n.n(i),s=(n(160),n(24)),o=n.p+"static/media/sad-fail.0e1436ec.mp3",j=n.p+"static/media/happy-fail.5df41bbc.mp3",l=n(6),u=[{title:"Sad failure",file:o},{title:"Happy failure",file:j}],d=function(e){var t=e.onSelect,n=Object(c.useState)(void 0),r=Object(s.a)(n,2),i=r[0],a=r[1];return Object(c.useEffect)((function(){void 0!==i&&t(i)}),[i,t]),Object(l.jsx)("div",{className:"sounds",children:u.map((function(e,t){return Object(l.jsxs)("div",{onClick:function(){return a(t)},style:{cursor:"pointer",display:"flex",padding:10,backgroundColor:i===t?"#fff5f5":null},children:[e.title,Object(l.jsx)("audio",{controls:!0,src:e.file})]},t)}))})},b=n(309),O=n(311),h=n(312),f=n(310),x=n(307),p=n(9),v=n(313),m=n(112),y=function(){var e=Object(c.useRef)(),t=Object(p.g)().token,n=Object(c.useMemo)((function(){var e,n=function(e){if(!e)return null;try{var t=atob(e).split("^"),n=Object(s.a)(t,2),c=n[0],r=n[1];return{text:decodeURIComponent(c),sound:r}}catch(i){return console.error(i),null}}(t);if(n){var c=new SpeechSynthesisUtterance(n.text);return c.lang="ru-RU",[c,(e=n.sound,u[e]?u[e]:null).file]}return[]}),[t]),r=Object(s.a)(n,2),i=r[0],a=r[1],o=Object(c.useMemo)((function(){return window.location.href}),[t]);return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(m.Header,{children:Object(l.jsx)("a",{href:"/",children:"Back home"})}),Object(l.jsx)(m.Content,{children:Object(l.jsx)(b.a,{justify:"center",children:Object(l.jsx)(O.a,{span:6,children:Object(l.jsxs)(h.b,{style:{paddingTop:100,width:"100%"},direction:"vertical",size:"large",children:[Object(l.jsx)(f.a,{type:"success",showIcon:!0,message:"Copy link: "}),Object(l.jsx)(x.a,{readOnly:!0,value:o}),Object(l.jsxs)("div",{onClick:function(){speechSynthesis.speak(i),i.onend=function(){e.current.play()}},children:[Object(l.jsx)("h2",{children:"Play"}),Object(l.jsx)(v.a,{style:{fontSize:100}})]}),Object(l.jsx)("audio",{ref:e,src:a})]})})})})]})},g=n(306),C=n(308),S=n(305),k=n(152),w=x.a.TextArea,P=g.a.Title,T=C.a.Header,z=C.a.Content,F=function(){var e=Object(c.useState)(""),t=Object(s.a)(e,2),n=t[0],r=t[1],i=Object(c.useState)(void 0),a=Object(s.a)(i,2),o=a[0],j=a[1],u=Object(c.useState)(""),f=Object(s.a)(u,2),x=f[0],v=f[1],m=Object(p.f)();return Object(c.useEffect)((function(){x&&m("/preview/".concat(x),{param:x})}),[x,m]),Object(l.jsxs)("div",{children:[Object(l.jsxs)(T,{children:[Object(l.jsx)(h.b,{size:"large"}),Object(l.jsx)(P,{style:{color:"white",marginBottom:0,paddingTop:5},children:"Create Your News Piece"})]}),Object(l.jsx)(S.a,{children:"Paste the text"}),Object(l.jsx)(z,{children:Object(l.jsx)(b.a,{justify:"center",children:Object(l.jsx)(O.a,{span:4,children:Object(l.jsxs)(h.b,{direction:"vertical",size:"large",children:[Object(l.jsx)(w,{placeholder:"What made you excited (only Cyrillic support at the moment)?",onChange:function(e){return r(e.target.value)},size:"large",value:n}),Object(l.jsx)(S.a,{children:"Pick a Sound"}),Object(l.jsx)(d,{onSelect:j}),Object(l.jsx)(k.a,{onClick:function(){var e=function(e){try{var t=e.text,n=e.sound,c="".concat(encodeURIComponent(t),"^").concat(n);return btoa(c)}catch(r){return console.error(r),null}}({sound:o,text:n});e&&v(e)},children:"Create"})]})})})})]})};n(300),n(301);var I=function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsxs)(p.c,{children:[Object(l.jsx)(p.a,{path:"/",element:Object(l.jsx)(F,{})}),Object(l.jsx)(p.a,{path:"/preview/:token",element:Object(l.jsx)(y,{})})]})})},B=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,314)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),i(e),a(e)}))},R=n(71);a.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(R.a,{children:Object(l.jsx)(I,{})})}),document.getElementById("root")),B()}},[[302,1,2]]]);
//# sourceMappingURL=main.92435cb7.chunk.js.map