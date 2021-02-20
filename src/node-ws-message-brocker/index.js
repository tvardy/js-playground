const app = require('polka')()
const cors = require('cors')
const http = require('http').Server(app)
const io = require('pocket.io')(http)

app.use(cors())

app.get('/', (_, res) => {
  res.send('<h1>It works!</h1>')
})

io.on('connection', (socket) => {
  socket.on('data', (data) => {
    // socket.broadcast.emit('data', data) // not working due to a bug in Pocket.io
    io.emit('data', data)
  })
})

http.listen(process.env.PORT || 8080, () => {
  console.log('server listening...')
})
