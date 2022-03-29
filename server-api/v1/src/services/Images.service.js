module.exports = (ImagesModel) => {
    const insert = async (imageData) => {
        try {
            const imageDataArr = Array.isArray(imageData) ? imageData : [imageData];
            return await ImagesModel.bulkCreate(imageDataArr);
        } catch (err) {
            throw err;
        }
    };

    const read = async (imageData) => {
        return Promise.resolve(null);
    };

    const update = async (imageData) => {
        return Promise.resolve(null);
    };

    const remove = async (imageData) => {
        return Promise.resolve(null);
    };

    const executeFirstQueries = async () => {
        try {
            const imageData = [
                {value: null},
                {value: "../uploads/image/product_1_1.jpg"},
                {value: "../uploads/image/product_1_2.jpg"},
                {value: "../uploads/image/product_2_1.jpg"},
                {value: "../uploads/image/product_2_2.jpg"},
                {value: "../uploads/image/product_2_3.jpg"},
                {value: "../uploads/image/product_3_1.jpg"},
                {value: "../uploads/image/product_3_2.jpg"},
                {value: "../uploads/image/product_4_1.jpg"},
                {value: "../uploads/image/product_5_1.jpg"},
                {value: "../uploads/image/product_6_1.jpg"},
                {value: "../uploads/image/product_7_1.jpg"}, //12
            ];
            return await insert(imageData);
        } catch (err) {
            throw err;
        }
    };

    return {insert, read, update, remove, executeFirstQueries};
};