import{b as l,c as n}from"./chunk-O6JHPXQZ.js";import{a as p,b as c}from"./chunk-R2UZSCZ6.js";import"./chunk-MOOY4HSH.js";import{a as i}from"./chunk-M5O3SXJ6.js";import{c as g,d}from"./chunk-LUJBESE5.js";import{a,b as u,h as m}from"./chunk-BZFIDKTD.js";var x=n`
  <form class="box wide login" onSubmit=${e=>app.run("login",e)}>
    <input name="user" placeholder="Your nickname" />
  </form>
`,f=x;var w=(e,t)=>n`
  <div
    class="message"
    data-self=${t.user.id===e}
    data-user=${t.user.name}
  >
    ${t.msg}
  </div>
`,h=w;var E=(e,t,r)=>n`
  <section class="box wide chat-box" data-status=${e}>
    ${r.map(o=>h(t.id,o))}
  </section>
  <form class="box wide message" onSubmit=${o=>app.run("send",o)}>
    <input name="msg" placeholder="message box..." />
  </form>
`,v=E;m.debug("LZ Chat AppRun started!");app.render=l;var b=document.getElementById("apprun"),$={login(e,t){t.preventDefault();let r=t.target.elements.user.value;s.run("connecting"),i(p.URL).then(o=>{s.sock=o,s.sock.on("message",L=>{s.run("message",d(L))}),s.run("connected",{id:o.id,name:r})}).catch(o=>{m.error("WS error:",o),s.run("error")})},connecting(e){return u(a({},e),{status:"connecting"})},connected(e,t){return m.debug("AppRun connected:",t),u(a({},e),{status:"connected",user:t})},error(){return u(a({},c),{status:"error"})},send(e,t){t.preventDefault();let r=t.target.elements.msg.value,o={user:e.user,msg:r};t.target.elements.msg.value="",m.debug("AppRun send:",r),s.sock.emit("message",g(o)),s.run("message",o)},message(e,t){return m.debug("AppRun message:",t.user,t.msg),s.run("align"),u(a({},e),{messages:e.messages.concat(t)})},align(){let e=b.querySelector(".chat-box");setTimeout(()=>{e.scrollTop<e.scrollHeight&&(e.scrollTop=e.scrollHeight)},0)}},S=e=>n`${e.status==="login"?f:v(e.status,e.user,e.messages)}`,s=app.start(b,c,S,$);
//# sourceMappingURL=lz-chat_apprun.js.map
