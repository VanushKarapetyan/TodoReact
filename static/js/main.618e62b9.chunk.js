(this["webpackJsonpreact-typescript"]=this["webpackJsonpreact-typescript"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var i=n(1),l=n.n(i),c=n(8),o=n.n(c),a=(n(14),n(3)),s=n(9),r=n(5),d=n(0),u=function(e){var t=Object(i.useRef)(null);return Object(d.jsxs)("div",{className:"form_container",children:[Object(d.jsxs)("div",{className:"input-field mt2",children:[Object(d.jsx)("input",{onFocus:function(){var e;null===(e=document.getElementById("add_btn"))||void 0===e||e.classList.add("add_btn_focus")},onBlur:function(){setTimeout((function(){var e;null===(e=document.getElementById("add_btn"))||void 0===e||e.classList.remove("add_btn_focus")}),80)},ref:t,type:"text",id:"title",autoComplete:"off",onKeyPress:function(n){"Enter"===n.key&&(e.onAdd(t.current.value),t.current.value="")},className:"materialize-textarea add_input"}),Object(d.jsx)("label",{htmlFor:"title",className:"active",children:"What needs to be done?"})]}),Object(d.jsx)("button",{id:"add_btn",className:"add_btn",onClick:function(){e.onAdd(t.current.value),t.current.value=""},children:Object(d.jsx)("i",{className:"material-icons red-text",children:"add_box"})})]})},m=n(7),b=function(e){var t=e.todos,n=e.onRemove,l=e.onToggle,c=e.onEdit,o=(Object(i.useRef)(null),Object(i.useState)("")),a=Object(r.a)(o,2),s=a[0],u=a[1];if(0===t.length)return Object(d.jsx)("p",{className:"center",children:"While no affairs"});var b=function(e){var t=e.target;u(t.value)},v=function(e){setTimeout((function(){var t;null===(t=e.target.nextElementSibling)||void 0===t||t.classList.remove("add_btn_focus")}),80)},f=function(e){var t;null===(t=e.target.nextElementSibling)||void 0===t||t.classList.add("add_btn_focus")};return Object(d.jsx)("ul",{children:t.map((function(e){var t=["todo"];return!0===e.completed&&t.push("completed"),Object(d.jsx)("li",{className:t.join(" "),children:Object(d.jsxs)("label",{children:[Object(d.jsx)("input",{type:"checkbox",checked:e.completed,onChange:l.bind(null,e.id)}),Object(d.jsx)("span",{className:"scroolbar_span",children:Object(d.jsx)("div",{className:"content_box",children:Object(d.jsx)("span",{className:"todo_title",children:e.title})})}),Object(d.jsxs)("form",{className:"edit_form",children:[Object(d.jsx)("input",{onFocus:f,onBlur:v,className:"materialize-textarea edit_input",type:"text",onChange:b,placeholder:e.title}),Object(d.jsx)("button",{id:"save_btn",className:"material-icons red-text save_btn",onClick:function(t){return function(e,t,n){var i,l,o;e.preventDefault(),c(s,t);var a=e.target;null===(i=a.parentElement)||void 0===i||i.classList.remove("form_display"),null===(l=a.parentElement)||void 0===l||null===(o=l.previousElementSibling)||void 0===o||o.classList.remove("display_title")}(t,e.id,m.title)},children:"save"})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("i",{className:"material-icons red-text edit_icon",onClick:function(t){return function(e,t,n){var i,l,c,o,a;e.preventDefault();var s,r,d,u,m,b,v,f,j,p,x=e.target;(null===(i=x.parentElement)||void 0===i||null===(l=i.previousElementSibling)||void 0===l?void 0:l.classList.contains("form_display"))?null===(s=x.parentElement)||void 0===s||null===(r=s.previousElementSibling)||void 0===r||r.classList.remove("form_display"):null===(d=x.parentElement)||void 0===d||null===(u=d.previousElementSibling)||void 0===u||u.classList.add("form_display"),(null===(c=x.parentElement)||void 0===c||null===(o=c.previousElementSibling)||void 0===o||null===(a=o.previousElementSibling)||void 0===a?void 0:a.classList.contains("display_title"))?null===(m=x.parentElement)||void 0===m||null===(b=m.previousElementSibling)||void 0===b||null===(v=b.previousElementSibling)||void 0===v||v.classList.remove("display_title"):null===(f=x.parentElement)||void 0===f||null===(j=f.previousElementSibling)||void 0===j||null===(p=j.previousElementSibling)||void 0===p||p.classList.add("display_title")}(t,e.id,m.title)},children:"edit"}),Object(d.jsx)("i",{className:"material-icons red-text",onClick:function(t){return function(e,t){e.preventDefault(),n(t)}(t,e.id)},children:"delete"})]})]})},e.id)}))})},v=function(e){var t=e.todos,n=e.onClearCompleted,i=t.filter((function(e){return e.completed})).length;return Object(d.jsxs)("div",{className:"todo_footer",children:[Object(d.jsxs)("span",{children:[t.length," / ",i]}),Object(d.jsxs)("div",{className:"clear_all_block",children:[Object(d.jsx)("p",{className:"clear_all_text red-text",children:"Clear completed"}),Object(d.jsx)("i",{className:"material-icons red-text clear_all_icon",onClick:n,children:"clear"})]})]})};var f=function(){var e=Object(i.useState)([]),t=Object(r.a)(e,2),n=t[0],l=t[1];return Object(i.useEffect)((function(){var e=JSON.parse(localStorage.getItem("todos")||"[]");l(e)}),[]),Object(i.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(n))}),[n]),Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)(u,{onAdd:function(e){if(""!==e){var t={title:e,id:Date.now(),completed:!1};l((function(e){return[t].concat(Object(s.a)(e))}))}}}),Object(d.jsx)(b,{todos:n,onToggle:function(e){l((function(t){return t.map((function(t){return t.id===e?Object(a.a)(Object(a.a)({},t),{},{completed:!t.completed}):t}))}))},onRemove:function(e){!0===window.confirm("Are you sure want to delete the item?")&&l((function(t){return t.filter((function(t){return t.id!==e}))}))},onEdit:function(e,t){console.log(e),l((function(n){return n.map((function(n){return n.id===t?Object(a.a)(Object(a.a)({},n),{},{title:e}):n}))}))}}),Object(d.jsx)(v,{todos:n,onClearCompleted:function(){0!==n.filter((function(e){return e.completed})).length&&(!0===window.confirm("Are you you want to delete the items?")&&l(n.filter((function(e){return!e.completed}))))}})]})})},j=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,i=t.getFID,l=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),i(e),l(e),c(e),o(e)}))};o.a.render(Object(d.jsx)(l.a.StrictMode,{children:Object(d.jsx)(f,{})}),document.getElementById("root")),j()}},[[16,1,2]]]);
//# sourceMappingURL=main.618e62b9.chunk.js.map