(()=>{var e={};e.id=285,e.ids=[285],e.modules={20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},209:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},79348:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},30412:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},55315:e=>{"use strict";e.exports=require("path")},17040:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>l.a,__next_app__:()=>m,pages:()=>c,routeModule:()=>x,tree:()=>o});var a=r(3003),s=r(14293),n=r(66550),l=r.n(n),i=r(86979),d={};for(let e in i)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(d[e]=()=>i[e]);r.d(t,d);let o=["",{children:["checkout",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,78520)),"E:\\E6\\Web\\E-commerce\\frontend\\src\\app\\checkout\\page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,37973)),"E:\\E6\\Web\\E-commerce\\frontend\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.bind(r,85603)),"E:\\E6\\Web\\E-commerce\\frontend\\src\\app\\not-found.tsx"]}],c=["E:\\E6\\Web\\E-commerce\\frontend\\src\\app\\checkout\\page.tsx"],m={require:r,loadChunk:()=>Promise.resolve()},x=new a.AppPageRouteModule({definition:{kind:s.RouteKind.APP_PAGE,page:"/checkout/page",pathname:"/checkout",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:o}})},7922:(e,t,r)=>{Promise.resolve().then(r.bind(r,90877)),Promise.resolve().then(r.bind(r,79405))},90877:(e,t,r)=>{"use strict";r.d(t,{BillingInformation:()=>u});var a=r(68819),s=r(98049),n=r(93159),l=r(64084),i=r(82015),d=r(9969),o=r(29280),c=r(41190),m=r(15373);let x=l.z.object({firstName:l.z.string().min(5,{message:"First name must be at least 5 characters."}),lastName:l.z.string().min(5,{message:"Last name must be at least 5 characters."}),companyName:l.z.string().min(5,{message:"Company name must be at least 5 characters."}),address:l.z.string(),country:l.z.string(),state:l.z.string(),zipCode:l.z.number(),email:l.z.string(),phoneNumber:l.z.number()});function u(){let e=(0,n.cI)({resolver:(0,s.F)(x),defaultValues:{firstName:"",lastName:"",companyName:"",address:"",country:"",state:"",email:""}});return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(d.l0,{...e,children:(0,a.jsxs)("form",{className:"w-2/3 space-y-7",children:[(0,a.jsxs)("div",{className:"w-full flex gap-5",children:[(0,a.jsx)(d.Wi,{control:e.control,name:"firstName",render:({field:e})=>(0,a.jsxs)(d.xJ,{className:"w-full",children:[(0,a.jsx)(d.lX,{className:"text-gray-900 text-sm font-normal leading-[150%]",children:"Fist name"}),(0,a.jsx)(d.NI,{children:(0,a.jsx)(c.I,{placeholder:"Your first name",...e})}),(0,a.jsx)(d.zG,{})]})}),(0,a.jsx)(d.Wi,{control:e.control,name:"lastName",render:({field:e})=>(0,a.jsxs)(d.xJ,{className:"w-full",children:[(0,a.jsx)(d.lX,{className:"text-gray-900 text-sm font-normal leading-[150%]",children:"Last name"}),(0,a.jsx)(d.NI,{children:(0,a.jsx)(c.I,{placeholder:"Your last name",...e})}),(0,a.jsx)(d.zG,{})]})}),(0,a.jsx)(d.Wi,{control:e.control,name:"companyName",render:({field:e})=>(0,a.jsxs)(d.xJ,{className:"w-full",children:[(0,a.jsxs)(d.lX,{className:"text-gray-900 text-sm font-normal leading-[150%]",children:["Company Name"," ",(0,a.jsx)("span",{className:"text-slate-500 ",children:"(Optional)"})]}),(0,a.jsx)(d.NI,{children:(0,a.jsx)(c.I,{placeholder:"Company name",...e})}),(0,a.jsx)(d.zG,{})]})})]}),(0,a.jsx)(d.Wi,{control:e.control,name:"address",render:({field:e})=>(0,a.jsxs)(d.xJ,{children:[(0,a.jsx)(d.lX,{className:"text-gray-900 text-sm font-normal leading-[150%]",children:"Street Address"}),(0,a.jsx)(d.NI,{children:(0,a.jsx)(c.I,{placeholder:"Street address",...e})}),(0,a.jsx)(d.zG,{})]})}),(0,a.jsxs)("div",{className:"w-full flex gap-5",children:[(0,a.jsx)(d.Wi,{control:e.control,name:"country",render:({field:e})=>(0,a.jsxs)(d.xJ,{className:"w-1/3",children:[(0,a.jsx)(d.lX,{className:"text-gray-900 text-sm font-normal leading-[150%]",children:"Country / Region"}),(0,a.jsx)(d.NI,{children:(0,a.jsxs)(o.Ph,{children:[(0,a.jsx)(o.i4,{children:(0,a.jsx)(o.ki,{placeholder:"Select",...e})}),(0,a.jsx)(o.Bw,{children:(0,a.jsxs)(o.DI,{children:[(0,a.jsx)(o.n5,{children:"Country"}),(0,a.jsx)(o.Ql,{value:"japan",children:"Japan"}),(0,a.jsx)(o.Ql,{value:"italy",children:"Italy"}),(0,a.jsx)(o.Ql,{value:"australia",children:"Australia"}),(0,a.jsx)(o.Ql,{value:"france",children:"France"}),(0,a.jsx)(o.Ql,{value:"cambodia",children:"Cambodia"})]})})]})}),(0,a.jsx)(d.zG,{})]})}),(0,a.jsx)(d.Wi,{control:e.control,name:"state",render:({field:e})=>(0,a.jsxs)(d.xJ,{className:"w-1/6",children:[(0,a.jsx)(d.lX,{className:"text-gray-900 text-sm font-normal leading-[150%]",children:"States"}),(0,a.jsx)(d.NI,{children:(0,a.jsxs)(o.Ph,{children:[(0,a.jsx)(o.i4,{children:(0,a.jsx)(o.ki,{placeholder:"Select",...e})}),(0,a.jsx)(o.Bw,{children:(0,a.jsxs)(o.DI,{children:[(0,a.jsx)(o.n5,{children:"State"}),(0,a.jsx)(o.Ql,{value:"california",children:"California"}),(0,a.jsx)(o.Ql,{value:"new_york",children:"New York"}),(0,a.jsx)(o.Ql,{value:"florida",children:"Florida"}),(0,a.jsx)(o.Ql,{value:"texas",children:"Texas"}),(0,a.jsx)(o.Ql,{value:"hawaii",children:"Hawaii"})]})})]})}),(0,a.jsx)(d.zG,{})]})}),(0,a.jsx)(d.Wi,{control:e.control,name:"zipCode",render:({field:e})=>(0,a.jsxs)(d.xJ,{className:"w-[10%]",children:[(0,a.jsx)(d.lX,{className:"text-gray-900 text-sm font-normal leading-[150%]",children:"Zip Code"}),(0,a.jsx)(d.NI,{children:(0,a.jsx)(c.I,{placeholder:"Zip Code",...e})}),(0,a.jsx)(d.zG,{})]})})]}),(0,a.jsxs)("div",{className:"w-full flex gap-5",children:[(0,a.jsx)(d.Wi,{control:e.control,name:"email",render:({field:e})=>(0,a.jsxs)(d.xJ,{className:"w-full",children:[(0,a.jsx)(d.lX,{className:"text-gray-900 text-sm font-normal leading-[150%]",children:"Email"}),(0,a.jsx)(d.NI,{children:(0,a.jsx)(c.I,{placeholder:"Email Address",...e})}),(0,a.jsx)(d.zG,{})]})}),(0,a.jsx)(d.Wi,{control:e.control,name:"phoneNumber",render:({field:e})=>(0,a.jsxs)(d.xJ,{className:"w-full",children:[(0,a.jsx)(d.lX,{className:"text-gray-900 text-sm font-normal leading-[150%]",children:"Phone"}),(0,a.jsx)(d.NI,{children:(0,a.jsx)(c.I,{placeholder:"Phone number",...e})}),(0,a.jsx)(d.zG,{})]})})]}),(0,a.jsxs)("div",{className:"flex items-center space-x-2 pb-10  border-b",children:[(0,a.jsx)(m.X,{id:"terms"}),(0,a.jsx)("label",{htmlFor:"terms",className:"peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[#4D4D4D]  text-sm font-normal leading-[150%]",children:"Ship to a different address"})]}),(0,a.jsxs)("div",{className:"space-y-5",children:[(0,a.jsx)("header",{children:(0,a.jsx)("h1",{className:"text-gray-900  text-2xl font-medium leading-[150%]",children:"Additional Info"})}),(0,a.jsxs)("div",{className:"space-y-2",children:[(0,a.jsx)("p",{className:"text-gray-900 text-sm font-normal leading-[150%]",children:"Order Notes (Optional)"}),(0,a.jsx)(i.g,{className:"h-[100px] text-[#999] text-base font-normal leading-[130%]",placeholder:"Notes about your order, e.g. special notes for delivery"})]})]})]})})})}},79405:(e,t,r)=>{"use strict";r.d(t,{default:()=>d});var a=r(68819),s=r(17266),n=r(29752),l=r(91664),i=r(46226);let d=({ship:e,price:t,imageUrl:r,name:d,qty:o})=>{let[c,m]=(0,s.useState)(null),[x,u]=(0,s.useState)(0),[p,f]=(0,s.useState)(0),h=e=>parseFloat(e.replace("$","").trim())||0;(0,s.useEffect)(()=>{let r=t*o,a=h(e);u(r),f(r+a)},[t,o,e]);let j=e=>{m(e)};return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)(n.Zb,{className:"w-[424px] h-[580px]",children:[(0,a.jsx)(n.Ol,{children:(0,a.jsx)(n.ll,{className:"text-gray-900 text-xl font-medium leading-relaxed",children:"Order Summary"})}),(0,a.jsx)(n.aY,{children:(0,a.jsxs)("div",{className:"flex justify-between items-center",children:[(0,a.jsxs)("div",{className:"flex justify-center items-center gap-2",children:[(0,a.jsx)(i.default,{src:r,alt:"item image",width:60,height:60}),(0,a.jsx)("p",{className:"text-gray-900 text-base font-normal leading-relaxed",children:d}),(0,a.jsxs)("p",{className:"text-gray-900 text-base font-normal leading-relaxed",children:["x",o]})]}),(0,a.jsxs)("div",{className:"text-gray-900 text-base font-medium leading-relaxed",children:["$",t.toFixed(2)]})]})}),(0,a.jsxs)(n.aY,{className:"space-y-5",children:[(0,a.jsxs)("div",{className:"flex justify-between items-center pb-4 border-b-2",children:[(0,a.jsx)("p",{className:"text-gray-700 text-base font-normal leading-relaxed",children:"Subtotal:"}),(0,a.jsxs)("p",{className:"text-gray-900 text-base font-medium leading-relaxed",children:["$",x.toFixed(2)]})]}),(0,a.jsxs)("div",{className:"flex justify-between items-center pb-4 border-b-2",children:[(0,a.jsx)("p",{className:"text-gray-700 text-base font-normal leading-relaxed",children:"Shipping:"}),(0,a.jsx)("p",{className:"text-gray-900 text-base font-medium leading-relaxed",children:e})]}),(0,a.jsxs)("div",{className:"flex justify-between items-center",children:[(0,a.jsx)("p",{className:"text-gray-700 text-base font-normal leading-relaxed",children:"Total:"}),(0,a.jsxs)("p",{className:"text-gray-900 text-lg font-semibold leading-[120%]",children:["$",p.toFixed(2)]})]})]}),(0,a.jsxs)(n.aY,{className:"space-y-4",children:[(0,a.jsx)("h1",{className:"text-gray-900 text-xl font-medium leading-relaxed",children:"Payment Method"}),[{method:"Cash on delivery"},{method:"Paypal"},{method:"Amazon Paypal"}].map(e=>(0,a.jsxs)("div",{className:"flex items-center space-x-3",children:[(0,a.jsx)("input",{className:"h-5 w-5 cursor-pointer",type:"radio",name:"payment-method",value:e.method,checked:c===e.method,onChange:()=>j(e.method)}),(0,a.jsx)("p",{className:"text-gray-700 text-sm font-normal leading-relaxed",children:e.method})]},e.method))]}),(0,a.jsx)(n.eW,{children:(0,a.jsx)(l.z,{className:"w-full rounded-full font-semibold",children:"Place Order"})})]})})}},29752:(e,t,r)=>{"use strict";r.d(t,{Ol:()=>i,Zb:()=>l,aY:()=>o,eW:()=>c,ll:()=>d});var a=r(68819),s=r(17266),n=r(51223);let l=s.forwardRef(({className:e,...t},r)=>(0,a.jsx)("div",{ref:r,className:(0,n.cn)("rounded-xl border bg-card text-card-foreground shadow",e),...t}));l.displayName="Card";let i=s.forwardRef(({className:e,...t},r)=>(0,a.jsx)("div",{ref:r,className:(0,n.cn)("flex flex-col space-y-1.5 p-6",e),...t}));i.displayName="CardHeader";let d=s.forwardRef(({className:e,...t},r)=>(0,a.jsx)("div",{ref:r,className:(0,n.cn)("font-semibold leading-none tracking-tight",e),...t}));d.displayName="CardTitle",s.forwardRef(({className:e,...t},r)=>(0,a.jsx)("div",{ref:r,className:(0,n.cn)("text-sm text-muted-foreground",e),...t})).displayName="CardDescription";let o=s.forwardRef(({className:e,...t},r)=>(0,a.jsx)("div",{ref:r,className:(0,n.cn)("p-6 pt-0",e),...t}));o.displayName="CardContent";let c=s.forwardRef(({className:e,...t},r)=>(0,a.jsx)("div",{ref:r,className:(0,n.cn)("flex items-center p-6 pt-0",e),...t}));c.displayName="CardFooter"},15373:(e,t,r)=>{"use strict";r.d(t,{X:()=>C});var a=r(68819),s=r(17266),n=r(63742),l=r(87067),i=r(67168),d=r(67783),o=r(53095),c=r(61836),m=r(79033),x=r(6123),u="Checkbox",[p,f]=(0,l.b)(u),[h,j]=p(u),N=s.forwardRef((e,t)=>{let{__scopeCheckbox:r,name:l,checked:o,defaultChecked:c,required:m,disabled:u,value:p="on",onCheckedChange:f,form:j,...N}=e,[g,y]=s.useState(null),E=(0,n.e)(t,e=>y(e)),I=s.useRef(!1),C=!g||j||!!g.closest("form"),[k=!1,P]=(0,d.T)({prop:o,defaultProp:c,onChange:f}),R=s.useRef(k);return s.useEffect(()=>{let e=g?.form;if(e){let t=()=>P(R.current);return e.addEventListener("reset",t),()=>e.removeEventListener("reset",t)}},[g,P]),(0,a.jsxs)(h,{scope:r,state:k,disabled:u,children:[(0,a.jsx)(x.WV.button,{type:"button",role:"checkbox","aria-checked":v(k)?"mixed":k,"aria-required":m,"data-state":w(k),"data-disabled":u?"":void 0,disabled:u,value:p,...N,ref:E,onKeyDown:(0,i.M)(e.onKeyDown,e=>{"Enter"===e.key&&e.preventDefault()}),onClick:(0,i.M)(e.onClick,e=>{P(e=>!!v(e)||!e),C&&(I.current=e.isPropagationStopped(),I.current||e.stopPropagation())})}),C&&(0,a.jsx)(b,{control:g,bubbles:!I.current,name:l,value:p,checked:k,required:m,disabled:u,form:j,style:{transform:"translateX(-100%)"},defaultChecked:!v(c)&&c})]})});N.displayName=u;var g="CheckboxIndicator",y=s.forwardRef((e,t)=>{let{__scopeCheckbox:r,forceMount:s,...n}=e,l=j(g,r);return(0,a.jsx)(m.z,{present:s||v(l.state)||!0===l.state,children:(0,a.jsx)(x.WV.span,{"data-state":w(l.state),"data-disabled":l.disabled?"":void 0,...n,ref:t,style:{pointerEvents:"none",...e.style}})})});y.displayName=g;var b=e=>{let{control:t,checked:r,bubbles:n=!0,defaultChecked:l,...i}=e,d=s.useRef(null),m=(0,o.D)(r),x=(0,c.t)(t);s.useEffect(()=>{let e=d.current,t=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"checked").set;if(m!==r&&t){let a=new Event("click",{bubbles:n});e.indeterminate=v(r),t.call(e,!v(r)&&r),e.dispatchEvent(a)}},[m,r,n]);let u=s.useRef(!v(r)&&r);return(0,a.jsx)("input",{type:"checkbox","aria-hidden":!0,defaultChecked:l??u.current,...i,tabIndex:-1,ref:d,style:{...e.style,...x,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})};function v(e){return"indeterminate"===e}function w(e){return v(e)?"indeterminate":e?"checked":"unchecked"}var E=r(51223),I=r(90038);let C=s.forwardRef(({className:e,...t},r)=>(0,a.jsx)(N,{ref:r,className:(0,E.cn)("peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",e),...t,children:(0,a.jsx)(y,{className:(0,E.cn)("flex items-center justify-center text-current"),children:(0,a.jsx)(I.nQG,{className:"h-4 w-4"})})}));C.displayName=N.displayName},9969:(e,t,r)=>{"use strict";r.d(t,{NI:()=>h,Wi:()=>m,l0:()=>o,lX:()=>f,xJ:()=>p,zG:()=>j});var a=r(68819),s=r(17266),n=r(69375),l=r(93159),i=r(51223),d=r(69960);let o=l.RV,c=s.createContext({}),m=({...e})=>(0,a.jsx)(c.Provider,{value:{name:e.name},children:(0,a.jsx)(l.Qr,{...e})}),x=()=>{let e=s.useContext(c),t=s.useContext(u),{getFieldState:r,formState:a}=(0,l.Gc)(),n=r(e.name,a);if(!e)throw Error("useFormField should be used within <FormField>");let{id:i}=t;return{id:i,name:e.name,formItemId:`${i}-form-item`,formDescriptionId:`${i}-form-item-description`,formMessageId:`${i}-form-item-message`,...n}},u=s.createContext({}),p=s.forwardRef(({className:e,...t},r)=>{let n=s.useId();return(0,a.jsx)(u.Provider,{value:{id:n},children:(0,a.jsx)("div",{ref:r,className:(0,i.cn)("space-y-2",e),...t})})});p.displayName="FormItem";let f=s.forwardRef(({className:e,...t},r)=>{let{error:s,formItemId:n}=x();return(0,a.jsx)(d._,{ref:r,className:(0,i.cn)(s&&"text-destructive",e),htmlFor:n,...t})});f.displayName="FormLabel";let h=s.forwardRef(({...e},t)=>{let{error:r,formItemId:s,formDescriptionId:l,formMessageId:i}=x();return(0,a.jsx)(n.g7,{ref:t,id:s,"aria-describedby":r?`${l} ${i}`:`${l}`,"aria-invalid":!!r,...e})});h.displayName="FormControl",s.forwardRef(({className:e,...t},r)=>{let{formDescriptionId:s}=x();return(0,a.jsx)("p",{ref:r,id:s,className:(0,i.cn)("text-[0.8rem] text-muted-foreground",e),...t})}).displayName="FormDescription";let j=s.forwardRef(({className:e,children:t,...r},s)=>{let{error:n,formMessageId:l}=x(),d=n?String(n?.message):t;return d?(0,a.jsx)("p",{ref:s,id:l,className:(0,i.cn)("text-[0.8rem] font-medium text-destructive",e),...r,children:d}):null});j.displayName="FormMessage"},69960:(e,t,r)=>{"use strict";r.d(t,{_:()=>c});var a=r(68819),s=r(17266),n=r(6123),l=s.forwardRef((e,t)=>(0,a.jsx)(n.WV.label,{...e,ref:t,onMouseDown:t=>{t.target.closest("button, input, select, textarea")||(e.onMouseDown?.(t),!t.defaultPrevented&&t.detail>1&&t.preventDefault())}}));l.displayName="Label";var i=r(13286),d=r(51223);let o=(0,i.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),c=s.forwardRef(({className:e,...t},r)=>(0,a.jsx)(l,{ref:r,className:(0,d.cn)(o(),e),...t}));c.displayName=l.displayName},82015:(e,t,r)=>{"use strict";r.d(t,{g:()=>l});var a=r(68819),s=r(17266),n=r(51223);let l=s.forwardRef(({className:e,...t},r)=>(0,a.jsx)("textarea",{className:(0,n.cn)("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",e),ref:r,...t}));l.displayName="Textarea"},78520:(e,t,r)=>{"use strict";r.a(e,async(e,a)=>{try{r.r(t),r.d(t,{default:()=>d});var s=r(89351),n=r(927),l=r(96661);r(22052);var i=e([n,l]);function d(){return(0,s.jsxs)("div",{className:"w-[1320px] pb-20 mx-auto space-y-5",children:[(0,s.jsx)("header",{className:"mt-5 text-2xl font-bold",children:"Billing Information"}),(0,s.jsxs)("div",{className:"flex justify-between gap-5",children:[(0,s.jsx)(n.O,{}),(0,s.jsx)(l.Z,{imageUrl:"https://my-image-storage-bucket-1234.s3.us-east-1.amazonaws.com/Apple/white-apple-1.jpg",name:"Apple",price:10,qty:10,ship:"free"})]})]})}[n,l]=i.then?(await i)():i,a()}catch(e){a(e)}})},927:(e,t,r)=>{"use strict";r.a(e,async(e,a)=>{try{r.d(t,{O:()=>e});var s=r(71851);let e=(await (0,s.createProxy)(String.raw`E:\E6\Web\E-commerce\frontend\src\components\BillingInformation.tsx`)).BillingInformation;a()}catch(e){a(e)}},1)},96661:(e,t,r)=>{"use strict";r.a(e,async(e,a)=>{try{r.d(t,{Z:()=>e});var s=r(71851);let e=(await (0,s.createProxy)(String.raw`E:\E6\Web\E-commerce\frontend\src\components\OrderSummary.tsx`)).default;a()}catch(e){a(e)}},1)},79033:(e,t,r)=>{"use strict";r.d(t,{z:()=>l});var a=r(17266),s=r(63742),n=r(73553),l=e=>{let{present:t,children:r}=e,l=function(e){var t,r;let[s,l]=a.useState(),d=a.useRef({}),o=a.useRef(e),c=a.useRef("none"),[m,x]=(t=e?"mounted":"unmounted",r={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},a.useReducer((e,t)=>r[e][t]??e,t));return a.useEffect(()=>{let e=i(d.current);c.current="mounted"===m?e:"none"},[m]),(0,n.b)(()=>{let t=d.current,r=o.current;if(r!==e){let a=c.current,s=i(t);e?x("MOUNT"):"none"===s||t?.display==="none"?x("UNMOUNT"):r&&a!==s?x("ANIMATION_OUT"):x("UNMOUNT"),o.current=e}},[e,x]),(0,n.b)(()=>{if(s){let e;let t=s.ownerDocument.defaultView??window,r=r=>{let a=i(d.current).includes(r.animationName);if(r.target===s&&a&&(x("ANIMATION_END"),!o.current)){let r=s.style.animationFillMode;s.style.animationFillMode="forwards",e=t.setTimeout(()=>{"forwards"===s.style.animationFillMode&&(s.style.animationFillMode=r)})}},a=e=>{e.target===s&&(c.current=i(d.current))};return s.addEventListener("animationstart",a),s.addEventListener("animationcancel",r),s.addEventListener("animationend",r),()=>{t.clearTimeout(e),s.removeEventListener("animationstart",a),s.removeEventListener("animationcancel",r),s.removeEventListener("animationend",r)}}x("ANIMATION_END")},[s,x]),{isPresent:["mounted","unmountSuspended"].includes(m),ref:a.useCallback(e=>{e&&(d.current=getComputedStyle(e)),l(e)},[])}}(t),d="function"==typeof r?r({present:l.isPresent}):a.Children.only(r),o=(0,s.e)(l.ref,function(e){let t=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,r=t&&"isReactWarning"in t&&t.isReactWarning;return r?e.ref:(r=(t=Object.getOwnPropertyDescriptor(e,"ref")?.get)&&"isReactWarning"in t&&t.isReactWarning)?e.props.ref:e.props.ref||e.ref}(d));return"function"==typeof r||l.isPresent?a.cloneElement(d,{ref:o}):null};function i(e){return e?.animationName||"none"}l.displayName="Presence"}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[423,553,630],()=>r(17040));module.exports=a})();