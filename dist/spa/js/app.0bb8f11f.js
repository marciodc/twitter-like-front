(function(e){function t(t){for(var a,n,c=t[0],i=t[1],u=t[2],d=0,l=[];d<c.length;d++)n=c[d],Object.prototype.hasOwnProperty.call(o,n)&&o[n]&&l.push(o[n][0]),o[n]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);p&&p(t);while(l.length)l.shift()();return s.push.apply(s,u||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],a=!0,n=1;n<r.length;n++){var c=r[n];0!==o[c]&&(a=!1)}a&&(s.splice(t--,1),e=i(i.s=r[0]))}return e}var a={},n={1:0},o={1:0},s=[];function c(e){return i.p+"js/"+({}[e]||e)+"."+{2:"8f01b3a2",3:"c3fe66a6",4:"4a7058bf",5:"4c2fc547",6:"2da7b0e8",7:"de2aabd2",8:"29c6a9f1",9:"6b5cb230"}[e]+".js"}function i(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[],r={2:1,3:1,4:1,5:1,6:1,7:1,8:1};n[e]?t.push(n[e]):0!==n[e]&&r[e]&&t.push(n[e]=new Promise((function(t,r){for(var a="css/"+({}[e]||e)+"."+{2:"ad3524d1",3:"04355210",4:"4fae8359",5:"2e81ca16",6:"9b3f93fc",7:"5bc2a1d8",8:"3256d0da",9:"31d6cfe0"}[e]+".css",o=i.p+a,s=document.getElementsByTagName("link"),c=0;c<s.length;c++){var u=s[c],d=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(d===a||d===o))return t()}var l=document.getElementsByTagName("style");for(c=0;c<l.length;c++){u=l[c],d=u.getAttribute("data-href");if(d===a||d===o)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var a=t&&t.target&&t.target.src||o,s=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=a,delete n[e],p.parentNode.removeChild(p),r(s)},p.href=o;var g=document.getElementsByTagName("head")[0];g.appendChild(p)})).then((function(){n[e]=0})));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var s=new Promise((function(t,r){a=o[e]=[t,r]}));t.push(a[2]=s);var u,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=c(e);var l=new Error;u=function(t){d.onerror=d.onload=null,clearTimeout(p);var r=o[e];if(0!==r){if(r){var a=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+a+": "+n+")",l.name="ChunkLoadError",l.type=a,l.request=n,r[1](l)}o[e]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:d})}),12e4);d.onerror=d.onload=u,document.head.appendChild(d)}return Promise.all(t)},i.m=e,i.c=a,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(r,a,function(t){return e[t]}.bind(null,a));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],d=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var p=d;s.push([0,0]),r()})({0:function(e,t,r){e.exports=r("2f39")},"0047":function(e,t,r){},"2f39":function(e,t,r){"use strict";r.r(t);var a={};r.r(a),r.d(a,"logged",(function(){return k})),r.d(a,"userId",(function(){return S})),r.d(a,"userName",(function(){return I})),r.d(a,"authenticationErrorCode",(function(){return E})),r.d(a,"authenticationError",(function(){return C})),r.d(a,"authenticating",(function(){return T}));var n={};r.r(n),r.d(n,"loginRequest",(function(){return P})),r.d(n,"loginSuccess",(function(){return N})),r.d(n,"loginError",(function(){return U})),r.d(n,"logoutSuccess",(function(){return j}));var o={};r.r(o),r.d(o,"login",(function(){return H})),r.d(o,"loginSocial",(function(){return _})),r.d(o,"logout",(function(){return M})),r.d(o,"signup",(function(){return q}));r("e6cf"),r("5319"),r("7d6e"),r("e54f"),r("a4b7"),r("985d"),r("0047");var s=r("2b0e"),c=r("1f91"),i=r("42d2"),u=r("b05d");s["a"].use(u["a"],{config:{},lang:c["a"],iconSet:i["a"]});var d=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"q-app"}},[r("router-view")],1)},l=[],p=r("c5fa"),g={name:"App",beforeMount(){p["a"].setHeaderForm()}},m=g,f=r("2877"),h=Object(f["a"])(m,d,l,!1,null,null,null),v=h.exports,b=r("2f62"),y=r("f6ed"),w={accessToken:y["a"].getToken(),userName:y["a"].getUserName(),userId:y["a"].getUserId(),logged:y["a"].logged()};function k(e){return void 0!==e.accessToken&&null!==e.accessToken&&""!==e.accessToken}function S(e){return e.userId}function I(e){return e.userName}function E(e){return e.authenticationErrorCode}function C(e){return e.authenticationError}function T(e){return e.authenticating}function P(e){e.authenticating=!0,e.authenticationError="",e.authenticationErrorCode=0}function N(e,t,r){e.accessToken=t,e.userName=r,e.logged=!0}function U(e,{errorCode:t,errorMessage:r}){e.authenticationErrorCode=t,e.authenticationError=r}function j(e){e.accessToken=null,e.userId=null,e.userName=null,e.logged=!1}var x=r("f508");class O extends Error{constructor(e,t){super(t),this.name=this.constructor.name,this.message=t,this.errorCode=e}}const A={login:async function(e,t){const r={email:e,password:t};try{p["a"].removeHeader();const e=await p["a"].post("/user/login",r);return x["a"].hide(),e}catch(a){throw x["a"].hide(),new O(a.response.status,a.response.data.detail)}},loginSocial:async function(e,t){const r={token:t};try{p["a"].removeHeader();const t="google"===e?"/user/login/google":"/user/login/facebook",a=await p["a"].post(t,r);return x["a"].hide(),a}catch(a){throw x["a"].hide(),new O(a.response.status,a.response.data.detail)}},logout(){y["a"].removeToken(),y["a"].removeUserId(),y["a"].removeUserName(),p["a"].removeHeader()},signup:async function(e){try{p["a"].removeHeader();const t=await p["a"].post("/user/signup",e);return x["a"].hide(),t}catch(t){throw x["a"].hide(),new O(t.response.status,t.response.data.detail)}}};async function H({commit:e},{email:t,password:r,redirect:a}){e("loginRequest");try{const n=await A.login(t,r);return n.data&&n.data.token&&(y["a"].saveToken(n.data.token),y["a"].saveUserId(n.data.id),y["a"].saveUserName(n.data.name),p["a"].setHeaderForm(),e("loginSuccess",n.data.token,n.data.name),this.$router.push(a||"/",(()=>{}))),n}catch(n){return n instanceof O&&e("loginError",{errorCode:n.errorCode,errorMessage:n.message}),null}}async function _({commit:e},{type:t,token:r,redirect:a}){e("loginRequest");try{const n=await A.loginSocial(t,r);return n.data&&n.data.token&&(y["a"].saveToken(n.data.token),y["a"].saveUserId(n.data.id),y["a"].saveUserName(n.data.name),p["a"].setHeaderForm(),e("loginSuccess",n.data.token,n.data.name),this.$router.push(a||"/",(()=>{}))),n}catch(n){return n instanceof O&&e("loginError",{errorCode:n.errorCode,errorMessage:n.message}),null}}function M({commit:e}){A.logout(),e("logoutSuccess"),this.$router.push("/",(()=>{}))}async function q({commit:e},{user:t}){try{const r=await A.signup(t);return r.data&&r.data.id&&(y["a"].saveToken(r.data.token),y["a"].saveUserId(r.data.id),y["a"].saveUserName(r.data.name),p["a"].setHeaderForm(),e("loginSuccess",r.data.token,r.data.name),this.$router.push("/message",(()=>{}))),r}catch(r){return null}}var z={namespaced:!0,state:w,getters:a,mutations:n,actions:o};s["a"].use(b["a"]);var L=function(){const e=new b["a"].Store({modules:{auth:z},strict:!1});return e},$=r("8c4f");r("ddb0");const F=[{path:"/",component:()=>Promise.all([r.e(0),r.e(3)]).then(r.bind(null,"713b")),children:[{path:"",component:()=>Promise.all([r.e(0),r.e(4)]).then(r.bind(null,"8b24")),meta:{public:!0}},{path:"/message",component:()=>Promise.all([r.e(0),r.e(5)]).then(r.bind(null,"997d"))},{path:"/userMessage/:id?",component:()=>Promise.all([r.e(0),r.e(8)]).then(r.bind(null,"075f"))},{path:"/search/:name?",component:()=>Promise.all([r.e(0),r.e(6)]).then(r.bind(null,"5c65"))}]},{path:"/login",name:"login",component:()=>Promise.all([r.e(0),r.e(2)]).then(r.bind(null,"013f")),meta:{public:!0}},{path:"/signup",name:"signup",component:()=>Promise.all([r.e(0),r.e(7)]).then(r.bind(null,"e422")),meta:{public:!0}},{path:"*",component:()=>Promise.all([r.e(0),r.e(9)]).then(r.bind(null,"e51e")),meta:{public:!0}}];var B=F;s["a"].use($["a"]);var R=function(){const e=new $["a"]({scrollBehavior:()=>({x:0,y:0}),routes:B,mode:"hash",base:""});return e.beforeEach(((e,t,r)=>{const a=!!y["a"].logged(),n=e.matched.some((e=>e.meta.public));return n||a?a&&"/"===e.path?r({path:"/message"}):void r():r({path:"/login",query:{redirect:e.fullPath}})})),e},V=async function(){const e="function"===typeof L?await L({Vue:s["a"]}):L,t="function"===typeof R?await R({Vue:s["a"],store:e}):R;e.$router=t;const r={router:t,store:e,render:e=>e(v),el:"#q-app"};return{app:r,store:e,router:t}},D=r("a925"),J={failed:"Action failed",success:"Action was successful"},K={"en-us":J};s["a"].use(D["a"]);const Q=new D["a"]({locale:"en-us",fallbackLocale:"en-us",messages:K});var G=({app:e})=>{e.i18n=Q},W=r("bc3a"),X=r.n(W);X.a.defaults.baseURL='"https://twitter-like-server.herokuapp.com/"'.replace(/"/g,""),s["a"].prototype.$axios=X.a;var Y=r("1dce"),Z=r.n(Y),ee=({Vue:e})=>{e.use(Z.a)},te=r("8e27"),re=r.n(te),ae=r("5132"),ne=r.n(ae);const oe='"https://twitter-like-server.herokuapp.com/"'.replace(/"/g,""),se=re()(oe);s["a"].use(new ne.a({debug:!0,connection:se}));const ce="";async function ie(){const{app:e,store:t,router:r}=await V();let a=!1;const n=e=>{a=!0;const t=Object(e)===e?r.resolve(e).route.fullPath:e;window.location.href=t},o=window.location.href.replace(window.location.origin,""),c=[G,void 0,ee,void 0];for(let u=0;!1===a&&u<c.length;u++)if("function"===typeof c[u])try{await c[u]({app:e,router:r,store:t,Vue:s["a"],ssrContext:null,redirect:n,urlPath:o,publicPath:ce})}catch(i){return i&&i.url?void(window.location.href=i.url):void console.error("[Quasar] boot error:",i)}!0!==a&&new s["a"](e)}ie()},c5fa:function(e,t,r){"use strict";r("e6cf"),r("ddb0");var a=r("bc3a"),n=r.n(a),o=r("f508"),s=r("2a19"),c=r("d9b2"),i=r("f6ed");const u={setHeaderForm(){n.a.defaults.headers.common["Content-Type"]="application/json",n.a.defaults.headers.common.Authorization="Bearer "+i["a"].getToken()},removeHeader(){n.a.defaults.headers.common={}},async get(e){try{o["a"].show({spinner:c["a"],spinnerSize:30,backgroundColor:"grey-7"});const t=await n.a.get(e);return o["a"].hide(),t}catch(t){return s["a"].create({color:"negative",message:t.response&&t.response.data&&t.response.data.message?t.response.data.message:"Erro buscando dados"}),o["a"].hide(),!1}},async getAll(e){const t=e.map((e=>n.a.get(e)));try{o["a"].show({spinner:c["a"],spinnerSize:30,backgroundColor:"grey-7"});const e=await Promise.all(t);return o["a"].hide(),e}catch(r){return s["a"].create({color:"negative",message:r.response&&r.response.data&&r.response.data.message?r.response.data.message:"Erro buscando dados"}),o["a"].hide(),!1}},async post(e,t){try{o["a"].show({spinner:c["a"],spinnerSize:30,backgroundColor:"grey-7"});const r=await n.a.post(e,t);return o["a"].hide(),r}catch(r){if(r&&r.response&&400===r.response.status&&r.response.data&&r.response.data.code&&("001"===r.response.data.code||"002"===r.response.data.code))return o["a"].hide(),r.response;if(o["a"].hide(),r&&r.response&&500===r.response.status&&r.response.data&&r.response.data.message)throw s["a"].create({color:"negative",message:r.response.data.message}),r;return!1}},async put(e,t){try{o["a"].show({spinner:c["a"],spinnerSize:30,backgroundColor:"grey-7"});const r=await n.a.put(e,t);return s["a"].create({color:"teal",message:"Dados salvos com sucesso"}),o["a"].hide(),r}catch(r){return s["a"].create({color:"negative",message:r.response.data&&r.response.data.message?r.response.data.message:"Erro realizando a operação solicitada"}),o["a"].hide(),!1}},async delete(e){try{o["a"].show({spinner:c["a"],spinnerSize:30,backgroundColor:"grey-7"});const t=await n.a.delete(e);return s["a"].create({color:"teal",message:"Registro excluído com sucesso"}),o["a"].hide(),t}catch(t){return s["a"].create({color:"negative",message:t.response.data&&t.response.data.message?t.response.data.message:"Erro excluíndo registro"}),o["a"].hide(),!1}}};t["a"]=u},f6ed:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));const a="accessToken",n="userName",o="userId",s={logged(){const e=localStorage.getItem(a)||sessionStorage.getItem(a);return void 0!==e&&null!==e&&""!==e},getToken(){return localStorage.getItem(a)||sessionStorage.getItem(a)},saveToken(e){sessionStorage.setItem(a,e)},removeToken(){localStorage.removeItem(a),sessionStorage.removeItem(a)},getUserName(){return localStorage.getItem(n)||sessionStorage.getItem(n)},saveUserName(e){sessionStorage.setItem(n,e)},removeUserName(){localStorage.removeItem(n),sessionStorage.removeItem(n)},getUserId(){return localStorage.getItem(o)||sessionStorage.getItem(o)},saveUserId(e){sessionStorage.setItem(o,e)},removeUserId(){localStorage.removeItem(o),sessionStorage.removeItem(o)}}}});