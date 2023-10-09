const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator')
const db = require('../database/models');

const User = require('../models/User');

const usersController = {
    signup: (req, res) => {
        res.render('users/signup')
    },
    processRegister: (req, res) => {
        const registerValidation = validationResult(req);
        //registerValidation es un objeto literal con una propiedad errors que es un array
        if (registerValidation.errors.length > 0) {
            return res.render('users/signup', {
                errors: registerValidation.mapped(), //mapped() convierte el array errors de registerValidation en un objeto literal donde cada uno tiene las propiedades de origen
                oldData: req.body
            })
        }
        const existingUser = db.Usuario.findOne({ where: { email:req.body.email } });
        if (existingUser) {
            return res.render('users/signup', {
                errors: {
                    email: {
                        msg: 'Este email ya está registrado'
                    }
                },
                oldData: req.body
            })
        }
        db.Usuario.create({
            nombre: req.body.name,
            apellido: req.body.lastName,
            email: req.body.email,
            contraseña: bcrypt.hashSync(password, 10),
            telefono: req.body.phoneNumber,
            direccion: req.body.address,      
            ciudad: req.body.city,
            tipo_usuario_id:2,
        })
		return res.redirect('/users/login');
    },
    login: (req, res) => {
        res.render('users/login');
    },
    processLogin: (req, res) => {
        const loginValidation = validationResult(req);
        if (loginValidation.errors.length > 0) {
            return res.render('users/login', {
                errors: loginValidation.mapped(), //mapped() convierte el array errors de registerValidation en un objeto literal donde cada uno tiene las propiedades de origen
                oldData: req.body
            })
        }
        db.Usuario.findOne({ where: { email:req.body.email } })
        .then(userToLogin => {
            if (!userToLogin) {
                return res.render('users/login', {
                    errors: {
                        email: {
                            msg: 'Usuario no registrado'
                        }
                    },
                });
            }

			let isOkThePassword = bcrypt.compareSync(req.body.password, userToLogin.contraseña);
			if (isOkThePassword) {
				delete userToLogin.password; //para evitar que me traiga la password a la session, por seguridad
				req.session.userLogged = userToLogin; //guardo la sesión del usuario

				if(req.body.remember_user) {
					res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 60 })
				}

				if (userToLogin.tipo_usuario_id === 1) {
                    return res.redirect('/administrar');
                } else {
                    return res.redirect('/users/profile');
                }
			} else {
                return res.render('users/login', {
                    errors: {
                        password: {
                            msg: 'Contraseña incorrecta'
                        }
                    },
                    oldData: req.body
                });
            }
		})
    },
    // profile: (req, res) => {
    //     res.render('users/profile', {
    //         user: req.session.userLogged
    //     });
    // },
    //profile: (req, res) => {
    //    const userCategory = req.session.userLogged.category;
    //    if (userCategory === 'admin') {
    //         return res.redirect('/administrar');
    //    } else if (userCategory === 'user') {
    //        return res.render('users/profile', {
    //            user: req.session.userLogged
    //      });
    //    } else {
    //        return res.status(400).send('Categoría de usuario desconocida');
    //  }
    // },
    
    //Isabel
    profile: (req, res) => {
        const userCategory = req.session.userLogged.tipo_usuario_id;
            if (userCategory === 1) {
                return res.redirect('/administrar');
            } else if (userCategory === 2) {
                return res.render('users/profile', {
                user: req.session.userLogged
            });
            } else {
                return res.status(400).send('Categoría de usuario desconocida');
        }
    },
    edit: (req, res) => {
        res.render('users/editProfile', { user: req.session.userLogged });
    },
    update: async (req, res) => {
        try {
            const nombre = req.params.nombre;
            const usuario = await db.Usuario.findOne({ where: { nombre } }, {include: ['categoria']})
            const tipoUsuario = await db.tipoUsuario.findAll();
            console.log(usuario)
            if (!usuario) {
                return res.status(404).send('Usuario no encontrado');
            }

            return res.render('users/editProfile', {usuario});
        } catch {
            console.error('Error:', error);
            res.status(500).send('Error interno del servidor');
        }
    },
    changePassword: async (req, res) => {
        const validationErrors = validationResult(req);

        if (validationErrors.errors.length > 0) {
            return res.render('users/editProfile', {
                errors: validationErrors.mapped(),
                oldData: req.body,
                user: req.session.userLogged
            });
        }

        const userId = req.session.userLogged.id;
        const { password, newPassword, repeatPassword } = req.body;
        try {
            const user = await db.Usuario.findByPk(userId);
            const isPasswordValid = await bcrypt.compare(password, user.contraseña);

            if (!isPasswordValid) {
                return res.render('users/editProfile', {
                    errors: {
                        password: {
                            msg: 'La contraseña actual es incorrecta'
                        }
                    },
                    oldData: req.body,
                    user: req.session.userLogged
                });
            }
            const hashedPassword = await bcrypt.hash(newPassword, 10);
            await user.update({
                contraseña: hashedPassword
            });
            return res.redirect('/users/profile');
        } catch (error) {
            console.error(error);
            return res.status(500).send('Error interno del servidor');
        }
    },
    delete: function(req,res){
        db.Usuario.destroy({
            where:{
                id:req.params.nombre
            }
        })
        return res.redirect("/profile")
        .catch(error => res.send(error))
    },

    logout: (req, res) => {
        res.clearCookie('userEmail');
        req.session.destroy();
        return res.redirect('/');
    },
  
}

module.exports = usersController;