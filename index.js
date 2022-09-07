var Express = require("express");
var Socket = require("socket.io");

const app = Express();

const server = app.listen(8000, () => {
    console.log("server running port is 8000");
})

app.use(Express.static('public'))

var io = Socket(server);

io.on('connection', socket => {
    // console.log(Socket.id);
    socket.on("chat", data => {
        console.log(data);
        io.sockets.emit("chat", data)
    })

    socket.on('typing', function (data) {
        socket.broadcast.emit('typing', data)
    })
})