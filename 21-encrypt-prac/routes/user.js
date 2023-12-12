const express = require('express');
const controller = require('../controller/Cuser');
const router = express.Router();


//GET / => localhost:PORT/user
router.get('/',controller.main);

router.get('/signin', controller.signin);

router.get('/signup', controller.signup);

router.post('/signup',controller.user_register);

router.post('/signin', controller.check_user);

router.post('/profile',controller.post_profile);

router.patch('/profile/edit',controller.edit_profile);

router.delete('/profile/delete', controller.delete_profile);


module.exports = router;