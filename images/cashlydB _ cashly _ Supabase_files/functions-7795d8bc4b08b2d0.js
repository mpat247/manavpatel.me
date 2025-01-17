!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new e.Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="c21df845-df3b-4970-9a2c-5343200f86fb",e._sentryDebugIdIdentifier="sentry-dbid-c21df845-df3b-4970-9a2c-5343200f86fb")}catch(e){}}(),(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8447],{64038:function(e,t,s){var n=s(87500),a=s(17325)(function(e,t,s){n(e,s,t)});e.exports=a},27767:function(e,t,s){var n=s(22825),a=s(29735),r=s(80135),i=s(18268),l=a(function(e){return r(n(e,1,i,!0))});e.exports=l},93567:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/project/[ref]/database/functions",function(){return s(93675)}])},24815:function(e,t,s){"use strict";s.d(t,{Z:function(){return n}});let n=(0,s(96725).Z)("CirclePlay",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polygon",{points:"10 8 16 12 10 16 10 8",key:"1cimsy"}]])},1955:function(e,t,s){"use strict";s.d(t,{Z:function(){return n}});let n=(0,s(96725).Z)("Pen",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]])},80865:function(e,t,s){"use strict";s.d(t,{p:function(){return i}});var n=s(97458),a=s(39635),r=s(55771);let i=e=>{let{title:t,description:s,docsUrl:i,actions:l,className:o}=e;return(0,n.jsxs)("div",{className:(0,a.cn)("mb-6 flex items-center justify-between gap-x-4 ".concat(o)),"data-sentry-component":"FormHeader","data-sentry-source-file":"FormHeader.tsx",children:[(0,n.jsxs)("div",{className:"space-y-1",children:[(0,n.jsx)("h3",{className:"text-foreground text-xl prose",children:t}),s&&(0,n.jsx)("div",{className:"prose text-sm max-w-full",children:s})]}),(0,n.jsxs)("div",{className:"flex items-center gap-x-2",children:[void 0!==i&&(0,n.jsx)(r.G,{href:i}),l]})]})}},14802:function(e,t,s){"use strict";var n=s(97458),a=s(20687);t.Z=e=>{let{resourceText:t,isFullPage:s=!1}=e,r=()=>(0,n.jsx)("div",{className:"block w-full rounded border border-opacity-20 py-4 px-6 border-overlay bg-surface-200","data-sentry-component":"NoPermissionMessage","data-sentry-source-file":"NoPermission.tsx",children:(0,n.jsxs)("div",{className:"flex space-x-3",children:[(0,n.jsx)("div",{className:"mt-1",children:(0,n.jsx)(a.Z,{size:20,"data-sentry-element":"AlertCircle","data-sentry-source-file":"NoPermission.tsx"})}),(0,n.jsx)("div",{className:"flex w-full items-center justify-between",children:(0,n.jsxs)("div",{className:"space-y-1",children:[(0,n.jsxs)("p",{className:"text-sm",children:["You need additional permissions to ",t]}),(0,n.jsx)("div",{children:(0,n.jsx)("p",{className:"text-sm text-foreground-light",children:"Contact your organization owner or administrator for assistance."})})]})})]})});return s?(0,n.jsx)("div",{className:"flex h-full items-center justify-center",children:(0,n.jsx)("div",{className:"w-[550px]",children:(0,n.jsx)(r,{})})}):(0,n.jsx)(r,{})}},93675:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return W}});var n=s(97458),a=s(198),r=s(52983),i=s(57601),l=s(71607),o=s.n(l),c=s(50663),d=s.n(c),u=s(81343),x=s(79367),m=s(63413),f=s(20787),h=s(11536),p=s(76556),j=s(95767),y=s(79387),g=s(47137),v=s(94369),N=s(26990),b=s(33443),w=s(40809),S=s(75295),Z=s(26052),C=s(72853),_=s(399),F=s(78940),T=s(35114),R=s(42876),k=s.n(R),L=s(71635),D=s.n(L),E=s(87912),A=s(92695),I=s(1955),P=s(19760),z=s(26562),M=s(99794),V=s(52176),X=e=>{let{schema:t,filterString:s,isLocked:r,editFunction:i=o(),deleteFunction:l=o()}=e,c=(0,x.useRouter)(),{project:d}=(0,f.d2)(),{setAiAssistantPanel:u}=(0,C.WZ)(),{data:m}=(0,N.R)({projectRef:null==d?void 0:d.ref,connectionString:null==d?void 0:d.connectionString}),h=(null!=m?m:[]).filter(e=>k()(e.name.toLowerCase(),s.toLowerCase())),j=D()(h.filter(e=>e.schema==t),e=>e.name.toLocaleLowerCase()),g=null==d?void 0:d.ref,v=(0,w.Xo)(a.KA.TENANT_SQL_ADMIN_WRITE,"functions");return 0===j.length&&0===s.length?(0,n.jsx)(p.Z.tr,{children:(0,n.jsxs)(p.Z.td,{colSpan:5,children:[(0,n.jsx)("p",{className:"text-sm text-foreground",children:"No functions created yet"}),(0,n.jsxs)("p",{className:"text-sm text-foreground-light",children:['There are no functions found in the schema "',t,'"']})]})},t):0===j.length&&s.length>0?(0,n.jsx)(p.Z.tr,{children:(0,n.jsxs)(p.Z.td,{colSpan:5,children:[(0,n.jsx)("p",{className:"text-sm text-foreground",children:"No results found"}),(0,n.jsxs)("p",{className:"text-sm text-foreground-light",children:['Your search for "',s,'" did not return any results']})]})},t):(0,n.jsx)(n.Fragment,{children:j.map(e=>{let s="public"==t&&"trigger"!==e.return_type;return(0,n.jsxs)(p.Z.tr,{children:[(0,n.jsx)(p.Z.td,{className:"truncate",children:(0,n.jsx)("p",{title:e.name,children:e.name})}),(0,n.jsx)(p.Z.td,{className:"table-cell overflow-auto",children:(0,n.jsx)("p",{title:e.argument_types,className:"truncate",children:e.argument_types||"-"})}),(0,n.jsx)(p.Z.td,{className:"table-cell",children:(0,n.jsx)("p",{title:e.return_type,children:e.return_type})}),(0,n.jsx)(p.Z.td,{className:"table-cell",children:e.security_definer?"Definer":"Invoker"}),(0,n.jsx)(p.Z.td,{className:"text-right",children:!r&&(0,n.jsx)("div",{className:"flex items-center justify-end",children:v?(0,n.jsxs)(M.h_,{children:[(0,n.jsx)(M.$F,{asChild:!0,children:(0,n.jsx)(V.z,{type:"default",className:"px-1",icon:(0,n.jsx)(E.Z,{})})}),(0,n.jsxs)(M.AW,{side:"left",className:"w-52",children:[s&&(0,n.jsxs)(M.Xi,{className:"space-x-2",onClick:()=>c.push("/project/".concat(g,"/api?rpc=").concat(e.name)),children:[(0,n.jsx)(A.Z,{size:14}),(0,n.jsx)("p",{children:"Client API docs"})]}),(0,n.jsxs)(M.Xi,{className:"space-x-2",onClick:()=>i(e),children:[(0,n.jsx)(I.Z,{size:14}),(0,n.jsx)("p",{children:"Edit function"})]}),(0,n.jsxs)(M.Xi,{className:"space-x-2",onClick:()=>{u({open:!0,initialInput:"Update this function to do...",suggestions:{title:"I can help you make a change to this function, here are a few example prompts to get you started:",prompts:["Rename this function to ...","Modify this function so that it ...","Add a trigger for this function that calls it when ..."]},sqlSnippets:[e.complete_statement]})},children:[(0,n.jsx)(P.Z,{size:14}),(0,n.jsx)("p",{children:"Edit function with Assistant"})]}),(0,n.jsx)(M.VD,{}),(0,n.jsxs)(M.Xi,{className:"space-x-2",onClick:()=>l(e),children:[(0,n.jsx)(z.Z,{size:14,className:"text-destructive"}),(0,n.jsx)("p",{children:"Delete function"})]})]})]}):(0,n.jsx)(y.u,{disabled:!0,type:"default",icon:(0,n.jsx)(E.Z,{}),className:"px-1",tooltip:{content:{side:"left",text:"You need additional permissions to update functions"}}})})})]},e.id)})})},H=e=>{let{createFunction:t=o(),editFunction:s=o(),deleteFunction:r=o()}=e,i=(0,x.useRouter)(),{search:l}=(0,m.UO)(),{project:c}=(0,f.d2)(),{setAiAssistantPanel:R}=(0,C.WZ)(),{selectedSchema:k,setSelectedSchema:L}=(0,S.B)(),D=null!=l?l:"",E=e=>{let t=new URL(document.URL);""===e?t.searchParams.delete("search"):t.searchParams.set("search",e),i.push(t)},A=(0,w.Xo)(a.KA.TENANT_SQL_ADMIN_WRITE,"functions"),{data:I}=(0,b.Q1)({projectRef:null==c?void 0:c.ref,connectionString:null==c?void 0:c.connectionString}),[P]=d()(null!=I?I:[],e=>{var t;return Z.s.includes(null!==(t=null==e?void 0:e.name)&&void 0!==t?t:"")}),z=null==I?void 0:I.find(e=>e.name===k),M=P.some(e=>e.id===(null==z?void 0:z.id)),{data:V,error:H,isLoading:O,isError:U}=(0,N.R)({projectRef:null==c?void 0:c.ref,connectionString:null==c?void 0:c.connectionString});return O?(0,n.jsx)(v.A,{}):U?(0,n.jsx)(j.Z,{error:H,subject:"Failed to retrieve database functions"}):(0,n.jsx)(n.Fragment,{children:0==(null!=V?V:[]).length?(0,n.jsx)("div",{className:"flex h-full w-full items-center justify-center",children:(0,n.jsxs)(h.Z,{title:"Functions",ctaButtonLabel:"Create a new function",onClickCta:()=>t(),disabled:!A,disabledMessage:"You need additional permissions to create functions",children:[(0,n.jsx)("p",{className:"text-sm text-foreground-light",children:"PostgreSQL functions, also known as stored procedures, is a set of SQL and procedural commands such as declarations, assignments, loops, flow-of-control, etc."}),(0,n.jsx)("p",{className:"text-sm text-foreground-light",children:"It's stored on the database server and can be invoked using the SQL interface."})]})}):(0,n.jsxs)("div",{className:"w-full space-y-4",children:[(0,n.jsxs)("div",{className:"flex items-center justify-between gap-2 flex-wrap",children:[(0,n.jsxs)("div",{className:"flex items-center gap-x-2",children:[(0,n.jsx)(g.Z,{className:"w-[180px]",size:"tiny",showError:!1,selectedSchemaName:k,onSelectSchema:e=>{let t=new URL(document.URL);t.searchParams.delete("search"),i.push(t),L(e)}}),(0,n.jsx)(_.Z,{placeholder:"Search for a function",size:"tiny",icon:(0,n.jsx)(u.Z,{size:14}),value:D,className:"w-52",onChange:e=>E(e.target.value)})]}),(0,n.jsx)("div",{className:"flex items-center gap-x-2",children:!M&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(y.u,{disabled:!A,onClick:()=>t(),tooltip:{content:{side:"bottom",text:A?void 0:"You need additional permissions to create functions"}},children:"Create a new function"}),(0,n.jsx)(y.u,{type:"default",disabled:!A,className:"px-1 pointer-events-auto",icon:(0,n.jsx)(F.c,{size:16}),onClick:()=>R({open:!0,initialInput:"Create a new function for the schema ".concat(k," that does ...")}),tooltip:{content:{side:"bottom",text:A?"Create with Supabase Assistant":"You need additional permissions to create functions"}}})]})})]}),M&&(0,n.jsx)(T.Z,{schema:k,entity:"functions"}),(0,n.jsx)(p.Z,{className:"table-fixed overflow-x-auto",head:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(p.Z.th,{children:"Name"},"name"),(0,n.jsx)(p.Z.th,{className:"table-cell",children:"Arguments"},"arguments"),(0,n.jsx)(p.Z.th,{className:"table-cell",children:"Return type"},"return_type"),(0,n.jsx)(p.Z.th,{className:"table-cell w-[100px]",children:"Security"},"security"),(0,n.jsx)(p.Z.th,{className:"w-1/6"},"buttons")]}),body:(0,n.jsx)(X,{schema:k,filterString:D,isLocked:M,editFunction:s,deleteFunction:r})})]})})},O=s(20824),U=s(55521),B=s(80865),Q=s(14802);let Y=()=>{let[e,t]=(0,r.useState)(),[s,l]=(0,r.useState)(!1),[o,c]=(0,r.useState)(!1),d=(0,w.Xo)(a.KA.TENANT_SQL_ADMIN_READ,"functions");return(0,w.N4)()&&!d?(0,n.jsx)(Q.Z,{isFullPage:!0,resourceText:"view database functions"}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(U._S,{"data-sentry-element":"ScaffoldContainer","data-sentry-source-file":"functions.tsx",children:(0,n.jsx)(U.jX,{"data-sentry-element":"ScaffoldSection","data-sentry-source-file":"functions.tsx",children:(0,n.jsxs)("div",{className:"col-span-12",children:[(0,n.jsx)(B.p,{title:"Database Functions",docsUrl:"https://supabase.com/docs/guides/database/functions","data-sentry-element":"FormHeader","data-sentry-source-file":"functions.tsx"}),(0,n.jsx)(H,{createFunction:()=>{t(void 0),l(!0)},editFunction:e=>{t(e),l(!0)},deleteFunction:e=>{t(e),c(!0)},"data-sentry-element":"FunctionsList","data-sentry-source-file":"functions.tsx"})]})})}),(0,n.jsx)(i.B8,{func:e,visible:s,setVisible:l,"data-sentry-element":"CreateFunction","data-sentry-source-file":"functions.tsx"}),(0,n.jsx)(i.ZR,{func:e,visible:o,setVisible:c,"data-sentry-element":"DeleteFunction","data-sentry-source-file":"functions.tsx"})]})};Y.getLayout=e=>(0,n.jsx)(O.Z,{title:"Database",children:e});var W=Y},78579:function(e,t,s){"use strict";s.d(t,{c:function(){return g},w:function(){return p}});var n=s(97458),a=s(52983),r=s(59158),i=s(39635),l=s(28977),o=s.n(l),c=s(60192),d=s.n(c),u=s(13516),x=s.n(u),m=s(61322);o().extend(d()),o().extend(x());let f=e=>o().unix(Number(e)/1e3/1e3).toISOString(),h=e=>{let t=16===String(e).length;return!Number.isNaN(Number(e))&&t},p=e=>{let{utcTimestamp:t,format:s}=e,n=h(t)?f(t):t;return o().utc(n).local().format(s)},j=e=>{let{utcTimestamp:t,format:s}=e,n=h(t)?f(t):t;return o().utc(n).format(s)},y=e=>{let{utcTimestamp:t}=e,s=h(t)?f(t):t;return o().utc(s).fromNow()},g=e=>{let{utcTimestamp:t,className:s,displayAs:l="local",format:o="DD MMM  HH:mm:ss",labelFormat:c="DD MMM HH:mm:ss"}=e,d=p({utcTimestamp:t,format:o}),u=j({utcTimestamp:t,format:o}),x=y({utcTimestamp:t}),[f,h]=(0,a.useState)("start"),g=(0,a.useRef)(null),v=Intl.DateTimeFormat().resolvedOptions().timeZone;(0,a.useEffect)(()=>{let e=()=>{if(g.current){let e=g.current.getBoundingClientRect(),t=window.innerHeight;h(e.top<t/2?"start":"end")}};return e(),window.addEventListener("scroll",e),window.addEventListener("resize",e),()=>{window.removeEventListener("scroll",e),window.removeEventListener("resize",e)}},[]);let N=e=>{let{label:t,value:s}=e,[r,l]=(0,a.useState)(!1);return(0,n.jsxs)("span",{onPointerDown:e=>{e.stopPropagation()},onMouseDown:e=>{e.stopPropagation()},onClick:e=>{e.stopPropagation(),e.preventDefault(),navigator.clipboard.writeText(s),l(!0),setTimeout(()=>{l(!1)},1e3)},className:(0,i.cn)("relative cursor-default grid grid-cols-2 gap-2 hover:bg-surface-100 px-2 py-1 group",{"bg-surface-100":r}),"data-sentry-component":"TooltipRow","data-sentry-source-file":"index.tsx",children:[(0,n.jsxs)("span",{className:"text-right truncate",children:[t,":"]}),(0,n.jsxs)("div",{className:"relative",children:[r&&(0,n.jsx)("span",{className:"absolute inset-0 flex items-center text-brand-600 bg-surface-100",children:"Copied!"}),(0,n.jsxs)("span",{className:"flex items-center gap-x-2",children:[s,(0,n.jsx)(m.Z,{size:12,className:"opacity-0 group-hover:opacity-100 transition","data-sentry-element":"Clipboard","data-sentry-source-file":"index.tsx"})]})]})]})};return(0,n.jsxs)(r.u,{"data-sentry-element":"Tooltip","data-sentry-component":"TimestampInfo","data-sentry-source-file":"index.tsx",children:[(0,n.jsx)(r.aJ,{asChild:!0,ref:g,className:"text-xs ".concat(s," border-b border-transparent hover:border-dashed hover:border-foreground-light"),"data-sentry-element":"TooltipTrigger","data-sentry-source-file":"index.tsx",children:(0,n.jsx)("span",{children:"local"===l?p({utcTimestamp:t,format:c}):j({utcTimestamp:t,format:c})})}),(0,n.jsxs)(r._v,{align:f,side:"right",className:"font-mono p-0 py-1","data-sentry-element":"TooltipContent","data-sentry-source-file":"index.tsx",children:[(0,n.jsx)(N,{label:"UTC",value:u,"data-sentry-element":"TooltipRow","data-sentry-source-file":"index.tsx"}),(0,n.jsx)(N,{label:"".concat(v),value:d,"data-sentry-element":"TooltipRow","data-sentry-source-file":"index.tsx"}),(0,n.jsx)(N,{label:"Relative",value:x,"data-sentry-element":"TooltipRow","data-sentry-source-file":"index.tsx"}),(0,n.jsx)(N,{label:"Timestamp",value:String(t),"data-sentry-element":"TooltipRow","data-sentry-source-file":"index.tsx"})]})]})}},55060:function(e,t,s){"use strict";s.d(t,{Z:function(){return o}});var n=s(97458),a=s(52983),r=s(99173),i=s(98160);function l(e,t){if(!t.error)return delete e[t.key],e;if(t)return{...e,[t.key]:t.error};throw Error()}function o(e){let{validate:t,...s}=e,[o,c]=(0,a.useReducer)(l,null),d=(0,r.TA)({validateOnBlur:!0,...s,validationSchema:s.validationSchema,initialValues:s.initialValues,onSubmit:s.onSubmit,validate:t||function(){return o}});return(0,n.jsx)("form",{id:s.id,name:s.name,onSubmit:d.handleSubmit,className:s.className,style:s.style,method:"POST","data-sentry-component":"Form","data-sentry-source-file":"Form.tsx",children:(0,n.jsx)(i.o,{values:d.values,errors:d.errors,formContextOnChange:d.handleChange,handleBlur:d.handleBlur,touched:d.touched,fieldLevelValidation:function(e,t){c({key:e,error:t})},"data-sentry-element":"FormContextProvider","data-sentry-source-file":"Form.tsx",children:s.children({errors:d.errors,touched:d.touched,isSubmitting:d.isSubmitting,isValidating:d.isValidating,submitCount:d.submitCount,initialValues:d.initialValues,values:d.values,handleReset:d.handleReset,resetForm:d.resetForm,setFieldValue:d.setFieldValue})})})}}},function(e){e.O(0,[3659,7186,4176,588,5154,656,8703,698,8682,8375,4439,69,8790,659,5741,3439,5313,6437,5206,320,5538,4415,9362,9612,9833,8685,1859,7686,3182,1515,9386,3200,4552,9919,373,9774,2888,179],function(){return e(e.s=93567)}),_N_E=e.O()}]);