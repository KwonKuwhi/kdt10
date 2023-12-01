const express = require('express');
const router = express.Router();

const controller=require('../controller/Clogin');


router.get('/',controller.on);
router.post('/axios2',controller.login);

module.exports=router;