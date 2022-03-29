module.exports = async () => {
    try {
        const database = await require('./database.loader')();
        const models = await require('./model.loader')(database);
        const services = require('./service.loader')(models);
        const data = require('./data.loader')(services);
        const controllers = require('./controller.loader')(services);
        const routes = require('./route.loader')(controllers);

        return {
            routes
        };
    } catch (err) {
        throw err;
    }
};