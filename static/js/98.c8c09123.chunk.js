"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[98],{1098:function(e,n,t){t.r(n),t.d(n,{default:function(){return h}});var r=t(9434),a=t(8864),i=t(1413),o=t(158),l={email:"",password:""},u=t(7434),s={email:{type:"text",name:"email",required:!0,autoFocus:!0,label:"Email",placeholder:"Enter email"},password:{name:"password",required:!0,label:"Password",placeholder:"Enter password"}},c=t(7670),d={form:"LoginForm_form__gPEx5",loginpage_wrap:"LoginForm_loginpage_wrap__N+Ytr",loginpage_title:"LoginForm_loginpage_title__jCRnL",button_wrap:"LoginForm_button_wrap__5Y6z-"},m=t(184),p=function(e){var n=e.onSubmit,t=(0,o.Z)({initialState:l,onSubmit:n}),r=t.state,a=t.handleChange,p=t.handleSubmit,g=r.email,h=r.password;return(0,m.jsxs)("div",{children:[(0,m.jsx)("div",{className:d.loginpage_wrap,children:(0,m.jsx)("h2",{className:d.loginpage_title,children:"Enter your account"})}),(0,m.jsxs)("form",{onSubmit:p,className:d.form,children:[(0,m.jsx)(u.Z,(0,i.Z)({value:g,handleChange:a},s.email)),(0,m.jsx)("div",{className:d.iconInput_wrap,children:(0,m.jsx)(u.Z,(0,i.Z)({value:h,handleChange:a},s.password))}),(0,m.jsx)("div",{className:d.button_wrap,children:(0,m.jsx)(c.Z,{children:" Sign in "})})]})]})},g="loginPage_loginpage_wrap__Gb-xt",h=function(){var e=(0,r.I0)();return(0,m.jsx)("div",{className:g,children:(0,m.jsx)(p,{onSubmit:function(n){e((0,a.x4)(n))}})})}},7434:function(e,n,t){t.d(n,{Z:function(){return s}});var r=t(1413);function a(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=t(2791),o={field:"formField_field__JeLem"},l=t(184),u=["label","handleChange"],s=function(e){var n=e.label,t=e.handleChange,s=a(e,u),c=(0,i.useMemo)((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce((function(e,n){return e+((n&=63)<36?n.toString(36):n<62?(n-26).toString(36).toUpperCase():n>62?"-":"_")}),"")}()}),[]);return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("label",{htmlFor:c,className:o.label,children:[n,(0,l.jsx)("input",(0,r.Z)((0,r.Z)({id:c,onChange:t},s),{},{className:o.field}))]})})}},7670:function(e,n,t){t.d(n,{Z:function(){return i}});var r="button_button__dpqJS",a=t(184),i=function(e){var n=e.children,t=e.type,i=void 0===t?"submit":t;return(0,a.jsx)("button",{type:i,className:r,children:n})}},158:function(e,n,t){var r=t(4942),a=t(1413),i=t(9439),o=t(2791);n.Z=function(e){var n=e.initialState,t=e.onSubmit,l=(0,o.useState)((0,a.Z)({},n)),u=(0,i.Z)(l,2),s=u[0],c=u[1],d=(0,o.useCallback)((function(e){var n=e.target,t=n.name,i=n.value;c((function(e){return(0,a.Z)((0,a.Z)({},e),{},(0,r.Z)({},t,i))}))}),[c]);return{state:s,setState:c,handleChange:d,handleSubmit:function(e){e.preventDefault(),t((0,a.Z)({},s)),c((0,a.Z)({},n))}}}}}]);
//# sourceMappingURL=98.c8c09123.chunk.js.map