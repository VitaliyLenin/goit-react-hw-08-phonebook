"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[214],{9214:function(e,n,t){t.r(n),t.d(n,{default:function(){return p}});var r=t(9434),a=t(3538),l=t(1413),i=t(158),o={name:"",email:"",password:""},u=t(7434),s={name:{type:"text",name:"name",required:!0,autoFocus:!0,label:"User name",placeholder:"Enter name"},email:{type:"text",name:"email",required:!0,label:"User email",placeholder:"Enter email"},password:{name:"password",required:!0,label:"User password",placeholder:"Enter password"}},c=t(7670),m={form:"registerForm_form__8tKcV",homepage_title:"registerForm_homepage_title__zGxAI"},d=t(184),h=function(e){var n=e.onSubmit,t=(0,i.Z)({initialState:o,onSubmit:n}),r=t.state,a=t.handleChange,h=t.handleSubmit,f=r.name,p=r.email,b=r.password;return(0,d.jsxs)("div",{className:m.homepage_wrap,children:[(0,d.jsx)("h2",{className:m.homepage_title,children:"Create account"}),(0,d.jsxs)("form",{onSubmit:h,className:m.form,children:[(0,d.jsx)(u.Z,(0,l.Z)({value:f,handleChange:a},s.name)),(0,d.jsx)(u.Z,(0,l.Z)({value:p,handleChange:a},s.email)),(0,d.jsx)("div",{children:(0,d.jsx)(u.Z,(0,l.Z)({value:b,handleChange:a},s.password))}),(0,d.jsx)(c.Z,{children:" Register "})]})]})},f="registerPage_container__JnUn+",p=function(){var e=(0,r.I0)();return(0,d.jsx)("div",{className:f,children:(0,d.jsx)(h,{onSubmit:function(n){e((0,a.IU)(n))}})})}},7434:function(e,n,t){t.d(n,{Z:function(){return s}});var r=t(1413);function a(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=t(2791),i={field:"formField_field__JeLem"},o=t(184),u=["label","handleChange"],s=function(e){var n=e.label,t=e.handleChange,s=a(e,u),c=(0,l.useMemo)((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce((function(e,n){return e+((n&=63)<36?n.toString(36):n<62?(n-26).toString(36).toUpperCase():n>62?"-":"_")}),"")}()}),[]);return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("label",{htmlFor:c,className:i.label,children:[n,(0,o.jsx)("input",(0,r.Z)((0,r.Z)({id:c,onChange:t},s),{},{className:i.field}))]})})}},7670:function(e,n,t){t.d(n,{Z:function(){return l}});var r="button_button__dpqJS",a=t(184),l=function(e){var n=e.children,t=e.type,l=void 0===t?"submit":t;return(0,a.jsx)("button",{type:l,className:r,children:n})}},158:function(e,n,t){var r=t(4942),a=t(1413),l=t(9439),i=t(2791);n.Z=function(e){var n=e.initialState,t=e.onSubmit,o=(0,i.useState)((0,a.Z)({},n)),u=(0,l.Z)(o,2),s=u[0],c=u[1],m=(0,i.useCallback)((function(e){var n=e.target,t=n.name,l=n.value;c((function(e){return(0,a.Z)((0,a.Z)({},e),{},(0,r.Z)({},t,l))}))}),[c]);return{state:s,setState:c,handleChange:m,handleSubmit:function(e){e.preventDefault(),t((0,a.Z)({},s)),c((0,a.Z)({},n))}}}}}]);
//# sourceMappingURL=214.1c42e543.chunk.js.map