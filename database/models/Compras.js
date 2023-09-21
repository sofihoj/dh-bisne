module.exports = (sequelize, dataTypes) => {
    let alias = "Compras";

    let config = {
        tableName: "compras",
        timestamps: false
    };

    let cols = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        fecha_compra: {
            type: dataTypes.DATE,
            allowNull: false
        },
        precio_total:{
            type: dataTypes.FLOAT(10, 2),
            allowNull: false
        },
        usuario_id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            foreignKey: true,
            allowNull: true
        }
    };

    const Compras = sequelize.define(alias, cols, config);

    Compras.associate = models => {
        Compras.belongsTo(models.Usuario, {
            as: 'usuarios',
            foreignKey: 'usuario_id'
        });
        Compras.hasMany(models.Detalle_compras, {
            as: 'detalle_compras',
            foreignKey: 'detalle_compras_id'
        });
    };

    return Compras;
}