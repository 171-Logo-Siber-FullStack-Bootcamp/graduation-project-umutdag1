const models = require('../models');

module.exports = async (esClient) => {
    try {
        return await models(esClient);
    } catch (err) {
        throw err;
    }
};