(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{28:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),i=n(15),s=n.n(i),r=n(7),l=n(19),o=n(16),j=n(8),u=Object(o.b)({name:"skus",initialState:{skus:[]},reducers:{addSku:function(e,t){e.skus=[].concat(Object(l.a)(e.skus),[t.payload])}}}),d=Object(o.b)({name:"categories",initialState:{categories:[]},reducers:{addCat:function(e,t){e.categories=[].concat(Object(l.a)(e.categories),[t.payload])}}}),b=u.actions.addSku,O=d.actions.addCat,h=Object(j.b)({skus:u.reducer,categories:d.reducer}),m=Object(o.a)({reducer:h}),p=n(10),x=n(2),f=n(9),v=n.n(f),g=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).HOST||"http://localhost:1337",y=n(3),N=n(0),k=function(e){var t=e.open,n=e.text;return Object(N.jsx)("div",{className:"menu-item ".concat(t?"open":"closed"),children:n})},S=function(e){var t=e[0],n=e.slice(1);return t.toUpperCase()+n},C=function(e){var t=e.open,n=e.categories,c=e.items,a=e.title;return Object(N.jsxs)("ul",{className:"sub-menu ".concat(t?"open":"closed"),children:[n&&n.map((function(e,t){var n=e.name;return Object(N.jsx)("a",{href:"/items/".concat(n),children:Object(N.jsx)("li",{className:"submenu-item",children:S(n)})},t)})),c&&c.map((function(e,t){var n=e.text;return Object(N.jsx)("a",{href:"/".concat(a,"/").concat(n),children:Object(N.jsx)("li",{className:"submenu-item",children:S(n)})},t)})),n&&Object(N.jsx)("a",{href:"/items/all",children:Object(N.jsx)("li",{children:" All Items"})})]})},w=(n(59),function(){var e=Object(c.useState)(!1),t=Object(y.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)(!1),s=Object(y.a)(i,2),l=s[0],o=s[1],j=Object(c.useState)(!1),u=Object(y.a)(j,2),d=u[0],b=u[1],O=Object(r.c)((function(e){return e.categories.categories}));return Object(N.jsxs)("nav",{children:[Object(N.jsx)("div",{className:"menu-container",children:Object(N.jsxs)("ul",{className:"menu",children:[Object(N.jsxs)("li",{className:"options",onMouseEnter:function(){return a(!0)},onMouseLeave:function(){return a(!1)},children:[Object(N.jsx)(k,{open:n,text:"Categories"}),Object(N.jsx)(C,{open:n,categories:O})]}),Object(N.jsxs)("li",{className:"options",onMouseEnter:function(){return o(!0)},onMouseLeave:function(){return o(!1)},children:[Object(N.jsx)(k,{open:l,text:"Add/Delete"}),Object(N.jsx)(C,{open:l,title:"add-delete",items:[{text:"add"},{text:"delete"}]})]}),Object(N.jsxs)("li",{className:"options",onMouseEnter:function(){return b(!0)},onMouseLeave:function(){return b(!1)},children:[Object(N.jsx)(k,{open:d,text:"About"}),Object(N.jsx)(C,{open:d,title:"About",items:[{text:"About"}]})]})]})}),Object(N.jsx)("div",{className:"title-container",children:Object(N.jsx)("h1",{children:"Inventory"})})]})}),E=function(){var e=Object(x.f)();return Object(c.useEffect)((function(){e("/items/all")}),[e]),Object(N.jsx)(N.Fragment,{})},F=function(e){var t=e.sku,n=e.rerender,c=Object(x.f)();return Object(N.jsxs)("div",{className:"item-card",children:[Object(N.jsx)("img",{src:t.image,alt:t.name}),Object(N.jsx)("button",{onClick:function(){var e;window.confirm("Delete ".concat(t.name,"?"))&&(e={id:t._id},v.a.post(g+"/api/skus/delete/sku",e)),n()},className:"delete",children:"delete"}),Object(N.jsxs)("div",{className:"name-description",children:[Object(N.jsx)("h2",{children:t.name}),Object(N.jsxs)("p",{children:[t.description.slice(0,100),"..."]})]}),Object(N.jsxs)("div",{className:"onhand-price",children:[Object(N.jsxs)("span",{children:["On hand: ",t.onHand]}),Object(N.jsxs)("span",{children:["$",t.price.toFixed(2)]}),Object(N.jsx)("button",{onClick:function(){c("/edit/".concat(t._id))},className:"edit",children:"Edit"})]})]})},T=(n(60),function(){var e=Object(r.c)((function(e){return e.skus.skus})),t=Object(r.c)((function(e){return e.categories.categories})),n=Object(x.g)().category,a=null===t||void 0===t?void 0:t.find((function(e){return e.name===n})),i=Object(c.useState)(null),s=Object(y.a)(i,2),l=s[0],o=s[1];return Object(c.useEffect)((function(){"all"!==n?o(null===e||void 0===e?void 0:e.filter((function(e){return e.category===(null===a||void 0===a?void 0:a.name)}))):e&&o(e)}),[e,n,a]),Object(N.jsxs)("div",{className:"item page",children:[Object(N.jsx)("h1",{className:"page-title",children:n&&S(n)}),l&&l.map((function(e,t){return Object(N.jsx)(F,{sku:e},t)}))]})}),_=(n(28),function(){var e=Object(x.f)(),t=Object(c.useState)("electronics"),n=Object(y.a)(t,2),a=n[0],i=n[1],s=Object(c.useState)(""),r=Object(y.a)(s,2),l=r[0],o=r[1],j=Object(c.useState)(""),u=Object(y.a)(j,2),d=u[0],b=u[1],O=Object(c.useState)(0),h=Object(y.a)(O,2),m=h[0],p=h[1],f=Object(c.useState)(0),v=Object(y.a)(f,2),k=v[0],S=v[1],C=Object(c.useState)(""),w=Object(y.a)(C,2),E=w[0],F=w[1],T=function(e){var t=e.target,n=t.value;switch(t.id){case"category":i(n);break;case"name":o(n);break;case"description":b(n);break;case"price":p(parseFloat(n));break;case"on-hand":S(parseInt(n));break;case"image":F(n)}};return Object(N.jsxs)("div",{className:"full-page",children:[Object(N.jsx)("h1",{className:"title",children:"Add new Item"}),Object(N.jsxs)("form",{action:"submit",onSubmit:function(t){t.preventDefault(),function(e){return fetch(g+"/api/skus/create/sku",{method:"POST",body:JSON.stringify(e),headers:new Headers({"Content-Type":"application/json"})}).then((function(e){return console.log(e)})).catch((function(e){return console.error(e)}))}({category:a,name:l,description:d,price:m,onHand:k,image:E}).catch((function(e){e&&window.alert(e)})),e(0)},children:[Object(N.jsxs)("div",{className:"label-input",children:[Object(N.jsx)("label",{htmlFor:"category",children:"Category: "}),Object(N.jsxs)("select",{name:"category",id:"category",value:a,required:!0,onChange:T,children:[Object(N.jsx)("option",{value:"electronics",children:"Electronics"}),Object(N.jsx)("option",{value:"jewelry",children:"Jewelry"}),Object(N.jsx)("option",{value:"women's clothing",children:"Women's Clothing"}),Object(N.jsx)("option",{value:"men's clothing",children:"Men's Clothing"})]})]}),Object(N.jsxs)("div",{className:"label-input",children:[Object(N.jsx)("label",{htmlFor:"name",children:"Item Name: "}),Object(N.jsx)("input",{type:"text",name:"name",id:"name",value:l,required:!0,onChange:T})]}),Object(N.jsxs)("div",{className:"label-input",children:[Object(N.jsx)("label",{htmlFor:"description",children:"Description: "}),Object(N.jsx)("textarea",{name:"description",id:"description",value:d,required:!0,onChange:T})]}),Object(N.jsxs)("div",{className:"label-input",children:[Object(N.jsx)("label",{htmlFor:"price",children:"Price: "}),Object(N.jsx)("input",{type:"number",min:"0.01",step:"0.01",name:"price",id:"price",value:m,required:!0,onChange:T})]}),Object(N.jsxs)("div",{className:"label-input",children:[Object(N.jsx)("label",{htmlFor:"on-hand",children:"On Hand: "}),Object(N.jsx)("input",{type:"number",min:"1",step:"1",name:"on-hand",id:"on-hand",value:k,required:!0,onChange:T})]}),Object(N.jsxs)("div",{className:"label-input",children:[Object(N.jsx)("label",{htmlFor:"image",children:"Image URL: "}),Object(N.jsx)("input",{type:"text",name:"image",id:"image",value:E,required:!0,onChange:T})]}),Object(N.jsx)("input",{type:"submit",value:"Submit",className:"button"})]})]})}),D=function(){var e=Object(r.c)((function(e){return e.skus})).skus,t=Object(x.f)(),n=function(){t(0)};return Object(N.jsx)("div",{className:"full-page",children:Object(N.jsx)("div",{className:"item-cards-container",children:e&&e.map((function(e,t){return Object(N.jsx)(F,{sku:e,rerender:n},t)}))})})},H=(n(61),function(){var e=Object(x.f)(),t=Object(x.g)().edit,n=Object(r.c)((function(e){return e.skus.skus})),a=Object(c.useState)(void 0),i=Object(y.a)(a,2),s=i[0],l=i[1],o=Object(c.useState)(""),j=Object(y.a)(o,2),u=j[0],d=j[1],b=Object(c.useState)(""),O=Object(y.a)(b,2),h=O[0],m=O[1],p=Object(c.useState)(""),f=Object(y.a)(p,2),v=f[0],k=f[1],S=Object(c.useState)(""),C=Object(y.a)(S,2),w=C[0],E=C[1],F=Object(c.useState)(0),T=Object(y.a)(F,2),_=T[0],D=T[1],H=Object(c.useState)(0),I=Object(y.a)(H,2),A=I[0],M=I[1];Object(c.useEffect)((function(){s?(d(s.category),m(s.image),k(s.name),E(s.description),D(s.onHand),M(s.price)):l(n.find((function(e){return e._id===t})))}),[t,s,n]);var P=function(e){var t=e.target,n=t.id,c=t.value;switch(n){case"category":d(c);break;case"image":m(c);break;case"name":k(c);break;case"description":E(c);break;case"on-hand":D(c);break;case"price":M(c)}};return Object(N.jsx)("div",{className:"item-card",children:Object(N.jsxs)("form",{action:"submit",onSubmit:function(t){t.preventDefault();var n,c,a={category:u,name:v,description:w,onHand:_,price:A,image:h};n=null===s||void 0===s?void 0:s._id,c=a,fetch(g+"/api/skus/update/sku",{method:"POST",body:JSON.stringify({update:c,id:n}),headers:new Headers({"Content-Type":"application/json"})}).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)})),e("/")},children:[Object(N.jsx)("img",{src:null===s||void 0===s?void 0:s.image,alt:null===s||void 0===s?void 0:s.name}),Object(N.jsxs)("div",{className:"label-input",children:[Object(N.jsx)("label",{htmlFor:"image",children:"Image URL: "}),Object(N.jsx)("input",{type:"text",name:"image",id:"image",onChange:P,value:h})]}),Object(N.jsxs)("div",{className:"label-input",children:[Object(N.jsx)("label",{htmlFor:"category",children:"Category: "}),Object(N.jsxs)("select",{name:"category",id:"category",value:u,required:!0,onChange:P,children:[Object(N.jsx)("option",{value:"electronics",children:"Electronics"}),Object(N.jsx)("option",{value:"jewelry",children:"Jewelry"}),Object(N.jsx)("option",{value:"women's clothing",children:"Women's Clothing"}),Object(N.jsx)("option",{value:"men's clothing",children:"Men's Clothing"})]})]}),Object(N.jsxs)("div",{className:"label-input",children:[Object(N.jsx)("label",{htmlFor:"name",children:"Name: "}),Object(N.jsx)("input",{type:"text",name:"name",id:"name",onChange:P,value:v})]}),Object(N.jsxs)("div",{className:"label-input",children:[Object(N.jsx)("label",{htmlFor:"description",children:"Description: "}),Object(N.jsx)("textarea",{name:"description",id:"description",cols:30,rows:10,onChange:P,value:w})]}),Object(N.jsxs)("div",{className:"label-input",children:[Object(N.jsx)("label",{htmlFor:"on-hand",children:"On Hand: "}),Object(N.jsx)("input",{type:"number",name:"on-hand",id:"on-hand",onChange:P,value:_})]}),Object(N.jsxs)("div",{className:"label-input",children:[Object(N.jsx)("label",{htmlFor:"price",children:"Price: "}),Object(N.jsx)("input",{type:"number",name:"price",id:"price",onChange:P,value:A})]}),Object(N.jsx)("input",{type:"submit",value:"Update Item"})]})})}),I=(n(62),n(63),function(){return Object(N.jsxs)("div",{className:"full-page",children:[Object(N.jsx)("h1",{children:"About this Website"}),Object(N.jsx)("p",{className:"about-text",children:"This site is a fake inventory management app with full CRUD functionality."}),Object(N.jsx)("p",{children:"The server is written in typescript with express and the front end is written in typescript with React."}),Object(N.jsxs)("p",{children:["You can find it on github",Object(N.jsx)("a",{href:"https://github.com/JonathanDPotter/inventory",children:" here"}),"."]})]})}),A=function(){var e=Object(r.b)();return Object(c.useEffect)((function(){v.a.get(g+"/api/categories/get/categories").then((function(t){t.data.categories.forEach((function(t){return e(O(t))}))})),v.a.get(g+"/api/skus/get/skus").then((function(t){t.data.skus.forEach((function(t){return e(b(t))}))}))}),[e]),Object(N.jsx)("div",{children:Object(N.jsxs)(p.a,{children:[Object(N.jsx)(w,{}),Object(N.jsxs)(x.c,{children:[Object(N.jsx)(x.a,{path:"/",element:Object(N.jsx)(E,{})}),Object(N.jsx)(x.a,{path:"/items/:category",element:Object(N.jsx)(T,{})}),Object(N.jsx)(x.a,{path:"/add-delete/add",element:Object(N.jsx)(_,{})}),Object(N.jsx)(x.a,{path:"/add-delete/delete",element:Object(N.jsx)(D,{})}),Object(N.jsx)(x.a,{path:"/edit/:edit",element:Object(N.jsx)(H,{})}),Object(N.jsx)(x.a,{path:"/about/about",element:Object(N.jsx)(I,{})}),Object(N.jsx)(x.a,{path:"*",element:Object(N.jsx)("h1",{className:"title",children:"404 not found"})})]})]})})};s.a.render(Object(N.jsx)(a.a.StrictMode,{children:Object(N.jsx)(r.a,{store:m,children:Object(N.jsx)(A,{})})}),document.getElementById("root"))}},[[64,1,2]]]);
//# sourceMappingURL=main.0279419a.chunk.js.map