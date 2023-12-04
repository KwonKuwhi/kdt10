const express = require('express');
const controller = require('../controller/Cuser');
const router = express.Router();


//GET / => localhost:PORT/user
router.get('/',controller.main);

router.get('/signin', controller.signin);

router.get('/signup', controller.signup);

router.get('/profile', controller.profile);

router.post('/signup',controller.user_register);

router.post('/signin', controller.check_user);

module.exports = router;