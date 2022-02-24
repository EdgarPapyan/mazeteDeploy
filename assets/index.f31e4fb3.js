var te=Object.defineProperty,se=Object.defineProperties;var ae=Object.getOwnPropertyDescriptors;var M=Object.getOwnPropertySymbols;var ue=Object.prototype.hasOwnProperty,re=Object.prototype.propertyIsEnumerable;var K=(a,r,i)=>r in a?te(a,r,{enumerable:!0,configurable:!0,writable:!0,value:i}):a[r]=i,H=(a,r)=>{for(var i in r||(r={}))ue.call(r,i)&&K(a,i,r[i]);if(M)for(var i of M(r))re.call(r,i)&&K(a,i,r[i]);return a},P=(a,r)=>se(a,ae(r));import{u as q,a as U,r as n,v as ie,b as v,j as d,c as e,A as ne,T as oe,d as le,e as ce,F as G,B as de,R as he,f as J,g as pe,h as ge}from"./vendor.744e6562.js";const me=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))l(c);new MutationObserver(c=>{for(const u of c)if(u.type==="childList")for(const g of u.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&l(g)}).observe(document,{childList:!0,subtree:!0});function i(c){const u={};return c.integrity&&(u.integrity=c.integrity),c.referrerpolicy&&(u.referrerPolicy=c.referrerpolicy),c.crossorigin==="use-credentials"?u.credentials="include":c.crossorigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function l(c){if(c.ep)return;c.ep=!0;const u=i(c);fetch(c.href,u)}};me();const F="https://mazete-api-dev.pechakucha.ai",fe=le({stringify:a=>a.kana+a.label});function _e(){const[a,r]=n.exports.useState([0,0]);return n.exports.useLayoutEffect(()=>{function i(){r([window.innerWidth,window.innerHeight])}return window.addEventListener("resize",i),i(),()=>window.removeEventListener("resize",i)},[]),a}function ve(){const a=q();U();const[r,i]=n.exports.useState(1),[l,c]=n.exports.useState([]),[u,g]=n.exports.useState(null),[S,$]=n.exports.useState(!1),[N,C]=n.exports.useState([]),[O,L]=n.exports.useState([]),[A,x]=n.exports.useState([]),[p,f]=n.exports.useState([]),[E,_]=n.exports.useState([]),[w,y]=n.exports.useState(null),[z,T]=_e();n.exports.useEffect(()=>{let t=window.innerHeight;document.getElementById("character_select").style.height=t+"px";let s=sessionStorage.register_id||null,h=sessionStorage.background||null,o=sessionStorage.user_list||null;if(o&&c(JSON.parse(o)),h&&g(JSON.parse(h)),!s){s=ie();var I=JSON.stringify({register_id:s}),D={method:"post",url:`${F}/register_id`,headers:{"Content-Type":"application/json"},data:I};v(D).then(m=>{sessionStorage.setItem("register_id",s)}).catch(m=>{a("/error",{state:{message:"\u30B9\u30C8\u30FC\u30EA\u30FC\u306E\u751F\u6210\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002<br/>\u6642\u9593\u3092\u304A\u3044\u3066\u304A\u8A66\u3057\u304F\u3060\u3055\u3044"}})})}let k=JSON.stringify({user_id:s,search_query:"",chosen_chara_ids:"",chosen_world_ids:""}),B={method:"post",url:`${F}/get_chara_list`,headers:{"Content-Type":"application/json"},data:k};v(B).then(m=>{C(m.data.chara_list)}).catch(m=>{a("/error",{state:{message:"\u30B9\u30C8\u30FC\u30EA\u30FC\u306E\u751F\u6210\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002<br/>\u6642\u9593\u3092\u304A\u3044\u3066\u304A\u8A66\u3057\u304F\u3060\u3055\u3044"}})});let Y=JSON.stringify({user_id:s,search_query:"",chosen_chara_ids:"",chosen_world_ids:""}),Z={method:"post",url:`${F}/get_world_list`,headers:{"Content-Type":"application/json"},data:Y};v(Z).then(m=>{L(m.data.world_list)}).catch(m=>{a("/error",{state:{message:"\u30B9\u30C8\u30FC\u30EA\u30FC\u306E\u751F\u6210\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002<br/>\u6642\u9593\u3092\u304A\u3044\u3066\u304A\u8A66\u3057\u304F\u3060\u3055\u3044"}})});let V={method:"post",url:`${F}/get_autocomplete_chara`,headers:{"Content-Type":"application/json"},data:{}};v(V).then(m=>{f(m.data.auto_complete),_(m.data.auto_complete)}).catch(m=>{});let ee={method:"post",url:`${F}/get_autocomplete_world`,headers:{"Content-Type":"application/json"},data:{}};v(ee).then(m=>{x(m.data.auto_complete)}).catch(m=>{})},[]),n.exports.useEffect(()=>{u&&l.length>0?$(!0):$(!1)},[l,u]);const b=t=>{let s=l,h=N.filter(o=>o.chara_id==t)[0];if(s.map(o=>o.chara_id).includes(t)){for(let o=0;o<s.length;o++)s[o].chara_id===t&&(s.splice(o,1),o--);c([...s])}else s.length<3&&(s.push(h),c([...s]))},j=()=>{let t=sessionStorage.register_id||null,s=JSON.stringify({user_id:t,chosen_chara_ids:l.map(o=>o.chara_id).toString(),chosen_world_ids:[u.world_id].toString()}),h={method:"post",url:`${F}/generate_outline`,headers:{"Content-Type":"application/json"},data:s};v(h).then(o=>{sessionStorage.setItem("outline_id",o.data.outline_id),sessionStorage.setItem("background",JSON.stringify(u)),sessionStorage.setItem("user_list",JSON.stringify(l)),sessionStorage.removeItem("outline_data"),a("/synopsis",{state:{}})}).catch(o=>{a("/error",{state:{message:"\u30B9\u30C8\u30FC\u30EA\u30FC\u306E\u751F\u6210\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002<br/>\u6642\u9593\u3092\u304A\u3044\u3066\u304A\u8A66\u3057\u304F\u3060\u3055\u3044"}})})},R=t=>{t.preventDefault();let s=sessionStorage.register_id||null,h=w,o=l.map(k=>k.chara_id).toString(),I="";u&&(I=[u.world_id].toString());let D=JSON.stringify({user_id:s,search_query:h,chosen_chara_ids:o,chosen_world_ids:I});if(r==1){let k={method:"post",url:`${F}/get_chara_list`,headers:{"Content-Type":"application/json"},data:D};v(k).then(B=>{C(B.data.chara_list)}).catch(B=>{a("/error",{state:{message:"\u30B9\u30C8\u30FC\u30EA\u30FC\u306E\u751F\u6210\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002<br/>\u6642\u9593\u3092\u304A\u3044\u3066\u304A\u8A66\u3057\u304F\u3060\u3055\u3044"}})})}else{let k={method:"post",url:`${F}/get_world_list`,headers:{"Content-Type":"application/json"},data:D};v(k).then(B=>{L(B.data.world_list)}).catch(B=>{a("/error",{state:{message:"\u30B9\u30C8\u30FC\u30EA\u30FC\u306E\u751F\u6210\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002<br/>\u6642\u9593\u3092\u304A\u3044\u3066\u304A\u8A66\u3057\u304F\u3060\u3055\u3044"}})})}},W=t=>s=>{s.stopPropagation();let h=l;for(let o=0;o<h.length;o++)h[o].chara_id===t&&(h.splice(o,1),o--);c([...h])};return d("div",{className:"container",id:"character_select",children:[d("div",{className:"container-wrap",children:[d("div",{className:"common-header",children:[e("div",{className:"common-header-title01",children:"-\u4F5C\u54C1\u30EA\u30DF\u30C3\u30AF\u30B9-"}),e("div",{className:"common-header-title02",children:"\u30DE\u305C\u3066"})]}),d("div",{className:"preview",children:[d("div",{className:"preview-part",onClick:()=>{i(1),_(p),y(null)},children:[d("div",{className:"preview-img-part",children:[l.map(t=>e("div",{style:{backgroundImage:`url(${t.img_url})`},className:"avatar-preview",children:d("div",{className:"avatar-preview-close",onClick:W(t.chara_id),children:[e("span",{}),e("span",{})]})},t.chara_id)),l.length==0&&e("div",{className:"avatar-preview",style:{backgroundImage:"url(/assets/image/default-avatar.png)"}})]}),e("div",{className:r===1?"preview-title-part active":"preview-title-part",children:"\u30AD\u30E3\u30E9"})]}),d("div",{className:"preview-part",onClick:()=>{i(2),_(A),y(null)},children:[e("div",{className:"preview-img-part",children:e("div",{style:{backgroundImage:`url(${u!=null?u.img_url:"/assets/image/point-bg.png"})`},className:u!=null?"world-preview":"world-none-preview"})}),e("div",{className:r===2?"preview-title-part active":"preview-title-part",children:"\u30B7\u30C1\u30E5\u30A8\u30FC\u30B7\u30E7\u30F3"})]})]}),d("div",{className:"point-select",children:[e("div",{className:"point-search",children:d("form",{onSubmit:R,children:[e(ne,{value:w,onChange:(t,s)=>{typeof s=="string"?y({label:s}):s&&s.inputValue?y({label:s.inputValue}):y(s)},filterOptions:(t,s)=>fe(t,s),selectOnFocus:!0,clearOnBlur:!0,handleHomeEndKeys:!0,options:E,getOptionLabel:t=>typeof t=="string"?t:t.label,renderOption:(t,s)=>e("li",P(H({},t),{children:s.label})),renderInput:t=>e(oe,P(H({},t),{label:""}))}),e("button",{className:"search-btn",children:e("img",{src:"/assets/image/point-search.png",alt:""})})]})}),e("div",{className:"point-intro",children:"\u753B\u50CF\u306FBing\u306E\u691C\u7D22\u7D50\u679C\u3092\u3082\u3068\u306B\u8868\u793A\u3057\u3066\u3044\u307E\u3059"}),d("div",{className:"point-body",style:{height:`calc(${T}px - 220px)`},children:[r===1&&e("div",{className:"point-body-wrap",children:N.map((t,s)=>e("div",{style:{backgroundImage:`url(${t.img_url})`},onClick:()=>b(t.chara_id),className:`${l.map(h=>h.chara_id).includes(t.chara_id)?"active":""} character-item`,children:e("span",{})},s))}),r==2&&e("div",{className:"point-body-wrap",children:O.map((t,s)=>e("div",{style:{backgroundImage:`url(${t.img_url})`},className:`${(u==null?void 0:u.img_url)==t.img_url?"active":""} location-item`,onClick:h=>{g(t)},children:e("span",{})},s))})]})]})]}),e("div",{className:"character-add-btn-part",children:e("button",{onClick:j,className:`character-add-btn ${S?"active":""}`,disabled:!S,children:"\u30DE\u305C\u308B"})})]})}const Q="https://mazete-api-dev.pechakucha.ai";function ye(){const[a,r]=n.exports.useState([0,0]);return n.exports.useLayoutEffect(()=>{function i(){r([window.innerWidth,window.innerHeight])}return window.addEventListener("resize",i),i(),()=>window.removeEventListener("resize",i)},[]),a}function be(){const a=q(),r=n.exports.useRef(),[i,l]=n.exports.useState(!1),[c,u]=n.exports.useState(!0),[g,S]=n.exports.useState(""),[$,N]=n.exports.useState([]),[C,O]=n.exports.useState(null),[L,A]=ye();n.exports.useEffect(()=>{let p=window.innerHeight;document.getElementById("loading_synposis").style.height=p+"px";let f=sessionStorage.register_id||null,E=sessionStorage.outline_id||null,_=sessionStorage.background||null,w=sessionStorage.user_list||null,y=sessionStorage.outline_data||null;(!w||!_)&&a("/",{state:{}}),O(JSON.parse(_)),N(JSON.parse(w));let z=JSON.stringify({user_id:f,outline_id:E});if(y)S(JSON.parse(y)),u(!1);else{let T={method:"post",url:`${Q}/get_outline`,headers:{"Content-Type":"application/json"},data:z};v(T).then(b=>{b.data.generated&&b.data.outline&&!b.data.error?(u(!1),S(b.data.outline)):a("/error",{state:{message:"\u30B9\u30C8\u30FC\u30EA\u30FC\u306E\u751F\u6210\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002<br/>\u6642\u9593\u3092\u304A\u3044\u3066\u304A\u8A66\u3057\u304F\u3060\u3055\u3044"}})}).catch(b=>{a("/error",{state:{message:"\u30B9\u30C8\u30FC\u30EA\u30FC\u306E\u751F\u6210\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002<br/>\u6642\u9593\u3092\u304A\u3044\u3066\u304A\u8A66\u3057\u304F\u3060\u3055\u3044"}})})}},[]);const x=()=>{let p=sessionStorage.register_id||null,f=sessionStorage.outline_id||null;sessionStorage.setItem("outline_data",JSON.stringify(g));let E=JSON.stringify({user_id:p,outline_id:f,outline:g}),_={method:"post",url:`${Q}/generate_story`,headers:{"Content-Type":"application/json"},data:E};v(_).then(w=>{a(`/talk/${w.data.story_id}`,{state:{}})}).catch(w=>{a("/error",{state:{message:"\u30B9\u30C8\u30FC\u30EA\u30FC\u306E\u751F\u6210\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002<br/>\u6642\u9593\u3092\u304A\u3044\u3066\u304A\u8A66\u3057\u304F\u3060\u3055\u3044"}})})};return n.exports.useEffect(()=>{r.current&&i&&r.current.focus()},[i]),d("div",{className:"container",id:"loading_synposis",children:[d("div",{className:"container-wrap",children:[e("div",{className:`ls-top ${i?"editing":""}`,children:e("div",{className:"",style:{backgroundImage:`url(${C==null?void 0:C.img_url}`,backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center"},children:e("div",{className:"ls-top-body",children:$.map((p,f)=>e("div",{className:"ls-top-item",style:{backgroundImage:`url(${p==null?void 0:p.img_url})`}},f))})})}),d("div",{className:"ls-main",style:{height:`calc(${A}px - 280px)`},children:[e("div",{className:"ls-main-title",children:"\u307E\u3048\u304C\u304D"}),d("div",{className:"ls-main-loading-text",style:{height:"calc(100% - 70px)"},children:[c&&d("div",{className:"ls-main-loading-part",children:[e("img",{src:"/assets/image/white-loading.gif",alt:""}),e("span",{children:"\u4E0B\u66F8\u304D\u6E96\u5099\u4E2D"})]}),!c&&e("textarea",{ref:r,className:"ls-main-loading-wrap",value:g,disabled:!i,onChange:p=>{S(p.target.value)},onBlur:()=>{l(!1)}})]}),!i&&d("a",{className:"ls-main-edit-btn",onClick:()=>{r.current.focus(),l(!0)},children:[e("span",{children:"\u7DE8\u96C6"}),e("img",{src:"/assets/image/edit-icon.png",alt:""})]})]})]}),!i&&e("button",{className:"back-to-btn",onClick:()=>{let p=sessionStorage.user_list||null;a("/",{state:{user_list:p}})},children:e("img",{src:"/assets/image/back-to-img.png",alt:""})}),!i&&e("div",{className:"ls-main-making-btn-part",children:e("button",{onClick:x,className:c?"ls-main-making-btn":"ls-main-making-btn active",disabled:c,children:"\u3053\u306E\u4E16\u754C\u7DDA\u306B\u5165\u308B"})})]})}const Se="https://mazete-api-dev.pechakucha.ai";function X(a){return new Promise(r=>setTimeout(r,a))}function we(){const[a,r]=n.exports.useState([0,0]);return n.exports.useLayoutEffect(()=>{function i(){r([window.innerWidth,window.innerHeight])}return window.addEventListener("resize",i),i(),()=>window.removeEventListener("resize",i)},[]),a}function Ne(){const a=q(),[r,i]=n.exports.useState(!0),[l,c]=n.exports.useState(null),[u,g]=n.exports.useState(0),[S,$]=n.exports.useState(null),[N,C]=n.exports.useState(null),[O,L]=n.exports.useState([]),[A,x]=n.exports.useState(!1),[p,f]=n.exports.useState(!1),[E,_]=n.exports.useState(!1),[w,y]=we();let{story_id:z}=ce();n.exports.useEffect(()=>{let t=sessionStorage.register_id||null,s=JSON.stringify({user_id:t,story_id:z}),h={method:"post",url:`${Se}/get_story`,headers:{"Content-Type":"application/json"},data:s};v(h).then(o=>{i(!1),o.data.generated&&!o.data.error?(i(!1),c(o.data)):a("/error",{state:{message:"\u30B9\u30C8\u30FC\u30EA\u30FC\u306E\u751F\u6210\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002<br/>\u6642\u9593\u3092\u304A\u3044\u3066\u304A\u8A66\u3057\u304F\u3060\u3055\u3044"}})}).catch(o=>{a("/error",{state:{message:"\u30B9\u30C8\u30FC\u30EA\u30FC\u306E\u751F\u6210\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002<br/>\u6642\u9593\u3092\u304A\u3044\u3066\u304A\u8A66\u3057\u304F\u3060\u3055\u3044"}})})},[]),n.exports.useEffect(()=>{l&&T()},[l,u]),n.exports.useEffect(async()=>{if(l){let t=l.story;await X(1),$(t[u].position)}},[N]);const T=()=>{let t=l.story;C(t[u].chara_img_url),t[u].multiple?(x(!0),L(t[u].content)):(x(!1),b(t[u].content))},b=async t=>{_(!0);for(var s=0;s<t.length;)L([t.substring(0,s+1)]),s++,await X(75);_(!1),l.story.length-1==u&&f(!0)},j=t=>{A&&(x(!1),b(t))},R=()=>{!E&&!A&&l.story.length-1>u&&g(u+1)},W=()=>{console.log(),u===0&&a("/synopsis",{state:{}}),u!=0&&!E&&(g(u-1),f(!1))};return d(G,{children:[r&&e("div",{className:"container",id:"loading_adventure",children:e("div",{className:"container-wrap",children:d("div",{className:"la-wrap",children:[e("img",{src:"/assets/image/black-loading.gif",alt:""}),e("span",{children:"\u6E96\u5099\u4E2D"})]})})}),!r&&d("div",{className:"container",id:"adventure_state",style:{height:y},children:[d("div",{className:"container-wrap",onClick:R,children:[e("div",{className:"as-thumb",style:{backgroundImage:`url(${l==null?void 0:l.background_url})`},children:N&&e("img",{src:N,alt:"",className:`as-thumb-character ${S==0?"lb":S==1?"mb":"rb"}`})}),e("div",{className:"as-text",children:O.map((t,s)=>e("div",{className:`as-text-wrap ${A?"":"arrow"}`,onClick:()=>{j(t)},children:t},s))})]}),e("button",{className:"back-to-btn",onClick:W,children:e("img",{src:u==0?"/assets/image/back-to-img.png":"/assets/image/back.png",alt:""})}),p&&d("div",{className:"text-select-btn-group",children:[e("a",{onClick:()=>{g(0),f(!1)},className:"final-btn",children:"\u30C8\u30C3\u30D7\u3078"}),e("a",{className:"final-btn",children:"\u30B7\u30A7\u30A2"})]})]})]})}function Ce(){const a=U();return console.log(a),e("div",{className:"flex-center position-ref full-height full-width bg-white",children:e("div",{className:"message",style:{padding:"10px"},dangerouslySetInnerHTML:{__html:a.state.message}})})}function Ee(){return e(de,{children:d(he,{children:[e(J,{path:"/",element:e(ve,{})}),e(J,{path:"/synopsis",element:e(be,{})}),e(J,{path:"/talk/:id",element:e(Ne,{})}),e(J,{path:"/error",element:e(Ce,{})})]})})}function Fe(){return e(G,{children:e(Ee,{})})}pe.render(e(ge.StrictMode,{children:e(Fe,{})}),document.getElementById("root"));
