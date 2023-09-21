module.exports = (sequelize, dataTypes) => {
    let alias = "Detalle_compras";

    let config = {
        tableName: "detalle_compras",
        timestamps: false
    };

    let cols = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        cantidad: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        subtotal:{
            type: dataTypes.FLOAT(10, 2),
            allowNull: false
        },
        compra_id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            foreignKey: true,
            allowNull: true
        },
        producto_id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            foreignKey: true,
            allowNull: true
        }
    };

    const Detalle_compras = sequelize.define(alias, cols, config);

    Detalle_compras.associate = models => {
        Detalle_compras.belongsTo(models.Compras, {
            as: 'compras',
            foreignKey: 'compra_id'
        });
        Detalle_compras.hasMany(models.Producto, {
            as: 'productos',
            foreignKey: 'productos_id'
        });
    };

    return Detalle_compras;
}