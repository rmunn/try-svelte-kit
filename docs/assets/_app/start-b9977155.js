function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function s(t){t.forEach(n)}function o(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(t,e,n,r){if(t){const s=c(t,e,n,r);return t[0](s)}}function c(t,n,r,s){return t[1]&&s?e(r.ctx.slice(),t[1](s(n))):r.ctx}function u(t,e,n,r,s,o,a){const i=function(t,e,n,r){if(t[2]&&r){const s=t[2](r(n));if(void 0===e.dirty)return s;if("object"==typeof s){const t=[],n=Math.max(e.dirty.length,s.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|s[r];return t}return e.dirty|s}return e.dirty}(e,r,s,o);if(i){const s=c(e,n,r,a);t.p(s,i)}}function l(t,e){t.appendChild(e)}function f(t,e,n){t.insertBefore(e,n||null)}function h(t){t.parentNode.removeChild(t)}function p(t){return document.createElement(t)}function d(t){return document.createTextNode(t)}function m(){return d(" ")}function g(){return d("")}function $(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function y(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function b(t){return Array.from(t.childNodes)}function _(t,e,n,r){for(let r=0;r<t.length;r+=1){const s=t[r];if(s.nodeName===e){let e=0;const o=[];for(;e<s.attributes.length;){const t=s.attributes[e++];n[t.name]||o.push(t.name)}for(let t=0;t<o.length;t++)s.removeAttribute(o[t]);return t.splice(r,1)[0]}}return r?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(e):p(e)}function w(t,e){for(let n=0;n<t.length;n+=1){const r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return d(e)}function v(t){return w(t," ")}function x(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}let E;function S(t){E=t}function k(){if(!E)throw new Error("Function called outside component initialization");return E}const R=[],L=[],T=[],q=[],N=Promise.resolve();let O=!1;function j(t){T.push(t)}let A=!1;const P=new Set;function C(){if(!A){A=!0;do{for(let t=0;t<R.length;t+=1){const e=R[t];S(e),U(e.$$)}for(S(null),R.length=0;L.length;)L.pop()();for(let t=0;t<T.length;t+=1){const e=T[t];P.has(e)||(P.add(e),e())}T.length=0}while(R.length);for(;q.length;)q.pop()();O=!1,A=!1,P.clear()}}function U(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(j)}}const I=new Set;let M;function V(){M={r:0,c:[],p:M}}function B(){M.r||s(M.c),M=M.p}function K(t,e){t&&t.i&&(I.delete(t),t.i(e))}function D(t,e,n,r){if(t&&t.o){if(I.has(t))return;I.add(t),M.c.push((()=>{I.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}}function J(t,e){const n={},r={},s={$$scope:1};let o=t.length;for(;o--;){const a=t[o],i=e[o];if(i){for(const t in a)t in i||(r[t]=1);for(const t in i)s[t]||(n[t]=i[t],s[t]=1);t[o]=i}else for(const t in a)s[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function z(t){return"object"==typeof t&&null!==t?t:{}}function H(t){t&&t.c()}function W(t,e){t&&t.l(e)}function Y(t,e,r){const{fragment:a,on_mount:i,on_destroy:c,after_update:u}=t.$$;a&&a.m(e,r),j((()=>{const e=i.map(n).filter(o);c?c.push(...e):s(e),t.$$.on_mount=[]})),u.forEach(j)}function F(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function G(t,e){-1===t.$$.dirty[0]&&(R.push(t),O||(O=!0,N.then(C)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function X(e,n,o,a,i,c,u=[-1]){const l=E;S(e);const f=n.props||{},p=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:i,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(l?l.$$.context:[]),callbacks:r(),dirty:u,skip_bound:!1};let d=!1;if(p.ctx=o?o(e,f,((t,n,...r)=>{const s=r.length?r[0]:n;return p.ctx&&i(p.ctx[t],p.ctx[t]=s)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](s),d&&G(e,t)),n})):[],p.update(),d=!0,s(p.before_update),p.fragment=!!a&&a(p.ctx),n.target){if(n.hydrate){const t=b(n.target);p.fragment&&p.fragment.l(t),t.forEach(h)}else p.fragment&&p.fragment.c();n.intro&&K(e.$$.fragment),Y(e,n.target,n.anchor),C()}S(l)}class Q{$destroy(){F(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function Z(t){let e,n,r=t[1].stack+"";return{c(){e=p("pre"),n=d(r)},l(t){e=_(t,"PRE",{});var s=b(e);n=w(s,r),s.forEach(h)},m(t,r){f(t,e,r),l(e,n)},p(t,e){2&e&&r!==(r=t[1].stack+"")&&x(n,r)},d(t){t&&h(e)}}}function tt(e){let n,r,s,o,a,i,c,u=e[1].message+"",$=e[1].stack&&Z(e);return{c(){n=p("h1"),r=d(e[0]),s=m(),o=p("p"),a=d(u),i=m(),$&&$.c(),c=g()},l(t){n=_(t,"H1",{});var l=b(n);r=w(l,e[0]),l.forEach(h),s=v(t),o=_(t,"P",{});var f=b(o);a=w(f,u),f.forEach(h),i=v(t),$&&$.l(t),c=g()},m(t,e){f(t,n,e),l(n,r),f(t,s,e),f(t,o,e),l(o,a),f(t,i,e),$&&$.m(t,e),f(t,c,e)},p(t,[e]){1&e&&x(r,t[0]),2&e&&u!==(u=t[1].message+"")&&x(a,u),t[1].stack?$?$.p(t,e):($=Z(t),$.c(),$.m(c.parentNode,c)):$&&($.d(1),$=null)},i:t,o:t,d(t){t&&h(n),t&&h(s),t&&h(o),t&&h(i),$&&$.d(t),t&&h(c)}}}function et(t,e,n){let{status:r}=e,{error:s}=e;return t.$$set=t=>{"status"in t&&n(0,r=t.status),"error"in t&&n(1,s=t.error)},[r,s]}class nt extends Q{constructor(t){super(),X(this,t,et,tt,a,{status:0,error:1})}}function rt(t){let n,r,s;const o=[t[4]||{}];var a=t[2][1];function i(t){let n={};for(let t=0;t<o.length;t+=1)n=e(n,o[t]);return{props:n}}return a&&(n=new a(i())),{c(){n&&H(n.$$.fragment),r=g()},l(t){n&&W(n.$$.fragment,t),r=g()},m(t,e){n&&Y(n,t,e),f(t,r,e),s=!0},p(t,e){const s=16&e?J(o,[z(t[4]||{})]):{};if(a!==(a=t[2][1])){if(n){V();const t=n;D(t.$$.fragment,1,0,(()=>{F(t,1)})),B()}a?(n=new a(i()),H(n.$$.fragment),K(n.$$.fragment,1),Y(n,r.parentNode,r)):n=null}else a&&n.$set(s)},i(t){s||(n&&K(n.$$.fragment,t),s=!0)},o(t){n&&D(n.$$.fragment,t),s=!1},d(t){t&&h(r),n&&F(n,t)}}}function st(t){let e,n;return e=new nt({props:{status:t[0],error:t[1]}}),{c(){H(e.$$.fragment)},l(t){W(e.$$.fragment,t)},m(t,r){Y(e,t,r),n=!0},p(t,n){const r={};1&n&&(r.status=t[0]),2&n&&(r.error=t[1]),e.$set(r)},i(t){n||(K(e.$$.fragment,t),n=!0)},o(t){D(e.$$.fragment,t),n=!1},d(t){F(e,t)}}}function ot(t){let e,n,r,s;const o=[st,rt],a=[];function i(t,e){return t[1]?0:1}return e=i(t),n=a[e]=o[e](t),{c(){n.c(),r=g()},l(t){n.l(t),r=g()},m(t,n){a[e].m(t,n),f(t,r,n),s=!0},p(t,s){let c=e;e=i(t),e===c?a[e].p(t,s):(V(),D(a[c],1,1,(()=>{a[c]=null})),B(),n=a[e],n?n.p(t,s):(n=a[e]=o[e](t),n.c()),K(n,1),n.m(r.parentNode,r))},i(t){s||(K(n),s=!0)},o(t){D(n),s=!1},d(t){a[e].d(t),t&&h(r)}}}function at(t){let n,r;const s=[t[3]||{}];let o={$$slots:{default:[ot]},$$scope:{ctx:t}};for(let t=0;t<s.length;t+=1)o=e(o,s[t]);return n=new t[5]({props:o}),{c(){H(n.$$.fragment)},l(t){W(n.$$.fragment,t)},m(t,e){Y(n,t,e),r=!0},p(t,[e]){const r=8&e?J(s,[z(t[3]||{})]):{};279&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r)},i(t){r||(K(n.$$.fragment,t),r=!0)},o(t){D(n.$$.fragment,t),r=!1},d(t){F(n,t)}}}function it(t,e,n){let{status:r}=e,{error:s}=e,{stores:o}=e,{page:a}=e,{components:i}=e,{props_0:c=null}=e,{props_1:u=null}=e;const l=i[0];var f,h,p;return f="__svelte__",h=o,k().$$.context.set(f,h),p=o.page.notify,k().$$.after_update.push(p),t.$$set=t=>{"status"in t&&n(0,r=t.status),"error"in t&&n(1,s=t.error),"stores"in t&&n(6,o=t.stores),"page"in t&&n(7,a=t.page),"components"in t&&n(2,i=t.components),"props_0"in t&&n(3,c=t.props_0),"props_1"in t&&n(4,u=t.props_1)},t.$$.update=()=>{192&t.$$.dirty&&o.page.set(a)},[r,s,i,c,u,l,o,a]}class ct extends Q{constructor(t){super(),X(this,t,it,at,a,{status:0,error:1,stores:6,page:7,components:2,props_0:3,props_1:4})}}function ut(t){let e;const n=t[1].default,r=i(n,t,t[0],null);return{c(){r&&r.c()},l(t){r&&r.l(t)},m(t,n){r&&r.m(t,n),e=!0},p(t,[e]){r&&r.p&&1&e&&u(r,n,t,t[0],e,null,null)},i(t){e||(K(r,t),e=!0)},o(t){D(r,t),e=!1},d(t){r&&r.d(t)}}}function lt(t,e,n){let{$$slots:r={},$$scope:s}=e;return t.$$set=t=>{"$$scope"in t&&n(0,s=t.$$scope)},[s,r]}var ft=Object.freeze({__proto__:null,default:class extends Q{constructor(t){super(),X(this,t,lt,ut,a,{})}}});const ht=[()=>Promise.all([import("./index-379cbabc.js"),__inject_styles(["Nav-3fa70468.css","index-09878133.css"])]).then((function(t){return t[0]})),()=>Promise.all([import("./index-a3f9b69d.js"),__inject_styles(["Nav-3fa70468.css"])]).then((function(t){return t[0]}))],pt=()=>({}),dt=[{pattern:/^\/$/,params:pt,parts:[ht[0]]},{pattern:/^\/about\/?$/,params:pt,parts:[ht[1]]}],mt=[];function gt(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}const $t=[];function yt(e,n=t){let r;const s=[];function o(t){if(a(e,t)&&(e=t,r)){const t=!$t.length;for(let t=0;t<s.length;t+=1){const n=s[t];n[1](),$t.push(n,e)}if(t){for(let t=0;t<$t.length;t+=2)$t[t][0]($t[t+1]);$t.length=0}}}return{set:o,update:function(t){o(t(e))},subscribe:function(a,i=t){const c=[a,i];return s.push(c),1===s.length&&(r=n(o)||t),a(e),()=>{const t=s.indexOf(c);-1!==t&&s.splice(t,1),0===s.length&&(r(),r=null)}}}}function bt(){return{x:pageXOffset,y:pageYOffset}}class _t{constructor({base:t,host:e,pages:n,ignore:r}){this.base=t,this.host=e,this.pages=n,this.ignore=r,this.history=window.history||{pushState:()=>{},replaceState:()=>{},scrollRestoration:"auto"}}init({renderer:t}){let e;this.renderer=t,t.router=this,"scrollRestoration"in this.history&&(this.history.scrollRestoration="manual"),addEventListener("beforeunload",(()=>{this.history.scrollRestoration="auto"})),addEventListener("load",(()=>{this.history.scrollRestoration="manual"})),addEventListener("scroll",(()=>{clearTimeout(e),e=setTimeout((()=>{const t={...history.state||{},"sveltekit:scroll":bt()};history.replaceState(t,document.title,window.location)}),50)})),addEventListener("click",(t=>{if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey||t.altKey)return;if(t.defaultPrevented)return;const e=gt(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const s=new URL(r);if(s.pathname===location.pathname&&s.search===location.search)return;const o=this.select(s);if(o){const n=e.hasAttribute("sveltekit:noscroll");this.history.pushState({},"",s.href),this.navigate(o,!!n&&bt(),s.hash),t.preventDefault()}})),addEventListener("popstate",(t=>{if(t.state){const e=new URL(location.href),n=this.select(e);n?this.navigate(n,t.state["sveltekit:scroll"]):location.href=location.href}})),this.history.replaceState({},"",location.href);const n=this.select(new URL(location.href));if(n)return this.renderer.start(n)}select(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(this.base))return null;let e=t.pathname.slice(this.base.length);if(""===e&&(e="/"),!this.ignore.some((t=>t.test(e))))for(const n of this.pages){const r=n.pattern.exec(e);if(r){const s=new URLSearchParams(t.search),o=n.params(r),a={host:this.host,path:e,query:s,params:o};return{href:t.href,route:n,match:r,page:a}}}}async goto(t,{noscroll:e=!1,replaceState:n=!1}={}){const r=new URL(t,function(t){let e=t.baseURI;if(!e){const n=t.getElementsByTagName("base");e=n.length?n[0].href:t.URL}return e}(document)),s=this.select(r);return s?(this.history[n?"replaceState":"pushState"]({},"",t),this.navigate(s,!!e&&bt(),r.hash)):(location.href=t,new Promise((()=>{})))}async navigate(t,e,n){location.pathname.endsWith("/")&&"/"!==location.pathname&&history.replaceState({},"",`${location.pathname.slice(0,-1)}${location.search}`),await this.renderer.render(t),document.activeElement instanceof HTMLElement&&document.activeElement.blur();const r=n&&document.getElementById(n.slice(1));e?scrollTo(e.x,e.y):r?scrollTo(0,r.getBoundingClientRect().top+scrollY):scrollTo(0,0)}}function wt(t){const e=yt(t);let n=!0;return{notify:function(){n=!0,e.update((t=>t))},set:function(t){n=!1,e.set(t)},subscribe:function(t){let r;return e.subscribe((e=>{(void 0===r||n&&e!==r)&&t(r=e)}))}}}class vt{constructor({Root:t,layout:e,target:n,error:r,status:s,preloaded:o,session:a}){this.Root=t,this.layout=e,this.layout_loader=()=>e,this.target=n,this.initial={preloaded:o,error:r,status:s},this.current={params:{},path:null,query:null,session_changed:!1,nodes:[]},this.caches=new Map,this.prefetching={href:null,promise:null},this.stores={page:wt({}),navigating:yt(!1),session:yt(a)},this.$session=null,this.root=null;const i=t=>{const e=gt(t.target);e&&e.hasAttribute("sveltekit:prefetch")&&this.prefetch(new URL(e.href))};let c;addEventListener("touchstart",i),addEventListener("mousemove",(t=>{clearTimeout(c),c=setTimeout((()=>{i(t)}),20)}));let u=!1;this.stores.session.subscribe((async t=>{if(this.$session=t,!u)return;this.current.session_changed=!0;const e=this.router.select(new URL(location.href));this.render(e)})),u=!0}async start(t){const e={stores:this.stores,error:this.initial.error,status:this.initial.status,page:t.page};if(this.initial.error)e.components=[this.layout.default];else{const n=await this.hydrate(t);if(n.redirect)throw new Error("TODO client-side redirects");Object.assign(e,n.props),this.current=n.state}this.root=new this.Root({target:this.target,props:e,hydrate:!0}),this.initial=null}async render(t){const e=this.token={};this.stores.navigating.set(!0);const n=await this.hydrate(t);this.token===e&&(this.current=n.state,this.root.$set(n.props),this.stores.navigating.set(!1))}async hydrate({route:t,page:e}){const n={error:null,status:200,components:[]},r=(t,e)=>{if(this.initial){const e=document.querySelector(`script[type="svelte-data"][url="${t}"]`);if(e){const{body:t,...n}=JSON.parse(e.textContent);return Promise.resolve(new Response(t,n))}}return fetch(t,e)},s={path:e.path,params:e.params,query:e.query.toString(),session_changed:!1,nodes:[]},o=[this.layout_loader(),...t.parts.map((t=>t()))],a=[];let i,c={};const u={params:Object.keys(e.params).filter((t=>this.current.params[t]!==e.params[t])),query:s.query!==this.current.query,session:this.current.session_changed,context:!1};try{for(let t=0;t<o.length;t+=1){const l=this.current.nodes[t],{default:f,load:h}=await o[t];n.components[t]=f;if(!l||f!==l.component||u.params.some((t=>l.uses.params.has(t)))||u.query&&l.uses.query||u.session&&l.uses.session||u.context&&l.uses.context){const n=this.caches.get(f),o=n&&n.get(s.path+s.query);let l,p;if(!o||u.context&&o.node.uses.context){l={component:f,uses:{params:new Set,query:!1,session:!1,context:!1}};const t={};for(const n in e.params)Object.defineProperty(t,n,{get:()=>(l.uses.params.add(n),e.params[n]),enumerable:!0});const n=this.$session;p=h&&await h.call(null,{page:{...e,params:t,get query(){return l.uses.query=!0,e.query}},get session(){return l.uses.session=!0,n},get context(){return l.uses.context=!0,{...c}},fetch:r})}else({node:l,loaded:p}=o);if(p){if(p.error){const t=new Error(p.error.message);throw t.status=p.error.status,t}if(p.redirect){i=p.redirect;break}if(p.context&&(u.context=!0,c={...c,...p.context}),p.maxage){this.caches.has(f)||this.caches.set(f,new Map);const t=this.caches.get(f),e={node:l,loaded:p},n=s.path+s.query;t.set(n,e);let r=!1;const o=setTimeout((()=>{a()}),1e3*p.maxage),a=()=>{t.get(n)===e&&t.delete(n),i(),clearTimeout(o)},i=this.stores.session.subscribe((()=>{r&&a()}));r=!0}a[t]=p.props}s.nodes[t]=l}else s.nodes[t]=l}(await Promise.all(a)).forEach(((t,e)=>{t&&(n[`props_${e}`]=t)})),this.current&&s.path===this.current.path||(n.page=e)}catch(t){n.error=t,n.status=500,s.nodes=[]}return{redirect:i,props:n,state:s}}async prefetch(t){const e=this.router.select(t);if(e)return t.href!==this.prefetching.href&&(this.prefetching={href:t.href,promise:this.hydrate(e)}),this.prefetching.promise;throw new Error(`Could not prefetch ${t.href}`)}}async function xt({paths:t,target:e,host:n,session:r,preloaded:s,error:o,status:a}){const i=new _t({base:t.base,host:n,pages:dt,ignore:mt}),c=new vt({Root:ct,layout:ft,target:e,preloaded:s,error:o,status:a,session:r});await i.init({renderer:c})}export{Q as S,m as a,_ as b,H as c,b as d,p as e,W as f,v as g,w as h,X as i,h as j,y as k,f as l,Y as m,l as n,t as o,K as p,D as q,F as r,a as s,d as t,$ as u,x as v,i as w,u as x,xt as y};

import __inject_styles from './inject_styles-cd877ae9.js';//# sourceMappingURL=start-b9977155.js.map
