var r={user:{},messages:[]},c=r;var i={URL:"wss://node-ws-message-broker.herokuapp.com/"};function u(){return new Promise((e,o)=>{let t=new s(i.URL);t.on("connect",()=>e(t)),t.on("error",n=>o(n))})}var s=class{constructor(o){this._io=io(o)}get id(){return this._io.id}on(...o){this._io.on(...o)}emit(...o){this._io.emit(...o)}};export{c as a,u as b};
//# sourceMappingURL=chunk-IPCKBDIG.js.map
