(this.webpackJsonpshop=this.webpackJsonpshop||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);n(0);var c,a,o,r,s=n(10),i=n.n(s),b=n(4),d=n(6),u=n(15),l=n(2),j=n(3),g=j.a.section(c||(c=Object(l.a)(["\n  padding-bottom: 50px;\n"]))),p=n(1),f=function(e){var t=e.good,n=e.neutral,c=e.bad,a=e.total,o=e.positivePercentage;return Object(p.jsxs)(g,{children:[Object(p.jsxs)("p",{children:["Good: ",t]}),Object(p.jsxs)("p",{children:["Neutral: ",n]}),Object(p.jsxs)("p",{children:["Bad: ",c]}),Object(p.jsxs)("p",{children:["Total:",a]}),Object(p.jsxs)("p",{children:["Positive feedback: ",o,"%"]})]})},O=j.a.section(a||(a=Object(l.a)(["\n  .btn {\n    text-transform: uppercase;\n    background-color: #fbff02c0;\n    border-radius: 5px;\n    color: #ff4800;\n  }\n"]))),x=function(e){var t=e.options,n=e.onLeaveFeedback;return t.map((function(e){var t=e.name,c=e.title;return Object(p.jsx)(O,{children:Object(p.jsx)("button",{className:"btn",type:"button",name:t,onClick:n,children:c})},t)}))},h=j.a.section(o||(o=Object(l.a)(["\n  text-align: center;\n\n  .selectLang {\n    background-color: #fbff02c0;\n    border-radius: 5px;\n    color: #ff4800;\n  }\n"]))),m=function(e){var t=e.title,n=e.children;return Object(p.jsxs)(h,{children:[Object(p.jsx)("h2",{children:t}),n]})},v=function(e){var t=e.message;return Object(p.jsx)("p",{className:"message",children:t})},k=j.a.section(r||(r=Object(l.a)(["\n  color: #eeff00ca;\n  background-image: url(https://cs12.pikabu.ru/post_img/2021/05/19/8/1621427764178829599.jpg);\n  -webkit-background-size: cover;\n  -moz-background-size: cover;\n  -o-background-size: cover;\n  background-size: cover;\n  .message {\n    padding-bottom: 230px;\n  }\n"]))),N=n(14),z=[{name:"good",title:"Good"},{name:"neutral",title:"Neutral"},{name:"bad",title:"Bad"}],P=function(){var e=Object(N.useState)({good:0,neutral:0,bad:0}),t=Object(u.a)(e,2),n=t[0],c=t[1],a=function(){var e=n.good,t=n.neutral;return e+n.bad+t},o=a(),r=function(){var e=a(),t=e?100*n.good/e:0;return Math.round(t)}();return Object(p.jsxs)(k,{children:[Object(p.jsx)(m,{title:"Please leave feedback",children:Object(p.jsx)(x,{options:z,onLeaveFeedback:function(e){var t=e.target.name;c((function(e){return Object(d.a)(Object(d.a)({},e),{},Object(b.a)({},t,e[t]+1))}))}})}),Object(p.jsx)(m,{title:"Statistics",children:o>0?Object(p.jsx)(f,{good:n.good,neutral:n.neutral,bad:n.bad,total:o,positivePercentage:r}):Object(p.jsx)(v,{className:"message",message:"No feedback given"})})]})};n(25);i.a.render(Object(p.jsx)(P,{}),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.445d7bec.chunk.js.map