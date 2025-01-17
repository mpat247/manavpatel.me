!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new e.Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="fba90d36-c244-498d-91ed-792dc9969587",e._sentryDebugIdIdentifier="sentry-dbid-fba90d36-c244-498d-91ed-792dc9969587")}catch(e){}}(),(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3055,824],{20808:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/project/[ref]/database/schemas",function(){return s(33034)}])},35407:function(e,t,s){"use strict";s.d(t,{Q:function(){return l}});var n=s(97458),a=s(25019),r=s(48963),i=s(38095),l=e=>{let{page:t,menu:s}=e;return(0,n.jsx)("div",{className:"flex flex-col space-y-8 overflow-y-auto","data-sentry-component":"ProductMenu","data-sentry-source-file":"ProductMenu.tsx",children:(0,n.jsx)(a.ZP,{type:"pills","data-sentry-element":"Menu","data-sentry-source-file":"ProductMenu.tsx",children:s.map((e,l)=>(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{className:"my-6 space-y-8",children:(0,n.jsxs)("div",{className:"mx-3",children:[(0,n.jsx)(a.ZP.Group,{title:e.title?(0,n.jsxs)("div",{className:"flex flex-col space-y-2 uppercase font-mono",children:[(0,n.jsx)("span",{children:e.title}),e.isPreview&&(0,n.jsx)(r.C,{variant:"warning",children:"Not production ready"})]}):null}),(0,n.jsx)("div",{children:e.items.map(e=>(0,n.jsx)(i.Z,{url:e.url,name:e.name,icon:e.icon,rightIcon:e.rightIcon,isActive:t===e.key,isExternal:e.isExternal,target:e.isExternal?"_blank":"_self",label:e.label},e.key))})]})}),l!==s.length-1&&(0,n.jsx)("div",{className:"h-px w-full bg-border-overlay"})]},e.key||e.title))})})}},8178:function(e,t,s){"use strict";s.d(t,{H:function(){return c}});var n=s(28894),a=s(23346),r=s(70587),i=s(92656),l=s(92787);async function o(e,t){let{projectRef:s,connectionString:n}=e;if(!s)throw Error("projectRef is required");let r=new Headers;n&&r.set("x-connection-encrypted",n);let{data:i,error:l}=await (0,a.U2)("/platform/pg-meta/{ref}/extensions",{params:{header:{"x-connection-encrypted":n},path:{ref:s}},headers:r,signal:t});return l&&(0,a.S3)(l),i}let c=function(e){let{projectRef:t,connectionString:s}=e,{enabled:a=!0,...c}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},d=(0,i.Vm)(),m=(null==d?void 0:d.status)===l.S.ACTIVE_HEALTHY;return(0,n.a)(r.o.list(t),e=>{let{signal:n}=e;return o({projectRef:t,connectionString:s},n)},{enabled:a&&void 0!==t&&m,...c})}},59066:function(e,t,s){"use strict";s.d(t,{Z:function(){return n}});let n=(0,s(96725).Z)("Hash",[["line",{x1:"4",x2:"20",y1:"9",y2:"9",key:"4lhtct"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15",key:"vyu0kd"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21",key:"1ggp8o"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21",key:"weycgp"}]])},29030:function(e,t,s){"use strict";s.d(t,{Z:function(){return n}});let n=(0,s(96725).Z)("Key",[["path",{d:"m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4",key:"g0fldk"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}]])},70400:function(e,t,s){"use strict";s.d(t,{Z:function(){return n}});let n=(0,s(96725).Z)("Table2",[["path",{d:"M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18",key:"gugj83"}]])},20824:function(e,t,s){"use strict";s.d(t,{Z:function(){return f}});var n=s(97458),a=s(79367),r=s(85467),i=s(35407),l=s(8178),o=s(19061),c=s(92656),d=s(88551),m=s(9386),u=s(92787),h=s(52619);let x=(e,t)=>{var s;let a=null!==(s=null==e?void 0:e.ref)&&void 0!==s?s:"default",{pgNetExtensionExists:r,pitrEnabled:i,columnLevelPrivileges:l}=t||{};return[{title:"Database Management",items:[{name:"Schema Visualizer",key:"schemas",url:"/project/".concat(a,"/database/schemas"),items:[]},{name:"Tables",key:"tables",url:"/project/".concat(a,"/database/tables"),items:[]},{name:"Functions",key:"functions",url:"/project/".concat(a,"/database/functions"),items:[]},{name:"Triggers",key:"triggers",url:"/project/".concat(a,"/database/triggers"),items:[]},{name:"Enumerated Types",key:"types",url:"/project/".concat(a,"/database/types"),items:[]},{name:"Extensions",key:"extensions",url:"/project/".concat(a,"/database/extensions"),items:[]},{name:"Indexes",key:"indexes",url:"/project/".concat(a,"/database/indexes"),items:[]},{name:"Publications",key:"publications",url:"/project/".concat(a,"/database/publications"),items:[]}]},{title:"Access Control",items:[{name:"Roles",key:"roles",url:"/project/".concat(a,"/database/roles"),items:[]},...l?[{name:"Column Privileges",key:"column-privileges",url:"/project/".concat(a,"/database/column-privileges"),items:[],label:"ALPHA"}]:[],{name:"Policies",key:"policies",url:"/project/".concat(a,"/auth/policies"),rightIcon:(0,n.jsx)(h.Z,{strokeWidth:1,className:"h-4 w-4"}),items:[]}]},{title:"Platform",items:[...u.Qy?[{name:"Backups",key:"backups",url:i?"/project/".concat(a,"/database/backups/pitr"):"/project/".concat(a,"/database/backups/scheduled"),items:[]}]:[],{name:"Migrations",key:"migrations",url:"/project/".concat(a,"/database/migrations"),items:[]},{name:"Wrappers",key:"wrappers",url:"/project/".concat(a,"/integrations?category=wrapper"),rightIcon:(0,n.jsx)(h.Z,{strokeWidth:1,className:"h-4 w-4"}),items:[]},...r?[{name:"Webhooks",key:"hooks",url:"/project/".concat(a,"/integrations/webhooks/overview"),rightIcon:(0,n.jsx)(h.Z,{strokeWidth:1,className:"h-4 w-4"}),items:[]}]:[]]},{title:"Tools",items:[{name:"Security Advisor",key:"security-advisor",url:"/project/".concat(a,"/advisors/security"),rightIcon:(0,n.jsx)(h.Z,{strokeWidth:1,className:"h-4 w-4"}),items:[]},{name:"Performance Advisor",key:"performance-advisor",url:"/project/".concat(a,"/advisors/performance"),rightIcon:(0,n.jsx)(h.Z,{strokeWidth:1,className:"h-4 w-4"}),items:[]},{name:"Query Performance",key:"query-performance",url:"/project/".concat(a,"/advisors/query-performance"),rightIcon:(0,n.jsx)(h.Z,{strokeWidth:1,className:"h-4 w-4"}),items:[]}]}]},p=()=>{let e=(0,c.Vm)(),t=(0,a.useRouter)().pathname.split("/")[4],{data:s}=(0,l.H)({projectRef:null==e?void 0:e.ref,connectionString:null==e?void 0:e.connectionString}),{data:d}=(0,o.F)({projectRef:null==e?void 0:e.ref}),m=void 0!==(null!=s?s:[]).find(e=>"pg_net"===e.name),u=(null==d?void 0:d.selected_addons.find(e=>"pitr"===e.type))!==void 0,h=(0,r.ar)();return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(i.Q,{page:t,menu:x(e,{pgNetExtensionExists:m,pitrEnabled:u,columnLevelPrivileges:h}),"data-sentry-element":"ProductMenu","data-sentry-source-file":"DatabaseLayout.tsx"})})};var f=(0,d.Q)(e=>{let{children:t}=e;return(0,n.jsx)(m.Z,{product:"Database",productMenu:(0,n.jsx)(p,{}),isBlocking:!1,"data-sentry-element":"ProjectLayout","data-sentry-component":"DatabaseLayout","data-sentry-source-file":"DatabaseLayout.tsx",children:t})})},38095:function(e,t,s){"use strict";var n=s(97458),a=s(29247),r=s.n(a),i=s(25019),l=s(48963),o=s(52176);t.Z=e=>{let{name:t="",isActive:s,isExternal:a,icon:c,rightIcon:d,url:m="",target:u="_self",onClick:h,textClassName:x="",hoverText:p="",label:f}=e,y=(0,n.jsx)(i.ZP.Item,{icon:c,rounded:!0,active:s,onClick:h,children:(0,n.jsxs)("div",{className:"flex w-full items-center justify-between gap-1",children:[(0,n.jsxs)("div",{title:p||("string"==typeof t?t:""),className:"flex items-center gap-2 truncate w-full "+x,children:[(0,n.jsxs)("span",{className:"truncate",children:[t," "]}),void 0!==f&&(0,n.jsx)(l.C,{variant:"warning",className:"py-0 px-1.5 capitalize",children:f})]}),d&&(0,n.jsx)("div",{children:d})]})});return m?a?(0,n.jsx)(o.z,{asChild:!0,block:!0,className:"!justify-start",type:"text",size:"small",icon:c,children:(0,n.jsx)(r(),{href:m,target:"_blank",rel:"noreferrer",children:t})}):(0,n.jsx)(r(),{href:m,className:"block",target:u,children:y}):y}},47137:function(e,t,s){"use strict";var n=s(97458),a=s(67116),r=s(91837),i=s(7268),l=s(52983),o=s(198),c=s(20787),d=s(33443),m=s(40809),u=s(52176),h=s(65832),x=s(89112),p=s(11368),f=s(55144);t.Z=e=>{let{className:t,disabled:s=!1,size:y="tiny",showError:g=!0,selectedSchemaName:j,supportSelectAll:v=!1,excludedSchemas:b=[],onSelectSchema:k,onSelectCreateSchema:N}=e,[w,_]=(0,l.useState)(!1),S=(0,m.Xo)(o.KA.TENANT_SQL_ADMIN_WRITE,"schemas"),{project:E}=(0,c.d2)(),{data:C,isLoading:M,isSuccess:Z,isError:z,error:I,refetch:P}=(0,d.Q1)({projectRef:null==E?void 0:E.ref,connectionString:null==E?void 0:E.connectionString}),L=(C||[]).filter(e=>!b.includes(e.name)).sort((e,t)=>e.name.localeCompare(t.name));return(0,n.jsxs)("div",{className:t,"data-sentry-component":"SchemaSelector","data-sentry-source-file":"SchemaSelector.tsx",children:[M&&(0,n.jsx)(u.z,{type:"default",className:"justify-start",block:!0,size:y,loading:!0,children:"Loading schemas..."}),g&&z&&(0,n.jsxs)(h.bZ,{variant:"warning",className:"!px-3 !py-3",children:[(0,n.jsx)(h.Cd,{className:"text-xs text-amber-900",children:"Failed to load schemas"}),(0,n.jsxs)(h.X,{className:"text-xs mb-2 break-words",children:["Error: ",null==I?void 0:I.message]}),(0,n.jsx)(u.z,{type:"default",size:"tiny",onClick:()=>P(),children:"Reload schemas"})]}),Z&&(0,n.jsxs)(x.J2,{open:w,onOpenChange:_,modal:!1,children:[(0,n.jsx)(x.xo,{asChild:!0,children:(0,n.jsx)(u.z,{size:y,disabled:s,type:"default",className:"w-full [&>span]:w-full",iconRight:(0,n.jsx)(a.Z,{className:"text-foreground-muted",strokeWidth:2,size:14}),children:j?(0,n.jsxs)("div",{className:"w-full flex gap-1",children:[(0,n.jsx)("p",{className:"text-foreground-lighter",children:"schema:"}),(0,n.jsx)("p",{className:"text-foreground",children:"*"===j?"All schemas":j})]}):(0,n.jsx)("div",{className:"w-full flex gap-1",children:(0,n.jsx)("p",{className:"text-foreground-lighter",children:"Choose a schema…"})})})}),(0,n.jsx)(x.yk,{className:"p-0",side:"bottom",align:"start",sameWidthAsTrigger:!0,children:(0,n.jsxs)(p.mY,{children:[(0,n.jsx)(p.sZ,{placeholder:"Find schema..."}),(0,n.jsxs)(p.e8,{children:[(0,n.jsx)(p.rb,{children:"No schemas found"}),(0,n.jsx)(p.fu,{children:(0,n.jsxs)(f.x,{className:(L||[]).length>7?"h-[210px]":"",children:[v&&(0,n.jsxs)(p.di,{className:"cursor-pointer flex items-center justify-between space-x-2 w-full",onSelect:()=>{k("*"),_(!1)},onClick:()=>{k("*"),_(!1)},children:[(0,n.jsx)("span",{children:"All schemas"}),"*"===j&&(0,n.jsx)(r.Z,{className:"text-brand",strokeWidth:2,size:16})]},"select-all"),null==L?void 0:L.map(e=>(0,n.jsxs)(p.di,{className:"cursor-pointer flex items-center justify-between space-x-2 w-full",onSelect:()=>{k(e.name),_(!1)},onClick:()=>{k(e.name),_(!1)},children:[(0,n.jsx)("span",{children:e.name}),j===e.name&&(0,n.jsx)(r.Z,{className:"text-brand",strokeWidth:2,size:16})]},e.id))]})}),void 0!==N&&S&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(p.zz,{}),(0,n.jsx)(p.fu,{children:(0,n.jsxs)(p.di,{className:"cursor-pointer flex items-center gap-x-2 w-full",onSelect:()=>{N(),_(!1)},onClick:()=>{N(),_(!1)},children:[(0,n.jsx)(i.Z,{size:12}),"Create a new schema"]})})]})]})]})})]})]})}},33034:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return en}});var n=s(97458),a=s(9069),r=s(43901),i=s(98809),l=s(52983),o=s(33235),c=s(61768),d=s(58152),m=s(73319),u=s(72905),h=s(30271);let x=({id:e,x:t,y:s,width:n,height:a,style:r,color:i,strokeColor:o,strokeWidth:d,className:m,borderRadius:u,shapeRendering:h,onClick:x,selected:p})=>{let{background:f,backgroundColor:y}=r||{};return l.createElement("rect",{className:(0,c.Z)(["react-flow__minimap-node",{selected:p},m]),x:t,y:s,rx:u,ry:u,width:n,height:a,fill:i||f||y,stroke:o,strokeWidth:d,shapeRendering:h,onClick:x?t=>x(t,e):void 0})};x.displayName="MiniMapNode";var p=(0,l.memo)(x);let f=e=>e.nodeOrigin,y=e=>e.getNodes().filter(e=>!e.hidden&&e.width&&e.height),g=e=>e instanceof Function?e:()=>e;var j=(0,l.memo)(function({nodeStrokeColor:e="transparent",nodeColor:t="#e2e2e2",nodeClassName:s="",nodeBorderRadius:n=5,nodeStrokeWidth:r=2,nodeComponent:i=p,onClick:o}){let c=(0,a.oR)(y,d.X),m=(0,a.oR)(f),u=g(t),h=g(e),x=g(s),j="undefined"==typeof window||window.chrome?"crispEdges":"geometricPrecision";return l.createElement(l.Fragment,null,c.map(e=>{let{x:t,y:s}=(0,a.VP)(e,m).positionAbsolute;return l.createElement(i,{key:e.id,x:t,y:s,width:e.width,height:e.height,style:e.style,selected:e.selected,className:x(e),color:u(e),borderRadius:n,strokeColor:h(e),strokeWidth:r,shapeRendering:j,onClick:o,id:e.id})}))});let v=e=>{let t=e.getNodes(),s={x:-e.transform[0]/e.transform[2],y:-e.transform[1]/e.transform[2],width:e.width/e.transform[2],height:e.height/e.transform[2]};return{viewBB:s,boundingRect:t.length>0?(0,a.oI)((0,a.RX)(t,e.nodeOrigin),s):s,rfId:e.rfId}};function b({style:e,className:t,nodeStrokeColor:s="transparent",nodeColor:n="#e2e2e2",nodeClassName:r="",nodeBorderRadius:i=5,nodeStrokeWidth:o=2,nodeComponent:x,maskColor:p="rgb(240, 240, 240, 0.6)",maskStrokeColor:f="none",maskStrokeWidth:y=1,position:g="bottom-right",onClick:b,onNodeClick:k,pannable:N=!1,zoomable:w=!1,ariaLabel:_="React Flow mini map",inversePan:S=!1,zoomStep:E=10,offsetScale:C=5}){let M=(0,a.AC)(),Z=(0,l.useRef)(null),{boundingRect:z,viewBB:I,rfId:P}=(0,a.oR)(v,d.X),L=e?.width??200,R=e?.height??150,T=Math.max(z.width/L,z.height/R),W=T*L,A=T*R,F=C*T,H=z.x-(W-z.width)/2-F,D=z.y-(A-z.height)/2-F,$=W+2*F,G=A+2*F,V=`react-flow__minimap-desc-${P}`,O=(0,l.useRef)(0);O.current=T,(0,l.useEffect)(()=>{if(Z.current){let e=(0,u.Z)(Z.current),t=(0,m.sP)().on("zoom",N?e=>{let{transform:t,d3Selection:s,d3Zoom:n,translateExtent:a,width:r,height:i}=M.getState();if("mousemove"!==e.sourceEvent.type||!s||!n)return;let l=O.current*Math.max(1,t[2])*(S?-1:1),o={x:t[0]-e.sourceEvent.movementX*l,y:t[1]-e.sourceEvent.movementY*l},c=m.CR.translate(o.x,o.y).scale(t[2]),d=n.constrain()(c,[[0,0],[r,i]],a);n.transform(s,d)}:null).on("zoom.wheel",w?e=>{let{transform:t,d3Selection:s,d3Zoom:n}=M.getState();if("wheel"!==e.sourceEvent.type||!s||!n)return;let a=-e.sourceEvent.deltaY*(1===e.sourceEvent.deltaMode?.05:e.sourceEvent.deltaMode?1:.002)*E,r=t[2]*Math.pow(2,a);n.scaleTo(s,r)}:null);return e.call(t),()=>{e.on("zoom",null)}}},[N,w,S,E]);let q=b?e=>{let t=(0,h.Z)(e);b(e,{x:t[0],y:t[1]})}:void 0;return l.createElement(a.s_,{position:g,style:e,className:(0,c.Z)(["react-flow__minimap",t]),"data-testid":"rf__minimap"},l.createElement("svg",{width:L,height:R,viewBox:`${H} ${D} ${$} ${G}`,role:"img","aria-labelledby":V,ref:Z,onClick:q},_&&l.createElement("title",{id:V},_),l.createElement(j,{onClick:k?(e,t)=>{k(e,M.getState().nodeInternals.get(t))}:void 0,nodeColor:n,nodeStrokeColor:s,nodeBorderRadius:i,nodeClassName:r,nodeStrokeWidth:o,nodeComponent:x}),l.createElement("path",{className:"react-flow__minimap-mask",d:`M${H-F},${D-F}h${$+2*F}v${G+2*F}h${-$-2*F}z
        M${I.x},${I.y}h${I.width}v${I.height}h${-I.width}z`,fill:p,fillRule:"evenodd",stroke:f,strokeWidth:y,pointerEvents:"none"})))}b.displayName="MiniMap";var k=(0,l.memo)(b);s(72310);var N=s(63413),w=s(20787),_=s(95767),S=s(79387),E=s(47137),C=s(33443),M=s(45865),Z=s(45125),z=s(92787),I=s(29030),P=s(59066),L=s(96725);let R=(0,L.Z)("Fingerprint",[["path",{d:"M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4",key:"1nerag"}],["path",{d:"M14 13.12c0 2.38 0 6.38-1 8.88",key:"o46ks0"}],["path",{d:"M17.29 21.02c.12-.6.43-2.3.5-3.02",key:"ptglia"}],["path",{d:"M2 12a10 10 0 0 1 18-6",key:"ydlgp0"}],["path",{d:"M2 16h.01",key:"1gqxmh"}],["path",{d:"M21.8 16c.2-2 .131-5.354 0-6",key:"drycrb"}],["path",{d:"M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2",key:"1tidbn"}],["path",{d:"M8.65 22c.21-.66.45-1.32.57-2",key:"13wd9y"}],["path",{d:"M9 6.8a6 6 0 0 1 9 5.2v2",key:"1fr1j5"}]]),T=(0,L.Z)("Diamond",[["path",{d:"M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z",key:"1f1r0c"}]]),W=()=>(0,n.jsx)("div",{className:"absolute bottom-0 left-0 border-t flex justify-center px-1 py-2 shadow-md bg-surface-100 w-full z-10","data-sentry-component":"SchemaGraphLegend","data-sentry-source-file":"SchemaGraphLegend.tsx",children:(0,n.jsxs)("ul",{className:"flex flex-wrap  items-center justify-center gap-4",children:[(0,n.jsxs)("li",{className:"flex items-center text-xs font-mono gap-1",children:[(0,n.jsx)(I.Z,{size:15,strokeWidth:1.5,className:"flex-shrink-0 text-light","data-sentry-element":"Key","data-sentry-source-file":"SchemaGraphLegend.tsx"}),"Primary key"]}),(0,n.jsxs)("li",{className:"flex items-center text-xs font-mono gap-1",children:[(0,n.jsx)(P.Z,{size:15,strokeWidth:1.5,className:"flex-shrink-0 text-light","data-sentry-element":"Hash","data-sentry-source-file":"SchemaGraphLegend.tsx"}),"Identity"]}),(0,n.jsxs)("li",{className:"flex items-center text-xs font-mono gap-1",children:[(0,n.jsx)(R,{size:15,strokeWidth:1.5,className:"flex-shrink-0 text-light","data-sentry-element":"Fingerprint","data-sentry-source-file":"SchemaGraphLegend.tsx"}),"Unique"]}),(0,n.jsxs)("li",{className:"flex items-center text-xs font-mono gap-1",children:[(0,n.jsx)(T,{size:15,strokeWidth:1.5,className:"flex-shrink-0 text-light","data-sentry-element":"DiamondIcon","data-sentry-source-file":"SchemaGraphLegend.tsx"}),"Nullable"]}),(0,n.jsxs)("li",{className:"flex items-center text-xs font-mono gap-1",children:[(0,n.jsx)(T,{size:15,strokeWidth:1.5,fill:"currentColor",className:"flex-shrink-0 text-light","data-sentry-element":"DiamondIcon","data-sentry-source-file":"SchemaGraphLegend.tsx"}),"Non-Nullable"]})]})});var A=s(38143),F=s.n(A),H=s(3010),D=s.n(H),$=s(78066),G=s(70400),V=s(19215),O=s(29247),q=s.n(O),U=s(39635),Q=s(52176);let X=e=>{let{data:t,targetPosition:s,sourcePosition:r}=e,i="!h-px !w-px !min-w-0 !min-h-0 !cursor-grab !border-0 !opacity-0",l="h-[22px]";return(0,n.jsx)(n.Fragment,{children:t.isForeign?(0,n.jsxs)("header",{className:"text-[0.55rem] px-2 py-1 border-[0.5px] rounded-[4px] bg-alternative text-default flex gap-1 items-center",children:[t.name,s&&(0,n.jsx)(a.HH,{type:"target",id:t.name,position:s,className:(0,U.cn)(i)})]}):(0,n.jsxs)("div",{className:"border-[0.5px] overflow-hidden rounded-[4px] shadow-sm",style:{width:160},children:[(0,n.jsxs)("header",{className:(0,U.cn)("text-[0.55rem] pl-2 pr-1 bg-alternative text-default flex items-center justify-between",l),children:[(0,n.jsxs)("div",{className:"flex gap-x-1 items-center",children:[(0,n.jsx)(G.Z,{strokeWidth:1,size:12,className:"text-light"}),t.name]}),t.id&&(0,n.jsx)(Q.z,{asChild:!0,type:"text",className:"px-0 w-[16px] h-[16px] rounded",children:(0,n.jsx)(q(),{href:"/project/".concat(t.ref,"/editor/").concat(t.id),children:(0,n.jsx)(V.Z,{size:10,className:"text-foreground-light"})})})]}),t.columns.map(e=>(0,n.jsxs)("div",{className:(0,U.cn)("text-[8px] leading-5 relative flex flex-row justify-items-start","bg-surface-100","border-t","border-t-[0.5px]","hover:bg-scale-500 transition cursor-default",l),children:[(0,n.jsxs)("div",{className:(0,U.cn)("gap-[0.24rem] flex mx-2 align-middle items-center justify-start",e.isPrimary&&"basis-1/5"),children:[e.isPrimary&&(0,n.jsx)(I.Z,{size:8,strokeWidth:1,className:(0,U.cn)("flex-shrink-0","text-light")}),e.isNullable&&(0,n.jsx)(T,{size:8,strokeWidth:1,className:"flex-shrink-0 text-light"}),!e.isNullable&&(0,n.jsx)(T,{size:8,strokeWidth:1,fill:"currentColor",className:"flex-shrink-0 text-light"}),e.isUnique&&(0,n.jsx)(R,{size:8,strokeWidth:1,className:"flex-shrink-0 text-light"}),e.isIdentity&&(0,n.jsx)(P.Z,{size:8,strokeWidth:1,className:"flex-shrink-0 text-light"})]}),(0,n.jsxs)("div",{className:"flex w-full justify-between",children:[(0,n.jsx)("span",{className:"text-ellipsis overflow-hidden whitespace-nowrap max-w-[85px]",children:e.name}),(0,n.jsx)("span",{className:"px-2 inline-flex justify-end font-mono text-lighter text-[0.4rem]",children:e.format})]}),s&&(0,n.jsx)(a.HH,{type:"target",id:e.id,position:s,className:(0,U.cn)(i,"!left-0")}),r&&(0,n.jsx)(a.HH,{type:"source",id:e.id,position:r,className:(0,U.cn)(i,"!right-0")})]},e.id))]})})};async function B(e,t,s){if(!s.length)return{nodes:[],edges:[]};let n=s.map(t=>{let s=(t.columns||[]).map(e=>({id:e.id,isPrimary:t.primary_keys.some(t=>t.name===e.name),name:e.name,format:e.format,isNullable:e.is_nullable,isUnique:e.is_unique,isUpdateable:e.is_updatable,isIdentity:e.is_identity}));return{id:"".concat(t.id),type:"table",data:{ref:e,id:t.id,name:t.name,isForeign:!1,columns:s},position:{x:0,y:0}}}),a=[],r=s[0].schema;for(let t of D()(s.flatMap(e=>e.relationships),"id")){if(t.source_schema!==r)continue;if(t.target_table_schema!==r){n.push({id:t.constraint_name,type:"table",data:{ref:e,name:"".concat(t.target_table_schema,".").concat(t.target_table_name,".").concat(t.target_column_name),isForeign:!0,columns:[]},position:{x:0,y:0}});let[r,i]=K(s,t.source_table_name,t.source_column_name);r&&a.push({id:String(t.id),source:r,sourceHandle:i,target:t.constraint_name,targetHandle:t.constraint_name});continue}let[i,l]=K(s,t.source_table_name,t.source_column_name),[o,c]=K(s,t.target_table_name,t.target_column_name);i&&o&&a.push({id:String(t.id),source:i,sourceHandle:l,target:o,targetHandle:c})}let i=localStorage.getItem(z.dA.SCHEMA_VISUALIZER_POSITIONS(e,t.id)),l=(0,$.dW)(i);return l?J(n,a,l):Y(n,a)}function K(e,t,s){for(let n of e)if(t===n.name){for(let e of n.columns||[])if(s===e.name)return[String(n.id),e.id]}return[]}let Y=(e,t)=>{let s=new(F()).graphlib.Graph;return s.setDefaultEdgeLabel(()=>({})),s.setGraph({rankdir:"LR",align:"UR",nodesep:25,ranksep:50}),e.forEach(e=>{s.setNode(e.id,{width:160,height:20*(e.data.columns.length+1)})}),t.forEach(e=>{s.setEdge(e.source,e.target)}),F().layout(s),e.forEach(e=>{let t=s.node(e.id);return e.targetPosition=a.Ly.Left,e.sourcePosition=a.Ly.Right,e.position={x:t.x-t.width/2,y:t.y-t.height/2},e}),{nodes:e,edges:t}},J=(e,t,s)=>{let n=e.filter(e=>!(e.id in s)),r=0,i={x:0,y:-(65+10*n.length)};return e.forEach(e=>{let t=null==s?void 0:s[e.id];e.targetPosition=a.Ly.Left,e.sourcePosition=a.Ly.Right,t?e.position=t:(e.position={x:i.x+10*r,y:i.y+10*r},r+=1)}),{nodes:e,edges:t}},ee=()=>{var e;let{ref:t}=(0,N.UO)(),{resolvedTheme:s}=(0,i.F)(),{project:c}=(0,w.d2)(),[d,m]=(0,l.useState)("public"),u=(null==s?void 0:s.includes("dark"))?"rgb(17, 19, 24, .8)":"rgb(237, 237, 237, .8)",h=(0,a._K)(),x=(0,l.useMemo)(()=>({table:X}),[]),{data:p,error:f,isSuccess:y,isLoading:g,isError:j}=(0,C.Q1)({projectRef:null==c?void 0:c.ref,connectionString:null==c?void 0:c.connectionString}),{data:v,error:b,isSuccess:I,isLoading:P,isError:L}=(0,M.Bj)({projectRef:null==c?void 0:c.ref,connectionString:null==c?void 0:c.connectionString,schema:d,includeColumns:!0}),R=(null!=p?p:[]).find(e=>e.name===d),[T,A]=(0,Z._)(z.dA.SCHEMA_VISUALIZER_POSITIONS(t,null!==(e=null==R?void 0:R.id)&&void 0!==e?e:0),{}),F=()=>{if(void 0===R)return console.error("Schema is required");let e=h.getNodes();e.length>0&&A(e.reduce((e,t)=>({...e,[t.id]:t.position}),{}))};return(0,l.useEffect)(()=>{I&&y&&v.length>0&&B(t,p.find(e=>e.name===d),v).then(e=>{let{nodes:t,edges:s}=e;h.setNodes(t),h.setEdges(s),setTimeout(()=>h.fitView({}))})},[I,y,v,s]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"flex items-center justify-between p-4 border-b border-muted",children:[g&&(0,n.jsx)("div",{className:"h-[34px] w-[260px] bg-foreground-lighter rounded shimmering-loader"}),j&&(0,n.jsx)(_.Z,{error:f,subject:"Failed to retrieve schemas"}),y&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(E.Z,{className:"w-[180px]",size:"tiny",showError:!1,selectedSchemaName:d,onSelectSchema:m}),(0,n.jsx)(S.u,{type:"default",onClick:()=>{let e=h.getNodes(),t=h.getEdges();Y(e,t),h.setNodes(e),h.setEdges(t),setTimeout(()=>h.fitView({})),F()},tooltip:{content:{side:"bottom",text:"Automatically arrange the layout of all nodes"}},children:"Auto layout"})]})]}),P&&(0,n.jsxs)("div",{className:"w-full h-full flex items-center justify-center gap-x-2",children:[(0,n.jsx)(r.Z,{className:"animate-spin text-foreground-light",size:16}),(0,n.jsx)("p",{className:"text-sm text-foreground-light",children:"Loading tables"})]}),L&&(0,n.jsx)("div",{className:"w-full h-full flex items-center justify-center px-20",children:(0,n.jsx)(_.Z,{subject:"Failed to retrieve tables",error:b})}),I&&(0,n.jsx)("div",{className:"w-full h-full",children:(0,n.jsxs)(a.x$,{defaultNodes:[],defaultEdges:[],defaultEdgeOptions:{type:"smoothstep",animated:!0,deletable:!1,style:{stroke:"hsl(var(--border-stronger))",strokeWidth:.5}},nodeTypes:x,fitView:!0,minZoom:.8,maxZoom:1.8,proOptions:{hideAttribution:!0},onNodeDragStop:()=>F(),children:[(0,n.jsx)(o.A,{gap:16,className:"[&>*]:stroke-foreground-muted opacity-[25%]",variant:o.T.Dots,color:"inherit"}),(0,n.jsx)(k,{pannable:!0,zoomable:!0,nodeColor:"#111318",maskColor:u,className:"border rounded-md shadow-sm"}),(0,n.jsx)(W,{})]})})]})};var et=s(20824);let es=()=>(0,n.jsx)("div",{className:"flex w-full h-full flex-col","data-sentry-component":"SchemasPage","data-sentry-source-file":"schemas.tsx",children:(0,n.jsx)(a.tV,{"data-sentry-element":"ReactFlowProvider","data-sentry-source-file":"schemas.tsx",children:(0,n.jsx)(ee,{"data-sentry-element":"SchemaGraph","data-sentry-source-file":"schemas.tsx"})})});es.getLayout=e=>(0,n.jsx)(et.Z,{title:"Database",children:e});var en=es},25019:function(e,t,s){"use strict";s.d(t,{ZP:function(){return u}});var n=s(97458),a=s(52983),r=s(86815),i=s(39635);function l(e){let{children:t,className:s,tag:a="div",style:r}=e;return(0,n.jsx)("".concat(a),{style:r,"data-sentry-element":"CustomTag","data-sentry-component":"Typography","data-sentry-source-file":"Typography.tsx",children:t})}l.Title=function(e){let{className:t,level:s=1,children:a,style:r}=e;return(0,n.jsx)("h".concat(s),{style:r,"data-sentry-element":"CustomTag","data-sentry-component":"Title","data-sentry-source-file":"Title.tsx",children:a})},l.Text=function(e){let{className:t,children:s,style:a,type:r,disabled:i,mark:l,code:o,keyboard:c,underline:d,strikethrough:m,strong:u,small:h}=e;return o?(0,n.jsx)("code",{style:a,children:s}):l?(0,n.jsx)("mark",{style:a,children:s}):c?(0,n.jsx)("kbd",{style:a,children:s}):u?(0,n.jsx)("strong",{style:a,children:s}):(0,n.jsx)("span",{style:a,"data-sentry-component":"Text","data-sentry-source-file":"Text.tsx",children:s})},l.Link=function(e){let{children:t,target:s="_blank",href:a,className:r,onClick:i,style:l}=e;return(0,n.jsx)("a",{onClick:i,href:a,target:s,rel:"noopener noreferrer",style:l,"data-sentry-component":"Link","data-sentry-source-file":"Link.tsx",children:t})};let o=(0,a.createContext)({type:"text"}),c=e=>{let{type:t}=e;return(0,n.jsx)(o.Provider,{value:{type:t},"data-sentry-element":"unknown","data-sentry-component":"MenuContextProvider","data-sentry-source-file":"MenuContext.tsx",children:e.children})},d=()=>{let e=(0,a.useContext)(o);if(void 0===e)throw Error("MenuContext must be used within a MenuContextProvider.");return e};function m(e){let{children:t,className:s,ulClassName:a,style:r,type:i="text"}=e;return(0,n.jsx)("nav",{role:"menu","aria-label":"Sidebar","aria-orientation":"vertical","aria-labelledby":"options-menu",className:s,style:r,"data-sentry-component":"Menu","data-sentry-source-file":"Menu.tsx",children:(0,n.jsx)(c,{type:i,"data-sentry-element":"MenuContextProvider","data-sentry-source-file":"Menu.tsx",children:(0,n.jsx)("ul",{className:a,children:t})})})}m.Item=function(e){let{children:t,icon:s,active:a,rounded:l,onClick:o,doNotCloseOverlay:c=!1,showActiveBar:m=!1,style:u}=e,h=(0,r.Z)("menu"),{type:x}=d(),p=[h.item.base];p.push(h.item.variants[x].base),a?p.push(h.item.variants[x].active):p.push(h.item.variants[x].normal);let f=[h.item.content.base];a?f.push(h.item.content.active):f.push(h.item.content.normal);let y=[h.item.icon.base];return a?y.push(h.item.icon.active):y.push(h.item.icon.normal),(0,n.jsxs)("li",{role:"menuitem",className:(0,i.cn)("outline-none",p),style:u,onClick:o,"aria-current":a?"page":void 0,"data-sentry-component":"Item","data-sentry-source-file":"Menu.tsx",children:[s&&(0,n.jsx)("div",{className:"".concat(y.join(" ")," min-w-fit"),children:s}),(0,n.jsx)("span",{className:f.join(" "),children:t})]})},m.Group=function(e){let{children:t,icon:s,title:a}=e,i=(0,r.Z)("menu"),{type:l}=d();return(0,n.jsxs)("div",{className:[i.group.base,i.group.variants[l]].join(" "),"data-sentry-component":"Group","data-sentry-source-file":"Menu.tsx",children:[s&&(0,n.jsx)("span",{className:i.group.icon,children:s}),(0,n.jsx)("span",{className:i.group.content,children:a}),t]})},m.Misc=function(e){let{children:t}=e;return(0,n.jsx)("div",{"data-sentry-component":"Misc","data-sentry-source-file":"Menu.tsx",children:(0,n.jsx)(l.Text,{"data-sentry-element":"unknown","data-sentry-source-file":"Menu.tsx",children:(0,n.jsx)("span",{children:t})})})};var u=m}},function(e){e.O(0,[9442,4176,588,5154,656,8703,698,8682,8375,4439,69,8790,659,5741,3439,5313,6437,3562,8685,1859,7686,3182,1515,9386,9774,2888,179],function(){return e(e.s=20808)}),_N_E=e.O()}]);