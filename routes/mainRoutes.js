const express = require('express');
const router = express.Router();

const path = require('path');
const multer = require('multer');

const {body} = require('express-validator');

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, './public/img/avatar');
	},
	filename: (req, file, cb) => {
		let fileName = `${Date.now()}_img${path.extname(file.originalname)}`;
		cb(null, fileName);
	}
})

const uploadFile = multer({ storage });

const mainController = require('../controllers/mainController');


const validations = [
    body('productName').notEmpty().withMessage('Tienes que escribir el nombre del producto'),
    body('email')
		.notEmpty().withMessage('Tienes que escribir un correo electrónico').bail()
		.isEmail().withMessage('Debes escribir un formato de correo válido'),
    body('password').notEmpty().withMessage('Tienes que escribir una contraseña'),
    body('descripcion').notEmpty().withMessage('Tienes que escribir una descripción del producto'),
    body('precio').notEmpty().withMessage('Tienes que escribir el precio del producto'),
	body('category').notEmpty().withMessage('Tienes que elegir una categoria'),
	body('avatar').custom((value, { req }) => {
		let file = req.file;
		let acceptedExtensions = ['.jpg', '.png', '.gif'];
		
		if (!file) {
			throw new Error('Tienes que subir una imagen');
		} else {
			let fileExtension = path.extname(file.originalname);
			if (!acceptedExtensions.includes(fileExtension)) {
				throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
			}
		}

		return true;
	})
    
]



router.get('/', mainController.index);
router.get('/index', mainController.index);
router.get('/login', mainController.login);
router.get('/signup', mainController.signup);
router.get('/newProducts', mainController.newProducts);
router.get('/productCart', mainController.productCart);
router.get('/productDetail', mainController.productDetail);
router.get('/categories', mainController.categories);

// Procesar Formulario New Products 

router.post('/newProducts', uploadFile.single('avatar'), validations, mainController.processNewProducts);

// Procesar Formulario Login
router.post('/login', validations, mainController.processLogin);

module.exports = router;