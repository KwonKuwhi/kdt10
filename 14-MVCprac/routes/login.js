const express = require('express');
const router = express.Router();

const controller=require('../controller/Clogin');

router.post('/axios2',controller.login);

module.exports=router;