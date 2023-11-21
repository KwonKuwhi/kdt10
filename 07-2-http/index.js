const http = require('http');
const fs = require('fs'); //파일 관련 내장 모듈
const server = http.createServer(function(req, res){
    // req: request 객체(클라이언트에서 서버로 들어온 요청)
    // res: response 객체(서버에서 클라이언트로 보내는 응답)

    // 응답 head, 본문, end를 지정
    // res.writeHead(200, {'content-type': 'text/html; charset-utf-8'})//응답 헤더
    // res.write('<h1>Hello, Node.js!</h1>'); //응답 본문
    // res.end('<p>My first node server!</p>'); //응답 종료
    // 위의 코드는 localhost:8000 접속 시 일어남
    const errorFile = fs.readFileSync('./404.html');
    //예외 처리 -> try - catch문
    try{
    const data = fs.readFileSync('./inde.html');
    res.writeHead(200, {'content-type': 'text/html; charset-utf-8'});
    res.write(data);
    res.end();
    } catch(error){
        res.write(errorFile);
        // 실습: 404.html을 만들어서 해당 html파일을 응답으로 보내도록 코드 작성!
    }
});

const PORT = 8000;

//request 이벤트: 클라이언트 요청
server.on('request', function(req, res){
    console.log('request 이벤트 발생!', req.url);
})

//connection 이벤트: 클라이언트가 접속(연결됐을 때)했을 때 발생(클라이언트와 서버가 연결됐을 때)

server.on('connection', function(req, res){
    console.log('connection 이벤트 발생!');
})

server.listen(PORT, function(){
    console.log(`server listening on ${PORT}`)
})

//10초 후 서버 종료
// setTimeout(function(){
//     console.log('10초가 지나서 서버 종료');
//     server.close(); //서버 종료 메서드
// },10000)