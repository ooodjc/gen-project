import{r as O,a as _,o as r,c as p,b as u,w as i,F as x,d as V,p as z,e as B,f as m,g as v,u as $,h as L,K,i as g,j as A,k as P,l as W,m as k,t as C,n as G,q as X,s as F,v as j,x as Q,y as Y,z as Z,A as ee,B as J,C as te,D as ae,E as oe,G as ne,H as U,I as se}from"./vendor.925c221e.js";const le=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function a(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerpolicy&&(n.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?n.credentials="include":o.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(o){if(o.ep)return;o.ep=!0;const n=a(o);fetch(o.href,n)}};le();var y=(t,e)=>{const a=t.__vccOpts||t;for(const[s,o]of e)a[s]=o;return a};const re=t=>(z("data-v-8e55a978"),t=t(),B(),t),ce={class:"table-list"},ie=re(()=>v("div",{class:"title"},"\u9009\u62E9\u8981\u751F\u6210\u7684\u8868",-1)),ue={__name:"tableList",props:{dataList:Array},emits:["change"],setup(t,{emit:e}){const a=O({checkList:[]});function s(){e("change",a.checkList)}return(o,n)=>{const l=_("el-checkbox"),d=_("el-checkbox-group");return r(),p("div",ce,[ie,u(d,{modelValue:a.checkList,"onUpdate:modelValue":n[0]||(n[0]=c=>a.checkList=c),onChange:s},{default:i(()=>[(r(!0),p(x,null,V(t.dataList,c=>(r(),m(l,{label:c,key:c},null,8,["label"]))),128))]),_:1},8,["modelValue"])])}}};var _e=y(ue,[["__scopeId","data-v-8e55a978"]]);const de="modulepreload",q={},pe="/admin-ui/",me=function(e,a){return!a||a.length===0?e():Promise.all(a.map(s=>{if(s=`${pe}${s}`,s in q)return;q[s]=!0;const o=s.endsWith(".css"),n=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${n}`))return;const l=document.createElement("link");if(l.rel=o?"stylesheet":de,o||(l.as="script",l.crossOrigin=""),l.href=s,document.head.appendChild(l),o)return new Promise((d,c)=>{l.addEventListener("load",d),l.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e())};const fe={class:"app-main"},be={__name:"AppMain",setup(t){const e=$(),a=L(()=>e.state.tabList.map(s=>s.name));return(s,o)=>{const n=_("router-view");return r(),p("section",fe,[u(n,null,{default:i(({Component:l})=>[(r(),m(K,{include:g(a)},[(r(),m(A(l)))],1032,["include"]))]),_:1})])}}};var he=y(be,[["__scopeId","data-v-08757902"]]);const D={set(t,e){localStorage.setItem(t,JSON.stringify(e))},get(t){const e=localStorage.getItem(t);if(e&&e!="undefined"&&e!="null")return JSON.parse(e)},remove(t){localStorage.removeItem(t)}};const ve={__name:"Breadcrumb",setup(t){const e=P(),a=W({get:()=>e.matched});return(s,o)=>{const n=_("el-breadcrumb-item"),l=_("el-breadcrumb");return r(),m(l,{"separator-icon":g(X)},{default:i(()=>[u(n,{to:{path:"/index"}},{default:i(()=>[k("\u9996\u9875")]),_:1}),(r(!0),p(x,null,V(g(a),(d,c)=>(r(),p(x,{key:c},[d.name&&d.meta.title&&d.path!=="/index"?(r(),m(n,{key:0,to:{path:d.path}},{default:i(()=>[k(C(d.meta.title),1)]),_:2},1032,["to"])):G("",!0)],64))),128))]),_:1},8,["separator-icon"])}}};var ge=y(ve,[["__scopeId","data-v-37050a85"]]);const xe={class:"scrollbar-flex-content"},ye={__name:"TagsTemp",setup(t){const e=P(),a=F(),s=$(),o=L(()=>s.state.tabList);j(()=>{s.commit("addTabListItem",{title:"\u9996\u9875",name:"index",path:"/index",closable:!1}),n(e)});function n(c){s.commit("addTabListItem",{title:c.meta.title,name:c.name,path:c.path,closable:!0})}Q(()=>e.path,(c,f)=>{n(e)});function l(c){a.push(c)}function d(c){var f=o.value.findIndex(w=>w.path===c.path);s.commit("delTabListItem",c.path),a.push(o.value[f-1].path)}return(c,f)=>{const w=_("el-tag"),N=_("el-scrollbar");return r(),m(N,null,{default:i(()=>[v("div",xe,[(r(!0),p(x,null,V(g(o),b=>(r(),m(w,{key:b.path,closable:b.closable,size:"large",effect:g(e).path===b.path?"dark":"plain",onClick:S=>l(b.path),onClose:S=>d(b)},{default:i(()=>[k(C(b.title),1)]),_:2},1032,["closable","effect","onClick","onClose"]))),128))])]),_:1})}}};var Le=y(ye,[["__scopeId","data-v-8f600606"]]);const ke=t=>(z("data-v-4b44779c"),t=t(),B(),t),we={class:"top-view"},Ce={class:"center",style:{width:"100%"}},Ie=ke(()=>v("path",{d:"M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 0 0 0-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0 0 14.4 7z"},null,-1)),Ve=[Ie],Te={__name:"Navbar",setup(t){F();const e=$();O({dialogTableVisible:!1,isSetPwd:!1});const a=L({get:()=>e.state.isCollapse});L({get:()=>e.state.userInfo});function s(){e.state.isCollapse?e.commit("onIsCollapse",!1):e.commit("onIsCollapse",!0)}return(o,n)=>(r(),p("div",we,[v("div",Ce,[v("div",{onClick:s},[(r(),p("svg",{class:Y([{"is-active":!g(a)},"hamburger"]),viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg",width:"64",height:"64"},Ve,2))]),u(ge)]),u(Le)]))}};var $e=y(Te,[["__scopeId","data-v-4b44779c"]]);const Ne={__name:"Sidebar",setup(t){const e=P(),a=$(),s=[{icon:"Document",index:"index",title:"\u9996\u9875"}],o=L(()=>e.name),n=L(()=>a.state.isCollapse);return(l,d)=>{const c=_("el-icon"),f=_("el-menu-item"),w=_("el-menu-item-group"),N=_("el-sub-menu"),b=_("el-menu"),S=_("el-scrollbar");return r(),m(S,{"wrap-class":"scrollbar-wrapper"},{default:i(()=>[u(b,{"default-active":g(o),collapse:g(n),"background-color":"#545c64","text-color":"#bfcbd9","active-text-color":"#ffd04b","unique-opened":"",router:"",class:"el-menu-vertical"},{default:i(()=>[(r(),p(x,null,V(s,h=>(r(),p(x,null,[h.subs?(r(),m(N,{key:0,index:h.index},{title:i(()=>[u(c,null,{default:i(()=>[(r(),m(A(h.icon)))]),_:2},1024),v("span",null,C(h.title),1)]),default:i(()=>[u(w,null,{default:i(()=>[(r(!0),p(x,null,V(h.subs,R=>(r(),m(f,{index:R.index},{default:i(()=>[k(C(R.title),1)]),_:2},1032,["index"]))),256))]),_:2},1024)]),_:2},1032,["index"])):(r(),m(f,{key:1,index:h.index},{title:i(()=>[k(C(h.title),1)]),default:i(()=>[u(c,null,{default:i(()=>[(r(),m(A(h.icon)))]),_:2},1024)]),_:2},1032,["index"]))],64))),64))]),_:1},8,["default-active","collapse"])]),_:1})}}};const Se={class:"common-layout"},Ae={__name:"index",setup(t){return(e,a)=>{const s=_("el-aside"),o=_("el-header"),n=_("el-main"),l=_("el-container");return r(),p("div",Se,[u(l,null,{default:i(()=>[u(s,null,{default:i(()=>[u(Ne)]),_:1}),u(l,null,{default:i(()=>[u(o,null,{default:i(()=>[u($e)]),_:1}),u(n,null,{default:i(()=>[u(he)]),_:1})]),_:1})]),_:1})])}}};var De=y(Ae,[["__scopeId","data-v-17a92ec7"]]);const Oe=[{path:"/",redirect:"/index"},{path:"/",name:"Layout",component:De,children:[{path:"/index",name:"index",component:()=>me(()=>import("./index.994d9fb4.js"),["static/index.994d9fb4.js","static/index.ea6644f1.css","static/vendor.925c221e.js"]),meta:{title:"\u9996\u9875",icon:"Document"}}]}],I=Z({history:ee(),routes:Oe});I.beforeEach((t,e,a)=>{a()});function T(t){const e=J.create({baseURL:"/gen/",timeout:1e4});return e.interceptors.request.use(a=>(a.headers["X-Token"]=D.get("token"),a),a=>(console.log(a),Promise.error(a))),e.interceptors.response.use(a=>{switch(a.data.errno){case 0:return a.data;case 401:console.log("\u65E0\u6743\u8BBF\u95EE"),I.push("/login");break;case 403:console.log("token\u8FC7\u671F\u5566"),D.remove("token"),I.push("/login");break;case 404:console.log("404\u5566"),I.push("/404");break;default:return a.data}return a.data},a=>{console.log("request error",a)}),e(t)}const H={get(t,e){const a={method:"get",url:t};return e&&(a.params=e),T(a)},post(t,e){const a={method:"post",url:t};return e&&(a.data=e),T(a)},put(t,e){const a={method:"put",url:t};return e&&(a.params=e),T(a)},delete(t,e){const a={method:"post",url:t};return e&&(a.params=e),T(a)}},ze="/gen/";var Be={zip(s,e,a="dowloads.zip"){var s=ze+s;J({method:"post",url:s,responseType:"blob",data:e}).then(async o=>{if(await Pe(o.data)){const l=new Blob([o.data],{type:"application/zip"});this.saveAs(l,a)}else console.log("dowload error",o.data)})},saveAs(t,e,a){te.exports.saveAs(t,e,a)}};async function Pe(t){try{const e=await t.text();return JSON.parse(e),!1}catch{return!0}}const M={UploadUrl(){return"/gen/"+"file/upload"},allTableName(t={}){return H.get("allTableName",t)},allTableInfo(t={}){return H.get("allTableInfo",t)},download(t={}){return Be.zip("download",t)}},Ee={class:"table-form"},Re={__name:"tableForm",props:{modelValue:Object},emits:["modelValue"],setup(t,{emit:e}){const a=t;function s(o){e("modelValue",a.modelValue)}return(o,n)=>{const l=_("el-input"),d=_("el-form-item"),c=_("el-form");return r(),p("div",Ee,[u(c,{model:a.modelValue,"label-width":"100px"},{default:i(()=>[u(d,{label:"\u6570\u636E\u5E93"},{default:i(()=>[u(l,{modelValue:a.modelValue.databaseName,"onUpdate:modelValue":n[0]||(n[0]=f=>a.modelValue.databaseName=f),disabled:!0,onChange:s},null,8,["modelValue"])]),_:1}),u(d,{label:"\u7236\u5305\u540D",required:!0},{default:i(()=>[u(l,{modelValue:a.modelValue.parentPackage,"onUpdate:modelValue":n[1]||(n[1]=f=>a.modelValue.parentPackage=f),onChange:s},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])])}}};const Ue=t=>(z("data-v-4520267e"),t=t(),B(),t),qe={class:"app"},He=Ue(()=>v("div",{class:"title"},"\u9879\u76EE\u751F\u6210\u5668",-1)),Me={class:"btn-row"},Fe=ae({name:"index"}),je=Object.assign(Fe,{setup(t){const e=O({databaseName:"",tableListData:[],formData:{databaseName:"",parentPackage:"com.xsgo.demo",tables:[]}});j(()=>{a()});function a(){M.allTableName().then(n=>{n.errno===0&&(e.formData.databaseName=n.data.databaseName,e.tableListData=n.data.tableNames)})}function s(n){e.formData.tables=n}function o(){M.download(e.formData)}return(n,l)=>{const d=_("el-button");return r(),p("div",qe,[He,u(Re,{modelValue:e.formData,"onUpdate:modelValue":l[0]||(l[0]=c=>e.formData=c)},null,8,["modelValue"]),u(_e,{dataList:e.tableListData,onChange:s},null,8,["dataList"]),v("div",Me,[u(d,{type:"primary",onClick:o},{default:i(()=>[k("\u751F\u6210")]),_:1})])])}}});var Je=y(je,[["__scopeId","data-v-4520267e"]]);const Ke=oe({state(){return{isCollapse:D.get("isCollapse")||!0,tabList:[]}},mutations:{onIsCollapse(t,e){t.isCollapse=e},addTabListItem(t,e){t.tabList.map(s=>s.name).indexOf(e.name)==-1&&t.tabList.push(e)},delTabListItem(t,e){t.tabList=t.tabList.filter(a=>a.path!=e)},clearTabList(t){t.tabList=t.tabList.filter(e=>e.name==="index")}}}),E=ne(Je);for(const t in U)E.component(t,U[t]);E.config.warnHandler=()=>null;E.use(se).use(I).use(Ke).mount("#app");export{_e as T,y as _,M as a,Re as b};