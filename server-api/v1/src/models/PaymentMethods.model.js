const PaymentMethodsModel = (sequelize, DataTypes) => sequelize.define("Payment_Methods", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING(15),
            allowNull: false,
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

module.exports = PaymentMethodsModel;