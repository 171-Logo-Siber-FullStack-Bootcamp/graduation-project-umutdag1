module.exports = (SizesModel) => {
    const insert = async (SizeData) => {
        try {
            const sizeDataArr = Array.isArray(SizeData) ? SizeData : [SizeData];
            return await SizesModel.bulkCreate(sizeDataArr);
        } catch (err) {
            throw err;
        }
    };

    const read = async (SizeData) => {
        return Promise.resolve(null);
    };

    const update = async (SizeData) => {
        return Promise.resolve(null);
    };

    const remove = async (SizeData) => {
        return Promise.resolve(null);
    };

    const executeFirstQueries = async () => {
        try {
            const sizeData = [
                {value: null},
                {value: "S"},
                {value: "M"},
                {value: "L"},
                {value: "XL"},
                {value: "XXL"},
                {value: "3-4 Yaş"},
                {value: "4-5 Yaş"},
                {value: "90 x 190"}, //9
            ];
            return await insert(sizeData);
        } catch (err) {
            throw err;
        }
    };

    return {insert, read, update, remove, executeFirstQueries};
};