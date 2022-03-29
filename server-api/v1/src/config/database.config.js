const {DB_USER, DB_PASS, DB_HOST, DB_NAME, DB_DIALECT, DB_PORT} = process.env;

module.exports = {
    development: {
        username: DB_USER,
        password: DB_PASS,
        database: `${DB_NAME}_dev`,
        host: DB_HOST,
        port: DB_PORT,
        dialect: DB_DIALECT,
        dialectOptions: {
            useUTC: false,
        },
        timezone: 'Europe/Istanbul'
    },
    test: {
        username: DB_USER,
        password: DB_PASS,
        database: `${DB_NAME}_test`,
        host: DB_HOST,
        port: DB_PORT,
        dialect: DB_DIALECT,
        dialectOptions: {
            useUTC: false,
            timezone: 'Europe/Istanbul',
        },
        timezone: 'Europe/Istanbul'
    },
    production: {
        username: DB_USER,
        password: DB_PASS,
        database: `${DB_NAME}_prod`,
        host: DB_HOST,
        port: DB_PORT,
        dialect: DB_DIALECT,
        dialectOptions: {
            useUTC: false,
            timezone: 'Etc/GMT3'
        },
        timezone: 'Etc/GMT3'
    },
};