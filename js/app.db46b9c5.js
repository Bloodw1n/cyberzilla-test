(function(){"use strict";var e={33:function(e,t,l){var a=l(963),o=l(252);const s={id:"app"},n=(0,o._)("h1",null,"CyberZilla",-1);function i(e,t,l,a,i,r){const d=(0,o.up)("v-col"),u=(0,o.up)("v-tab"),c=(0,o.up)("v-tabs"),m=(0,o.up)("v-btn"),p=(0,o.up)("v-row"),h=(0,o.up)("router-view"),f=(0,o.up)("v-container"),w=(0,o.up)("v-main"),g=(0,o.up)("v-app");return(0,o.wg)(),(0,o.iD)("div",s,[(0,o.Wm)(g,null,{default:(0,o.w5)((()=>[(0,o.Wm)(w,null,{default:(0,o.w5)((()=>[(0,o.Wm)(f,null,{default:(0,o.w5)((()=>[(0,o.Wm)(p,{class:"mb-2"},{default:(0,o.w5)((()=>[(0,o.Wm)(d,{cols:"12"},{default:(0,o.w5)((()=>[(0,o.Wm)(p,{align:"center"},{default:(0,o.w5)((()=>[(0,o.Wm)(d,{cols:"4",class:"d-flex justify-start"},{default:(0,o.w5)((()=>[n])),_:1}),(0,o.Wm)(d,{cols:"4",class:"d-flex justify-center"},{default:(0,o.w5)((()=>[(0,o.Wm)(c,{modelValue:e.activeTab,"onUpdate:modelValue":t[0]||(t[0]=t=>e.activeTab=t),"align-with-title":""},{default:(0,o.w5)((()=>[(0,o.Wm)(u,{to:"/"},{default:(0,o.w5)((()=>[(0,o.Uk)("Пользователи")])),_:1}),(0,o.Wm)(u,{to:"/payments"},{default:(0,o.w5)((()=>[(0,o.Uk)("Платежи")])),_:1})])),_:1},8,["modelValue"])])),_:1}),(0,o.Wm)(d,{cols:"4",class:"d-flex justify-end"},{default:(0,o.w5)((()=>[(0,o.Wm)(m,{onClick:e.clearLocalStorage},{default:(0,o.w5)((()=>[(0,o.Uk)("Очистить localStorage")])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1})])),_:1}),(0,o.Wm)(h)])),_:1})])),_:1})])),_:1})])}var r=(0,o.aZ)({name:"App",data(){return{activeTab:null}},methods:{clearLocalStorage(){localStorage.clear(),location.reload()}}}),d=l(744);const u=(0,d.Z)(r,[["render",i]]);var c=u,m=l(201),p=l(577);const h=(0,o._)("h2",{class:"text-2xl font-bold mb-4"},"Пользователи",-1);function f(e,t,l,a,s,n){const i=(0,o.up)("v-progress-circular"),r=(0,o.up)("v-col"),d=(0,o.up)("v-row"),u=(0,o.up)("v-card-title"),c=(0,o.up)("v-card-text"),m=(0,o.up)("v-btn"),f=(0,o.up)("v-card-actions"),w=(0,o.up)("v-card"),g=(0,o.up)("v-divider"),v=(0,o.up)("v-checkbox"),y=(0,o.up)("v-list-item"),_=(0,o.up)("v-list"),k=(0,o.up)("v-dialog"),b=(0,o.up)("v-text-field"),W=(0,o.up)("v-form"),U=(0,o.up)("v-container");return(0,o.wg)(),(0,o.j4)(U,{class:"pt-4"},{default:(0,o.w5)((()=>[h,e.isLoading?((0,o.wg)(),(0,o.j4)(d,{key:0,class:"fill-height",align:"center",justify:"center"},{default:(0,o.w5)((()=>[(0,o.Wm)(r,{cols:"12",class:"text-center"},{default:(0,o.w5)((()=>[(0,o.Wm)(i,{indeterminate:"",size:"64",color:"primary"})])),_:1})])),_:1})):(0,o.kq)("",!0),(0,o.Wm)(d,null,{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.users,(t=>((0,o.wg)(),(0,o.j4)(r,{key:t.id,cols:"4"},{default:(0,o.w5)((()=>[(0,o.Wm)(w,{class:"mb-4",outlined:""},{default:(0,o.w5)((()=>[(0,o.Wm)(u,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,p.zw)(t.name),1)])),_:2},1024),(0,o.Wm)(c,null,{default:(0,o.w5)((()=>[(0,o._)("p",null,"Email: "+(0,p.zw)(t.email),1),(0,o._)("p",null,"Номер телефона: "+(0,p.zw)(t.phone),1)])),_:2},1024),(0,o.Wm)(f,null,{default:(0,o.w5)((()=>[(0,o.Wm)(m,{onClick:l=>e.showUserDetails(t),color:"primary",dark:""},{default:(0,o.w5)((()=>[(0,o.Uk)(" TODO-лист ")])),_:2},1032,["onClick"]),(0,o.Wm)(m,{onClick:l=>e.openEditModal(t),color:"primary",dark:""},{default:(0,o.w5)((()=>[(0,o.Uk)(" Редактировать данные ")])),_:2},1032,["onClick"])])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128))])),_:1}),(0,o.Wm)(k,{modelValue:e.showTodoModal,"onUpdate:modelValue":t[0]||(t[0]=t=>e.showTodoModal=t),"max-width":"600",scrollable:"",width:"auto"},{default:(0,o.w5)((()=>[(0,o.Wm)(w,null,{default:(0,o.w5)((()=>[(0,o.Wm)(u,null,{default:(0,o.w5)((()=>[(0,o.Uk)(" TODO-лист ")])),_:1}),(0,o.Wm)(g),(0,o.Wm)(c,{style:{height:"300px"}},{default:(0,o.w5)((()=>[(0,o.Wm)(_,null,{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.todos,(t=>((0,o.wg)(),(0,o.j4)(y,{key:t.id,class:"d-flex align-center flex-row"},{default:(0,o.w5)((()=>[(0,o.Wm)(v,{modelValue:t.completed,"onUpdate:modelValue":e=>t.completed=e,class:(0,p.C_)({"line-through":t.completed}),label:e.truncateText(t.title,42)},null,8,["modelValue","onUpdate:modelValue","class","label"])])),_:2},1024)))),128))])),_:1})])),_:1}),(0,o.Wm)(g),(0,o.Wm)(f,{class:"justify-end"},{default:(0,o.w5)((()=>[(0,o.Wm)(m,{color:"blue darken-1",variant:"text",onClick:e.closeTodoModal},{default:(0,o.w5)((()=>[(0,o.Uk)(" Закрыть ")])),_:1},8,["onClick"]),(0,o.Wm)(m,{color:"blue darken-1",variant:"text",onClick:e.saveTodoList},{default:(0,o.w5)((()=>[(0,o.Uk)(" Сохранить ")])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1},8,["modelValue"]),e.editUser?((0,o.wg)(),(0,o.j4)(k,{key:1,modelValue:e.showEditModal,"onUpdate:modelValue":t[4]||(t[4]=t=>e.showEditModal=t),"max-width":"600"},{default:(0,o.w5)((()=>[(0,o.Wm)(w,null,{default:(0,o.w5)((()=>[(0,o.Wm)(u,null,{default:(0,o.w5)((()=>[(0,o.Uk)(" Окно редактирования ")])),_:1}),(0,o.Wm)(g),(0,o.Wm)(c,null,{default:(0,o.w5)((()=>[(0,o.Wm)(W,{ref:"editForm",onSubmit:e.saveUserData},{default:(0,o.w5)((()=>[(0,o.Wm)(b,{modelValue:e.editUser.email,"onUpdate:modelValue":t[1]||(t[1]=t=>e.editUser.email=t),rules:e.emailValidationRules,label:"Email",required:"","no-case-change":""},null,8,["modelValue","rules"]),(0,o.Wm)(b,{modelValue:e.editUser.name,"onUpdate:modelValue":t[2]||(t[2]=t=>e.editUser.name=t),label:"Имя",required:""},null,8,["modelValue"]),(0,o.Wm)(b,{modelValue:e.editUser.phone,"onUpdate:modelValue":t[3]||(t[3]=t=>e.editUser.phone=t),rules:e.phoneValidationRules,label:"Номер телефона",required:""},null,8,["modelValue","rules"])])),_:1},8,["onSubmit"])])),_:1}),(0,o.Wm)(f,{class:"justify-end"},{default:(0,o.w5)((()=>[(0,o.Wm)(m,{color:"blue darken-1",variant:"text",onClick:e.cancelEdit},{default:(0,o.w5)((()=>[(0,o.Uk)(" Закрыть ")])),_:1},8,["onClick"]),(0,o.Wm)(m,{color:"blue",onClick:e.saveUserData,dark:""},{default:(0,o.w5)((()=>[(0,o.Uk)(" Сохранить ")])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1},8,["modelValue"])):(0,o.kq)("",!0)])),_:1})}var w=l(154),g=(0,o.aZ)({data(){return{users:[],selectedUser:null,editUser:null,todos:[],showTodoModal:!1,showEditModal:!1,isLoading:!1}},computed:{emailValidationRules(){return[e=>!!e||"Email обязателен к заполнению",e=>/.+@.+\..+/.test(e)||"Введите корректный email"]},phoneValidationRules(){return[e=>!!e||"Номер телефона обязателен к заполнению",e=>/^\d{10}$/.test(e)||"Введите 10 цифр номера телефона"]}},async mounted(){this.loadFromLocalStorage(),0!==this.users.length&&0!==this.todos.length||await Promise.all([this.getUsers(),this.getTodos()])},methods:{async getUsers(){this.isLoading=!0;try{const e=await w.Z.get("https://jsonplaceholder.typicode.com/users");this.users=e.data,this.saveToLocalStorage()}catch(e){console.error(e)}finally{this.isLoading=!1}},async getTodos(){this.isLoading=!0;try{const e=await w.Z.get("https://jsonplaceholder.typicode.com/todos");this.todos=e.data,this.saveToLocalStorage()}catch(e){console.error(e)}finally{this.isLoading=!1}},async showUserDetails(e){this.selectedUser=e,this.isLoading=!0;try{if(localStorage.getItem("todos")&&JSON.parse(localStorage.getItem("todos")).length>0)this.todos=JSON.parse(localStorage.getItem("todos")),this.showTodoModal=!0;else{const t=await w.Z.get(`https://jsonplaceholder.typicode.com/users/${e.id}/todos`);this.todos=t.data,this.showTodoModal=!0}}catch(t){console.error(t)}finally{this.isLoading=!1}},openEditModal(e){this.selectedUser=e,this.editUser={...e},this.showEditModal=!0},saveUserData(){this.selectedUser&&this.editUser&&(Object.assign(this.selectedUser,this.editUser),this.saveToLocalStorage(),this.closeEditModal())},cancelEdit(){this.editUser=null,this.closeEditModal()},closeEditModal(){this.showEditModal=!1},saveTodoList(){this.saveToLocalStorage(),this.closeTodoModal()},closeTodoModal(){this.showTodoModal=!1},truncateText(e,t){if(e&&e.length){if(e.length<=t)return this.capitalizeFirstLetter(e);const l=e.slice(0,t);return this.capitalizeFirstLetter(l)}},capitalizeFirstLetter(e){return e.charAt(0).toUpperCase()+e.slice(1)},saveToLocalStorage(){localStorage.setItem("users",JSON.stringify(this.users)),localStorage.setItem("todos",JSON.stringify(this.todos))},loadFromLocalStorage(){const e=localStorage.getItem("users"),t=localStorage.getItem("todos");e&&(this.users=JSON.parse(e)),t&&(this.todos=JSON.parse(t))}}});const v=(0,d.Z)(g,[["render",f]]);var y=v;const _=e=>((0,o.dD)("data-v-2b6dd3fb"),e=e(),(0,o.Cn)(),e),k=_((()=>(0,o._)("h2",{class:"text-2xl font-bold mb-4"},"Платежи",-1))),b=_((()=>(0,o._)("b",null,"Название",-1))),W=_((()=>(0,o._)("b",null,"Описание",-1))),U=_((()=>(0,o._)("b",null,"Сумма",-1)));function S(e,t,l,a,s,n){const i=(0,o.up)("v-progress-circular"),r=(0,o.up)("v-col"),d=(0,o.up)("v-row"),u=(0,o.up)("v-card-title"),c=(0,o.up)("v-btn"),m=(0,o.up)("v-card-actions"),h=(0,o.up)("v-card"),f=(0,o.up)("v-divider"),w=(0,o.up)("v-card-text"),g=(0,o.up)("v-dialog"),v=(0,o.up)("v-container");return(0,o.wg)(),(0,o.j4)(v,{class:"pt-4"},{default:(0,o.w5)((()=>[k,e.isLoading?((0,o.wg)(),(0,o.j4)(d,{key:0,class:"fill-height",align:"center",justify:"center"},{default:(0,o.w5)((()=>[(0,o.Wm)(r,{cols:"12",class:"text-center"},{default:(0,o.w5)((()=>[(0,o.Wm)(i,{indeterminate:"",size:"64",color:"primary"})])),_:1})])),_:1})):(0,o.kq)("",!0),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.payments,(t=>((0,o.wg)(),(0,o.j4)(h,{key:t?.id,class:"mb-4"},{default:(0,o.w5)((()=>[(0,o.Wm)(u,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,p.zw)(e.truncateText(t?.title,42)),1)])),_:2},1024),(0,o.Wm)(m,null,{default:(0,o.w5)((()=>[(0,o.Wm)(c,{onClick:l=>e.showPaymentDetails(t),color:"primary",dark:""},{default:(0,o.w5)((()=>[(0,o.Uk)(" Детали платежа ")])),_:2},1032,["onClick"])])),_:2},1024)])),_:2},1024)))),128)),(0,o.Wm)(g,{modelValue:e.showModal,"onUpdate:modelValue":t[0]||(t[0]=t=>e.showModal=t),"max-width":"500px"},{default:(0,o.w5)((()=>[(0,o.Wm)(h,null,{default:(0,o.w5)((()=>[(0,o.Wm)(u,null,{default:(0,o.w5)((()=>[(0,o.Uk)(" Детали платежа ")])),_:1}),(0,o.Wm)(f),(0,o.Wm)(w,null,{default:(0,o.w5)((()=>[(0,o._)("p",null,[b,(0,o.Uk)(": "+(0,p.zw)(e.truncateText(e.selectedPayment?.title,21)),1)]),(0,o._)("p",null,[W,(0,o.Uk)(": "+(0,p.zw)(e.truncateText(e.selectedPayment?.body,42)),1)]),(0,o._)("p",null,[U,(0,o.Uk)(": "+(0,p.zw)(e.calculateAmount(e.selectedPayment?.id)),1)])])),_:1}),(0,o.Wm)(m,null,{default:(0,o.w5)((()=>[(0,o.Wm)(c,{color:"blue darken-1",variant:"text",onClick:e.closeModal},{default:(0,o.w5)((()=>[(0,o.Uk)(" Закрыть ")])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1},8,["modelValue"])])),_:1})}var T=(0,o.aZ)({data(){return{payments:[],selectedPayment:null,showModal:!1,isLoading:!1}},mounted(){this.loadFromLocalStorage(),0===this.payments.length&&this.getPayments()},methods:{async getPayments(){this.isLoading=!0;try{if(localStorage.getItem("payments"))this.payments=JSON.parse(localStorage.getItem("payments"));else{const e=await w.Z.get("https://jsonplaceholder.typicode.com/posts");this.payments=e.data}}catch(e){console.error(e)}finally{this.isLoading=!1,this.saveToLocalStorage()}},showPaymentDetails(e){this.selectedPayment=e,this.showModal=!0},saveToLocalStorage(){localStorage.setItem("payments",JSON.stringify(this.payments))},loadFromLocalStorage(){const e=localStorage.getItem("payments");e&&(this.payments=JSON.parse(e))},closeModal(){this.selectedPayment=null,this.showModal=!1},calculateAmount(e){return e?e*Math.floor(99901*Math.random())+100:""},truncateText(e,t){if(e&&e.length){if(e.length<=t)return this.capitalizeFirstLetter(e);const l=e.slice(0,t);return this.capitalizeFirstLetter(l)}},capitalizeFirstLetter(e){return e.charAt(0).toUpperCase()+e.slice(1)}}});const x=(0,d.Z)(T,[["render",S],["__scopeId","data-v-2b6dd3fb"]]);var L=x;const M=[{path:"/",name:"Users",component:y},{path:"/payments",name:"Payments",component:L}],V=(0,m.p7)({history:(0,m.PO)("/cyberzilla-test/"),routes:M});var j=V,O=l(579),C=(l(556),l(773),l(4)),P=l(300);const z=(0,O.Rd)({components:C,directives:P});var E=z;(0,a.ri)(c).use(j).use(E).mount("#app")}},t={};function l(a){var o=t[a];if(void 0!==o)return o.exports;var s=t[a]={exports:{}};return e[a](s,s.exports,l),s.exports}l.m=e,function(){var e=[];l.O=function(t,a,o,s){if(!a){var n=1/0;for(u=0;u<e.length;u++){a=e[u][0],o=e[u][1],s=e[u][2];for(var i=!0,r=0;r<a.length;r++)(!1&s||n>=s)&&Object.keys(l.O).every((function(e){return l.O[e](a[r])}))?a.splice(r--,1):(i=!1,s<n&&(n=s));if(i){e.splice(u--,1);var d=o();void 0!==d&&(t=d)}}return t}s=s||0;for(var u=e.length;u>0&&e[u-1][2]>s;u--)e[u]=e[u-1];e[u]=[a,o,s]}}(),function(){l.d=function(e,t){for(var a in t)l.o(t,a)&&!l.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){l.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};l.O.j=function(t){return 0===e[t]};var t=function(t,a){var o,s,n=a[0],i=a[1],r=a[2],d=0;if(n.some((function(t){return 0!==e[t]}))){for(o in i)l.o(i,o)&&(l.m[o]=i[o]);if(r)var u=r(l)}for(t&&t(a);d<n.length;d++)s=n[d],l.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return l.O(u)},a=self["webpackChunktest"]=self["webpackChunktest"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=l.O(void 0,[998],(function(){return l(33)}));a=l.O(a)})();
//# sourceMappingURL=app.db46b9c5.js.map