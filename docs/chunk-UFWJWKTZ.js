var i = { user: {}, messages: [] },
  a = i
var r = { URL: 'wss://node-ws-message-broker.herokuapp.com/' }
function w() {
  return new Promise((s, o) => {
    let t = new e(r.URL)
    t.on('connect', () => s(t)), t.on('error', (n) => o(n))
  })
}
var e = class {
  constructor(o) {
    this._io = io(o)
  }
  get id() {
    return this._io.id
  }
  on(...o) {
    this._io.on(...o)
  }
  emit(...o) {
    this._io.emit(...o)
  }
}
export { a, w as b }
//# sourceMappingURL=chunk-UFWJWKTZ.js.map
