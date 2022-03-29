const models = require('../models');

module.exports = async ({DataTypes, sequelize}) => {
    try {
        return await models({sequelize, DataTypes});
    } catch (err) {
        throw err;
    }
};