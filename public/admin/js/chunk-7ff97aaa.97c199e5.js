(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7ff97aaa"],{"1ee4":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("form",{on:{submit:function(t){t.preventDefault()}}},[i("label",{staticClass:"type-label"},[t._v(t._s(t.$t("layouts.tabular.fields")))]),i("draggable",{attrs:{direction:"vertical"},on:{end:t.sort},model:{value:t.sortList,callback:function(e){t.sortList=e},expression:"sortList"}},t._l(t.sortList,(function(e){return i("div",{key:"tabular-layout-options-field-"+e.field,staticClass:"draggable"},[i("v-checkbox",{key:e.field,staticClass:"checkbox",attrs:{id:"tabular-layout-options-field-"+e.field,label:e.name,value:e.field,inputValue:t.fieldsInUse.includes(e.field)},on:{change:function(i){return t.toggleField(e.field)}}}),i("v-icon",{staticClass:"handle",attrs:{name:"drag_handle",color:"--input-border-color"}})],1)})),0),i("label",{staticClass:"type-label",attrs:{for:"spacing"}},[t._v(t._s(t.$t("spacing")))]),i("v-select",{staticClass:"select",attrs:{id:"spacing",value:t.viewOptions.spacing||"comfortable",options:{compact:t.$t("compact"),cozy:t.$t("cozy"),comfortable:t.$t("comfortable")},icon:"reorder"},on:{input:t.setSpacing}})],1)},r=[],s=(i("a4d3"),i("99af"),i("4de4"),i("4160"),i("caad"),i("c975"),i("a15b"),i("d81d"),i("fb6a"),i("a434"),i("e439"),i("dbb4"),i("b64b"),i("07ac"),i("ac1f"),i("2532"),i("1276"),i("159b"),i("ade3")),l=i("2909"),a=i("c3ff"),o=i.n(a);function c(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function u(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?c(Object(i),!0).forEach((function(e){Object(s["a"])(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):c(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var f={mixins:[o.a],data:function(){return{sortList:null}},computed:{fieldsInUse:function(){var t=this;return this.viewQuery&&this.viewQuery.fields?""===this.viewQuery.fields?[]:this.viewQuery.fields.split(",").filter((function(e){return t.fields[e]})):Object.values(this.fields).filter((function(t){return!1===t.primary_key||"0"===t.primary_key})).filter((function(t){return!0!==t.hidden_browse})).slice(0,4).map((function(t){return t.field}))}},watch:{fields:function(){this.initSortList()}},created:function(){this.initSortList()},methods:{setSpacing:function(t){this.$emit("options",{spacing:t})},toggleField:function(t){var e=Object(l["a"])(this.fieldsInUse);e.includes(t)?e.splice(e.indexOf(t),1):e.push(t);var i=this.sortList.map((function(t){return t.field})).filter((function(t){return e.includes(t)})).join();this.$emit("query",{fields:i})},sort:function(){var t=this;this.$emit("query",u({},this.viewQuery,{fields:this.sortList.map((function(t){return t.field})).filter((function(e){return t.fieldsInUse.includes(e)})).join()}))},initSortList:function(){var t=this;this.sortList=[].concat(Object(l["a"])(this.fieldsInUse.map((function(e){return t.fields[e]}))),Object(l["a"])(Object.values(this.fields).filter((function(e){return!t.fieldsInUse.includes(e.field)}))))}}},d=f,p=(i("3170"),i("2877")),b=Object(p["a"])(d,n,r,!1,null,"582c9845",null);e["default"]=b.exports},3170:function(t,e,i){"use strict";var n=i("6d1b"),r=i.n(n);r.a},"6d1b":function(t,e,i){},c3ff:function(t,e){t.exports={props:{primaryKeyField:{type:String,required:!0},fields:{type:Object,required:!0},items:{type:Array,default:()=>[]},viewOptions:{type:Object,default:()=>({})},viewQuery:{type:Object,default:()=>({})},loading:{type:Boolean,default:!1},lazyLoading:{type:Boolean,default:!1},selection:{type:Array,default:()=>[]},link:{type:String,default:null},sortField:{type:String,default:null},collection:{type:String,default:null}}}}}]);
//# sourceMappingURL=chunk-7ff97aaa.97c199e5.js.map