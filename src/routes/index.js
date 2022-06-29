const express = require('express');
const { loginMiddleware, userMiddleware, tokenValidation } = require('../middlewares/index');
const { loginPost } = require('../controllers/loginController.js');
const { userPost, userGet, userIdGet } = require('../controllers/userController.js');

const router = express.Router();

router.post('/login', loginMiddleware, loginPost);
router.post('/user', userMiddleware, userPost);
router.get('/user', tokenValidation, userGet);
router.get('/user/:id', tokenValidation, userIdGet);

module.exports = router;