const {Server} = require('socket.io');

const io = new Server('5000',{
    cors:{
        origin : "http://localhost:3000",
    },
});

io.sockets.on('connection', (socket)=>{

    //메세지 전송 시
    socket.on('msg',(data) => {
        console.log(data)
        // io.sockets.emit('sMessage', data)
        socket.broadcast.emit('sMessage',data)
    })

    //클라이언트에서 login 시 아래로 접근
    socket.on('login', (data) => {
        console.log('hihi')
        io.sockets.emit('sLogin', data)
    })
})