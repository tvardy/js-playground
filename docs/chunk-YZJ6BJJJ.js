import{c as v}from"./chunk-BZFIDKTD.js";var p=v((O,g)=>{function o(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}g.exports=o;o.EventEmitter=o;o.prototype._events=void 0;o.prototype._maxListeners=void 0;o.defaultMaxListeners=10;o.prototype.setMaxListeners=function(e){if(!x(e)||e<0||isNaN(e))throw TypeError("n must be a positive number");return this._maxListeners=e,this};o.prototype.emit=function(e){var n,t,s,i,r,f;if(this._events||(this._events={}),e==="error"&&(!this._events.error||l(this._events.error)&&!this._events.error.length))throw n=arguments[1],n instanceof Error?n:TypeError('Uncaught, unspecified "error" event.');if(t=this._events[e],m(t))return!1;if(a(t))switch(arguments.length){case 1:t.call(this);break;case 2:t.call(this,arguments[1]);break;case 3:t.call(this,arguments[1],arguments[2]);break;default:for(s=arguments.length,i=new Array(s-1),r=1;r<s;r++)i[r-1]=arguments[r];t.apply(this,i)}else if(l(t)){for(s=arguments.length,i=new Array(s-1),r=1;r<s;r++)i[r-1]=arguments[r];for(f=t.slice(),s=f.length,r=0;r<s;r++)f[r].apply(this,i)}return!0};o.prototype.addListener=function(e,n){var t;if(!a(n))throw TypeError("listener must be a function");if(this._events||(this._events={}),this._events.newListener&&this.emit("newListener",e,a(n.listener)?n.listener:n),this._events[e]?l(this._events[e])?this._events[e].push(n):this._events[e]=[this._events[e],n]:this._events[e]=n,l(this._events[e])&&!this._events[e].warned){var t;m(this._maxListeners)?t=o.defaultMaxListeners:t=this._maxListeners,t&&t>0&&this._events[e].length>t&&(this._events[e].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[e].length),typeof console.trace=="function"&&console.trace())}return this};o.prototype.on=o.prototype.addListener;o.prototype.once=function(e,n){if(!a(n))throw TypeError("listener must be a function");var t=!1;function s(){this.removeListener(e,s),t||(t=!0,n.apply(this,arguments))}return s.listener=n,this.on(e,s),this};o.prototype.removeListener=function(e,n){var t,s,i,r;if(!a(n))throw TypeError("listener must be a function");if(!this._events||!this._events[e])return this;if(t=this._events[e],i=t.length,s=-1,t===n||a(t.listener)&&t.listener===n)delete this._events[e],this._events.removeListener&&this.emit("removeListener",e,n);else if(l(t)){for(r=i;r-- >0;)if(t[r]===n||t[r].listener&&t[r].listener===n){s=r;break}if(s<0)return this;t.length===1?(t.length=0,delete this._events[e]):t.splice(s,1),this._events.removeListener&&this.emit("removeListener",e,n)}return this};o.prototype.removeAllListeners=function(e){var n,t;if(!this._events)return this;if(!this._events.removeListener)return arguments.length===0?this._events={}:this._events[e]&&delete this._events[e],this;if(arguments.length===0){for(n in this._events)n!=="removeListener"&&this.removeAllListeners(n);return this.removeAllListeners("removeListener"),this._events={},this}if(t=this._events[e],a(t))this.removeListener(e,t);else for(;t.length;)this.removeListener(e,t[t.length-1]);return delete this._events[e],this};o.prototype.listeners=function(e){var n;return!this._events||!this._events[e]?n=[]:a(this._events[e])?n=[this._events[e]]:n=this._events[e].slice(),n};o.listenerCount=function(e,n){var t;return!e._events||!e._events[n]?t=0:a(e._events[n])?t=1:t=e._events[n].length,t};function a(e){return typeof e=="function"}function x(e){return typeof e=="number"}function l(e){return typeof e=="object"&&e!==null}function m(e){return e===void 0}});var d=v(_=>{_.getFnIdx=function(e){return e.toString().replace(/[\s\r\n\f\t\v]/g,"")};_.getChannels=function(e,n){var t=[];if(e instanceof RegExp)for(var s in n)n.hasOwnProperty(s)&&e.test(s)&&t.push(s);else t=e in n?[e]:[];return t}});var L=v((y,N)=>{N.exports={ECHNLNOTFOUND:"Preach: No channels match the given channel name or regular expression",ELSTNRNOTFOUND:"Preach: Could not unsubscribe. Maybe the subsciber doesn't exist"}});var E=v((F,q)=>{var b=p().EventEmitter,u=d(),c=L();function h(e){if(!(this instanceof h))return new h;this._q={},this._e=new b,this._e.setMaxListeners(e||0)}h.prototype.pub=function(e){var n=u.getChannels(e,this._q),t=[].splice.call(arguments,1);n.length||console.warn(c.ECHNLNOTFOUND);for(var s in n)this._e.emit.apply(this._e,[n[s]].concat(t));return!0};h.prototype.sub=function(e,n){var t=e instanceof RegExp?u.getChannels(e,this._q):[e],s=u.getFnIdx(n),i;t.length||console.warn(c.ECHNLNOTFOUND);for(var r in t)i=t[r],this._q[i]=this._q[i]||{},this._q[i][s]=n,this._e.on(i,this._q[i][s]);return!0};h.prototype.unsub=function(e,n){var t=u.getChannels(e,this._q),s=u.getFnIdx(n),i;t.length||console.warn(c.ECHNLNOTFOUND);for(var r in t)try{i=t[r],this._e.removeListener(i,this._q[i][s]),delete this._q[i][s]}catch(f){console.warn(c.ELSTNRNOTFOUND,f)}return!0};h.prototype.purge=function(){var e=u.getChannels(/.*/,this._q),n;for(var t in e)n=e[t],this._e.removeAllListeners(n),delete this._q[n];return!0};h.prototype.channels=function(){return u.getChannels(/.*/,this._q)};h.prototype.subscribers=function(e){var n=u.getChannels(e||/.*/,this._q),t,s;if(s={},n.length===1&&!(n[0]in this._q))return s;for(var i in n){t=n[i],s[t]=[];for(var r in this._q[t])this._q[t].hasOwnProperty(r)&&s[t].push(this._q[t][r])}return s};h.prototype.subscriberCount=function(e){var n=u.getChannels(e||/.*/,this._q),t,s;if(s={},n.length===1&&!(n[0]in this._q))return s;for(var i in n)t=n[i],s[t]=b.listenerCount(this._e,t);return s};h.prototype.setMaxSubscribers=function(e){this._e.setMaxListeners(e)};q.exports=h});var C=v((U,w)=>{w.exports=E()});export{C as a};
//# sourceMappingURL=chunk-YZJ6BJJJ.js.map
