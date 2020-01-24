(function(e){function t(t){for(var i,r,u=t[0],l=t[1],c=t[2],d=0,m=[];d<u.length;d++)r=u[d],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&m.push(s[r][0]),s[r]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i]);o&&o(t);while(m.length)m.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],i=!0,u=1;u<n.length;u++){var l=n[u];0!==s[l]&&(i=!1)}i&&(a.splice(t--,1),e=r(r.s=n[0]))}return e}var i={},s={app:0},a=[];function r(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=i,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var c=0;c<u.length;c++)t(u[c]);var o=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var i=n("85ec"),s=n.n(i);s.a},"234c":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),s=n("1dce"),a=n.n(s),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[e._m(0),n("ValidationForm")],1)},u=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("a",{attrs:{href:"https://vuejs.org/",target:"_blank"}},[i("img",{attrs:{alt:"Vue logo",src:n("cf05")}})])}],l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"container mt-5"},[n("h1",[e._v("Vuelidate Example")]),e._m(0),n("form",{staticClass:"form m-auto",on:{submit:function(t){return t.preventDefault(),e.onSubmit(t)}}},[n("ul",{staticClass:"text-left"},[n("li",{class:{bzzz:e.isAdded,"text-success":e.isAdded}},[e._v(" Adding input field, ")]),n("li",{class:{bzzz:e.isDeleted,"text-success":e.isDeleted}},[e._v(" Deleting input field, ")]),n("li",[e._v("Numeric field control,")]),n("li",[e._v("Require field control,")]),n("li",[e._v("Max and min character length control,")]),n("li",[e._v("Unique field value checks")])]),e._l(e.myInputs,(function(t,i){return n("div",{key:i,staticClass:"row"},[n("div",{staticClass:"col"},[n("div",{staticClass:"form-group"},[n("div",{staticClass:"d-flex align-items-center"},[n("input",{directives:[{name:"model",rawName:"v-model.number",value:t.value,expression:"inputItem.value",modifiers:{number:!0}}],staticClass:"form-control",class:{invalid:e.$v.myInputs.$each[i].$error},attrs:{type:"number",placeholder:"Enter the serial number.",id:t.id},domProps:{value:t.value},on:{blur:[function(t){return e.$v.myInputs.$each[i].value.$touch()},function(t){return e.$forceUpdate()}],input:function(n){n.target.composing||e.$set(t,"value",e._n(n.target.value))}}}),n("i",{directives:[{name:"show",rawName:"v-show",value:i||!i&&e.myInputs.length>1,expression:"index || (!index && myInputs.length > 1)"}],staticClass:"ml-2 material-icons form-icon",on:{click:function(t){return e.removeInput(i)}}},[e._v(" remove_circle ")]),n("i",{directives:[{name:"show",rawName:"v-show",value:i==e.myInputs.length-1,expression:"index == myInputs.length - 1"}],staticClass:"ml-2 material-icons form-icon",on:{click:e.addInput}},[e._v(" add_circle ")])]),e.$v.myInputs.$each[i].value.minLen?e._e():n("div",{staticClass:"text-danger text-left mt-1",class:{bzzz:!e.$v.myInputs.$each[i].value.minLen}},[e._v(" This field must be min "+e._s(e.$v.myInputs.$each[i].value.$params.minLen.min)+" characters in length. ")]),e.$v.myInputs.$each[i].value.maxLen?e._e():n("div",{staticClass:"text-danger text-left mt-1",class:{bzzz:!e.$v.myInputs.$each[i].value.maxLen}},[e._v(" This field must be max "+e._s(e.$v.myInputs.$each[i].value.$params.maxLen.max)+" characters in length. ")]),!e.$v.myInputs.$each[i].value.required&&e.$v.myInputs.$each[i].value.$dirty?n("div",{staticClass:"text-danger text-left mt-1",class:{bzzz:!e.$v.myInputs.$each[i].value.required&&e.$v.myInputs.$each[i].value.$dirty}},[e._v(" The field cannot be empty. ")]):e._e(),e.$v.myInputs.$each[i].isUnique?e._e():n("div",{staticClass:"text-danger text-left mt-1",class:{bzzz:!e.$v.myInputs.$each[i].isUnique}},[e._v(" The field value is not repeated. ")])])])])})),n("div",{staticClass:"text-left"},[n("button",{staticClass:"btn btn-success mr-2",attrs:{type:"submit",disabled:e.$v.$invalid}},[e._v(" Submit ")]),n("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:e.resetForm}},[e._v(" Reset ")])]),e.isSubmited?n("div",{staticClass:"mt-4"},[n("p",{staticClass:"text-success"},[e._v("Form is Submited!")]),n("div",{staticClass:"text-left"},[n("h6",[e._v("Form Values:")]),n("ul",e._l(e.myInputs,(function(t,i){return n("li",{key:i},[e._v(" "+e._s(t.value)+" ")])})),0)])]):e._e()],2)])])},c=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v(" This example validates the following checks using the required, numeric, minLength, maxLength, $each properties of the "),n("a",{attrs:{href:"https://vuelidate.js.org/",target:"_blank"}},[e._v("Vuelidate.")])])}],o=(n("4de4"),n("a434"),n("d3b7"),n("b5ae")),d={name:"ValidationForm",data:function(){return{myInputs:[{value:""}],isSubmited:!1,isAdded:!1,isDeleted:!1}},validations:{myInputs:{required:o["required"],minLen:Object(o["minLength"])(1),$each:{value:{required:o["required"],numeric:o["numeric"],minLen:Object(o["minLength"])(3),maxLen:Object(o["maxLength"])(6)},isUnique:function(e){var t=this;return""===e.value||new Promise((function(n){var i=t.myInputs.filter((function(t){return t.value==e.value}));n(1==i.length)}))}}}},methods:{addInput:function(){this.myInputs.push({value:""}),this.isSubmited=!1,this.isAdded=!0},removeInput:function(e){this.myInputs.splice(e,1),this.isSubmited=!1,this.isDeleted=!0},resetForm:function(){for(var e=0;e<this.myInputs.length;e++)this.myInputs[e].value="";this.isSubmited=!1},onSubmit:function(){this.isSubmited=!0,console.log("Submited")}},watch:{isAdded:function(){var e=this;setTimeout((function(){e.isAdded=!1}),300)},isDeleted:function(){var e=this;setTimeout((function(){e.isDeleted=!1}),300)}}},m=d,v=(n("eb3d"),n("2877")),p=Object(v["a"])(m,l,c,!1,null,"b6fb75f2",null),f=p.exports,h={name:"app",components:{ValidationForm:f}},b=h,y=(n("034f"),Object(v["a"])(b,r,u,!1,null,null,null)),_=y.exports;i["a"].use(a.a),i["a"].config.productionTip=!1,new i["a"]({render:function(e){return e(_)}}).$mount("#app")},"85ec":function(e,t,n){},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"},eb3d:function(e,t,n){"use strict";var i=n("234c"),s=n.n(i);s.a}});
//# sourceMappingURL=app.f297edac.js.map