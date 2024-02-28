(function(){"use strict";var e={8472:function(e,t,r){var n=r(6848),i=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[e._m(0),t("main",[t("ClientForm")],1)])},o=[function(){var e=this,t=e._self._c;return t("header",[t("h1",[e._v("Регистрация клиента")])])}],a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"client-form"},[t("form",{on:{submit:function(t){return t.preventDefault(),e.submitForm.apply(null,arguments)}}},[t("div",{staticClass:"form-group form-group-fio"},[t("div",{staticClass:"form"},[t("label",{class:{"error-label":e.$v.client.surname.$error},attrs:{for:"surname"}},[e._v("Фамилия*")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.client.surname,expression:"client.surname"}],attrs:{type:"text",id:"surname"},domProps:{value:e.client.surname},on:{blur:function(t){return e.$v.client.surname.$touch()},input:function(t){t.target.composing||e.$set(e.client,"surname",t.target.value)}}})]),t("div",{staticClass:"form"},[t("label",{class:{"error-label":e.$v.client.name.$error},attrs:{for:"name"}},[e._v("Имя*")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.client.name,expression:"client.name"}],attrs:{type:"text",id:"name"},domProps:{value:e.client.name},on:{blur:function(t){return e.$v.client.name.$touch()},input:function(t){t.target.composing||e.$set(e.client,"name",t.target.value)}}})]),t("div",{staticClass:"form"},[t("label",{attrs:{for:"patronymic"}},[e._v("Отчество")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.client.patronymic,expression:"client.patronymic"}],attrs:{type:"text",id:"patronymic"},domProps:{value:e.client.patronymic},on:{input:function(t){t.target.composing||e.$set(e.client,"patronymic",t.target.value)}}})])]),t("div",{staticClass:"form-group form-group-contact"},[t("div",{staticClass:"form"},[t("label",{class:{"error-label":e.$v.client.birthDate.$error},attrs:{for:"birthDate"}},[e._v("Дата рождения*")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.client.birthDate,expression:"client.birthDate"}],attrs:{type:"date",id:"birthDate"},domProps:{value:e.client.birthDate},on:{blur:function(t){return e.$v.client.birthDate.$touch()},input:function(t){t.target.composing||e.$set(e.client,"birthDate",t.target.value)}}})]),t("div",{staticClass:"form"},[t("label",{class:{"error-label":e.$v.client.phone.$error},attrs:{for:"phone"}},[e._v("Номер телефона*")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.client.phone,expression:"client.phone"}],attrs:{type:"text",id:"phone"},domProps:{value:e.client.phone},on:{blur:function(t){return e.$v.client.phone.$touch()},input:function(t){t.target.composing||e.$set(e.client,"phone",t.target.value)}}})]),t("div",{staticClass:"form"},[t("label",{attrs:{for:"gender"}},[e._v("Пол")]),t("select",{directives:[{name:"model",rawName:"v-model",value:e.client.gender,expression:"client.gender"}],attrs:{id:"gender"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.client,"gender",t.target.multiple?r:r[0])}}},[t("option",{attrs:{value:"male"}},[e._v("Мужской")]),t("option",{attrs:{value:"female"}},[e._v("Женский")])])])]),t("div",{staticClass:"form-group form-group-address"},[t("div",{staticClass:"form"},[t("label",{attrs:{for:"postalCode"}},[e._v("Индекс")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.client.postalCode,expression:"client.postalCode"}],attrs:{type:"text",id:"postalCode"},domProps:{value:e.client.postalCode},on:{input:function(t){t.target.composing||e.$set(e.client,"postalCode",t.target.value)}}})]),t("div",{staticClass:"form"},[t("label",{attrs:{for:"country"}},[e._v("Страна")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.client.country,expression:"client.country"}],attrs:{type:"text",id:"country"},domProps:{value:e.client.country},on:{input:function(t){t.target.composing||e.$set(e.client,"country",t.target.value)}}})]),t("div",{staticClass:"form"},[t("label",{attrs:{for:"region"}},[e._v("Область")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.client.region,expression:"client.region"}],attrs:{type:"text",id:"region"},domProps:{value:e.client.region},on:{input:function(t){t.target.composing||e.$set(e.client,"region",t.target.value)}}})]),t("div",{staticClass:"form"},[t("label",{class:{"error-label":e.$v.client.city.$error},attrs:{for:"city"}},[e._v("Город*")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.client.city,expression:"client.city"}],attrs:{type:"text",id:"city"},domProps:{value:e.client.city},on:{blur:function(t){return e.$v.client.city.$touch()},input:function(t){t.target.composing||e.$set(e.client,"city",t.target.value)}}})]),t("div",{staticClass:"form"},[t("label",{attrs:{for:"street"}},[e._v("Улица")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.client.street,expression:"client.street"}],attrs:{type:"text",id:"street"},domProps:{value:e.client.street},on:{input:function(t){t.target.composing||e.$set(e.client,"street",t.target.value)}}})]),t("div",{staticClass:"form"},[t("label",{attrs:{for:"house"}},[e._v("Дом")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.client.house,expression:"client.house"}],attrs:{type:"text",id:"house"},domProps:{value:e.client.house},on:{input:function(t){t.target.composing||e.$set(e.client,"house",t.target.value)}}})])]),t("div",{staticClass:"form-group form-group-passport"},[t("div",{staticClass:"form"},[t("label",{class:{"error-label":e.$v.client.documentType.$error},attrs:{for:"documentType"}},[e._v("Тип документа*")]),t("select",{directives:[{name:"model",rawName:"v-model",value:e.client.documentType,expression:"client.documentType"}],attrs:{id:"documentType"},on:{blur:function(t){return e.$v.client.documentType.$touch()},change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.client,"documentType",t.target.multiple?r:r[0])}}},[t("option",{attrs:{value:"passport"}},[e._v("Паспорт")]),t("option",{attrs:{value:"birthCertificate"}},[e._v("Свидетельство о рождении")]),t("option",{attrs:{value:"driverLicense"}},[e._v("Вод. удостоверение")])])]),t("div",{staticClass:"form"},[t("label",{attrs:{for:"series"}},[e._v("Серия")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.client.series,expression:"client.series"}],attrs:{type:"text",id:"series"},domProps:{value:e.client.series},on:{input:function(t){t.target.composing||e.$set(e.client,"series",t.target.value)}}})]),t("div",{staticClass:"form"},[t("label",{attrs:{for:"number"}},[e._v("Номер")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.client.number,expression:"client.number"}],attrs:{type:"text",id:"number"},domProps:{value:e.client.number},on:{input:function(t){t.target.composing||e.$set(e.client,"number",t.target.value)}}})]),t("div",{staticClass:"form"},[t("label",{attrs:{for:"issuedBy"}},[e._v("Кем выдан")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.client.issuedBy,expression:"client.issuedBy"}],attrs:{type:"text",id:"issuedBy"},domProps:{value:e.client.issuedBy},on:{input:function(t){t.target.composing||e.$set(e.client,"issuedBy",t.target.value)}}})]),t("div",{staticClass:"form"},[t("label",{class:{"error-label":e.$v.client.issueDate.$error},attrs:{for:"issueDate"}},[e._v("Дата выдачи*")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.client.issueDate,expression:"client.issueDate"}],attrs:{type:"date",id:"issueDate"},domProps:{value:e.client.issueDate},on:{blur:function(t){return e.$v.client.issueDate.$touch()},input:function(t){t.target.composing||e.$set(e.client,"issueDate",t.target.value)}}})])]),t("div",{staticClass:"form-group form-group-info"},[t("div",{staticClass:"form"},[t("label",{class:{"error-label":e.$v.client.clientGroup.$error},attrs:{for:"clientGroup"}},[e._v("Группа клиентов*")]),t("select",{directives:[{name:"model",rawName:"v-model",value:e.client.clientGroup,expression:"client.clientGroup"}],attrs:{id:"clientGroup",multiple:""},on:{blur:function(t){return e.$v.client.clientGroup.$touch()},change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.client,"clientGroup",t.target.multiple?r:r[0])}}},[t("option",{attrs:{value:"VIP"}},[e._v("VIP")]),t("option",{attrs:{value:"Проблемные"}},[e._v("Проблемные")]),t("option",{attrs:{value:"ОМС"}},[e._v("ОМС")])])]),t("div",{staticClass:"form"},[t("label",{attrs:{for:"doctor"}},[e._v("Лечащий врач")]),t("select",{directives:[{name:"model",rawName:"v-model",value:e.client.doctor,expression:"client.doctor"}],attrs:{id:"doctor"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.client,"doctor",t.target.multiple?r:r[0])}}},[t("option",{attrs:{value:"Иванов"}},[e._v("Иванов")]),t("option",{attrs:{value:"Захаров"}},[e._v("Захаров")]),t("option",{attrs:{value:"Чернышева"}},[e._v("Чернышева")])])])]),t("div",{staticClass:"checkbox"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.client.noSms,expression:"client.noSms"}],attrs:{type:"checkbox",id:"noSms"},domProps:{checked:Array.isArray(e.client.noSms)?e._i(e.client.noSms,null)>-1:e.client.noSms},on:{change:function(t){var r=e.client.noSms,n=t.target,i=!!n.checked;if(Array.isArray(r)){var o=null,a=e._i(r,o);n.checked?a<0&&e.$set(e.client,"noSms",r.concat([o])):a>-1&&e.$set(e.client,"noSms",r.slice(0,a).concat(r.slice(a+1)))}else e.$set(e.client,"noSms",i)}}}),t("label",{attrs:{for:"noSms"}},[e._v("Не отправлять СМС")])]),e._m(0)])])},s=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"button-container"},[t("button",{attrs:{type:"submit"}},[e._v("Создать клиента")])])}],l=r(6049),c=r(6529);const u=l._$.regex("isNumeric",/^\d+$/);var m={mixins:[c.Hy],data(){return{client:{surname:"",name:"",patronymic:"",birthDate:"",phone:"",gender:"",clientGroup:[],doctor:"",noSms:!1,postalCode:"",country:"",region:"",city:"",street:"",house:"",documentType:"",series:"",number:"",issuedBy:"",issueDate:""}}},validations:{client:{surname:{required:l.mw},name:{required:l.mw},birthDate:{required:l.mw},phone:{required:l.mw,minLength:(0,l.Bp)(11),maxLength:(0,l.Ru)(11),isNumeric(e){return/^\d+$/.test(e)}},clientGroup:{required:l.mw,minLength:(0,l.Bp)(1)},city:{required:l.mw},documentType:{required:l.mw},issueDate:{required:l.mw},postalCode:{minLength:(0,l.Bp)(5),maxLength:(0,l.Ru)(6),isNumeric:u},series:{minLength:(0,l.Bp)(4),maxLength:(0,l.Ru)(4),isNumeric:u},number:{minLength:(0,l.Bp)(6),maxLength:(0,l.Ru)(6),isNumeric:u},street:{},house:{},region:{},country:{},issuedBy:{}}},methods:{submitForm(){this.$v.$touch(),this.$v.$invalid?alert("Форма содержит ошибки"):alert("Новый клиент успешно создан")}}},v=m,p=r(1656),d=(0,p.A)(v,a,s,!1,null,"0ce44392",null),f=d.exports,g={name:"App",components:{ClientForm:f}},y=g,h=(0,p.A)(y,i,o,!1,null,null,null),b=h.exports;n.Ay.config.productionTip=!1,new n.Ay({render:e=>e(b)}).$mount("#app")}},t={};function r(n){var i=t[n];if(void 0!==i)return i.exports;var o=t[n]={exports:{}};return e[n].call(o.exports,o,o.exports,r),o.exports}r.m=e,function(){var e=[];r.O=function(t,n,i,o){if(!n){var a=1/0;for(u=0;u<e.length;u++){n=e[u][0],i=e[u][1],o=e[u][2];for(var s=!0,l=0;l<n.length;l++)(!1&o||a>=o)&&Object.keys(r.O).every((function(e){return r.O[e](n[l])}))?n.splice(l--,1):(s=!1,o<a&&(a=o));if(s){e.splice(u--,1);var c=i();void 0!==c&&(t=c)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[n,i,o]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={524:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var i,o,a=n[0],s=n[1],l=n[2],c=0;if(a.some((function(t){return 0!==e[t]}))){for(i in s)r.o(s,i)&&(r.m[i]=s[i]);if(l)var u=l(r)}for(t&&t(n);c<a.length;c++)o=a[c],r.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return r.O(u)},n=self["webpackChunkclient_registration_form"]=self["webpackChunkclient_registration_form"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=r.O(void 0,[504],(function(){return r(8472)}));n=r.O(n)})();
//# sourceMappingURL=app.dc7e2698.js.map