//  유저에 대한 처리
const User = require('../model/User1');


exports.user = (req,res)=>{
    res.render('user',{ userInfo: User.userInfos() })
};

