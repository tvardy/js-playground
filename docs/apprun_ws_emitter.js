import{a as i}from"./chunk-4X7FNVIB.js";import{a as n}from"./chunk-5LUXHWR4.js";import{a as s}from"./chunk-ESA2JQH7.js";import{e as o}from"./chunk-DXN6V6KF.js";o.debug("AppRun Client script started!");var a=({status:t,sending:e})=>app.h(app.Fragment,null,app.h("h1",null,"Emitter Works!"),app.h("h2",null,"Status: ",t),app.h("button",{onclick:"app.run('toggle')"},e?"Pause":"Play"),app.h("p",null,"See browser console if you want to trace the data being sent")),u={async init(t){try{return r.ws=await s(n.URL),o.debug("WS connected"),r.run("wait"),{...t,status:"connected"}}catch(e){return o.error("WS error:",e),{...t,status:"error"}}},wait(t){if(t.sending){let e=i(n.NUMBERS.time.min,n.NUMBERS.time.max);setTimeout(()=>r.run("sendValue"),e)}return t},sendValue(t){let e=i(n.NUMBERS.values.min,n.NUMBERS.values.max);return o.info("new value:",e),r.ws.emit("data",e),r.run("wait"),t},toggle(t){let e={...t,sending:!t.sending};return e.sending&&setTimeout(()=>r.run("wait"),0),e}},r=app.start(n.APP_ROOT,{status:"connecting",sending:!0},a,u);r.run("init");
//# sourceMappingURL=apprun_ws_emitter.js.map
