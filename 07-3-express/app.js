const express = require('express');
const app = express();
const PORT = 8000;

// express에 사용할 템플릿 엔진 종류를 ejs로 등록
app.set('view engine', 'ejs');
// 템플릿 엔진 파일(.ejs)을->클라이언트로 인식, 
//저장할 위치 등록
app.set('views','./views');

// static 미들웨어 등록 (정적 파일 로드 ex. css, js)
// static 이라는 실제 폴더를 public 이름으로 접근하겠다 -> /public 이라는 경로는 실제로는 __dirname~~~ 라고 알려주는 것
app.use('/public', express.static(__dirname + '/static'));


// app.get(경로, 해당 경로로 들어왔을 때 실행할 함수)
// localhost:8000/경로로 접속했을 떄 
app.get('/', function(req, res){
    // res.send(응답 내용)
    // res.send('<h1>Hello kdt</h1>');

    // index라는 파일명을 찾아서 해당 파일 렌더
    // 값을 보낼 때
    res.render("index", {
        btns: ['사과','오렌지','키위'],
        isLogin: true,
        me: {
            name: 'kwon',
            msg: '반갑습니다~'
        }
    });
})

// /login 경로로 접속했을 때
app.get('/login',function(req,res){
    res.render("login");
})

// /register 경로로 접속했을 때
app.get('/register',function(req, res){
    res.render("register");
})

app.listen(PORT,function(){
    console.log(`server listening on ${PORT}`);
})