(this.webpackJsonppokefrontend=this.webpackJsonppokefrontend||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),r=n(6),s=n.n(r),i=(n(14),n(7)),l=n(3);n(15);var o=function(e){return Object(a.jsxs)("div",{id:"".concat(e.id),className:"card border-secondary QR-box",children:[Object(a.jsx)("img",{className:"card-img-top",src:"https://qrtag.net/api/qr_transparent_6.svg?url=".concat(e.url),alt:"qrtag"}),Object(a.jsxs)("div",{className:"card-body",children:[Object(a.jsx)("h5",{className:"card-title text-center",children:e.name}),Object(a.jsx)("a",{href:e.url,target:"_blank",rel:"noreferrer",className:"btn btn-secondary btn-block",children:"Open"}),Object(a.jsx)("button",{className:"btn btn-danger btn-block",onClick:function(){return e.delete(e.id)},children:"Delete"})]})]})};var d=function(e){return Object(a.jsxs)("form",{className:"form-inline d-flex justify-content-center",children:[Object(a.jsx)("input",{type:"text",className:"form-control",id:"newLinkName",placeholder:"Name",value:e.linkName,onChange:e.linkNameChange}),Object(a.jsx)("input",{type:"text",className:"form-control",id:"newLinkURL",placeholder:"URL",value:e.linkUrl,onChange:e.linkUrlChange}),Object(a.jsx)("button",{type:"submit",className:"btn btn-primary",onClick:e.addLink,children:"Add"})]})},j=n(8);var b=function(e){var t=Object(c.useState)(e.links),n=Object(l.a)(t,2),r=n[0],s=n[1],b=Object(c.useState)(""),u=Object(l.a)(b,2),m=u[0],h=u[1],p=Object(c.useState)(""),f=Object(l.a)(p,2),O=f[0],g=f[1],x=Object(c.useState)(!1),k=Object(l.a)(x,2),N=k[0],v=k[1];function w(e){var t=r.filter((function(t){return e!==t.id}));s(t),v(!0)}var y=r.map((function(e){return Object(a.jsx)(o,{id:"".concat(e.id),name:e.name,url:e.url,delete:w},"".concat(e.id))}));return Object(c.useEffect)((function(){N&&(localStorage.setItem("linkList",JSON.stringify(r)),v(!1))}),[N,r]),Object(a.jsxs)("div",{className:"App",children:[Object(a.jsxs)("div",{className:"jumbotron text-center",children:[Object(a.jsx)("h1",{children:"QR Farm"}),Object(a.jsx)("p",{className:"lead",children:"Add some links"}),Object(a.jsxs)("p",{children:["created using ",Object(a.jsx)("a",{href:"https://qrtag.net",children:"QRtag API"})]}),Object(a.jsxs)("p",{children:[Object(a.jsx)("a",{className:"btn-sm btn-outline-info","data-toggle":"collapse",href:"#collapseMessage",role:"button","aria-expanded":"false","aria-controls":"collapseExample",children:"Privacy Info"}),Object(a.jsx)("div",{className:"collapse",id:"collapseMessage",children:Object(a.jsx)("div",{children:Object(a.jsx)("p",{children:"Local storage is only used for storing link information. Nothing is stored on the server but of course always use care with what information you decide to use with the app! "})})})]}),Object(a.jsx)(d,{linkName:m,linkNameChange:function(e){h(e.target.value)},linkUrl:O,linkUrlChange:function(e){g(e.target.value)},addLink:function(e){if(e.preventDefault(),""!==m.trim()&&""!==O.trim()){var t={name:m,url:O,id:"QR-".concat(Object(j.a)())};s([].concat(Object(i.a)(r),[t])),v(!0)}h(""),g("")}})]}),Object(a.jsx)("div",{className:"QRlist container-fluid",children:Object(a.jsx)("div",{className:"d-flex justify-content-around flex-wrap",children:y})})]})},u=JSON.parse(localStorage.getItem("linkList"))||[{name:"Google",url:"https://www.google.com",id:"QR-0"},{name:"Github",url:"https://www.github.com",id:"QR-1"},{name:"QR Tag",url:"https://www.qrtag.net/api",id:"QR-2"}];s.a.render(Object(a.jsx)(b,{links:u}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.d70ec619.chunk.js.map