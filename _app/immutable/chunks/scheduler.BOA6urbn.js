function w(){}function j(t,n){for(const e in n)t[e]=n[e];return t}function v(t){return t()}function A(){return Object.create(null)}function E(t){t.forEach(v)}function F(t){return typeof t=="function"}function P(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let i;function S(t,n){return t===n?!0:(i||(i=document.createElement("a")),i.href=n,t===i.href)}function U(t){return Object.keys(t).length===0}function m(t,...n){if(t==null){for(const r of n)r(void 0);return w}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function B(t){let n;return m(t,e=>n=e)(),n}function C(t,n,e){t.$$.on_destroy.push(m(n,e))}function D(t,n,e,r){if(t){const o=y(t,n,e,r);return t[0](o)}}function y(t,n,e,r){return t[1]&&r?j(e.ctx.slice(),t[1](r(n))):e.ctx}function G(t,n,e,r){if(t[2]&&r){const o=t[2](r(e));if(n.dirty===void 0)return o;if(typeof o=="object"){const a=[],_=Math.max(n.dirty.length,o.length);for(let s=0;s<_;s+=1)a[s]=n.dirty[s]|o[s];return a}return n.dirty|o}return n.dirty}function H(t,n,e,r,o,a){if(o){const _=y(n,e,r,a);t.p(_,o)}}function I(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let r=0;r<e;r++)n[r]=-1;return n}return-1}function J(t){const n={};for(const e in t)e[0]!=="$"&&(n[e]=t[e]);return n}let f;function d(t){f=t}function x(){if(!f)throw new Error("Function called outside component initialization");return f}function K(t){x().$$.on_mount.push(t)}function L(t){x().$$.after_update.push(t)}const l=[],g=[];let u=[];const b=[],k=Promise.resolve();let p=!1;function q(){p||(p=!0,k.then(z))}function N(){return q(),k}function O(t){u.push(t)}const h=new Set;let c=0;function z(){if(c!==0)return;const t=f;do{try{for(;c<l.length;){const n=l[c];c++,d(n),M(n.$$)}}catch(n){throw l.length=0,c=0,n}for(d(null),l.length=0,c=0;g.length;)g.pop()();for(let n=0;n<u.length;n+=1){const e=u[n];h.has(e)||(h.add(e),e())}u.length=0}while(l.length);for(;b.length;)b.pop()();p=!1,h.clear(),d(t)}function M(t){if(t.fragment!==null){t.update(),E(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(O)}}function Q(t){const n=[],e=[];u.forEach(r=>t.indexOf(r)===-1?n.push(r):e.push(r)),e.forEach(r=>r()),u=n}export{G as A,L as a,g as b,C as c,j as d,J as e,A as f,z as g,U as h,F as i,O as j,Q as k,f as l,d as m,w as n,K as o,v as p,l as q,E as r,P as s,N as t,q as u,B as v,S as w,D as x,H as y,I as z};
