module.exports = async () => {
    try {
        const esClient = await require('./es.loader')();
        const models = await require('./model.loader')(esClient);
        const services = require('./service.loader')(esClient);
        const controllers = require('./controller.loader')(services);
        const routes = require('./route.loader')(controllers);

        return {
            routes
        };
    } catch (err) {
        throw err;
    }
};