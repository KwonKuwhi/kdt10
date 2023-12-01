const Info = require('../model/Login');


exports.on=(req,res)=>{
    res.render('login');
}

exports.login = (req, res) => {
            console.log(req.body); // { userId: 'banana', userPw: '1234' }
            console.log(Info.loginInfo());

            

            // userId, userPw 라는 변수 값과 클라이언트에서 넘겨받은 값이 일치하는지 검사
            if (Info.loginInfo().id === req.body.userId && Info.loginInfo().pw === req.body.userPw) {
                res.send({ userInfo: req.body, isSuccess: true });
            } else {
                res.send({ isSuccess: false });
            }
            // 결과 값을 반환
        }
