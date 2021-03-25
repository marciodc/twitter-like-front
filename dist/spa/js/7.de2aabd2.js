(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{"1e6c":function(e,t,r){},"5da5":function(e,t,r){"use strict";r("1e6c")},e422:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"window-height row justify-center q-mx-md items-center",staticStyle:{"background-color":"#f6f3fd"}},[r("div",{staticClass:"col-xs-12 col-sm-6 col-md-3 shadow-2 rounded-borders",staticStyle:{"background-color":"#fff"},style:"width: "+(e.$q.screen.lt.sm||e.$q.screen.lt.md?"":"320px")+";"},[r("div",{staticClass:"q-pa-md"},[e._m(0),r("q-input",{ref:"nome",staticClass:"col-12",attrs:{label:"Nome","float-label":"Nome",placeholder:"Seu nome","stack-label":"",outlined:"",required:"",dense:"","error-message":e.getMensagemErro(e.$v.user.name),error:e.$v.user.name.$error},model:{value:e.$v.user.name.$model,callback:function(t){e.$set(e.$v.user.name,"$model",t)},expression:"$v.user.name.$model"}}),r("p"),r("q-input",{ref:"email",staticClass:"col-12",attrs:{label:"E-mail","float-label":"E-mail",placeholder:"email@exemplo.com.br","stack-label":"",outlined:"",required:"",dense:"","error-message":e.getMensagemErro(e.$v.user.email),error:e.$v.user.email.$error},model:{value:e.$v.user.email.$model,callback:function(t){e.$set(e.$v.user.email,"$model",t)},expression:"$v.user.email.$model"}}),r("p"),r("q-input",{ref:"password",staticClass:"col-12",attrs:{label:"Senha","float-label":"Senha",placeholder:"******",type:"password","stack-label":"",required:"",outlined:"",dense:"","error-message":e.getMensagemErro(e.$v.user.password),error:e.$v.user.password.$error},model:{value:e.$v.user.password.$model,callback:function(t){e.$set(e.$v.user.password,"$model",t)},expression:"$v.user.password.$model"}}),r("p"),r("q-input",{ref:"confirm-password",staticClass:"col-12",attrs:{label:"Confirmar Senha","float-label":"Confirmar Senha",placeholder:"******",type:"password","stack-label":"",required:"",outlined:"",dense:"","error-message":e.getMensagemErro(e.$v.user.confirmPassword),error:e.$v.user.confirmPassword.$error},model:{value:e.$v.user.confirmPassword.$model,callback:function(t){e.$set(e.$v.user.confirmPassword,"$model",t)},expression:"$v.user.confirmPassword.$model"}}),r("p"),e._m(1),r("div",{staticClass:"row"},[r("q-btn",{ref:"btnSubmit",staticClass:"col-12",attrs:{"no-caps":"",label:"Cadastro",color:"indigo-10"},on:{click:function(t){return e.postData()}}})],1)],1)])])},s=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"text-center title"},[r("div",{staticClass:"text-h5 title-text"},[e._v("Cadastro")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"row justify-center"},[r("p",{staticStyle:{color:"#6E6E6E"}},[e._v("A sua senha deve ter no mínimo 6 caracteres")])])}],n=r("ded3"),o=r.n(n),i=(r("e6cf"),r("2f62")),l=r("b5ae"),c=(r("5319"),r("4e82"),r("ddb0"),r("c5fa"));const d={getMensagemErro(e){return e.$error?Object.prototype.hasOwnProperty.call(e,"maxLength")&&!e.maxLength?`Deve ter até ${e.$params.maxLength.max} catecteres`:Object.prototype.hasOwnProperty.call(e,"minLength")&&!e.minLength?`Deve ter pelo menos ${e.$params.minLength.min} caracteres`:Object.prototype.hasOwnProperty.call(e,"numeric")&&!e.numeric?"Deve ter somente números":Object.prototype.hasOwnProperty.call(e,"email")&&!e.email?"Email inválido":Object.prototype.hasOwnProperty.call(e,"validaCPF")&&!e.validaCPF?"CPF Inválido":Object.prototype.hasOwnProperty.call(e,"validaCNPJ")&&!e.validaCNPJ?"CNPJ Inválido":Object.prototype.hasOwnProperty.call(e,"ValidaCPFCNPJ")&&!e.ValidaCPFCNPJ?"Número Inválido":Object.prototype.hasOwnProperty.call(e,"sameAsPassword")&&!e.sameAsPassword?"As senhas não coincidem":Object.prototype.hasOwnProperty.call(e,"isNotZero")&&!e.notZero?"Digite algum valor":Object.prototype.hasOwnProperty.call(e,"isValidDate")&&!e.notZero?"Data inválida":Object.prototype.hasOwnProperty.call(e,"IsCPFCNPJUnique")&&!e.IsCPFCNPJUnique?e.$model?"O CPF/CNPJ já foi cadastrado":"Preenchimento obrigatório":Object.prototype.hasOwnProperty.call(e,"isValidCFOPCode")&&!e.isValidCFOPCode?e.$model?"O Código CFOP Não É Válido":"Preenchimento obrigatório":e.required?void 0:"Preenchimento obrigatório":""},isEmailAddress(e){const t=/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;return t.test(e)},isNotEmpty(e){const t=/\S+/;return t.test(e)},isNumber(e){const t=/^\d+$/;return t.test(e)},isSame(e,t){return e===t},isNumberKey(e){e||(e=window.event);const t=e.which?e.which:e.keyCode;if(!(t>31&&(t<48||t>57)&&46!==t))return!0;e.preventDefault()},validaCPF(e){if(!e)return!0;if(e=e.replace(/[^\d]+/g,""),""===e)return!0;if(11!==e.length||"00000000000"===e||"11111111111"===e||"22222222222"===e||"33333333333"===e||"44444444444"===e||"55555555555"===e||"66666666666"===e||"77777777777"===e||"88888888888"===e||"99999999999"===e)return!1;let t=0;for(let a=0;a<9;a++)t+=parseInt(e.charAt(a))*(10-a);let r=11-t%11;if(10!==r&&11!==r||(r=0),r!==parseInt(e.charAt(9)))return!1;t=0;for(let a=0;a<10;a++)t+=parseInt(e.charAt(a))*(11-a);return r=11-t%11,10!==r&&11!==r||(r=0),r===parseInt(e.charAt(10))},validaCNPJ(e){if(!e)return!0;if(e=e.replace(/[^\d]+/g,""),""===e)return!0;if(14!==e.length)return!1;if("00000000000000"===e||"111111111111111"===e||"22222222222222"===e||"33333333333333"===e||"44444444444444"===e||"55555555555555"===e||"66666666666666"===e||"77777777777777"===e||"88888888888888"===e||"99999999999999"===e)return!1;let t=e.length-2,r=e.substring(0,t);const a=e.substring(t);let s=0,n=t-7;for(let i=t;i>=1;i--)s+=r.charAt(t-i)*n--,n<2&&(n=9);let o=s%11<2?0:11-s%11;if(o!==parseInt(a.charAt(0)))return!1;t+=1,r=e.substring(0,t),s=0,n=t-7;for(let i=t;i>=1;i--)s+=r.charAt(t-i)*n--,n<2&&(n=9);return o=s%11<2?0:11-s%11,o===parseInt(a.charAt(1))},async searchDuplicatedCpfCnpj(e){if(!e)return;const t=await c["a"].customGet(`/cadastros-basicos/parceiros?q=${e}&field=cpf_cnpj`);return!(t&&t.data.parceiros.length>0)},async searchValidCFOPCode(e){if(!e)return;const t=await c["a"].customGet(`cadastros-comuns/cfop/${e}`);return!(t&&t.data.length>0)},isValidDate(e){if(e&&10===e.length){const t=new RegExp("^(0[1-9]|[12][0-9]|3[01])/(0[1-9]|1[012])/[12][0-9]{3}$","ig");return t.test(e)}if(e&&7===e.length){const t=new RegExp("^(0[1-9]|1[012])/[12][0-9]{3}$","ig");return t.test(e)}return!1},formatFloat(e,t=2,r=",",a="."){try{t=Math.abs(t),t=isNaN(t)?2:t;const s=e<0?"-":"",n=parseInt(e=Math.abs(Number(e)||0).toFixed(t)).toString(),o=n.length>3?n.length%3:0;return s+(o?n.substr(0,o)+a:"")+n.substr(o).replace(/(\d{3})(?=\d)/g,"$1"+a)+(t?r+Math.abs(e-n).toFixed(t).slice(2):"")}catch(s){}},formataCpfCnpj(e){if(!e)return;let t="";return t=e&&11===e.length?e.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/,"$1.$2.$3-$4"):e.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g,"$1.$2.$3/$4-$5"),t},formataNumeroTelefone(e){let t="";return t=e&&e.length<11?e.replace(/(\d{2})(\d{4})(\d{4})/g,"($1) $2-$3"):e.replace(/(\d{2})(\d{5})(\d{4})/g,"($1) $2-$3"),t},highlightSearch(e,t,r){return r&&r.length>2&&!e?t.replace(new RegExp(r,"gi"),(e=>`<span class="text-bold text-blue-10">${e}</span>`)):t},disableHandler(e){return 1!==e.length||!(!e[0].status||"A"!==e[0].status)},disableHandlerEdit(e){return 1!==e.length},disableHandlerEstorno(e){return!e||1!==e.length||!e[0].pagamentoRecebimentoOrigemId},disableHandlerEstornoPagRec(e){return!e||1!==e.length},getElementsMissing(e,t,r){let a=e.filter((e=>!t.find((t=>e[r[0]]===t[r[0]]&&e[r[1]]===t[r[1]]))));a=a.map((e=>o()(o()({},e),{},{missing:!0})));const s=t.concat(a);return s},objectsAreIdentical(e,t){if(e.constructor!==t.constructor)return!1;if(!(e instanceof Object)&&!(t instanceof Object))return!1;if("object"!==typeof e&&"object"!==typeof t)return!1;for(const r in e)if(!Object.prototype.hasOwnProperty.call(e,r)||e[r]!==t[r])return!1;for(const r in t)if(!Object.prototype.hasOwnProperty.call(t,r)||t[r]!==e[r])return!1;return!0},sortItemsToEnd(e,t,r){e.sort(((e,a)=>(e[t]===r)-(a[t]===r)||+(e[t]>a[t])||-(e[t]<a[t])))},pushItemToEnd(e,t){e.push(e.splice(t,1)[0])},getMonthLastDate(e="",t="-"){const r=(new Date).getFullYear();let a=(new Date).getMonth()+1;a=a<10?"0"+a:a;const s=new Date(r,a,0).getDate();return"br"===e?`${s}${t}${a}${t}${r}`:`${r}${t}${a}${t}${s}`},getMonthFirstDate(e="",t="-"){const r=(new Date).getFullYear();let a=(new Date).getMonth()+1;return a=a<10?"0"+a:a,"br"===e?`01${t}${a}${t}${r}`:`${r}${t}${a}${t}01`},getDateNow(e="",t="/"){const r=new Date,a=r.getDate()<10?"0"+r.getDate():r.getDate(),s=r.getMonth()+1<10?"0"+(r.getMonth()+1):r.getMonth()+1,n=r.getFullYear();return"us"===e?`${n}${t}${s}${t}${a}`:`${a}${t}${s}${t}${n}`},onDoubleClickOpen(e){e.call()},getRightHeight(e){return e.lt.sm?{frame:"",splitter:"",splitterAudit:"",table:"",tableFull:"",tableAudit:"",tableFullAudit:"",listItems:5}:e.lt.md?{frame:"height: 86vh;",splitter:"height: 63vh;",splitterAudit:"height: 75vh;",table:"max-height: 35vh;",tableFull:"max-height: 48vh;",tableAudit:"max-height: 30vh;",tableFullAudit:"max-height: 40vh;",listItems:10}:e.lt.lg?{frame:"height: 88vh;",splitter:"height: 66vh;",splitterAudit:"height: 78vh;",table:"max-height: 40vh;",tableFull:"max-height: 55vh;",tableAudit:"max-height: 55vh;",tableFullAudit:"max-height: 65vh;",listItems:20}:{frame:"height: 90vh;",splitter:"height: 74vh;",splitterAudit:"height: 86vh;",table:"max-height: 55vh;",tableFull:"max-height: 65vh;",tableAudit:"max-height: 75vh;",tableFullAudit:"max-height: 85vh;",listItems:50}},capitalizeSnakeCaseString(e){const t=e.split("_").map((([e,...t])=>e.toUpperCase()+t.join("").toLowerCase())).join(" ");return t},getFormattedDate(e){return new Date(e).toLocaleDateString()},async waitSomeTime(e){return new Promise((t=>{setTimeout(t,e)}))},async goToNextFieldFix(e){await d.waitSomeTime(100),await e.focus()},getRandomValue(e=999.99){return Math.random()*e},checkNumberPrecision(e,{integers:t=1,floats:r=2}){const a=e.toString().split("."),s=a[0].length<=t,n=a[1].length<=r;return!(!s||!n)}};var u=d,h={name:"Signup",data(){return{response:null,user:{name:"",email:"",password:"",confirmPassword:""}}},validations:{user:{name:{required:l["required"],minLength:Object(l["minLength"])(3),maxLength:Object(l["maxLength"])(60)},email:{required:l["required"],minLength:Object(l["minLength"])(10),maxLength:Object(l["maxLength"])(60)},password:{required:l["required"],minLength:Object(l["minLength"])(6),maxLength:Object(l["maxLength"])(20)},confirmPassword:{required:l["required"],sameAsPassword:Object(l["sameAs"])("password")}}},methods:o()(o()({},Object(i["b"])("auth",["signup"])),{},{getMensagemErro:u.getMensagemErro,async postData(){try{if(this.$v.$touch(),this.$v.$invalid)return;await this.signup({user:this.user})}catch(e){e.response&&e.response.data&&e.response.data.message?this.$q.notify({color:"negative",message:e.data.message}):this.$q.notify({color:"negative",message:e})}}})},m=h,p=(r("5da5"),r("2877")),g=r("27f9"),$=r("9c40"),b=r("eebe"),f=r.n(b),v=Object(p["a"])(m,a,s,!1,null,"7b520bbf",null);t["default"]=v.exports;f()(v,"components",{QInput:g["a"],QBtn:$["a"]})}}]);