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

exports.user_register = (req,res)=>{
    console.log('controller req.body > ', req.body)// 터미널에서 확인
    User.userRegister(req.body, (result)=>{
        //result=> rows
        console.log(result);
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

exports.post_profile=(req,res)=>{
    console.log(req.body);

    User.postProfile(req.body.userId,(userInfo)=>{
        console.log('Cuser.js post_profile>',userInfo);
        res.render('profile',{info:userInfo[0]});
    });
    
}

// 회원정보 수정 요청
exports.edit_profile=(req,res)=>{
    console.log(req.body);
    User.edit_profile(req.body,()=>{

    })
}
// 회원탈퇴 요청
exports.delete_profile = (req,res) => {
    console.log(req.body);

    User.delete_profile(req.body.id,(result)=>{
        res.send({deletedId: req.body.id});
    })
}