import{f as m,c as A,g as B,a as M,r as O,u as N,_ as E,b as u,j as i,s as q,d as D,e as P,h as x,k as C,n as j,G as h,i as U,l as G,m as F,o as W,p as L,S as c,O as X}from"./index-DNjLD_m9.js";import{r as H}from"./createSvgIcon-DcmorfOh.js";import{B as z}from"./Button-Bjc5p6JC.js";import"./createSvgIcon-AGcfc4KQ.js";import"./isMuiElement-BZio1gJf.js";function K(e,t=0,a=1){return A(e,t,a)}function T(e){e=e.slice(1);const t=new RegExp(`.{1,${e.length>=6?2:1}}`,"g");let a=e.match(t);return a&&a[0].length===1&&(a=a.map(r=>r+r)),a?`rgb${a.length===4?"a":""}(${a.map((r,n)=>n<3?parseInt(r,16):Math.round(parseInt(r,16)/255*1e3)/1e3).join(", ")})`:""}function $(e){if(e.type)return e;if(e.charAt(0)==="#")return $(T(e));const t=e.indexOf("("),a=e.substring(0,t);if(["rgb","rgba","hsl","hsla","color"].indexOf(a)===-1)throw new Error(m(9,e));let r=e.substring(t+1,e.length-1),n;if(a==="color"){if(r=r.split(" "),n=r.shift(),r.length===4&&r[3].charAt(0)==="/"&&(r[3]=r[3].slice(1)),["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].indexOf(n)===-1)throw new Error(m(10,n))}else r=r.split(",");return r=r.map(s=>parseFloat(s)),{type:a,values:r,colorSpace:n}}function V(e){const{type:t,colorSpace:a}=e;let{values:r}=e;return t.indexOf("rgb")!==-1?r=r.map((n,s)=>s<3?parseInt(n,10):n):t.indexOf("hsl")!==-1&&(r[1]=`${r[1]}%`,r[2]=`${r[2]}%`),t.indexOf("color")!==-1?r=`${a} ${r.join(" ")}`:r=`${r.join(", ")}`,`${t}(${r})`}function J(e,t){return e=$(e),t=K(t),(e.type==="rgb"||e.type==="hsl")&&(e.type+="a"),e.type==="color"?e.values[3]=`/${t}`:e.values[3]=t,V(e)}function Q(e){return String(e).match(/[\d.\-+]*\s*(.*)/)[1]||""}function Y(e){return parseFloat(e)}function Z(e){return B("MuiSkeleton",e)}M("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const ee=["animation","className","component","height","style","variant","width"];let d=e=>e,b,v,k,w;const te=e=>{const{classes:t,variant:a,animation:r,hasChildren:n,width:s,height:l}=e;return P({root:["root",a,r,n&&"withChildren",n&&!s&&"fitContent",n&&!l&&"heightAuto"]},Z,t)},re=C(b||(b=d`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),ae=C(v||(v=d`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`)),ne=q("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,t[a.variant],a.animation!==!1&&t[a.animation],a.hasChildren&&t.withChildren,a.hasChildren&&!a.width&&t.fitContent,a.hasChildren&&!a.height&&t.heightAuto]}})(({theme:e,ownerState:t})=>{const a=Q(e.shape.borderRadius)||"px",r=Y(e.shape.borderRadius);return u({display:"block",backgroundColor:e.vars?e.vars.palette.Skeleton.bg:J(e.palette.text.primary,e.palette.mode==="light"?.11:.13),height:"1.2em"},t.variant==="text"&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${r}${a}/${Math.round(r/.6*10)/10}${a}`,"&:empty:before":{content:'"\\00a0"'}},t.variant==="circular"&&{borderRadius:"50%"},t.variant==="rounded"&&{borderRadius:(e.vars||e).shape.borderRadius},t.hasChildren&&{"& > *":{visibility:"hidden"}},t.hasChildren&&!t.width&&{maxWidth:"fit-content"},t.hasChildren&&!t.height&&{height:"auto"})},({ownerState:e})=>e.animation==="pulse"&&x(k||(k=d`
      animation: ${0} 2s ease-in-out 0.5s infinite;
    `),re),({ownerState:e,theme:t})=>e.animation==="wave"&&x(w||(w=d`
      position: relative;
      overflow: hidden;

      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */
      -webkit-mask-image: -webkit-radial-gradient(white, black);

      &::after {
        animation: ${0} 2s linear 0.5s infinite;
        background: linear-gradient(
          90deg,
          transparent,
          ${0},
          transparent
        );
        content: '';
        position: absolute;
        transform: translateX(-100%); /* Avoid flash during server-side hydration */
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
      }
    `),ae,(t.vars||t).palette.action.hover)),ie=O.forwardRef(function(t,a){const r=N({props:t,name:"MuiSkeleton"}),{animation:n="pulse",className:s,component:l="span",height:p,style:R,variant:I="text",width:S}=r,f=E(r,ee),g=u({},r,{animation:n,component:l,variant:I,hasChildren:!!f.children}),_=te(g);return i.jsx(ne,u({as:l,ref:a,className:D(_.root,s),ownerState:g},f,{style:u({width:S,height:p},R)}))}),se=j(h)({display:"flex",justifyContent:"space-between",minHeight:"100vh",flexDirection:"column",padding:20}),oe="/M3-Practica-Frontend/assets/background-PA7PDAOG.jpg",le=j(h)({width:"100%",minHeight:"100vh",background:`url(${oe}) no-repeat`,backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover"});function ue(){return i.jsx(le,{item:!0,sx:{display:{xs:"none",sm:"flex"}},sm:6,children:i.jsx(ie,{variant:"rectangular",width:"100%",height:"100vh"})})}var o={},y;function ce(){if(y)return o;y=1;var e=U();Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var t=e(H()),a=G();return o.default=(0,t.default)((0,a.jsx)("path",{d:"M17.77 3.77 16 2 6 12l10 10 1.77-1.77L9.54 12z"}),"ArrowBackIosNew"),o}var de=ce();const he=F(de);function pe(){const e=W();return L().pathname!=="/"?i.jsx(c,{children:i.jsx(c,{flexDirection:"row",alignItems:"center",my:3,onClick:()=>e("/"),children:i.jsx(z,{onClick:()=>e(-1),startIcon:i.jsx(he,{}),children:"Volver"})})}):i.jsx(c,{})}function ve(){return i.jsxs(h,{container:!0,minHeight:"100vh",children:[i.jsxs(se,{item:!0,xs:12,sm:6,children:[i.jsx(pe,{}),i.jsx(X,{}),i.jsx(c,{})]}),i.jsx(ue,{})]})}export{ve as default};
