function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function s(t){t.forEach(n)}function o(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(t,e,n,r){if(t){const s=c(t,e,n,r);return t[0](s)}}function c(t,n,r,s){return t[1]&&s?e(r.ctx.slice(),t[1](s(n))):r.ctx}function u(t,e,n,r,s,o,a){const i=function(t,e,n,r){if(t[2]&&r){const s=t[2](r(n));if(void 0===e.dirty)return s;if("object"==typeof s){const t=[],n=Math.max(e.dirty.length,s.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|s[r];return t}return e.dirty|s}return e.dirty}(e,r,s,o);if(i){const s=c(e,n,r,a);t.p(s,i)}}function f(t,e){t.appendChild(e)}function l(t,e,n){t.insertBefore(e,n||null)}function h(t){t.parentNode.removeChild(t)}function p(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function d(t){return document.createElement(t)}function m(t){return document.createTextNode(t)}function g(){return m(" ")}function $(){return m("")}function _(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function y(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function b(t){return Array.from(t.childNodes)}function v(t,e,n,r){for(let r=0;r<t.length;r+=1){const s=t[r];if(s.nodeName===e){let e=0;const o=[];for(;e<s.attributes.length;){const t=s.attributes[e++];n[t.name]||o.push(t.name)}for(let t=0;t<o.length;t++)s.removeAttribute(o[t]);return t.splice(r,1)[0]}}return r?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(e):d(e)}function w(t,e){for(let n=0;n<t.length;n+=1){const r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return m(e)}function x(t){return w(t," ")}function E(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}let S;function N(t){S=t}function T(){if(!S)throw new Error("Function called outside component initialization");return S}const k=[],L=[],R=[],O=[],C=Promise.resolve();let j=!1;function q(t){R.push(t)}let I=!1;const P=new Set;function A(){if(!I){I=!0;do{for(let t=0;t<k.length;t+=1){const e=k[t];N(e),U(e.$$)}for(N(null),k.length=0;L.length;)L.pop()();for(let t=0;t<R.length;t+=1){const e=R[t];P.has(e)||(P.add(e),e())}R.length=0}while(k.length);for(;O.length;)O.pop()();j=!1,I=!1,P.clear()}}function U(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(q)}}const V=new Set;let J;function B(){J={r:0,c:[],p:J}}function D(){J.r||s(J.c),J=J.p}function K(t,e){t&&t.i&&(V.delete(t),t.i(e))}function M(t,e,n,r){if(t&&t.o){if(V.has(t))return;V.add(t),J.c.push((()=>{V.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}}function z(t,e){const n={},r={},s={$$scope:1};let o=t.length;for(;o--;){const a=t[o],i=e[o];if(i){for(const t in a)t in i||(r[t]=1);for(const t in i)s[t]||(n[t]=i[t],s[t]=1);t[o]=i}else for(const t in a)s[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function W(t){return"object"==typeof t&&null!==t?t:{}}function Y(t){t&&t.c()}function F(t,e){t&&t.l(e)}function G(t,e,r){const{fragment:a,on_mount:i,on_destroy:c,after_update:u}=t.$$;a&&a.m(e,r),q((()=>{const e=i.map(n).filter(o);c?c.push(...e):s(e),t.$$.on_mount=[]})),u.forEach(q)}function H(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function X(t,e){-1===t.$$.dirty[0]&&(k.push(t),j||(j=!0,C.then(A)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Q(e,n,o,a,i,c,u=[-1]){const f=S;N(e);const l=n.props||{},p=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:i,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:r(),dirty:u,skip_bound:!1};let d=!1;if(p.ctx=o?o(e,l,((t,n,...r)=>{const s=r.length?r[0]:n;return p.ctx&&i(p.ctx[t],p.ctx[t]=s)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](s),d&&X(e,t)),n})):[],p.update(),d=!0,s(p.before_update),p.fragment=!!a&&a(p.ctx),n.target){if(n.hydrate){const t=b(n.target);p.fragment&&p.fragment.l(t),t.forEach(h)}else p.fragment&&p.fragment.c();n.intro&&K(e.$$.fragment),G(e,n.target,n.anchor),A()}N(f)}class Z{$destroy(){H(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function tt(t){let e,n,r=t[1].stack+"";return{c(){e=d("pre"),n=m(r)},l(t){e=v(t,"PRE",{});var s=b(e);n=w(s,r),s.forEach(h)},m(t,r){l(t,e,r),f(e,n)},p(t,e){2&e&&r!==(r=t[1].stack+"")&&E(n,r)},d(t){t&&h(e)}}}function et(e){let n,r,s,o,a,i,c,u=e[1].message+"",p=e[1].stack&&tt(e);return{c(){n=d("h1"),r=m(e[0]),s=g(),o=d("p"),a=m(u),i=g(),p&&p.c(),c=$()},l(t){n=v(t,"H1",{});var f=b(n);r=w(f,e[0]),f.forEach(h),s=x(t),o=v(t,"P",{});var l=b(o);a=w(l,u),l.forEach(h),i=x(t),p&&p.l(t),c=$()},m(t,e){l(t,n,e),f(n,r),l(t,s,e),l(t,o,e),f(o,a),l(t,i,e),p&&p.m(t,e),l(t,c,e)},p(t,[e]){1&e&&E(r,t[0]),2&e&&u!==(u=t[1].message+"")&&E(a,u),t[1].stack?p?p.p(t,e):(p=tt(t),p.c(),p.m(c.parentNode,c)):p&&(p.d(1),p=null)},i:t,o:t,d(t){t&&h(n),t&&h(s),t&&h(o),t&&h(i),p&&p.d(t),t&&h(c)}}}function nt(t,e,n){let{status:r}=e,{error:s}=e;return t.$$set=t=>{"status"in t&&n(0,r=t.status),"error"in t&&n(1,s=t.error)},[r,s]}class rt extends Z{constructor(t){super(),Q(this,t,nt,et,a,{status:0,error:1})}}function st(t){let n,r,s;const o=[t[4]||{}];var a=t[2][1];function i(t){let n={};for(let t=0;t<o.length;t+=1)n=e(n,o[t]);return{props:n}}return a&&(n=new a(i())),{c(){n&&Y(n.$$.fragment),r=$()},l(t){n&&F(n.$$.fragment,t),r=$()},m(t,e){n&&G(n,t,e),l(t,r,e),s=!0},p(t,e){const s=16&e?z(o,[W(t[4]||{})]):{};if(a!==(a=t[2][1])){if(n){B();const t=n;M(t.$$.fragment,1,0,(()=>{H(t,1)})),D()}a?(n=new a(i()),Y(n.$$.fragment),K(n.$$.fragment,1),G(n,r.parentNode,r)):n=null}else a&&n.$set(s)},i(t){s||(n&&K(n.$$.fragment,t),s=!0)},o(t){n&&M(n.$$.fragment,t),s=!1},d(t){t&&h(r),n&&H(n,t)}}}function ot(t){let e,n;return e=new rt({props:{status:t[0],error:t[1]}}),{c(){Y(e.$$.fragment)},l(t){F(e.$$.fragment,t)},m(t,r){G(e,t,r),n=!0},p(t,n){const r={};1&n&&(r.status=t[0]),2&n&&(r.error=t[1]),e.$set(r)},i(t){n||(K(e.$$.fragment,t),n=!0)},o(t){M(e.$$.fragment,t),n=!1},d(t){H(e,t)}}}function at(t){let e,n,r,s;const o=[ot,st],a=[];function i(t,e){return t[1]?0:1}return e=i(t),n=a[e]=o[e](t),{c(){n.c(),r=$()},l(t){n.l(t),r=$()},m(t,n){a[e].m(t,n),l(t,r,n),s=!0},p(t,s){let c=e;e=i(t),e===c?a[e].p(t,s):(B(),M(a[c],1,1,(()=>{a[c]=null})),D(),n=a[e],n?n.p(t,s):(n=a[e]=o[e](t),n.c()),K(n,1),n.m(r.parentNode,r))},i(t){s||(K(n),s=!0)},o(t){M(n),s=!1},d(t){a[e].d(t),t&&h(r)}}}function it(t){let e,n=t[6]&&ct(t);return{c(){e=d("div"),n&&n.c(),this.h()},l(t){e=v(t,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,class:!0});var r=b(e);n&&n.l(r),r.forEach(h),this.h()},h(){y(e,"id","svelte-announcer"),y(e,"aria-live","assertive"),y(e,"aria-atomic","true"),y(e,"class","svelte-q9sgi5")},m(t,r){l(t,e,r),n&&n.m(e,null)},p(t,r){t[6]?n?n.p(t,r):(n=ct(t),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(t){t&&h(e),n&&n.d()}}}function ct(t){let e,n;return{c(){e=m("Navigated to "),n=m(t[7])},l(r){e=w(r,"Navigated to "),n=w(r,t[7])},m(t,r){l(t,e,r),l(t,n,r)},p(t,e){128&e&&E(n,t[7])},d(t){t&&h(e),t&&h(n)}}}function ut(t){let n,r,s,o;const a=[t[3]||{}];let i={$$slots:{default:[at]},$$scope:{ctx:t}};for(let t=0;t<a.length;t+=1)i=e(i,a[t]);n=new t[8]({props:i});let c=t[5]&&it(t);return{c(){Y(n.$$.fragment),r=g(),c&&c.c(),s=$()},l(t){F(n.$$.fragment,t),r=x(t),c&&c.l(t),s=$()},m(t,e){G(n,t,e),l(t,r,e),c&&c.m(t,e),l(t,s,e),o=!0},p(t,[e]){const r=8&e?z(a,[W(t[3]||{})]):{};2071&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r),t[5]?c?c.p(t,e):(c=it(t),c.c(),c.m(s.parentNode,s)):c&&(c.d(1),c=null)},i(t){o||(K(n.$$.fragment,t),o=!0)},o(t){M(n.$$.fragment,t),o=!1},d(t){H(n,t),t&&h(r),c&&c.d(t),t&&h(s)}}}function ft(t,e,n){let{status:r}=e,{error:s}=e,{stores:o}=e,{page:a}=e,{components:i}=e,{props_0:c=null}=e,{props_1:u=null}=e;const f=i[0];var l,h,p;l="__svelte__",h=o,T().$$.context.set(l,h),p=o.page.notify,T().$$.after_update.push(p);let d=!1,m=!1,g=null;return function(t){T().$$.on_mount.push(t)}((()=>{const t=o.page.subscribe((()=>{d&&(n(6,m=!0),n(7,g=document.title))}));return n(5,d=!0),t})),t.$$set=t=>{"status"in t&&n(0,r=t.status),"error"in t&&n(1,s=t.error),"stores"in t&&n(9,o=t.stores),"page"in t&&n(10,a=t.page),"components"in t&&n(2,i=t.components),"props_0"in t&&n(3,c=t.props_0),"props_1"in t&&n(4,u=t.props_1)},t.$$.update=()=>{1536&t.$$.dirty&&o.page.set(a)},[r,s,i,c,u,d,m,g,f,o,a]}class lt extends Z{constructor(t){super(),Q(this,t,ft,ut,a,{status:0,error:1,stores:9,page:10,components:2,props_0:3,props_1:4})}}function ht(t){let e;const n=t[1].default,r=i(n,t,t[0],null);return{c(){r&&r.c()},l(t){r&&r.l(t)},m(t,n){r&&r.m(t,n),e=!0},p(t,[e]){r&&r.p&&1&e&&u(r,n,t,t[0],e,null,null)},i(t){e||(K(r,t),e=!0)},o(t){M(r,t),e=!1},d(t){r&&r.d(t)}}}function pt(t,e,n){let{$$slots:r={},$$scope:s}=e;return t.$$set=t=>{"$$scope"in t&&n(0,s=t.$$scope)},[s,r]}var dt=Object.freeze({__proto__:null,default:class extends Z{constructor(t){super(),Q(this,t,pt,ht,a,{})}}});const mt=[()=>Promise.all([import("./index-4a1f2409.js"),__inject_styles(["start-440f647c.css","Counter-3fa70468.css","index-09878133.css"])]).then((function(t){return t[0]})),()=>Promise.all([import("./readme-3a4cb96d.js"),__inject_styles(["start-440f647c.css"])]).then((function(t){return t[0]})),()=>Promise.all([import("./index-2b559129.js"),__inject_styles(["start-440f647c.css","Counter-3fa70468.css"])]).then((function(t){return t[0]})),()=>Promise.all([import("./go-878b7a80.js"),__inject_styles(["start-440f647c.css","go-d9f332fc.css"])]).then((function(t){return t[0]})),()=>Promise.all([import("./[id([0-9]+)]-529d121f.js"),__inject_styles(["start-440f647c.css"])]).then((function(t){return t[0]}))],gt=decodeURIComponent,$t=()=>({}),_t=[{pattern:/^\/$/,params:$t,parts:[mt[0]]},{pattern:/^\/readme\/?$/,params:$t,parts:[mt[1]]},{pattern:/^\/about\/?$/,params:$t,parts:[mt[2]]},{pattern:/^\/about\/go\/?$/,params:$t,parts:[mt[3]]},{pattern:/^\/blog\/([0-9]+)\/?$/,params:t=>({id:gt(t[1])}),parts:[mt[4]]}],yt=[];function bt(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}const vt=[];function wt(e,n=t){let r;const s=[];function o(t){if(a(e,t)&&(e=t,r)){const t=!vt.length;for(let t=0;t<s.length;t+=1){const n=s[t];n[1](),vt.push(n,e)}if(t){for(let t=0;t<vt.length;t+=2)vt[t][0](vt[t+1]);vt.length=0}}}return{set:o,update:function(t){o(t(e))},subscribe:function(a,i=t){const c=[a,i];return s.push(c),1===s.length&&(r=n(o)||t),a(e),()=>{const t=s.indexOf(c);-1!==t&&s.splice(t,1),0===s.length&&(r(),r=null)}}}}function xt(){return{x:pageXOffset,y:pageYOffset}}class Et{constructor({base:t,host:e,pages:n,ignore:r}){this.base=t,this.host=e,this.pages=n,this.ignore=r,this.history=window.history||{pushState:()=>{},replaceState:()=>{},scrollRestoration:"auto"}}init({renderer:t}){let e;this.renderer=t,t.router=this,"scrollRestoration"in this.history&&(this.history.scrollRestoration="manual"),addEventListener("beforeunload",(()=>{this.history.scrollRestoration="auto"})),addEventListener("load",(()=>{this.history.scrollRestoration="manual"})),addEventListener("scroll",(()=>{clearTimeout(e),e=setTimeout((()=>{const t={...history.state||{},"sveltekit:scroll":xt()};history.replaceState(t,document.title,window.location)}),50)})),addEventListener("click",(t=>{if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey||t.altKey)return;if(t.defaultPrevented)return;const e=bt(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const s=new URL(r);if(s.pathname===location.pathname&&s.search===location.search)return;const o=this.select(s);if(o){const n=e.hasAttribute("sveltekit:noscroll");this.renderer.notify(o),this.history.pushState({},"",s.href),this.navigate(o,!!n&&xt(),s.hash),t.preventDefault()}})),addEventListener("popstate",(t=>{if(t.state){const e=new URL(location.href),n=this.select(e);n?this.navigate(n,t.state["sveltekit:scroll"]):location.href=location.href}})),document.body.setAttribute("tabindex","-1"),this.history.replaceState({},"",location.href);const n=this.select(new URL(location.href));if(n)return this.renderer.start(n)}select(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(this.base))return null;let e=t.pathname.slice(this.base.length);if(""===e&&(e="/"),!this.ignore.some((t=>t.test(e))))for(const n of this.pages){const r=n.pattern.exec(e);if(r){const s=new URLSearchParams(t.search),o=n.params(r),a={host:this.host,path:e,query:s,params:o};return{href:t.href,route:n,match:r,page:a}}}}async goto(t,{noscroll:e=!1,replaceState:n=!1}={}){const r=new URL(t,function(t){let e=t.baseURI;if(!e){const n=t.getElementsByTagName("base");e=n.length?n[0].href:t.URL}return e}(document)),s=this.select(r);return s?(this.renderer.notify(s),this.history[n?"replaceState":"pushState"]({},"",t),this.navigate(s,!!e&&xt(),r.hash)):(location.href=t,new Promise((()=>{})))}async navigate(t,e,n){location.pathname.endsWith("/")&&"/"!==location.pathname&&history.replaceState({},"",`${location.pathname.slice(0,-1)}${location.search}`),await this.renderer.render(t),document.body.focus();const r=n&&document.getElementById(n.slice(1));e?scrollTo(e.x,e.y):r?scrollTo(0,r.getBoundingClientRect().top+scrollY):scrollTo(0,0)}}function St(t){const e=wt(t);let n=!0;return{notify:function(){n=!0,e.update((t=>t))},set:function(t){n=!1,e.set(t)},subscribe:function(t){let r;return e.subscribe((e=>{(void 0===r||n&&e!==r)&&t(r=e)}))}}}class Nt{constructor({Root:t,layout:e,target:n,error:r,status:s,preloaded:o,session:a}){this.Root=t,this.layout=e,this.layout_loader=()=>e,this.target=n,this.initial={preloaded:o,error:r,status:s},this.current={page:null,query:null,session_changed:!1,nodes:[]},this.caches=new Map,this.prefetching={href:null,promise:null},this.stores={page:St({}),navigating:wt(null),session:wt(a)},this.$session=null,this.root=null;const i=t=>{const e=bt(t.target);e&&e.hasAttribute("sveltekit:prefetch")&&this.prefetch(new URL(e.href))};let c;addEventListener("touchstart",i),addEventListener("mousemove",(t=>{clearTimeout(c),c=setTimeout((()=>{i(t)}),20)}));let u=!1;this.stores.session.subscribe((async t=>{if(this.$session=t,!u)return;this.current.session_changed=!0;const e=this.router.select(new URL(location.href));this.render(e)})),u=!0}async start(t){const e={stores:this.stores,error:this.initial.error,status:this.initial.status,page:t.page};if(this.initial.error)e.components=[this.layout.default];else{const n=await this.hydrate(t);if(n.redirect)throw new Error("TODO client-side redirects");Object.assign(e,n.props),this.current=n.state}this.root=new this.Root({target:this.target,props:e,hydrate:!0}),this.initial=null}notify(t){this.stores.navigating.set({from:this.current.page,to:t.page})}async render(t){const e=this.token={},n=await this.hydrate(t);this.token===e&&(this.current=n.state,this.root.$set(n.props),this.stores.navigating.set(null))}async hydrate({route:t,page:e}){const n={error:null,status:200,components:[]},r=(t,e)=>{if(this.initial){const e=document.querySelector(`script[type="svelte-data"][url="${t}"]`);if(e){const{body:t,...n}=JSON.parse(e.textContent);return Promise.resolve(new Response(t,n))}}return fetch(t,e)},s=e.query.toString(),o={page:e,query:s,session_changed:!1,nodes:[]},a=[this.layout_loader(),...t.parts.map((t=>t()))],i=[];let c,u={};const f={params:Object.keys(e.params).filter((t=>!this.current.page||this.current.page.params[t]!==e.params[t])),query:s!==this.current.query,session:this.current.session_changed,context:!1};try{for(let t=0;t<a.length;t+=1){const l=this.current.nodes[t],{default:h,load:p}=await a[t];n.components[t]=h;if(!l||h!==l.component||f.params.some((t=>l.uses.params.has(t)))||f.query&&l.uses.query||f.session&&l.uses.session||f.context&&l.uses.context){const n=e.path+s,a=this.caches.get(h),l=a&&a.get(n);let d,m;if(!l||f.context&&l.node.uses.context){d={component:h,uses:{params:new Set,query:!1,session:!1,context:!1}};const t={};for(const n in e.params)Object.defineProperty(t,n,{get:()=>(d.uses.params.add(n),e.params[n]),enumerable:!0});const n=this.$session;m=p&&await p.call(null,{page:{...e,params:t,get query(){return d.uses.query=!0,e.query}},get session(){return d.uses.session=!0,n},get context(){return d.uses.context=!0,{...u}},fetch:r})}else({node:d,loaded:m}=l);if(m){if(m.error){const t=new Error(m.error.message);throw t.status=m.error.status,t}if(m.redirect){c=m.redirect;break}if(m.context&&(f.context=!0,u={...u,...m.context}),m.maxage){this.caches.has(h)||this.caches.set(h,new Map);const t=this.caches.get(h),e={node:d,loaded:m};t.set(n,e);let r=!1;const s=setTimeout((()=>{o()}),1e3*m.maxage),o=()=>{t.get(n)===e&&t.delete(n),a(),clearTimeout(s)},a=this.stores.session.subscribe((()=>{r&&o()}));r=!0}i[t]=m.props}o.nodes[t]=d}else o.nodes[t]=l}(await Promise.all(i)).forEach(((t,e)=>{t&&(n[`props_${e}`]=t)})),this.current.page&&e.path===this.current.page.path||(n.page=e)}catch(t){n.error=t,n.status=500,o.nodes=[]}return{redirect:c,props:n,state:o}}async prefetch(t){const e=this.router.select(t);if(e)return t.href!==this.prefetching.href&&(this.prefetching={href:t.href,promise:this.hydrate(e)}),this.prefetching.promise;throw new Error(`Could not prefetch ${t.href}`)}}async function Tt({paths:t,target:e,host:n,session:r,preloaded:s,error:o,status:a}){const i=new Et({base:t.base,host:n,pages:_t,ignore:yt}),c=new Nt({Root:lt,layout:dt,target:e,preloaded:s,error:o,status:a,session:r});await i.init({renderer:c})}export{p as A,Tt as B,Z as S,g as a,v as b,Y as c,b as d,d as e,F as f,x as g,w as h,Q as i,h as j,y as k,l,G as m,f as n,t as o,K as p,M as q,H as r,a as s,m as t,_ as u,E as v,i as w,u as x,B as y,D as z};

import __inject_styles from './inject_styles-cd877ae9.js';//# sourceMappingURL=start-7f80fa8d.js.map