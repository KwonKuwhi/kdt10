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

// 사용자 아이디 모음 객체
const userObjs = {};

io.on('connection',(socket)=>{
    console.log('서버 연결 완료 > ',socket.id);

    // [실습3] 채팅창 입장 안내 문구
    // emit() from server
    // - socket.emit(event_name, data): 해당 클라이언트에게만 이벤트, 데이터를 전송
    // - io.emit(event_name, data): 서버에 접속된 모든 클라이언트 전송
    // - io.to(소켓 아이디).emit(event_name, data): 소켓 아이디에 해당하는 클라이언트에게만 전송
    
    // 전체 클라이언트에게 입장 안내
    // io.emit(`notice`,` ${socket.id}님이 입장하셨습니다.`)

    // [실습 4] 채팅창 메세지 전송
    // 1. (클라이언트) 인풋 창에 메세지를 입력, 전송 버튼 클릭하면 서버에다가 emit 내용을 보내기
    // 2. (서버) send 이벤트를 받아서 모두에게 새로운 이벤트(newMessage)로 아이디, 메세지를 보내기
    // 3. (클라이언트) 새로운 이벤트(newMessage)를 받아서, 화면에 내가 보낸 메세지인지 아닌지를 판별해서, class명 지정해서 화면에 보여주기


    // socket.on('send',(msg)=>{
    //     io.emit('sendMsg',`${socket.id}:${msg}`)
    // })
    socket.on('send',(data)=>{
        console.log('send 이벤트로 받은 data > ',data);
        // send 이벤트로 받은 data >  { dm: 'all', id: '6PmQ0qi3yEo_f_1MAAAD', nickname: 'dd', msg: '23' }

        // [실습5] DM인지 아닌지구분
        // dm : io.to(소켓아이디).emit() -> 소켓 아이디에 해당하는 클라이언트에게만 전송

        if(data.dm === 'all'){
            // '전체' 발송
        io.emit('newMessage', { nickname: data.nickname, id: data.id, msg: data.msg });
        } else{
            // "DM" 발송
            const dmSocketId = data.dm; //닉네임
            const sendData = {
                nickname: data.nickname,
                id: data.id,
                msg: data.msg,
                dm: '(DM)'
            }
            // dm을 받는사람한테 메세지 갔음
            io.to(dmSocketId).emit('newMessage',sendData)
            // dm을 보낸 사람한테 자기자신의 메세지를 띄워줘야함
            socket.emit('newMessage', sendData);
        }
    })

    // [실습 5] DM Step1
    socket.on('setUserList',(data)=>{
        console.log(`유저 입장: `,data.nickname);
        // 입장 전체 공지
        io.emit(`notice`,` ${data.nickname}님이 입장하셨습니다.`);

        // 전체 사용자 아이디 모음 객체 전달
        // 객체에 새로운 유저 추가
        // {data.id : data.id}
        userObjs[data.nickname] = data.id;
        socket.emit('entrySuccess', socket.id); //현재 입장한 사람에게 입장 완료 
        io.emit('updateUsers',userObjs); //전체 사용자에게 사용자 업데이트
    })
})

server.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`)
})

