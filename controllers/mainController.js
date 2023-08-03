const { validationResult } = require('express-validator');

const controller = {

    newProducts: (req, res) => {
		return res.render('newProducts');
	},
	processNewProducts: (req, res) => {
		const resultValidation = validationResult(req);
		
		if (resultValidation.errors.length > 0) {
			return res.render('newProducts', {
				errors: resultValidation.mapped(),
				oldData: req.body
			});
		}

		return res.send('Ok, las validaciones se pasaron y no tienes errores');
	},

    index: (req, res) => {
        res.render('index')
    },
    signup: (req, res) => {
        res.render('users/signup')
    },
    
        
    login: (req, res) => {
      return res.render('login')
    }, 
    processLogin: (req,res) => {
		const resultValidation = validationResult(req);
		
		if (resultValidation.errors.length > 0) {
			return res.render('login', {
				errors: resultValidation.mapped(),
				oldData: req.body
			});
		}
		return res.send('Ok, las validaciones se pasaron y no tienes errores');
	},



    productCart: (req, res) => {
        res.render('productCart')
    },
    productDetail: (req, res) => {
        res.render('productDetail')
    },
    categories: (req, res) => {
        res.render('categories')
    }
}

module.exports = controller