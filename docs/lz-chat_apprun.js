import{b as u,c as s}from"./chunk-A6OLRRAH.js";import{a as c,b as p}from"./chunk-IPCKBDIG.js";import"./chunk-MOOY4HSH.js";import{c as i,d as g}from"./chunk-JDYNLKZY.js";import{a,b as l,h as m}from"./chunk-Z3EDBJV3.js";var x=s`
  <form class="box wide login" onSubmit=${e=>app.run("login",e)}>
    <input name="user" placeholder="Your nickname" />
  </form>
`,d=x;var L=(e,o)=>s`
  <div
    class="message"
    data-self=${o.user.id===e}
    data-user=${o.user.name}
  >
    ${o.msg}
  </div>
`,f=L;var E=(e,o)=>s`
  <section class="box wide chat-box">
    ${o.map(t=>f(e.id,t))}
  </section>
  <form class="box wide message" onSubmit=${t=>app.run("send",t)}>
    <input name="msg" placeholder="message box..." />
  </form>
`,h=E;m.debug("LZ Chat AppRun started!");app.render=u;var v=document.getElementById("apprun"),w={login(e,o){o.preventDefault();let t=o.target.elements.user.value;try{p().then(r=>{n.sock=r,n.sock.on("message",b=>{n.run("message",g(b))}),n.run("connected",{id:r.id,name:t})})}catch(r){return m.error("WS error:",r),l(a({},e),{status:"error"})}},connected(e,o){return m.debug("AppRun connected:",o),l(a({},e),{user:o})},send(e,o){o.preventDefault();let t=o.target.elements.msg.value,r={user:e.user,msg:t};o.target.elements.msg.value="",m.debug("AppRun send:",t),n.sock.emit("message",i(r)),n.run("message",r)},message(e,o){return m.debug("AppRun message:",o.user,o.msg),n.run("align"),l(a({},e),{messages:e.messages.concat(o)})},align(){let e=v.querySelector(".chat-box");setTimeout(()=>{e.scrollTop<e.scrollHeight&&(e.scrollTop=e.scrollHeight)},0)}},$=e=>s`${e.user.id?h(e.user,e.messages):d}`,n=app.start(v,c,$,w);
//# sourceMappingURL=lz-chat_apprun.js.map
