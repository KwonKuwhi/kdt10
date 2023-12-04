const User = require('../model/User');

exports.main = (req,res) => {
    res.render('index');
}

exports.signin = (req,res) =>{
    res.render('signin');
}

exports.signup = (req,res) =>{
    res.render('signup');
}
exports.profile = (req,res) =>{
    res.render('profile');
}

exports.user_register = (req,res)=>{
    console.log('controller req.body > ', req.body)// 터미널에서 확인
    User.userRegister(req.body, ()=>{
        res.send(req.body);
    })
    
}

exports.check_user = (req,res)=>{

    User.checkUser(req.body, (loginInfo)=>{
        console.log('컨트롤러에서 login req.body >',req.body);
        console.log('loginInfo', loginInfo);
        if(loginInfo.length==0){
            res.send({loginResult:'idError'})
        }else if(loginInfo[0].pw!=req.body.pw){
            res.send({loginResult:'pwError'});
        }else{
            res.send({loginResult:'success', userInfo: req.body});
        }
    })
}