var L=Object.create;var a=Object.defineProperty,O=Object.defineProperties,S=Object.getOwnPropertyDescriptor,b=Object.getOwnPropertyDescriptors,w=Object.getOwnPropertyNames,u=Object.getOwnPropertySymbols,R=Object.getPrototypeOf,m=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var i=(e,t,o)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,F=(e,t)=>{for(var o in t||(t={}))m.call(t,o)&&i(e,o,t[o]);if(u)for(var o of u(t))y.call(t,o)&&i(e,o,t[o]);return e},G=(e,t)=>O(e,b(t)),p=e=>a(e,"__esModule",{value:!0});var _=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),j=(e,t)=>{p(e);for(var o in t)a(e,o,{get:t[o],enumerable:!0})},E=(e,t,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of w(t))!m.call(e,s)&&s!=="default"&&a(e,s,{get:()=>t[s],enumerable:!(o=S(t,s))||o.enumerable});return e},k=e=>E(p(a(e!=null?L(R(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e);var T=(e,t,o)=>(i(e,typeof t!="symbol"?t+"":t,o),o);var c=()=>{};function f(){return{length:0,clear:c,getItem:c,key:c,setItem:c,removeItem:c}}function d(e){try{if(!e.localStorage||!e.sessionStorage)throw"no storage!";return e.localStorage.setItem("storage_test","1"),e.localStorage.removeItem("storage_test"),[e.localStorage,e.sessionStorage]}catch(t){let o=new f,s=new f;return[o,s]}}var r=function(){if(typeof self!="undefined")return self;if(typeof global!="undefined")return global;if(typeof v!="undefined")return v;throw new N("unable to locate global object")}(),[I,U]=d(r),W=r.clearTimeout.bind(r),l=r.console,J=r.document,P=r.history,N=r.Error,C=r.fetch,M=r.navigator,h=I,V=r.location,q=r.JSON,z=r.Promise,H=r.setTimeout.bind(r);var v=r.window;var n={DEBUG:1,INFO:2,LOG:3,WARN:4,ERROR:5,OFF:10},g=Object.keys(n).reduce((e,t)=>(e[t]=t,e),{}),x=class{constructor(t="debug"){this._key=t;let o="false";try{o=h.getItem(this._key)||"false"}catch(s){}this.logLevel=o}get logLevel(){return this._logLevel}set logLevel(t){let o=n[t]?t:"OFF",s=n[o];this._logLevel={name:o,value:s}}debug(){this.logLevel.value<=n.DEBUG&&l.debug(g.DEBUG,"::",...arguments)}info(){this.logLevel.value<=n.INFO&&l.info(g.INFO,"::",...arguments)}log(){this.logLevel.value<=n.LOG&&l.log(g.LOG,"::",...arguments)}warn(){this.logLevel.value<=n.WARN&&l.warn(g.WARN,"::",...arguments)}error(){this.logLevel.value<=n.ERROR&&l.error(g.ERROR,"::",...arguments)}},X=new x;export{F as a,G as b,_ as c,j as d,k as e,T as f,C as g,X as h};
//# sourceMappingURL=chunk-BZFIDKTD.js.map