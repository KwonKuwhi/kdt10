const express = require('express');
const controller = require('../controller/Cvisitor');
const router = express.Router();

// 기본주소: localhost:PORT/

// GET / => localhost:PORT/
router.get('/', controller.main);

// GET /visitor => localhost:PORT/visitor
router.get('/visitor', controller.get_visitor);//query

// ver2 
// 주의) params 사용시 라우터 정의 순서에 주의해야함 
router.get('/visitor/:id', controller.get_visitor2); //params

// router.get('/visitor/:test', controller.get_visitor2);
//-> params보다 위에

// GET /visitors => localhost:PORT/visitors
router.get('/visitors', controller.getVisitors);


//POST /visitor
router.post('/visitor',
controller.post_visitor);

// PATCH /visitor - 하나 수정
router.patch('/visitor',controller.patch_visitor);

// DELETE /visitor - 하나 삭제
router.delete('/visitor', controller.delete_visitor);

module.exports = router;