const express = require('express');
const { loginMiddleware } = require('../middlewares/index');
const { loginPost } = require('../controllers/loginController.js');

const router = express.Router();

router.post('/login', loginMiddleware, loginPost);
/* router.get('/products', getFunction);
router.get('/products/:id', getIdFunction);
router.put('/products/:id', productsMiddleware, putFunction);
router.delete('/products/:id', deleteFunction); */

module.exports = router;