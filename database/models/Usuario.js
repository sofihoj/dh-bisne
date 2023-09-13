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
            type: dataTypes.VARCHAR,
            allowNull: false
        },
        ciudad:{
            type: dataTypes.VARCHAR,
            allowNull: false
        },
        tipo_usuario:{
            type: dataTypes.INTEGER,
            primaryKey: false,
            foreignKey: true,
            autoIncrement: true,            
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
        Usuario.belongsTo(models.TipoUsuario, {
            as: "tipo_usuarios",
            foreignKey: "tipo_usuarios_id"
        });
        
    };

    return Usuario;
}
