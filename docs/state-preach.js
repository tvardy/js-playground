import{a as g}from"./chunk-YZJ6BJJJ.js";import{a as i,b as p,c as d,d as m}from"./chunk-WTVACNFX.js";import{a as r}from"./chunk-AP7XD5YO.js";import"./chunk-O6JHPXQZ.js";import"./chunk-MOOY4HSH.js";import"./chunk-HUGZSJLG.js";import{a as c,d as h,e as l}from"./chunk-BZFIDKTD.js";var a={};h(a,{connect:()=>_});var u=l(g());var s=new u.default,b=c({},d),f={toggle(o){n.todos=n.todos.map(t=>(t.id===o&&(t.done=!t.done),t))},add(o){n.todos=[{text:o,done:!1,id:p()},...n.todos]}},P={set(o,t,e){return o[t]=e,s.pub("change",o),!0}},n=new Proxy(b,P),S=Object.keys(f).reduce((o,t)=>(o[t]=(...e)=>f[t](...e),o),{});function _(o=r,t=r){t(S),s.sub("change",e=>o(e)),s.pub("change",n)}i("Preach",a,m);
//# sourceMappingURL=state-preach.js.map
