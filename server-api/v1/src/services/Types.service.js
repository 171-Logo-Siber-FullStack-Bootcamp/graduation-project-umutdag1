module.exports = (TypesModel) => {
    const insert = async (typeData) => {
        try {
            const typeDataArr = Array.isArray(typeData) ? typeData : [typeData];
            return await TypesModel.bulkCreate(typeDataArr);
        } catch (err) {
            throw err;
        }
    };

    const read = async (typeData) => {
        try {
            return await TypesModel.findAll({
                where: typeData
            });
        } catch (err) {
            throw err;
        }
    };

    const update = async (typeData) => {
        return Promise.resolve(null);
    };

    const remove = async (typeData) => {
        return Promise.resolve(null);
    };

    const executeFirstQueries = async () => {
        try {
            const typeData = [
                {value: null},
                {value: "Giyim"},
                {value: "Bakım"},
                {value: "Mobilya"},
            ];
            return await insert(typeData);
        } catch (err) {
            throw err;
        }
    };

    return {insert, read, update, remove, executeFirstQueries};
};