const express = require('express');
const { loginMiddleware, userMiddleware } = require('../middlewares/index');
const { loginPost } = require('../controllers/loginController.js');
const { userPost } = require('../controllers/userController.js');

const router = express.Router();

router.post('/login', loginMiddleware, loginPost);
router.post('/user', userMiddleware, userPost);
/* router.get('/products/:id', getIdFunction);
router.put('/products/:id', productsMiddleware, putFunction);
router.delete('/products/:id', deleteFunction); */ 

module.exports = router;