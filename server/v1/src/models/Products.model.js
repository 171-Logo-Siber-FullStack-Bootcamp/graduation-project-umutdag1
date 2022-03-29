const logger = require('../scripts/loggers/Users.logger');

module.exports = async (client) => {
    try {
        const createdIndices = await client.indices.create({
            index: 'products',
            body: {
                mappings: {
                    properties: {
                        id: {type: 'long'},
                        category_id: {type: 'long'},
                        name: {type: 'text'},
                        price_per_product: {type: 'double'},
                        type_id: {type: 'long'},
                        status_id: {type: 'integer'}
                    }
                }
            }
        }/*, {ignore: [400]}*/);

        logger('info', 'products indices is created.');

        return createdIndices;
    } catch (err) {
        logger('warn', err.message);
    }
}