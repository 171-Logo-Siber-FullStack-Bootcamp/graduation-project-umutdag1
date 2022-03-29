module.exports = (ProductsFeaturesModel) => {
    const insert = async (productFeatureData) => {
        try {
            const productFeatureDataArr = Array.isArray(productFeatureData) ? productFeatureData : [productFeatureData];
            return await ProductsFeaturesModel.bulkCreate(productFeatureDataArr);
        } catch (err) {
            throw err;
        }
    };

    const read = async (productFeatureData) => {
        return Promise.resolve(null);
    };

    const update = async (productFeatureData) => {
        return Promise.resolve(null);
    };

    const remove = async (productFeatureData) => {
        return Promise.resolve(null);
    };

    const executeFirstQueries = async () => {
        try {
            const productFeatureData = [
                {
                    product_id: 1,
                    size_id: 2,
                    color_id: 2,
                    image_id: 2,
                    quantity: 45,
                    status_id: 1
                },
                {
                    product_id: 1,
                    size_id: 3,
                    color_id: 2,
                    image_id: 2,
                    quantity: 20,
                    status_id: 1
                },
                {
                    product_id: 1,
                    size_id: 3,
                    color_id: 2,
                    image_id: 3,
                    quantity: 10,
                    status_id: 1
                },
                {
                    product_id: 1,
                    size_id: 4,
                    color_id: 2,
                    image_id: 2,
                    quantity: 10,
                    status_id: 1
                },
                {
                    product_id: 1,
                    size_id: 4,
                    color_id: 2,
                    image_id: 3,
                    quantity: 10,
                    status_id: 1
                },
                {
                    product_id: 2,
                    size_id: 3,
                    color_id: 3,
                    image_id: 4,
                    quantity: 45,
                    status_id: 1
                },
                {
                    product_id: 2,
                    size_id: 5,
                    color_id: 4,
                    image_id: 5,
                    quantity: 20,
                    status_id: 1
                },
                {
                    product_id: 3,
                    size_id: 3,
                    color_id: 4,
                    image_id: 7,
                    quantity: 15,
                    status_id: 1
                },
                {
                    product_id: 3,
                    size_id: 4,
                    color_id: 4,
                    image_id: 7,
                    quantity: 5,
                    status_id: 1
                },
                {
                    product_id: 3,
                    size_id: 6,
                    color_id: 5,
                    image_id: 8,
                    quantity: 11,
                    status_id: 1
                },
                {
                    product_id: 4,
                    size_id: 1,
                    color_id: 1,
                    image_id: 9,
                    quantity: 100,
                    status_id: 1
                },
                {
                    product_id: 5,
                    size_id: 1,
                    color_id: 1,
                    image_id: 10,
                    quantity: 14,
                    status_id: 1
                },
                {
                    product_id: 6,
                    size_id: 7,
                    color_id: 5,
                    image_id: 11,
                    quantity: 23,
                    status_id: 1
                },
                {
                    product_id: 6,
                    size_id: 8,
                    color_id: 5,
                    image_id: 11,
                    quantity: 15,
                    status_id: 1
                },
                {
                    product_id: 7,
                    size_id: 9,
                    color_id: 1,
                    image_id: 12,
                    quantity: 120,
                    status_id: 1
                },
            ];
            return await insert(productFeatureData);
        } catch (err) {
            throw err;
        }
    };

    return {insert, read, update, remove, executeFirstQueries};
};