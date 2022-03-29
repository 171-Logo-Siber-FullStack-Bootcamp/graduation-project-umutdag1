const {Sequelize, DataTypes} = require("sequelize");

const sequelizeConnectionHelper = class {
    #db_database = null;
    #db_user = null;
    #db_pass = null;
    #db_options = null;
    #db_connection = null;

    constructor(db_database, db_user, db_pass, db_options) {
        this.#db_database = db_database;
        this.#db_user = db_user;
        this.#db_pass = db_pass;
        this.#db_options = db_options;
    }

    getSequelizeInstance() {
        // const connectionString = `${this.#db_tool}://${this.#db_user}:${this.#db_pass}@${this.#db_host}:${this.#db_port}/${this.#db_name}`;
        // const sequelize = new Sequelize(connectionString);

        const sequelize = new Sequelize(this.#db_database, this.#db_user, this.#db_pass, this.#db_options);

        //console.dir(sequelize.connectionManager)
        //process.exit(1)

        return sequelize;
    };

    setDBConnection(sequelize) {
        if (!this.#db_connection) {
            this.#db_connection = {DataTypes};
        }
        this.#db_connection = {...this.#db_connection, sequelize};
    }

    getDBConnection() {
        //console.log(this.#db_connection)
        return this.#db_connection;
    }
}

module.exports = sequelizeConnectionHelper;