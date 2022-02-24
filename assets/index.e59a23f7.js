var te=Object.defineProperty,se=Object.defineProperties;var ae=Object.getOwnPropertyDescriptors;var M=Object.getOwnPropertySymbols;var re=Object.prototype.hasOwnProperty,ue=Object.prototype.propertyIsEnumerable;var K=(s,r,u)=>r in s?te(s,r,{enumerable:!0,configurable:!0,writable:!0,value:u}):s[r]=u,H=(s,r)=>{for(var u in r||(r={}))re.call(r,u)&&K(s,u,r[u]);if(M)for(var u of M(r))ue.call(r,u)&&K(s,u,r[u]);return s},P=(s,r)=>se(s,ae(r));import{u as q,a as U,r as i,v as ie,b as _,j as h,c as e,A as ne,T as oe,d as le,e as ce,F as G,B as de,R as he,f as J,g as pe,h as ge}from"./vendor.744e6562.js";const me=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))o(l);new MutationObserver(l=>{for(const a of l)if(a.type==="childList")for(const m of a.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&o(m)}).observe(document,{childList:!0,subtree:!0});function u(l){const a={};return l.integrity&&(a.integrity=l.integrity),l.referrerpolicy&&(a.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?a.credentials="include":l.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(l){if(l.ep)return;l.ep=!0;const a=u(l);fetch(l.href,a)}};me();const A="https://mazete-api-dev.pechakucha.ai",fe=le({stringify:s=>s.kana+s.label});function _e(){const[s,r]=i.exports.useState([0,0]);return i.exports.useLayoutEffect(()=>{function u(){r([window.innerWidth,window.innerHeight])}return window.addEventListener("resize",u),u(),()=>window.removeEventListener("resize",u)},[]),s}function ve(){const s=q();U();const[r,u]=i.exports.useState(1),[o,l]=i.exports.useState([]),[a,m]=i.exports.useState(null),[b,L]=i.exports.useState(!1),[C,E]=i.exports.useState([]),[T,O]=i.exports.useState([]),[x,k]=i.exports.useState([]),[p,v]=i.exports.useState([]),[F,f]=i.exports.useState([]),[w,y]=i.exports.useState(null),[z,I]=_e();i.exports.useEffect(()=>{let n=window.innerHeight;document.getElementById("character_select").style.height=n+"px";let t=sessionStorage.register_id||null,d=sessionStorage.background||null,c=sessionStorage.user_list||null;if(c&&l(JSON.parse(c)),d&&m(JSON.parse(d)),!t){t=ie();var N=JSON.stringify({register_id:t}),D={method:"post",url:`${A}/register_id`,headers:{"Content-Type":"application/json"},data:N};_(D).then(g=>{sessionStorage.setItem("register_id",t)}).catch(g=>{s("/error",{state:{message:"\u30B9\u30C8\u30FC\u30EA\u30FC\u306E\u751F\u6210\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002<br/>\u6642\u9593\u3092\u304A\u3044\u3066\u304A\u8A66\u3057\u304F\u3060\u3055\u3044"}})})}let B=JSON.stringify({user_id:t,search_query:"",chosen_chara_ids:"",chosen_world_ids:""}),$={method:"post",url:`${A}/get_chara_list`,headers:{"Content-Type":"application/json"},data:B};_($).then(g=>{E(g.data.chara_list)}).catch(g=>{s("/error",{state:{message:"\u30B9\u30C8\u30FC\u30EA\u30FC\u306E\u751F\u6210\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002<br/>\u6642\u9593\u3092\u304A\u3044\u3066\u304A\u8A66\u3057\u304F\u3060\u3055\u3044"}})});let Y=JSON.stringify({user_id:t,search_query:"",chosen_chara_ids:"",chosen_world_ids:""}),Z={method:"post",url:`${A}/get_world_list`,headers:{"Content-Type":"application/json"},data:Y};_(Z).then(g=>{O(g.data.world_list)}).catch(g=>{s("/error",{state:{message:"\u30B9\u30C8\u30FC\u30EA\u30FC\u306E\u751F\u6210\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002<br/>\u6642\u9593\u3092\u304A\u3044\u3066\u304A\u8A66\u3057\u304F\u3060\u3055\u3044"}})});let V={method:"post",url:`${A}/get_autocomplete_chara`,headers:{"Content-Type":"application/json"},data:{}};_(V).then(g=>{v(g.data.auto_complete),f(g.data.auto_complete)}).catch(g=>{});let ee={method:"post",url:`${A}/get_autocomplete_world`,headers:{"Content-Type":"application/json"},data:{}};_(ee).then(g=>{k(g.data.auto_complete)}).catch(g=>{})},[]),i.exports.useEffect(()=>{a&&o.length>0?L(!0):L(!1)},[o,a]);const S=n=>{let t=o,d=C.filter(c=>c.chara_id==n)[0];if(t.map(c=>c.chara_id).includes(n)){for(let c=0;c<t.length;c++)t[c].chara_id===n&&(t.splice(c,1),c--);l([...t])}else t.length<3&&(t.push(d),l([...t]))},j=()=>{let n=sessionStorage.register_id||null,t=JSON.stringify({user_id:n,chosen_chara_ids:o.map(c=>c.chara_id).toString(),chosen_world_ids:[a.world_id].toString()}),d={method:"post",url:`${A}/generate_outline`,headers:{"Content-Type":"application/json"},data:t};_(d).then(c=>{sessionStorage.setItem("outline_id",c.data.outline_id),sessionStorage.setItem("background",JSON.stringify(a)),sessionStorage.setItem("user_list",JSON.stringify(o)),sessionStorage.removeItem("outline_data"),s("/synopsis",{state:{}})}).catch(c=>{s("/error",{state:{message:"\u30B9\u30C8\u30FC\u30EA\u30FC\u306E\u751F\u6210\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002<br/>\u6642\u9593\u3092\u304A\u3044\u3066\u304A\u8A66\u3057\u304F\u3060\u3055\u3044"}})})},R=n=>{n.preventDefault();let t=sessionStorage.register_id||null,d=w,c=o.map(B=>B.chara_id).toString(),N="";a&&(N=[a.world_id].toString());let D=JSON.stringify({user_id:t,search_query:d,chosen_chara_ids:c,chosen_world_ids:N});if(r==1){let B={method:"post",url:`${A}/get_chara_list`,headers:{"Content-Type":"application/json"},data:D};_(B).then($=>{E($.data.chara_list)}).catch($=>{s("/error",{state:{message:"\u30B9\u30C8\u30FC\u30EA\u30FC\u306E\u751F\u6210\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002<br/>\u6642\u9593\u3092\u304A\u3044\u3066\u304A\u8A66\u3057\u304F\u3060\u3055\u3044"}})})}else{let B={method:"post",url:`${A}/get_world_list`,headers:{"Content-Type":"application/json"},data:D};_(B).then($=>{O($.data.world_list)}).catch($=>{s("/error",{state:{message:"\u30B9\u30C8\u30FC\u30EA\u30FC\u306E\u751F\u6210\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002<br/>\u6642\u9593\u3092\u304A\u3044\u3066\u304A\u8A66\u3057\u304F\u3060\u3055\u3044"}})})}},W=n=>t=>{t.stopPropagation();let d=o;for(let c=0;c<d.length;c++)d[c].chara_id===n&&(d.splice(c,1),c--);l([...d])};return h("div",{className:"container",id:"character_select",children:[h("div",{className:"container-wrap",children:[h("div",{className:"common-header",children:[e("div",{className:"common-header-title01",children:"-\u4F5C\u54C1\u30EA\u30DF\u30C3\u30AF\u30B9-"}),e("div",{className:"common-header-title02",children:"\u30DE\u305C\u3066"})]}),h("div",{className:"preview",children:[h("div",{className:"preview-part",onClick:()=>{u(1),f(p),y(null)},children:[h("div",{className:"preview-img-part",children:[o.map(n=>e("div",{style:{backgroundImage:`url(${n.img_url})`},className:"avatar-preview",children:h("div",{className:"avatar-preview-close",onClick:W(n.chara_id),children:[e("span",{}),e("span",{})]})},n.chara_id)),o.length==0&&e("div",{className:"avatar-preview",style:{backgroundImage:"url(/assets/image/default-avatar.png)"}})]}),e("div",{className:r===1?"preview-title-part active":"preview-title-part",children:"\u30AD\u30E3\u30E9"})]}),h("div",{className:"preview-part",onClick:()=>{u(2),f(x),y(null)},children:[e("div",{className:"preview-img-part",children:e("div",{style:{backgroundImage:`url(${a!=null?a.img_url:"/assets/image/point-bg.png"})`},className:a!=null?"world-preview":"world-none-preview"})}),e("div",{className:r===2?"preview-title-part active":"preview-title-part",children:"\u30B7\u30C1\u30E5\u30A8\u30FC\u30B7\u30E7\u30F3"})]})]}),h("div",{className:"point-select",children:[e("div",{className:"point-search",children:h("form",{onSubmit:R,children:[e(ne,{value:w,onChange:(n,t)=>{typeof t=="string"?y({label:t}):t&&t.inputValue?y({label:t.inputValue}):y(t)},filterOptions:(n,t)=>fe(n,t),selectOnFocus:!0,clearOnBlur:!0,handleHomeEndKeys:!0,options:F,getOptionLabel:n=>typeof n=="string"?n:n.label,renderOption:(n,t)=>e("li",P(H({},n),{children:t.label})),renderInput:n=>e(oe,P(H({},n),{label:""}))}),e("button",{className:"search-btn",children:e("img",{src:"/assets/image/point-search.png",alt:""})})]})}),e("div",{className:"point-intro",children:"\u753B\u50CF\u306FBing\u306E\u691C\u7D22\u7D50\u679C\u3092\u3082\u3068\u306B\u8868\u793A\u3057\u3066\u3044\u307E\u3059"}),h("div",{className:"point-body",style:{height:`calc(${I}px - 220px)`},children:[r===1&&e("div",{className:"point-body-wrap",children:C.map((n,t)=>e("div",{style:{backgroundImage:`url(${n.img_url})`},onClick:()=>S(n.chara_id),className:`${o.map(d=>d.chara_id).includes(n.chara_id)?"active":""} character-item`,children:e("span",{})},t))}),r==2&&e("div",{className:"point-body-wrap",children:T.map((n,t)=>e("div",{style:{backgroundImage:`url(${n.img_url})`},className:`${(a==null?void 0:a.img_url)==n.img_url?"active":""} location-item`,onClick:d=>{m(n)},children:e("span",{})},t))})]})]})]}),e("div",{className:"character-add-btn-part",children:e("button",{onClick:j,className:`character-add-btn ${b?"active":""}`,disabled:!b,children:"\u30DE\u305C\u308B"})})]})}const Q="https://mazete-api-dev.pechakucha.ai";function ye(){const[s,r]=i.exports.useState([0,0]);return i.exports.useLayoutEffect(()=>{function u(){r([window.innerWidth,window.innerHeight])}return window.addEventListener("resize",u),u(),()=>window.removeEventListener("resize",u)},[]),s}function Se(){const s=q(),r=i.exports.useRef(),[u,o]=i.exports.useState(!1),[l,a]=i.exports.useState(!0),[m,b]=i.exports.useState(""),[L,C]=i.exports.useState([]),[E,T]=i.exports.useState(null),[O,x]=ye();i.exports.useEffect(()=>{let p=window.innerHeight;document.getElementById("loading_synposis").style.height=p+"px";let v=sessionStorage.register_id||null,F=sessionStorage.outline_id||null,f=sessionStorage.background||null,w=sessionStorage.user_list||null,y=sessionStorage.outline_data||null;(!w||!f)&&s("/",{state:{}}),T(JSON.parse(f)),C(JSON.parse(w));let z=JSON.stringify({user_id:v,outline_id:F});if(y)b(JSON.parse(y)),a(!1);else{let I={method:"post",url:`${Q}/get_outline`,headers:{"Content-Type":"application/json"},data:z};_(I).then(S=>{S.data.generated&&S.data.outline&&!S.data.error?(a(!1),b(S.data.outline)):s("/error",{state:{message:"\u30B9\u30C8\u30FC\u30EA\u30FC\u306E\u751F\u6210\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002<br/>\u6642\u9593\u3092\u304A\u3044\u3066\u304A\u8A66\u3057\u304F\u3060\u3055\u3044"}})}).catch(S=>{s("/error",{state:{message:"\u30B9\u30C8\u30FC\u30EA\u30FC\u306E\u751F\u6210\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002<br/>\u6642\u9593\u3092\u304A\u3044\u3066\u304A\u8A66\u3057\u304F\u3060\u3055\u3044"}})})}},[]);const k=()=>{let p=sessionStorage.register_id||null,v=sessionStorage.outline_id||null;sessionStorage.setItem("outline_data",JSON.stringify(m));let F=JSON.stringify({user_id:p,outline_id:v,outline:m}),f={method:"post",url:`${Q}/generate_story`,headers:{"Content-Type":"application/json"},data:F};_(f).then(w=>{s(`/talk/${w.data.story_id}`,{state:{}})}).catch(w=>{s("/error",{state:{message:"\u30B9\u30C8\u30FC\u30EA\u30FC\u306E\u751F\u6210\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002<br/>\u6642\u9593\u3092\u304A\u3044\u3066\u304A\u8A66\u3057\u304F\u3060\u3055\u3044"}})})};return i.exports.useEffect(()=>{r.current&&u&&r.current.focus()},[u]),h("div",{className:"container",id:"loading_synposis",children:[h("div",{className:"container-wrap",children:[e("div",{className:`ls-top ${u?"editing":""}`,children:e("div",{className:"",style:{backgroundImage:`url(${E==null?void 0:E.img_url}`,backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center"},children:e("div",{className:"ls-top-body",children:L.map((p,v)=>e("div",{className:"ls-top-item",style:{backgroundImage:`url(${p==null?void 0:p.img_url})`}},v))})})}),h("div",{className:"ls-main",style:{height:`calc(${x}px - 280px)`},children:[e("div",{className:"ls-main-title",children:"\u307E\u3048\u304C\u304D"}),h("div",{className:"ls-main-loading-text",style:{height:"calc(100% - 70px)"},children:[l&&h("div",{className:"ls-main-loading-part",children:[e("img",{src:"/assets/image/white-loading.gif",alt:""}),e("span",{children:"\u4E0B\u66F8\u304D\u6E96\u5099\u4E2D"})]}),!l&&e("textarea",{ref:r,className:"ls-main-loading-wrap",value:m,disabled:!u,onChange:p=>{b(p.target.value)},onBlur:()=>{o(!1)}})]}),!u&&h("a",{className:"ls-main-edit-btn",onClick:()=>{r.current.focus(),o(!0)},children:[e("span",{children:"\u7DE8\u96C6"}),e("img",{src:"/assets/image/edit-icon.png",alt:""})]})]})]}),!u&&e("button",{className:"back-to-btn",onClick:()=>{let p=sessionStorage.user_list||null;s("/",{state:{user_list:p}})},children:e("img",{src:"/assets/image/back-to-img.png",alt:""})}),!u&&e("div",{className:"ls-main-making-btn-part",children:e("button",{onClick:k,className:l?"ls-main-making-btn":"ls-main-making-btn active",disabled:l,children:"\u3053\u306E\u4E16\u754C\u7DDA\u306B\u5165\u308B"})})]})}const be="https://mazete-api-dev.pechakucha.ai";function X(s){return new Promise(r=>setTimeout(r,s))}function we(){const[s,r]=i.exports.useState([0,0]);return i.exports.useLayoutEffect(()=>{function u(){r([window.innerWidth,window.innerHeight])}return window.addEventListener("resize",u),u(),()=>window.removeEventListener("resize",u)},[]),s}function Ne(){const s=q(),[r,u]=i.exports.useState(!0),[o,l]=i.exports.useState(null),[a,m]=i.exports.useState(0),[b,L]=i.exports.useState(null),[C,E]=i.exports.useState(null),[T,O]=i.exports.useState([]),[x,k]=i.exports.useState(!1),[p,v]=i.exports.useState(!1),[F,f]=i.exports.useState(!1),[w,y]=we();let{story_id:z}=ce();i.exports.useEffect(()=>{let t=sessionStorage.register_id||null,d=JSON.stringify({user_id:t,story_id:z}),c={method:"post",url:`${be}/get_story`,headers:{"Content-Type":"application/json"},data:d};_(c).then(N=>{u(!1),N.data.generated&&!N.data.error?(u(!1),l(N.data)):s("/error",{state:{message:"\u30B9\u30C8\u30FC\u30EA\u30FC\u306E\u751F\u6210\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002<br/>\u6642\u9593\u3092\u304A\u3044\u3066\u304A\u8A66\u3057\u304F\u3060\u3055\u3044"}})}).catch(N=>{s("/error",{state:{message:"\u30B9\u30C8\u30FC\u30EA\u30FC\u306E\u751F\u6210\u306B\u5931\u6557\u3057\u307E\u3057\u305F\u3002<br/>\u6642\u9593\u3092\u304A\u3044\u3066\u304A\u8A66\u3057\u304F\u3060\u3055\u3044"}})})},[]),i.exports.useEffect(()=>{o&&I()},[o,a]),i.exports.useEffect(async()=>{if(o){let t=o.story;await X(1),L(t[a].position)}},[C]);const I=()=>{let t=o.story;E(t[a].chara_img_url),t[a].multiple?(k(!0),O(t[a].content)):(k(!1),S(t[a].content))},S=async t=>{f(!0);for(var d=0;d<t.length;)O([t.substring(0,d+1)]),d++,await X(75);f(!1),o.story.length-1==a&&v(!0)},j=t=>{x&&(k(!1),S(t))},R=()=>{!F&&!x&&o.story.length-1>a&&m(a+1)},W=()=>{a===0&&s("/synopsis",{state:{}}),a!=0&&!F&&(m(a-1),v(!1))},n=t=>{t.preventDefault(),sessionStorage.removeItem("outline_id"),sessionStorage.removeItem("background"),sessionStorage.removeItem("user_list"),s("/",{state:{}})};return h(G,{children:[r&&e("div",{className:"container",id:"loading_adventure",children:e("div",{className:"container-wrap",children:h("div",{className:"la-wrap",children:[e("img",{src:"/assets/image/black-loading.gif",alt:""}),e("span",{children:"\u6E96\u5099\u4E2D"})]})})}),!r&&h("div",{className:"container",id:"adventure_state",style:{height:y},children:[h("div",{className:"container-wrap",onClick:R,children:[e("div",{className:"as-thumb",style:{backgroundImage:`url(${o==null?void 0:o.background_url})`},children:C&&e("img",{src:C,alt:"",className:`as-thumb-character ${b==0?"lb":b==1?"mb":"rb"}`})}),e("div",{className:"as-text",children:T.map((t,d)=>e("div",{className:`as-text-wrap ${x?"":"arrow"}`,onClick:()=>{j(t)},children:t},d))})]}),e("button",{className:"back-to-btn",onClick:W,children:e("img",{src:a==0?"/assets/image/back-to-img.png":"/assets/image/back.png",alt:""})}),p&&h("div",{className:"text-select-btn-group",children:[e("a",{onClick:n,className:"final-btn",children:"\u30C8\u30C3\u30D7\u3078"}),e("a",{className:"final-btn",children:"\u30B7\u30A7\u30A2"})]})]})]})}function Ce(){const s=U();return console.log(s),e("div",{className:"flex-center position-ref full-height full-width bg-white",children:e("div",{className:"message",style:{padding:"10px"},dangerouslySetInnerHTML:{__html:s.state.message}})})}function Ee(){return e(de,{children:h(he,{children:[e(J,{path:"/",element:e(ve,{})}),e(J,{path:"/synopsis",element:e(Se,{})}),e(J,{path:"/talk/:id",element:e(Ne,{})}),e(J,{path:"/error",element:e(Ce,{})})]})})}function Fe(){return e(G,{children:e(Ee,{})})}pe.render(e(ge.StrictMode,{children:e(Fe,{})}),document.getElementById("root"));
