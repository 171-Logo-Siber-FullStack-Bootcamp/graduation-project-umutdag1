const TablesModel = (sequelize, DataTypes) => sequelize.define("Tables", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING(20),
            allowNull: false
        },
    },
    {
        freezeTableName: true,
        timestamps: false
    }
);

module.exports = TablesModel;