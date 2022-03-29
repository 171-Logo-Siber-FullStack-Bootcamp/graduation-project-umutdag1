module.exports = (CategoriesModel) => {
    const insert = async (categoryData) => {
        try {
            const categoryDataArr = Array.isArray(categoryData) ? categoryData : [categoryData];
            return await CategoriesModel.bulkCreate(categoryDataArr);
        } catch (err) {
            throw err;
        }
    };

    const read = async (categoryData) => {
        try {
            return await CategoriesModel.findAll({
                where: categoryData
            });
        } catch (err) {
            throw err;
        }
    };

    const update = async (categoryData) => {
        return Promise.resolve(null);
    };

    const remove = async (categoryData) => {
        return Promise.resolve(null);
    };

    return {insert, read, update, remove};
};