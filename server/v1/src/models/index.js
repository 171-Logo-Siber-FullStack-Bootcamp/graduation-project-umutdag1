const getModelSchemas = async (esClient) => ({
    Products: await require('./Products.model')(esClient),
});

module.exports = async (esClient) => {
    try {
        const modelSchemas = await getModelSchemas(esClient);
        return modelSchemas;
    } catch (err) {
        throw err;
    }
};