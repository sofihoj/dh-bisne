module.exports = (sequelize, dataTypes) => {

    let alias = "tipoUsuario";
    
    let config= {
        tableName: "tipo_usuarios",
        timestamps: true
    };
    
    let cols= {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        tipo:{
            type: dataTypes.STRING,
            allowNull: false
        }
    };
    
    const tipoUsuario = sequelize.define(alias, cols, config);
    
        tipoUsuario.associate = models => {
            tipoUsuario.hasMany(models.Usuario, {
                as: "usuarios",
                foreignKey: "usuario_id"
            });
            
        };
    
return tipoUsuario;
}
    
    
    