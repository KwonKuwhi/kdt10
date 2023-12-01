const express = require('express');
const controller = require('../controller/Cvisitor');
const router = express.Router();

// 기본주소: localhost:PORT/

// GET / => localhost:PORT/
router.get('/', controller.main);

// GET /visitor => localhost:PORT/visitor
router.get('/visitor', controller.getVisitors);


//POST /visitor
router.post('/visitor',
controller.post_visitor);
module.exports = router;