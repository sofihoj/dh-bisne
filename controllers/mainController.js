const controller = {
    index: (req, res) => {
        res.render('index')
    },
    signup: (req, res) => {
        res.render('users/signup')
    },
    login: (req, res) => {
        res.render('users/login')
    },
    newProducts: (req, res) => {
        res.render('newProducts')
    },
    productCart: (req, res) => {
        res.render('productCart')
    },
    productDetail: (req, res) => {
        res.render('productDetail')
    }
}

module.exports = controller