const {username, password, database, ...options} = require('../config/database.config')[process.env.NODE_ENV];
const SequelizeConnection = require('../helpers/sequelize-connection.helper');
const sequelizeConnection = new SequelizeConnection(database, username, password, options);

const connectDB = async () => {
    const sequelize = sequelizeConnection.getSequelizeInstance();

    try {
        await sequelize.authenticate();
        sequelizeConnection.setDBConnection(sequelize);
        console.log("Connected to the DB");

        return sequelizeConnection.getDBConnection();
    } catch (err) {
        throw err;
    }
};

module.exports = async () => {
    try {
        return await connectDB();
    } catch (err) {
        throw err;
    }
};