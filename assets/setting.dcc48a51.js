import{d as P,r as _,p as U,o as J,a as $,b as f,s as D,e,f as t,ax as M,w as a,ay as d,E as l,al as h,I as v,az as k,R as B,Q as g,am as r,aA as w,c as L,ak as V,D as A,ao as C,T as z,ad as y,aB as R,y as i}from"./vendor.64da71ad.js";import{p as b,i as G}from"./index.32492608.js";var Q="/pikpak/assets/aria2-tip-1.e9ebfae4.png",H="/pikpak/assets/aria2-tip-2.f3636f8d.png";const K={class:"list-page"},Z=i(" \u7ED1\u5B9Atelegram "),q=l("p",null,null,-1),W=i("Telegram\u7ED1\u5B9A"),X=l("a",{href:"https://t.me/PikPak_Bot",target:"_blank"},"Telegram\u673A\u5668\u4EBA\u5730\u5740",-1),Y=i("aria2\u8BBE\u7F6E "),uu=i("\u9009\u62E9\u6587\u4EF6\u5939\u65F6\u4FDD\u5B58\u6587\u4EF6\u5939\u7ED3\u6784"),eu=i("\u9009\u62E9\u6587\u4EF6\u5939\u65F6\u4EC5\u4FDD\u5B58\u6587\u4EF6"),tu=l("img",{src:Q,alt:""},null,-1),au=l("br",null,null,-1),lu=l("br",null,null,-1),ou=l("img",{src:H,alt:""},null,-1),su=i("\u6D4B\u8BD5\u5E76\u4FDD\u5B58"),nu=i("\u81EA\u52A8\u767B\u5F55\u8BBE\u7F6E "),iu=i("\u4FDD\u5B58"),ru=l("p",null,null,-1),du=i("\u4FDD\u5B58\u8BBE\u7F6E"),pu=i("\u6062\u590D\u9ED8\u8BA4"),Fu=l("a",{href:"https://mypikpak.com/",target:"_blank",class:"n-button"},"\u5B98\u65B9\u7F51\u7AD9",-1),Eu=l("a",{href:"https://t.me/pikpak_userservice",target:"_blank",class:"n-button"},"\u5B98\u65B9\u4EA4\u6D41\u7FA4",-1),_u=l("a",{href:"https://github.com/tjsky/pikpak",target:"_blank",class:"n-button"},"\u5F00\u6E90\u4ED3\u5E93",-1),Bu=l("a",{href:"https://www.tjsky.net/?p=201",target:"_blank",class:"n-button"},"\u90E8\u7F72\u6559\u7A0B",-1),cu=l("a",{href:"https://t.me/pikpak_userservice",target:"_blank"},"\u95EE\u9898\u53CD\u9988",-1),mu=l("br",null,null,-1),gu=l("a",{href:"https://github.com/MotooriKashin/ef2/releases",target:"_blank",class:"n-button"},"\u5730\u5740\u4E00\uFF1A\u4E0B\u8F7D\u652F\u6301\u63D2\u4EF6",-1),fu=l("a",{href:"https://url71.ctfile.com/f/21226171-531688310-489b35",target:"_blank",class:"n-button"},"\u5730\u5740\u4E8C\uFF1A\u4E0B\u8F7D\u652F\u6301\u63D2\u4EF6\uFF08\u5BC6\u7801pikpak\uFF09",-1),hu=l("a",{href:"https://www.tjsky.net/?p=220#PCIDM",target:"_blank",class:"n-button"},"\u4F7F\u7528\u6559\u7A0B",-1),vu=l("br",null,null,-1),ku=i("\u5148\u7528\u7B2C\u4E00\u4E2A\u4E0B\u8F7D\u5730\u5740\uFF0C\u5982\u679C\u4F60\u5B9E\u5728\u65E0\u6CD5\u8BBF\u95EEgithub\u518D\u4F7F\u7528\u7B2C\u4E8C\u4E2A\u4E0B\u8F7D\u5730\u5740\uFF0C\u8C03\u7528IDM\u4E0B\u8F7D\u9700\u8981\u914D\u5408\u201C\u81EA\u5B9A\u4E49\u83DC\u5355\u201D\u529F\u80FD\u5B9E\u73B0\uFF0C\u8BF7\u67E5\u770B\u4E0A\u65B9\u7684\u4F7F\u7528\u6559\u7A0B "),Du=l("br",null,null,-1),yu=P({setup(wu){const x=_(["\u624B\u673A\u6CE8\u518C\u767B\u9646","\u6DFB\u52A0\u63A8\u5E7F\u4E0B\u8F7D","\u7ED1\u5B9ATelegram","\u76F4\u63A5\u5206\u4EAB\u529F\u80FD\uFF08\u4E0B\u7EBF\uFF09","\u4FEE\u6539\u4F20\u8F93\u81EA\u52A8\u8BF7\u6C42\u65B9\u5F0F","\u4F20\u8F93\u53EA\u663E\u793A\u4FDD\u5B58\u4E2D","\u81EA\u5B9A\u4E49\u83DC\u5355","\u8D44\u6E90\u5E93\u5206\u9875\uFF0C\u5206\u4EAB\u79D2\u4F20\u652F\u6301\u6587\u4EF6\u53CA","...."]),o=_({host:"",token:"",dir:!0}),S=()=>{let n={id:"",jsonrpc:"2.0",method:"aria2.getGlobalStat",params:[]};o.value.token&&n.params.splice(0,0,"token:"+o.value.token),fetch(o.value.host,{method:"POST",body:JSON.stringify(n),headers:new Headers({"Content-Type":"application/json"})}).then(u=>u.json()).then(u=>{u.error&&u.error.message?window.$message.error(u.error.message):u.result&&(window.localStorage.setItem("pikpakAria2",JSON.stringify(o.value)),window.$message.success("\u4FDD\u5B58\u6210\u529F"))}).catch(u=>console.error("Error:",u))},c=_(!1),p=_({username:"",password:""}),N=U(),I=()=>{c.value?N.warning({title:"\u8B66\u544A",content:"\u8BB0\u4F4F\u767B\u9646\u662F\u6307\u6D4F\u89C8\u5668\u672C\u5730\u660E\u6587\u4FDD\u5B58\u7528\u6237\u540D\u5BC6\u7801\u7528\u4E8E\u4E0B\u6B21\u81EA\u52A8\u767B\u9646\uFF0C\u8BF7\u52FF\u5728\u975E\u4FE1\u4EFB\u8BBE\u5907\u9009\u62E9",positiveText:"\u786E\u5B9A",negativeText:"\u4E0D\u786E\u5B9A",onPositiveClick:()=>{window.localStorage.setItem("pikpakLoginData",JSON.stringify(p.value))},onNegativeClick:()=>{}}):window.localStorage.removeItem("pikpakLoginData")},m=_(""),T=()=>{let n=m.value.split(`
`).filter(u=>u!="");window.localStorage.setItem("proxy",JSON.stringify(n)),window.localStorage.setItem("isSettingProxy","true")},j=()=>{window.localStorage.setItem("proxy",JSON.stringify(b)),window.localStorage.removeItem("isSettingProxy"),m.value=b.join(`
`)};J(()=>{let n=JSON.parse(window.localStorage.getItem("pikpakAria2")||"{}");n.dir===void 0&&(n.dir=!0),n.host&&(o.value=n);let u=JSON.parse(window.localStorage.getItem("pikpakLoginData")||"{}");u.username&&u.password&&(p.value=u,c.value=!0);let E=JSON.parse(window.localStorage.getItem("proxy")||"[]");E.length&&(m.value=E.join(`
`))});const F=_(),O=()=>{let n=JSON.parse(window.localStorage.getItem("pikpakLogin")||"{}");if(!n&&!n.access_token)return window.$message.error("\u8BF7\u5148\u767B\u9646"),!1;let u=F.value&&decodeURIComponent(F.value).match(/(^|&)token=([^&]*)(&|$)/);if(console.log(u),!u||!u.length||u.length!=4)return window.$message.error("\u8BF7\u8F93\u5165\u6B63\u786E\u94FE\u63A5"),!1;G.post("https://api-drive.mypikpak.com/user/v1/bind",{accessToken:n.access_token,thirdType:"TG",thirdToken:u[2]}).then(E=>{F.value="",E.data.bound?window.$message.success("\u7ED1\u5B9A\u6210\u529F"):window.$message.error("\u7ED1\u5B9A\u5931\u8D25")})};return(n,u)=>{const E=$("n-text");return f(),D("div",K,[e(t(M),{"default-expanded-names":["-1","0","2","3","4"]},{default:a(()=>[e(t(d),{name:"-1"},{header:a(()=>[Z,l("a",{onClick:u[0]||(u[0]=k(()=>{},["stop"])),href:"https://www.tjsky.net/?p=220#Telegram",target:"_blank"},[e(t(v),{style:{"vertical-align":"middle"},size:"20",color:"#d03050"},{default:a(()=>[e(t(h))]),_:1})])]),default:a(()=>[e(t(B),{value:F.value,"onUpdate:value":u[1]||(u[1]=s=>F.value=s),placeholder:"\u590D\u5236telegram\u7ED1\u5B9A\u94FE\u63A5\u5230\u8FD9"},null,8,["value"]),q,e(t(g),{disabled:!F.value,type:"primary",onClick:O},{default:a(()=>[W]),_:1},8,["disabled"]),X]),_:1}),e(t(d),{name:"0",title:"aria2\u8BBE\u7F6E"},{header:a(()=>[Y,l("a",{onClick:u[2]||(u[2]=k(()=>{},["stop"])),href:"https://www.tjsky.net/?p=220#arai2",target:"_blank"},[e(t(v),{style:{"vertical-align":"middle"},size:"20",color:"#d03050"},{default:a(()=>[e(t(h))]),_:1})])]),default:a(()=>[e(t(C),{"label-width":"100px","label-align":"left","label-placement":"left"},{default:a(()=>[e(t(r),{label:"aria2\u94FE\u63A5\uFF1A"},{default:a(()=>[e(t(B),{value:o.value.host,"onUpdate:value":u[3]||(u[3]=s=>o.value.host=s),placeholder:"\u4F8B\u5982http://localhost:6800/jsonrpc"},null,8,["value"])]),_:1}),e(t(r),{label:"aria2Token\uFF1A"},{default:a(()=>[e(t(B),{value:o.value.token,"onUpdate:value":u[4]||(u[4]=s=>o.value.token=s),type:"password","show-password-on":"mousedown"},null,8,["value"])]),_:1}),e(t(r),{label:"\u6587\u4EF6\u5939\u8BBE\u7F6E\uFF1A"},{default:a(()=>[e(t(w),{value:o.value.dir,"onUpdate:value":u[5]||(u[5]=s=>o.value.dir=s)},{checked:a(()=>[uu]),unchecked:a(()=>[eu]),_:1},8,["value"])]),_:1}),o.value.host&&o.value.host.indexOf("https://")===-1&&o.value.host.indexOf("http://localhost")==-1&&o.value.host.indexOf("http://127.0.0.1")===-1?(f(),L(t(V),{key:0,title:"\u7531\u4E8E\u6D4F\u89C8\u5668\u9650\u5236\uFF0C\u8BF7\u6309\u4E0B\u56FE\u8BBE\u7F6E\u5F00\u59CB\u6DF7\u5408\u6A21\u5F0F",type:"info"},{default:a(()=>[tu,au,lu,ou]),_:1})):A("",!0),e(t(r),null,{default:a(()=>[e(t(g),{type:"primary",onClick:S},{default:a(()=>[su]),_:1})]),_:1})]),_:1})]),_:1}),e(t(d),{name:"1",title:"\u81EA\u52A8\u767B\u5F55\u8BBE\u7F6E"},{header:a(()=>[nu,l("a",{onClick:u[6]||(u[6]=k(()=>{},["stop"])),href:"https://www.tjsky.net/?p=220#i-6",target:"_blank"},[e(t(v),{style:{"vertical-align":"middle"},size:"20",color:"#d03050"},{default:a(()=>[e(t(h))]),_:1})])]),default:a(()=>[e(t(C),{"label-width":"100px","label-align":"left","label-placement":"left"},{default:a(()=>[e(t(r),{label:"\u662F\u5426\u5F00\u542F"},{default:a(()=>[e(t(w),{value:c.value,"onUpdate:value":u[7]||(u[7]=s=>c.value=s)},null,8,["value"])]),_:1}),c.value?(f(),D(z,{key:0},[e(t(r),{label:"\u7528\u6237\u540D"},{default:a(()=>[e(t(B),{value:p.value.username,"onUpdate:value":u[8]||(u[8]=s=>p.value.username=s),placeholder:"\u7528\u6237\u540D"},null,8,["value"])]),_:1}),e(t(r),{label:"\u5BC6\u7801"},{default:a(()=>[e(t(B),{value:p.value.password,"onUpdate:value":u[9]||(u[9]=s=>p.value.password=s),type:"password","show-password-on":"mousedown"},null,8,["value"])]),_:1})],64)):A("",!0),e(t(r),null,{default:a(()=>[e(t(g),{type:"primary",onClick:I},{default:a(()=>[iu]),_:1})]),_:1})]),_:1})]),_:1}),e(t(d),{name:"3",title:"\u4EE3\u7406\u8BBE\u7F6E"},{default:a(()=>[e(t(B),{type:"textarea",value:m.value,"onUpdate:value":u[10]||(u[10]=s=>m.value=s),rows:"4",placeholder:"\u652F\u6301\u591A\u4E2A\u968F\u673A\uFF0C\u4E00\u884C\u4E00\u4E2A\uFF0C\u4E3A\u7A7A\u5219\u4E0D\u4EE3\u7406"},null,8,["value"]),ru,e(t(g),{type:"primary",onClick:T},{default:a(()=>[du]),_:1}),e(E,{onClick:j},{default:a(()=>[pu]),_:1})]),_:1}),e(t(d),{title:"\u5173\u4E8E",name:"2"},{default:a(()=>[e(t(y),null,{default:a(()=>[Fu,Eu,_u,Bu,cu]),_:1}),mu]),_:1}),e(t(d),{title:"PC\u7AEFIDM\u652F\u6301",name:"4"},{default:a(()=>[e(t(y),null,{default:a(()=>[gu,fu,hu,vu,ku]),_:1}),Du]),_:1}),e(t(d),{title:"\u529F\u80FD\u5217\u8868",name:"3"},{default:a(()=>[e(t(R),{lines:x.value},null,8,["lines"])]),_:1})]),_:1})])}}});export{yu as default};
