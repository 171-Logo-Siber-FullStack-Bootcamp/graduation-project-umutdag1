const OrderProductsModel = (sequelize, DataTypes) => sequelize.define("Order_Products", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        order_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: "order_id"
        },
        product_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: "product_id"
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        total_price: {
            type: DataTypes.DOUBLE,
            allowNull: false,
            field: "total_price"
        },
        delivered_at: {
            type: 'TIMESTAMP WITHOUT TIME ZONE',
            allowNull: true,
            field: "delivered_at",
            get: function () {
                const deliveredAt = this.getDataValue('delivered_at');
                return new Date(deliveredAt.setMinutes(deliveredAt.getMinutes() - deliveredAt.getTimezoneOffset())).toISOString();
            }
        },
        created_at: {
            type: 'TIMESTAMP WITHOUT TIME ZONE',
            allowNull: false,
            get: function () {
                const createdAt = this.getDataValue('created_at');
                return new Date(createdAt.setMinutes(createdAt.getMinutes() - createdAt.getTimezoneOffset())).toISOString();
            },
            field: "created_at"
        },
        updated_at: {
            type: 'TIMESTAMP WITHOUT TIME ZONE',
            allowNull: false,
            get: function () {
                const updatedAt = this.getDataValue('updated_at');
                return new Date(updatedAt.setMinutes(updatedAt.getMinutes() - updatedAt.getTimezoneOffset())).toISOString();
            },
            field: "updated_at"
        },
    },
    {
        freezeTableName: true,
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at"
    }
);

module.exports = OrderProductsModel;