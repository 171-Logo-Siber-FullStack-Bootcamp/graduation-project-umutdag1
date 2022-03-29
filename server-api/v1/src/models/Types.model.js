const TypesModel = (sequelize, DataTypes) => sequelize.define("Types", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        value: DataTypes.STRING(20),
    },
    {
        freezeTableName: true,
        timestamps: false
    }
);

module.exports = TypesModel;