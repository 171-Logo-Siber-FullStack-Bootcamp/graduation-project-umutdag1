const OrdersModel = (sequelize, DataTypes) => sequelize.define("Orders", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: "user_id"
        },
        total_price: {
            type: DataTypes.DOUBLE,
            allowNull: false,
            field: "total_price"
        },
        payment_method_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: "payment_method_id"
        },
        deliver_address: {
            type: DataTypes.TEXT,
            allowNull: false,
            field: "deliver_address"
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

module.exports = OrdersModel;