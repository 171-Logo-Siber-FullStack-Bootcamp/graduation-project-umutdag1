module.exports = (esClient) => {
    const tableName = "products";

    const insert = async (productData) => {
        try {
            const productDataArr = Array.isArray(productData) ? productData : [productData];
            const body = productDataArr.flatMap(doc => [
                {index: {_index: tableName}},
                doc
            ]);
            const {body: bulkResponse} = await esClient.bulk({refresh: true, body});
            if (bulkResponse.errors) {
                const erroredDocuments = [];

                bulkResponse.items.forEach((action, i) => {
                    const operation = Object.keys(action)[0]
                    if (action[operation].error) {
                        erroredDocuments.push({
                            status: action[operation].status,
                            error: action[operation].error,
                            operation: body[i * 2],
                            document: body[i * 2 + 1]
                        })
                    }
                });

                await Promise.reject(erroredDocuments);
            }
            return bulkResponse;
        } catch (err) {
            throw err;
        }
    };

    const read = async (productData) => {
        if (productData) {
            const productDataArr = Array.isArray(productData) ? productData : [productData];
            const body = productDataArr.flatMap(doc => [
                {index: {_index: tableName}},
                {query: {match: doc}}
            ]);
            const {body: searchResponse} = await esClient.msearch({
                body: body
            });
            return searchResponse;
        } else {
            const {body: searchAllResponse} = await esClient.search({
                index: tableName,
                body: {
                    query: {
                        match_all: {}
                    }
                }
            });
            return searchAllResponse;
        }
    }

    const remove = async (productId, isIndices = false) => {
        try {
            if (isIndices) {
                const {body: deleteIndicesResponse} = await esClient.transport.request({
                    method: 'DELETE',
                    path: `/${tableName}`
                });
                return deleteIndicesResponse;
            } else {
                const {body: deleteResponse} = await esClient.transport.request({
                    method: 'DELETE',
                    path: `/${tableName}/_doc/${productId}`
                });
                return deleteResponse;
            }
        } catch (err) {
            throw err;
        }
    }

    const totalCount = async () => {
        try {
            const {body: totalCountResponse} = await esClient.count({index: tableName});
            return totalCountResponse;
        } catch (err) {
            throw err;
        }
    }

    return {insert, read, remove, totalCount};
}