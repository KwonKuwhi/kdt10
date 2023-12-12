const models = require('../models/index');
const User = models.User;

const bcrypt = require('bcrypt');
const saltRounds = 10;

function hashPW(password){
    return bcrypt.hashSync(password,saltRounds)
}
function comparePW(password, hashedPW){
    return bcrypt.compareSync(password, hashedPW);
}


exports.main = (req, res) => {

    res.render('index');
}

exports.signin = (req, res) => {
    res.render('signin');
}

exports.signup = (req, res) => {
    res.render('signup');
}

exports.user_register = (req, res) => {
    const { id, pw, name } = req.body;
    let hashedPW = hashPW(pw);
    User.create({
        id: id,
        pw: hashedPW,
        name: name
    }).then((result) => {
        console.log('result>',result);
        res.send(result);
    })


}

exports.check_user = (req, res) => {
    User.findOne({
        where: { id: req.body.id }
    }).then((result) => {
        console.log('result > ',result);
        if (result== null) {
            res.send({ loginResult: 'idError' })
        }else{
            let checkPw=comparePW(req.body.pw, result.pw)
            console.log('비밀번호 일치여부>',checkPw)
            if (checkPw === false) {
            res.send({ loginResult: 'pwError' });
            } else {
            res.send({ loginResult: 'success', userInfo: result })
            }
        }
    })
}

exports.post_profile = (req, res) => {
    User.findOne({
        where: { id: req.body.userId }
    }).then((result) => {
        console.log(result);
        res.render('profile', { info: result })
    })
}

// 회원정보 수정 요청
exports.edit_profile = (req, res) => {
    User.update({
        id: req.body.id,
        pw: hashPW(req.body.pw),
        name: req.body.name
    },{
        where:{id:req.body.id}
    }).then((result) => {
        console.log('수정',result);
        res.send('수정 완료');

    })
}
// 회원탈퇴 요청
exports.delete_profile = (req, res) => {
    User.destroy({
        where: { id: req.body.id }
    }).then((result) => {
        console.log('destroy >', result);
        res.send('삭제 성공');
    })
}