const UsersModel = (sequelize, DataTypes) => sequelize.define("Users", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        first_name: {
            type: DataTypes.STRING(50),
            allowNull: false,
            field: "first_name"
        },
        last_name: {
            type: DataTypes.STRING(50),
            allowNull: false,
            field: "last_name"
        },
        email: {
            type: DataTypes.STRING(70),
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        gender: {
            type: DataTypes.STRING(10),
            allowNull: false
        },
        birth_date: {
            type: 'TIMESTAMP WITHOUT TIME ZONE',
            allowNull: false,
            field: "birth_date",
            get: function () {
                const birthDate = this.getDataValue('birth_date');
                return new Date(birthDate.setMinutes(birthDate.getMinutes() - birthDate.getTimezoneOffset())).toISOString();
            }
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        is_admin: {
            type: DataTypes.INTEGER,
            field: "is_admin",
            defaultValue: 0
        },
        status_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1,
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

module.exports = UsersModel;