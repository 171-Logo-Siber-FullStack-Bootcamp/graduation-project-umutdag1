module.exports = (StatusesModel) => {
    const insert = async (statusData) => {
        try {
            const statusDataArr = Array.isArray(statusData) ? statusData : [statusData];
            return await StatusesModel.bulkCreate(statusDataArr);
        } catch (err) {
            throw err;
        }
    };

    const read = async (statusData) => {
        return Promise.resolve(null);
    };

    const update = async (statusData) => {
        return Promise.resolve(null);
    };

    const remove = async (statusData) => {
        return Promise.resolve(null);
    };

    return {insert, read, update, remove};
};