const express = require('express');
const { loginMiddleware, userMiddleware, tokenValidation } = require('../middlewares/index');
const { loginPost } = require('../controllers/loginController.js');
const { userPost, userGet, userIdGet } = require('../controllers/userController.js');
const { categorieGet, categoriePost } = require('../controllers/categorieController.js');
const { postGet, postPost } = require('../controllers/postController.js');

const router = express.Router();

// Rotas Login
router.post('/login', loginMiddleware, loginPost);

// Rotas User
router.post('/user', userMiddleware, userPost);
router.get('/user', tokenValidation, userGet);
router.get('/user/:id', tokenValidation, userIdGet);

// Rotas Categories
router.post('/categories', tokenValidation, categoriePost);
router.get('/categories', tokenValidation, categorieGet);

// Rotas blogPost

router.post('/post', tokenValidation, postPost);
router.get('/post', tokenValidation, postGet);

module.exports = router;