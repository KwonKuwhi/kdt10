// (임시) DB에서 데이터를 받았다고 가정
const express = require('express');
const router = express.Router();
// controller 파일
const controller = require('../controller/Cuser');

// localhost:PORT/user => 기본 경로



// Controller 연결
// 경로를 컨트롤러와 연결지어 사용 가능
// GET /user

router.get('/', controller.user);



// module.exports를 통해서 router를 등록해줘야 다른 모듈에서 사용 가능함
module.exports = router;
