function s(t){return new Promise((n,e)=>{let o=new i(t);o.on("connect",()=>n(o)),o.on("error",r=>e(r))})}var i=class{constructor(n){this._io=io(n)}get id(){return this._io.id}on(...n){this._io.on(...n)}emit(...n){this._io.emit(...n)}};export{s as a};
//# sourceMappingURL=chunk-ESA2JQH7.js.map
