const app = require('express')();
const server = app.listen(3000, () => console.log("listening on port 3000"))
const { Server } = require("socket.io");
const io = new Server(server);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  socket.on('Go To Server', (msg) => {
    io.emit('chat message', msg);
  });
});

