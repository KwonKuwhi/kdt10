const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const PORT = 8000;
const SECRET = 'dkwlsWKwlqrkrrhtlvek';


const userInfo = { id: 'banana', pw:'1234',name:'고길동', age:32};

app.set('view engine','ejs');
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get('/',(req,res)=>{
    res.render('index');
})

app.get('/login',(req,res)=>{
    res.render('login');
})

// 로그인 요청
app.post('/login',(req,res)=>{
    try{
        const { id, pw }=req.body;
        const { id:realId, pw:realPw } =userInfo;

        if(id === realId && pw === realPw){
            // 토큰 생성
            // jwt.sign(payload, secret Or PrivateKey, [options, callback])
            const token = jwt.sign({id: id}, SECRET);
            res.send({isLogin: true, token});
        } else {
            res.send({isLogin: false, msg:'로그인 정보가 올바르지 않습니다!'});
        }
    }catch(err){
        console.errors(err);
    }
})


// 토큰 검증 요청
app.post('/token',(req,res)=>{
    console.log('token > ', req.headers.authorization);
    if(req.headers.authorization){
        // Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImJhbmFuYSIsImlhdCI6MTcwMjA5MjIyMn0.SFQbqKqXR8uiQmVQCJWjccQ5KYoQVo5OPDCLd6DbrJE
        cization.split(' ');
        console.log(authorization); // ['Bearer',onst authorization = req.headers.author'token_string']
        const token = authorization[1];
        try{
        // 토큰 검증 : jwt.verify(token, secretkey)
        const result = jwt.verify(token, SECRET);
        console.log('result > ',result);

        if(result.id === userInfo.id){
            res.send({isVerify: true, name: userInfo.name});
        }else{
            res.send({isVerify: false, msg:'잘못된 접근입니다!'});
        }
    }catch(err){
        console.log('verify err >',err);
        res.send({isVerify: false, msg:'인증된 회원이 아닙니다!'});
    }
    } else{
        res.redirect('/login');
    }
})

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
})

