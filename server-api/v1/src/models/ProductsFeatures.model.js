const ProductsFeaturesModel = (sequelize, DataTypes) => sequelize.define("ProductsFeatures", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        product_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: "product_id"
        },
        color_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: "color_id"
        },
        size_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: "size_id"
        },
        image_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: "image_id"
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        old_price_per_product: {
            type: DataTypes.DOUBLE,
            allowNull: true,
            field: "old_price_per_product"
        },
        price_per_product: {
            type: DataTypes.DOUBLE,
            allowNull: false,
            field: "price_per_product"
        },
        status_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: "status_id"
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

module.exports = ProductsFeaturesModel;