const express = require('express');
const app = express();
const PORT = 8000;

// 1) view engine
// Express 애플리케이션이 EJS를 뷰 엔진으로 사용하도록 설정하는 역할을 합니다.
// 라우팅 및 렌더링할 때 EJS 템플릿 엔진을 활용하여 동적인 웹 페이지를 생성합니다.
// 설정된 뷰 엔진에 따라 렌더링 시에 특정 파일 확장자를 생략할 수 있습니다.
// 즉, res.render('index');와 같이 작성하면 Express 는 'index.ejs'파일을 찾아서 렌더링합니다.
app.set('view engine', 'ejs');

// 2) views
// 뷰 템플릿 파일을 찾을 떄 사용할 디렉토리 지정하는 코드
// defualt값은 views 라는 폴더명으로 사용한다.
// 첫번쨰 파라미터는 고정값
app.set('/views', 'views');//수정(폴더명, 경로)=>수정하지 않아도 작동하는 이유는?

// 미들웨어 등록

// req.body 객체를 해석할 수 있도록 body-parser 미들웨어 등록
app.use(express.urlencoded({extended: true})); //post 요청으로 들어오는 모든 형식의 데이터를 파싱

app.use(express.json()); // json 형식으로 데이터를 주고받음

app.get('/',(req, res) =>{
    //views 폴더 내부에 index라는 ejs 파일을 보여줌
    res.render('index');
})

// GET '/login' 요청이 들어오면 임의의 메세지를 전송
// get 방식은 클라이언트에서 보낸 데이터가 req.query에 저장
app.get('/login', (req, res)=>{
    console.log(req.query);
    //res.send('get 요청 성공!');

    res.render('result', {title: 'Get 요청', userinfo: req.query})
})

app.get('/register',(req, res)=>{
    console.log(req.query);
    res.render('prac_result',{title: 'GET으로 받은 정보', info:req.query})
})


//POST '/login'요청이 들어오면 임의의 메세지 전송
//post 방식은 클라이언트에서 보낸 데이터가 req.body에 저장
app.post('/login', (req, res)=>{
    console.log(req.body)
    //res.send('post 요청 성공!');
    res.render('result', {title: 'POST 요청', userinfo: req.body})
})

app.post('/js-form-check', (req, res) => {
    console.log(req.body);

    res.send('js validation 성공');
})

app.post('/register',(req, res)=>{
    res.render('prac2_result',{title: 'POST로 받은 정보', info: req.body})
})

app.listen(PORT, function(){
    console.log(`${PORT} is opening!`);
})