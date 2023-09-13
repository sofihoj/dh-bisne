const { where } = require("sequelize");
let db= require("../database/models");


let usuariosController= {
    crear: function(req, res) {
        db.tipoUsuario.findAll()
        }}

module.exports = usuariosController;

//Revisar!! 