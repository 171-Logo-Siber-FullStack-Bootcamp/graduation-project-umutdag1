const ProductsModel = (sequelize, DataTypes) => sequelize.define("Products", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        category_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: "category_id"
        },
        name: {
            type: DataTypes.STRING(75),
            allowNull: false
        },
        type_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: "type_id"
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

module.exports = ProductsModel;