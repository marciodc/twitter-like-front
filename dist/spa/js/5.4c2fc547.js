(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"110c":function(t,s,e){"use strict";e("a4f4")},"997d":function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("q-page",{staticClass:"row justify-center"},[e("div",{staticClass:"col-sm-12 col-md-4"},[e("div",{staticClass:"text-center feed"},[e("div",{staticClass:"feed-title"},[t._v("Feed")])]),e("div",{staticClass:"col-xs-12 col-md-12 shadow-2 bg",staticStyle:{"border-radius":"10px"}},[e("header",{staticClass:"bg",staticStyle:{"border-radius":"10px"}},[e("q-bar",{staticClass:"rounded-borders bg",staticStyle:{"border-radius":"10px"}},[e("div",{staticClass:"message_username card-title"},[t._v(t._s(t.username))]),e("q-space"),e("q-btn-dropdown",{attrs:{flat:"",label:"",icon:t.isPublic?"o_public":"o_lock",color:"blue-grey-13"}},[e("q-list",[e("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:""}},[e("q-item-section",{attrs:{side:""}},[e("q-icon",{attrs:{name:"o_public"}})],1),e("q-item-section",[e("q-item-label",{on:{click:function(s){t.isPublic=!0}}},[t._v("Público")])],1)],1),e("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:""}},[e("q-item-section",{attrs:{side:""}},[e("q-icon",{attrs:{name:"o_lock"}})],1),e("q-item-section",[e("q-item-label",{on:{click:function(s){t.isPublic=!1}}},[t._v("Privado")])],1)],1)],1)],1)],1)],1),e("div",{staticClass:"q-pt-md"},[e("div",{staticClass:"text",staticStyle:{width:"100%"}},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],staticStyle:{width:"100%"},attrs:{rows:"4",placeholder:"O que você gostaria de compartilhar?"},domProps:{value:t.text},on:{input:function(s){s.target.composing||(t.text=s.target.value)}}})])]),e("footer",{staticStyle:{"border-bottom-right-radius":"10px","border-bottom-left-radius":"10px"}},[e("div",{staticClass:"row shadow-2 q-pa-md",staticStyle:{"border-bottom-right-radius":"10px","border-bottom-left-radius":"10px"}},[e("div",{staticClass:"col-md-8"},[e("div",{staticClass:"row justify-start custom-radios"},[e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.color,expression:"color"}],attrs:{type:"radio",id:"color-1",name:"color",value:"1",checked:""},domProps:{checked:t._q(t.color,"1")},on:{change:function(s){t.color="1"}}}),e("label",{attrs:{for:"color-1"}},[e("span",[e("img",{attrs:{src:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg",alt:"Checked Icon"}})])])]),e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.color,expression:"color"}],attrs:{type:"radio",id:"color-2",name:"color",value:"2"},domProps:{checked:t._q(t.color,"2")},on:{change:function(s){t.color="2"}}}),e("label",{attrs:{for:"color-2"}},[e("span",[e("img",{attrs:{src:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg",alt:"Checked Icon"}})])])]),e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.color,expression:"color"}],attrs:{type:"radio",id:"color-3",name:"color",value:"3"},domProps:{checked:t._q(t.color,"3")},on:{change:function(s){t.color="3"}}}),e("label",{attrs:{for:"color-3"}},[e("span",[e("img",{attrs:{src:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg",alt:"Checked Icon"}})])])]),e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.color,expression:"color"}],attrs:{type:"radio",id:"color-4",name:"color",value:"4"},domProps:{checked:t._q(t.color,"4")},on:{change:function(s){t.color="4"}}}),e("label",{attrs:{for:"color-4"}},[e("span",[e("img",{attrs:{src:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg",alt:"Checked Icon"}})])])])])]),e("div",{staticClass:"col-md-4"},[e("div",{staticClass:"row justify-end"},[e("q-btn",{ref:"btnSubmit",staticClass:"col-md-12",attrs:{"no-caps":"",label:"Publicar",color:"indigo-10"},on:{click:function(s){return t.savePost()}}})],1)])])])]),t._l(this.newMessages,(function(s){return e("div",{key:s.id,staticClass:"card shadow-1",class:t.getColor(s.color),staticStyle:{"margin-top":"25px"}},[e("div",{staticClass:"column",staticStyle:{"border-top-right-radius":"5px"}},[e("div",{staticClass:"content-title"},[e("div",{staticClass:"text-subtitle2 card-title"},[t._v(t._s(t.username))])]),e("div",{staticClass:"separator"}),e("div",{staticClass:"content",staticStyle:{"border-bottom-right-radius":"5px"}},[t._v("\n          "+t._s(s.text)+"\n        ")])])])})),e("div",{staticClass:"col-xs-12 col-md-12 shadow-2 newf",staticStyle:{"border-radius":"10px"}},[e("div",{staticClass:"text-center"},[e("div",{staticClass:"users line1"},[t._v("\n          Veja o que as pessoas estão compartilhando!\n        ")]),e("div",{staticClass:"users line2"},[e("b",[t._v("Siga mais pessoas")]),t._v(" para ter um feed personalizado.\n        ")])]),e("div",{staticClass:"row",staticStyle:{margin:"15px"}},t._l(this.users,(function(s,a){return e("div",{key:a,staticClass:"col-4"},[e("div",{staticClass:"shadow-2",staticStyle:{"border-radius":"10px","margin-bottom":"15px","margin-right":"10px"}},[e("div",{staticClass:"content-title link-cursor",staticStyle:{"border-radius":"10px"}},[e("router-link",{attrs:{to:"/userMessage/"+s.id,tag:"div"}},[e("div",{staticClass:"card-title"},[t._v(t._s(s.name))])])],1),e("div",{staticClass:"content-btn",staticStyle:{"border-bottom-right-radius":"10px","border-bottom-left-radius":"10px"}},[s.following?t._e():e("q-btn",{ref:"btnSubmit",refInFor:!0,staticStyle:{width:"100%"},attrs:{"no-caps":"",label:"Seguir",color:"indigo-10"},on:{click:function(e){return t.follow(s.id)}}}),s.following?e("q-btn",{staticStyle:{width:"100%"},attrs:{"no-caps":"",outline:"",label:"Seguindo",color:"indigo-10",disable:""}}):t._e()],1)])])})),0)]),t._l(this.messages,(function(s,a){return e("div",{key:a,staticClass:"card shadow-1",class:t.getColor(s.color),staticStyle:{"margin-top":"25px"}},[e("div",{staticClass:"column",staticStyle:{"border-top-right-radius":"5px"}},[e("div",{staticClass:"content-title"},[e("div",{staticClass:"text-subtitle2 card-title"},[t._v(t._s(s.name))])]),e("div",{staticClass:"separator"}),e("div",{staticClass:"content",staticStyle:{"border-bottom-right-radius":"5px"}},[t._v("\n          "+t._s(s.text)+"\n        ")])])])}))],2)])},o=[],i=e("ded3"),r=e.n(i),c=(e("e6cf"),e("2f62")),l=e("f508"),n=e("d9b2"),d=e("f6ed"),u=e("c5fa"),m={name:"PageIndex",data(){return{messages:[],newMessages:[],users:[],color:1,text:"",isPublic:!0,userid:"",username:""}},methods:r()(r()({},Object(c["c"])("auth",["logged","userId","userName"])),{},{getColor(t){switch(t){case 1:return"green";case 2:return"red";case 3:return"yellow";case 4:return"navy"}},setPublic(t){this.isPublic=t},async savePost(){try{l["a"].show({spinner:n["a"],spinnerSize:30,backgroundColor:"grey-4"});const s={userId:this.userid,text:this.text,public:this.isPublic,color:this.color},e=await u["a"].post(`/message/${this.userid}/new`,s);if(e.data){var t={id:this.newMessages.length+1,text:this.text,color:Number(this.color)};this.newMessages.unshift(t),this.text="",this.isPublic=!0,this.color=1}l["a"].hide()}catch(s){l["a"].hide()}},async loadMessages(){try{l["a"].show({spinner:n["a"],spinnerSize:30,backgroundColor:"grey-4"});const t=await u["a"].get(`/message/${this.userid}/following`);t.data&&(this.messages=t.data),l["a"].hide()}catch(t){l["a"].hide()}},async loadUsers(){try{l["a"].show({spinner:n["a"],spinnerSize:30,backgroundColor:"grey-4"});const t=await u["a"].get(`/message/${this.userid}/mostActive`);t.data&&(this.users=t.data),l["a"].hide()}catch(t){l["a"].hide()}},async follow(t){try{l["a"].show({spinner:n["a"],spinnerSize:30,backgroundColor:"grey-4"});const s=await u["a"].post(`/following/${this.userid}/follow/${t}`);s.data&&(this.loadMessages(),this.loadUsers()),l["a"].hide()}catch(s){l["a"].hide()}}}),watch:{"$store.state.userId":{immediate:!0,handler(){this.userid=d["a"].getUserId(),this.username=d["a"].getUserName(),this.loadMessages(),this.loadUsers()}}},sockets:{connect(){console.log("usuario conectado")},disconnect(){console.log("usuario desconectado")},newMessage(t){this.loadMessages(),this.loadUsers()}},async beforeMount(){this.loadMessages(),this.loadUsers(),this.$socket.emit("join",this.userid)}},p=m,h=(e("110c"),e("2877")),v=e("9989"),g=e("d847"),b=e("2c91"),w=e("f20b"),f=e("1c1c"),C=e("66e5"),x=e("4074"),y=e("0016"),k=e("0170"),_=e("9c40"),S=e("7f67"),q=e("eebe"),P=e.n(q),I=Object(h["a"])(p,a,o,!1,null,"dadf72e2",null);s["default"]=I.exports;P()(I,"components",{QPage:v["a"],QBar:g["a"],QSpace:b["a"],QBtnDropdown:w["a"],QList:f["a"],QItem:C["a"],QItemSection:x["a"],QIcon:y["a"],QItemLabel:k["a"],QBtn:_["a"]}),P()(I,"directives",{ClosePopup:S["a"]})},a4f4:function(t,s,e){}}]);