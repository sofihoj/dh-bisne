const db = require('../database/models');

const controller = {
    index: (req, res) => {
        res.render('index')
    },
    about: (req, res) => {
        res.render('about')
    },
    contact: (req, res) => {
        res.render('contact')
    },
    newProducts: (req, res) => {
        res.render('newProducts')
    },
    productCart: (req, res) => {
        res.render('productCart')
    },
    productDetail: (req, res) => {
        const categoriaSeleccionada = req.params.category;
        const productoSeleccionado = req.params.product;

        db.Categoria.findOne({
            where: {
                categoria: formatearGuion(categoriaSeleccionada)
            }
        })
            .then(categoria => {
                if (categoria) {
                    db.Producto.findOne({
                        where: {
                            nombre: formatearGuion(productoSeleccionado)
                        },
                        include: ['categoria', 'tamanio']
                    })
                        .then(producto => {
                            if (producto) {
                                res.render('productDetail', { producto, categoria: producto.categoria.categoria, formatearGuion, formatearEspacio });
                            } else {
                                res.send(`Producto  ${req.params.product} inexistente`);
                            }
                        });
                } else {
                    res.send(`Categoría ${req.params.category} inexistente`);
                }
            })
    },
    categories: (req, res) => {
        const categoriaSeleccionada = req.params.categoria;

        db.Categoria.findOne({
            where: {
                categoria: formatearGuion(categoriaSeleccionada),
            },
            include: ['productos'],
        })
            .then(categoria => {
                if (categoria) {
                    res.render('categories', { producto: categoria.productos, categoria, categoriaSeleccionada, formatearGuion, formatearEspacio });
                } else {
                    res.send('Categoría inválida');
                }
            })
            .catch(error => {
                console.error(error);
                res.status(500).send('Error interno del servidor');
            });
    }
}

function formatear(categoria) {
    return categoria
        .replace(/([a-z])([A-Z])/g, '$1 $2')
        .replace(/\b\w/g, c => c.toUpperCase());
}

function formatearEspacio(categoryName) {
    return categoryName.replace(' ', '-').toLowerCase();
}

function formatearGuion(categoryName) {
    return categoryName.replace('-', ' ').toLowerCase();
}


module.exports = controller