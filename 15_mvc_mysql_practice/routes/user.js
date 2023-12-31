const express = require('express');
const controller = require('../controller/Cuser');
const router = express.Router();


//GET / => localhost:PORT/user
router.get('/',controller.main);

//로그인 페이지
router.get('/signin', controller.signin);
//회원가입 페이지
router.get('/signup', controller.signup);
// 회원가입 요청
router.post('/signup',controller.user_register);
// 로그인 요청
router.post('/signin', controller.check_user);
// 회원정보 수정 페이지 
router.post('/profile',controller.post_profile);
// 회원정보 수정 요청
router.patch('/profile/edit',controller.edit_profile);
// 회원 탈퇴 요청
router.delete('/profile/delete', controller.delete_profile);


module.exports = router;