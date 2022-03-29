const ProductsService = require('./Products.service');

module.exports = (esClient) => ({
   Products : ProductsService(esClient)
});