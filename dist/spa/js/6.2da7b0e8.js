(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{"5aa9":function(t,s,a){},"5c65":function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("q-page",{staticClass:"row justify-center"},[a("div",{staticClass:"col-sm-12 col-md-6"},[a("div",{staticClass:"feed"},[a("router-link",{attrs:{to:"/message",tag:"div"}},[a("div",{staticClass:"row items-center back-title"},[a("q-icon",{staticClass:"link-cursor",attrs:{name:"arrow_left",size:"sm",color:"indigo-10"}}),a("div",{staticClass:"link-cursor back-font"},[t._v("Voltar")])],1)])],1),a("div",{staticClass:"row"},[a("div",{staticClass:"text-h4 feed-title"},[t._v("Resultados de Busca")])]),a("div",{staticClass:"feed-result"},[a("div",{staticClass:"back-font"},[t._v(t._s(t.searchCount)+' resultados encontrados para "'+t._s(t.searchName)+'"')])]),a("div",{staticClass:"row",staticStyle:{margin:"15px"}},t._l(this.users,(function(s,e){return a("div",{key:e,staticClass:"col-3"},[a("div",{staticClass:"shadow-2 card bg"},[a("div",{staticClass:"content-title link-cursor",staticStyle:{"border-radius":"10px"}},[a("router-link",{attrs:{to:"/userMessage/"+s.id,tag:"div"}},[a("div",{staticClass:"card-title"},[t._v(t._s(s.name))])])],1),a("div",{staticClass:"content-btn",staticStyle:{"border-bottom-right-radius":"10px","border-bottom-left-radius":"10px"}},[s.following?t._e():a("q-btn",{ref:"btnSubmit",refInFor:!0,staticStyle:{width:"100%"},attrs:{"no-caps":"",label:"Seguir",color:"indigo-10"},on:{click:function(a){return t.follow(s.id)}}}),s.following?a("q-btn",{staticStyle:{width:"100%"},attrs:{"no-caps":"",outline:"",label:"Seguindo",color:"indigo-10",disable:""}}):t._e()],1)])])})),0)])])},i=[],r=(a("e6cf"),a("f508")),o=a("d9b2"),c=a("f6ed"),n=a("c5fa"),l={name:"Search",data(){return{users:{},userid:"",searchName:"",searchCount:0}},methods:{async loadUsers(){try{r["a"].show({spinner:o["a"],spinnerSize:30,backgroundColor:"grey-4"});const t=await n["a"].get(`/user/${this.userid}/search?name=${this.searchName}`);t.data&&(this.users=t.data),r["a"].hide()}catch(t){r["a"].hide()}},async follow(t){try{r["a"].show({spinner:o["a"],spinnerSize:30,backgroundColor:"grey-4"});const s=await n["a"].post(`/following/${this.userid}/follow/${t}`);s.data&&this.loadUsers(),r["a"].hide()}catch(s){r["a"].hide()}}},async beforeMount(){this.searchName=this.$route.params.name,this.userid=c["a"].getUserId(),this.loadUsers()}},d=l,u=(a("be2b"),a("2877")),h=a("9989"),f=a("0016"),b=a("9c40"),w=a("eebe"),g=a.n(w),m=Object(u["a"])(d,e,i,!1,null,"2c5f17e7",null);s["default"]=m.exports;g()(m,"components",{QPage:h["a"],QIcon:f["a"],QBtn:b["a"]})},be2b:function(t,s,a){"use strict";a("5aa9")}}]);