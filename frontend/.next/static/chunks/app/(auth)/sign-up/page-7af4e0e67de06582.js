(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[431],{9053:(e,r,s)=>{Promise.resolve().then(s.bind(s,3616))},7138:(e,r,s)=>{"use strict";s.d(r,{default:()=>a.a});var t=s(231),a=s.n(t)},3616:(e,r,s)=>{"use strict";s.r(r),s.d(r,{default:()=>p});var t=s(7437);let a=(0,s(6108).Z)("EyeOff",[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);var l=s(9889),n=s(2265),o=s(7138),d=s(2620),i=s(839),c=s(3166),m=s(9733),u=s(7209);let x=c.z.object({email:c.z.string().nonempty({message:"Email is required"}).email({message:"Please enter a valid email address"}),password:c.z.string().min(6,{message:"Password must be at least 6 characters"}).nonempty({message:"Password is required"}),confirmPassword:c.z.string().nonempty({message:"Please confirm your password"})}).refine(e=>e.password===e.confirmPassword,{message:"Passwords do not match",path:["confirmPassword"]});function p(){let[e,r]=(0,n.useState)(!1),[s,c]=(0,n.useState)(!1),{control:p,handleSubmit:h,formState:{errors:f},reset:g}=(0,d.cI)({resolver:(0,i.F)(x),defaultValues:{email:"",password:"",confirmPassword:""}}),b=()=>{r(e=>!e)},v=()=>{c(e=>!e)};return(0,t.jsx)("div",{className:"flex items-center justify-center min-h-[600px] bg-gray-100",children:(0,t.jsxs)("div",{className:"w-full max-w-md bg-white rounded-lg shadow-md p-8",children:[(0,t.jsx)("h2",{className:"text-gray-900 text-center text-2xl font-semibold leading-[38.4px] mb-6",children:"Create Account"}),(0,t.jsxs)("form",{onSubmit:h(e=>{console.log("Form submitted",e),g()}),children:[(0,t.jsxs)("div",{className:"mb-4",children:[(0,t.jsx)(d.Qr,{name:"email",control:p,render:e=>{let{field:r}=e;return(0,t.jsx)(u.I,{...r,type:"email",id:"email",placeholder:"Email",className:"w-full px-4 py-2 border rounded-sm focus:ring-1 focus:ring-green-500 focus:outline-none placeholder:text-gray-400 placeholder:text-base placeholder:font-normal placeholder:leading-[20.8px]"})}}),(0,t.jsx)("p",{className:"text-red-500 text-xs h-1 pt-1 pb-2",children:f.email&&f.email.message})]}),(0,t.jsxs)("div",{className:"mb-4",children:[(0,t.jsx)("div",{className:"relative",children:(0,t.jsx)(d.Qr,{name:"password",control:p,render:r=>{let{field:s}=r;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(u.I,{...s,type:e?"text":"password",id:"password",placeholder:"Password",className:"w-full px-4 py-2 border rounded-sm focus:ring-1 focus:ring-green-500 focus:outline-none placeholder:text-gray-400 placeholder:text-base placeholder:font-normal placeholder:leading-[20.8px]"}),(0,t.jsx)("div",{onClick:b,className:"absolute right-3 top-2 cursor-pointer",children:e?(0,t.jsx)(a,{className:"text-gray-600 stroke-[1px]"}):(0,t.jsx)(l.Z,{className:"text-gray-600 stroke-[1px]"})})]})}})}),(0,t.jsx)("p",{className:"text-red-500 text-xs h-1 pt-1 pb-2",children:f.password&&f.password.message})]}),(0,t.jsxs)("div",{className:"mb-4",children:[(0,t.jsx)("div",{className:"relative",children:(0,t.jsx)(d.Qr,{name:"confirmPassword",control:p,render:e=>{let{field:r}=e;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(u.I,{...r,type:s?"text":"password",id:"confirmPassword",placeholder:"Confirm Password",className:"w-full px-4 py-2 border rounded-sm focus:ring-1 focus:ring-green-500 focus:outline-none placeholder:text-gray-400 placeholder:text-base placeholder:font-normal placeholder:leading-[20.8px]"}),(0,t.jsx)("div",{onClick:v,className:"absolute right-3 top-2 cursor-pointer",children:s?(0,t.jsx)(a,{className:"text-gray-600 stroke-[1px]"}):(0,t.jsx)(l.Z,{className:"text-gray-600 stroke-[1px]"})})]})}})}),(0,t.jsx)("p",{className:"text-red-500 text-xs h-1 pt-1 pb-2",children:f.confirmPassword&&f.confirmPassword.message})]}),(0,t.jsxs)("div",{className:"flex items-center mb-6",children:[(0,t.jsx)("input",{type:"checkbox",id:"terms",className:"h-4 w-4 text-green-500 border-gray-300 rounded"}),(0,t.jsx)("label",{htmlFor:"terms",className:"ml-2 text-gray-600 text-base font-normal leading-[21px]",children:"Accept all terms & Conditions"})]}),(0,t.jsx)(m.z,{type:"submit",className:"w-full py-2 px-4 rounded-full",children:"Create Account"})]}),(0,t.jsxs)("p",{className:"mt-6 text-gray-600 text-center text-base font-normal leading-[21px]",children:["Already have an account?"," ",(0,t.jsx)(o.default,{href:"/sign-in",className:"text-gray-900 text-base font-semibold leading-[21px] hover:underline",children:"Login"})]})]})})}},9733:(e,r,s)=>{"use strict";s.d(r,{d:()=>d,z:()=>i});var t=s(7437),a=s(2265),l=s(9061),n=s(3609),o=s(9354);let d=(0,n.j)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 ",{variants:{variant:{default:"text-white bg-[#00B207] shadow hover:bg-[#2C742F]",custom:" text-destructive-foreground",outline:"border-2 border-input border-[#00B207] text-[#00B207] bg-background shadow-sm hover:bg-accent hover:text-[#2C742F] hover:border-[#2C742F]",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"bg-[#56AC591A] hover:bg-[#2C742F33] text-[#00B207] hover:text-[#2C742F]",link:"text-primary underline-offset-4 hover:underline"},size:{default:"py-3 px-8 rounded-md",small:"rounded-md px-6 text-xs py-2",large:"rounded-md px-10 py-4 text-base",icon:"p-2 rounded-full "}},defaultVariants:{variant:"default",size:"default"}}),i=a.forwardRef((e,r)=>{let{className:s,variant:a,size:n,asChild:i=!1,leftIcon:c,rightIcon:m,children:u,onClick:x,...p}=e,h=i?l.g7:"button";return(0,t.jsxs)(h,{onClick:x,className:(0,o.cn)(d({variant:a,size:n,className:s}),"flex items-center gap-4"),ref:r,...p,children:[c&&(0,t.jsx)("span",{className:u?"mr-2":"",children:c}),u,m&&(0,t.jsx)("span",{className:u?"mr-2":"",children:m})]})});i.displayName="Button"},7209:(e,r,s)=>{"use strict";s.d(r,{I:()=>n});var t=s(7437),a=s(2265),l=s(9354);let n=a.forwardRef((e,r)=>{let{className:s,type:a,leftIcon:n,rightIcon:o,...d}=e;return(0,t.jsxs)("div",{className:"relative flex items-center",children:[n&&(0,t.jsx)("span",{className:"absolute left-3 size-5 flex items-center pointer-events-none",children:n}),(0,t.jsx)("input",{type:a,className:(0,l.cn)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",n?"pl-10":"",o?"pr-10":"",s),ref:r,...d}),o&&(0,t.jsx)("span",{className:"absolute right-3 size-5 flex items-center pointer-events-none",children:o})]})});n.displayName="Input"},9354:(e,r,s)=>{"use strict";s.d(r,{cn:()=>l});var t=s(2242),a=s(5498);function l(){for(var e=arguments.length,r=Array(e),s=0;s<e;s++)r[s]=arguments[s];return(0,a.m6)((0,t.W)(r))}},6108:(e,r,s)=>{"use strict";s.d(r,{Z:()=>d});var t=s(2265);let a=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),l=function(){for(var e=arguments.length,r=Array(e),s=0;s<e;s++)r[s]=arguments[s];return r.filter((e,r,s)=>!!e&&""!==e.trim()&&s.indexOf(e)===r).join(" ").trim()};var n={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let o=(0,t.forwardRef)((e,r)=>{let{color:s="currentColor",size:a=24,strokeWidth:o=2,absoluteStrokeWidth:d,className:i="",children:c,iconNode:m,...u}=e;return(0,t.createElement)("svg",{ref:r,...n,width:a,height:a,stroke:s,strokeWidth:d?24*Number(o)/Number(a):o,className:l("lucide",i),...u},[...m.map(e=>{let[r,s]=e;return(0,t.createElement)(r,s)}),...Array.isArray(c)?c:[c]])}),d=(e,r)=>{let s=(0,t.forwardRef)((s,n)=>{let{className:d,...i}=s;return(0,t.createElement)(o,{ref:n,iconNode:r,className:l("lucide-".concat(a(e)),d),...i})});return s.displayName="".concat(e),s}},9889:(e,r,s)=>{"use strict";s.d(r,{Z:()=>t});let t=(0,s(6108).Z)("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]])},3609:(e,r,s)=>{"use strict";s.d(r,{j:()=>n});var t=s(2242);let a=e=>"boolean"==typeof e?`${e}`:0===e?"0":e,l=t.W,n=(e,r)=>s=>{var t;if((null==r?void 0:r.variants)==null)return l(e,null==s?void 0:s.class,null==s?void 0:s.className);let{variants:n,defaultVariants:o}=r,d=Object.keys(n).map(e=>{let r=null==s?void 0:s[e],t=null==o?void 0:o[e];if(null===r)return null;let l=a(r)||a(t);return n[e][l]}),i=s&&Object.entries(s).reduce((e,r)=>{let[s,t]=r;return void 0===t||(e[s]=t),e},{});return l(e,d,null==r?void 0:null===(t=r.compoundVariants)||void 0===t?void 0:t.reduce((e,r)=>{let{class:s,className:t,...a}=r;return Object.entries(a).every(e=>{let[r,s]=e;return Array.isArray(s)?s.includes({...o,...i}[r]):({...o,...i})[r]===s})?[...e,s,t]:e},[]),null==s?void 0:s.class,null==s?void 0:s.className)}}},e=>{var r=r=>e(e.s=r);e.O(0,[231,60,93,130,215,744],()=>r(9053)),_N_E=e.O()}]);