module.exports = (sequelize, dataTypes) => {

    let alias = "Usuario";
    
    let config= {
        tableName: "usuarios",
        timestamps: true
    }

    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre:{
            type: dataTypes.STRING,
            allowNull: false
        },
        apellido:{
            type: dataTypes.STRING,
            allowNull: false
        },
        email:{
            type: dataTypes.STRING,
            allowNull: false
        },
        contraseña:{
            type: dataTypes.STRING,
            allowNull: false
        },
        telefono:{
            type: dataTypes.INTEGER,
            allowNull: false
        },
        direccion:{
            type: dataTypes.STRING(200),
            allowNull: false
        },
        ciudad:{
            type: dataTypes.STRING(100),
            allowNull: false
        },
        tipo_usuario_id:{
            type: dataTypes.INTEGER,
            primaryKey: false,
            foreignKey: true,
            allowNull: false
        },
        created_at: {
            type: dataTypes.DATE,
            allowNull: false
        },
        updated_at :{
            type: dataTypes.DATE,
            allowNull: false
        },
        delete_at :{
            type: dataTypes.DATE,
            allowNull: false
        },
    };

    const Usuario = sequelize.define(alias, cols, config);

    Usuario.associate = models => {
        Usuario.belongsTo(models.tipoUsuario, {
            as: "tipo_usuario",
            foreignKey: "tipo_usuarios_id"
        });
    };

    return Usuario;
}
