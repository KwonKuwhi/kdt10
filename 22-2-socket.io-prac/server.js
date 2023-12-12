const express =require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
// express 앱으로 http 서버를 생성
const server = http.createServer(app);
// socket.io 를 http 서버에 뎐결
const io =  socketIO(server);
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('views','./views');

app.use('/static', express.static(__dirname + '/static'));

app.get('/',(req,res)=>{
    res.render('chat');
})


io.on('connection',(socket)=>{
    console.log('서버 연결 완료 > ',socket.id);

    // [실습3] 채팅창 입장 안내 문구
    // emit() from server
    // - socket.emit(event_name, data): 해당 클라이언트에게만 이벤트, 데이터를 전송
    // - io.emit(event_name, data): 서버에 접속된 모든 클라이언트 전송
    // - io.to(소켓 아이디).emit(event_name, data): 소켓 아이디에 해당하는 클라이언트에게만 전송
    
    // 전체 클라이언트에게 입장 안내
    io.emit(`notice`,` ${socket.id}님이 입장하셨습니다.`)
})

server.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`)
})

