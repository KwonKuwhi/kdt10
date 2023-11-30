const express = require ('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/',(req, res)=>{
    res.render('index3');
})

// 실습
const userId = 'apple';
const userPw = '1234';

// axios

app.get('/axios', (req, res)=>{
    console.log(req.query);
    res.send(req.query);
    //의도적으로 에러 발생
    // res.status(400).send('error msg!')
})

app.post('/axios2', (req, res) => {
    console.log(req.body); // { userId: 'banana', userPw: '1234' }

    // userId, userPw 라는 변수 값과 클라이언트에서 넘겨받은 값이 일치하는지 검사
    if (userId === req.body.userId && userPw === req.body.userPw) {
        res.send({ userInfo: req.body, isSuccess: true });
    } else {
        res.send({ isSuccess: false });
    }
    // 결과 값을 반환
})
    
    // userId, userPw 라는 변수 값과 클라이언트에서 넘겨받은 값이 일치하는지 검사
    // 결과 값을 반환

    





app.listen(PORT,()=>{
    console.log('sever is openging',PORT);
})