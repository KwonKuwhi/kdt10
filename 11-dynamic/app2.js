const express = require ('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/',(req, res)=>{
    res.render('index2');
})

// axious

app.get('/axios', (req, res)=>{
    console.log(req.query);
    res.send(req.query);
    //의도적으로 에러 발생
    // res.status(400).send('error msg!')
})



// 실습
const userId = '홍길동';
const userPw = '1234';

app.listen(PORT,()=>{
    console.log('sever is openging',PORT);
})