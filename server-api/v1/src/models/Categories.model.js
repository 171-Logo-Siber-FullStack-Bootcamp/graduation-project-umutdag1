const CategoriesModel = (sequelize, DataTypes) => sequelize.define("Categories", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING(30),
            allowNull: false
        },
        image_url: {
            type: DataTypes.TEXT,
            allowNull: true,
            field: "image_url"
        },
        status_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: "status_id"
        },
    },
    {
        freezeTableName: true,
        timestamps: false
    }
);

module.exports = CategoriesModel;