(this["webpackJsonpmodel-web"]=this["webpackJsonpmodel-web"]||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var c=n(2),j=n.n(c),b=n(6),s=n.n(b),a=(n(25),n(15)),r=n(16),i=n(20),o=n(18),u=(n.p,n(26),n(4)),O=n(3),l=n(19),x=n(17),h=n.n(x),d=n(0);var m=function(){var e=Object(c.useState)({s:"",r:"",x:"",t:"",sigma:"",res:""}),t=Object(l.a)(e,2),n=t[0],j=t[1],b=function(e){j(Object(O.a)(Object(O.a)({},n),{},Object(u.a)({},e.target.name,e.target.value)))};return Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),h.a.post("https://fordhammodel.herokuapp.com/model/bs",{r:n.r,s:n.s,x:n.x,sigma:n.sigma,t:n.t}).then((function(e){console.log(e),j(Object(O.a)(Object(O.a)({},n),{},{res:e.data.p}))}))},children:[Object(d.jsxs)("label",{children:["s:",Object(d.jsx)("input",{value:n.s,name:"s",onChange:b})]}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsxs)("label",{children:["t:",Object(d.jsx)("input",{value:n.t,name:"t",onChange:b})]}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsxs)("label",{children:["sigma:",Object(d.jsx)("input",{value:n.sigma,name:"sigma",onChange:b})]}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsxs)("label",{children:["x:",Object(d.jsx)("input",{value:n.x,name:"x",onChange:b})]}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsxs)("label",{children:["r:",Object(d.jsx)("input",{value:n.r,name:"r",onChange:b})]}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("button",{children:"Submit"}),Object(d.jsx)("br",{}),Object(d.jsx)("div",{children:n.res})]})},g=function(e){Object(i.a)(n,e);var t=Object(o.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(d.jsx)("div",{children:Object(d.jsx)(m,{})})}}]),n}(c.Component),p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,47)).then((function(t){var n=t.getCLS,c=t.getFID,j=t.getFCP,b=t.getLCP,s=t.getTTFB;n(e),c(e),j(e),b(e),s(e)}))};s.a.render(Object(d.jsx)(j.a.StrictMode,{children:Object(d.jsx)(g,{})}),document.getElementById("root")),p()}},[[46,1,2]]]);
//# sourceMappingURL=main.382acbe5.chunk.js.map