const express = require('express');
const router = express.Router();

const mainController = require('../controllers/mainController');

router.get('/', mainController.index);
router.get('/index', mainController.index);
router.get('/login', mainController.login);
router.get('/signup', mainController.signup);
router.get('/productCart', mainController.productCart);
router.get('/productDetail', mainController.productDetail);

module.exports = router;