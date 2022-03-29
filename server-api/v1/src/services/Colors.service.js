module.exports = (ColorsModel) => {
    const insert = async (ColorData) => {
        return Promise.resolve(null);
    };

    const read = async (ColorData) => {
        return Promise.resolve(null);
    };

    const update = async (ColorData) => {
        return Promise.resolve(null);
    };

    const remove = async (ColorData) => {
        return Promise.resolve(null);
    };

    const executeFirstQueries = async () => {
        try {
            const colorData = [
                {value : null},
                {value: "Mixed"},
                {value: "White"},
                {value: "Black"},
                {value: "Gray"},
            ];
            return await insert(colorData);
        } catch (err) {
            throw err;
        }
    };

    return {insert, read, update, remove, executeFirstQueries};
};