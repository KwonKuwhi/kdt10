const models = require('../models/index');
const User = models.User;

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
    console.log('controller req.body > ', req.body)// 터미널에서 확인
    const { id, pw, name } = req.body;


    User.create({
        id: id,
        pw: pw,
        name: name
    }).then((result) => {
        console.log(result);
        res.send(result);
    })


}

exports.check_user = (req, res) => {

    User.findOne({
        where: { id: req.body.id }
    }).then((result) => {
        console.log('check_user > ', result);
        if (result.length == 0) {
            res.send({ loginResult: 'idError' })
        } else if (result.pw != req.body.pw) {
            res.send({ loginResult: 'pwError' });
        } else {
            res.send({ loginResult: 'success', userInfo: result })
        }
//  없으면 null 값
    })
}

exports.post_profile = (req, res) => {
    console.log(req.body);

    User.findOne({
        where: { id: req.body.userId }
    }).then((result) => {
        console.log(result);
        res.render('profile', { info: result })
    })

}

// 회원정보 수정 요청
exports.edit_profile = (req, res) => {
    console.log(req.body);
    User.update({
        id: req.body.id,
        pw: req.body.pw,
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
    console.log(req.body);


    User.destroy({
        where: { id: req.body.id }
    }).then((result) => {
        console.log('destroy >', result);
        res.send('삭제 성공');
    })
}