const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const PORT = 8000;


app.set('view engine','ejs');
app.set('views','./views');
app.use('/static', express.static(__dirname + '/static'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// TODO: cookie parser 미들웨어 등록
app.use(cookieParser());

const cookieConfig = {
  httpOnly : true,
  maxAge:  30* 1000, // 30초
  //  24 * 60 * 60 //24시간 
  signed: true,   // 암호화 쿠키

}

app.get('/', (req, res) => {

  console.log('req.cookies.popup >> ', req.cookies.popup);

  // TODO: index.ejs render할 때 두 번째 인자로 popup key 로 요청의 쿠키값 보내기
  res.render('index _release', {popup: req.cookies.popup});
});

app.post('/setcookie', (req, res) => {
  // TODO: 쿠키 생성
  // 쿠키 이름: 'popup', 쿠키 값: 'hide'

  res.cookie('popup','hide',cookieConfig);
  res.send('쿠키 설정 성공!!');
  console.log('req.cookies.popup >> ', req.cookies.popup);
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

// 힌트
// req 객체
// req.cookies: cookie-parser 미들웨어가 만드는 요청의 쿠키를 해석한 객체
// req.singedCookies: 서명된 쿠키들은 req.cookies 대신 여기에 담겨 있음

// res 객체
// res.cookie(키, 값, 옵션): 쿠키를 설정하는 메서드
// res.clearCookie(키 값, 옵션): 쿠키를 제거하는 메서드
