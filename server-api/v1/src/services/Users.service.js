module.exports = (UsersModel) => {
    const insert = async (userData) => {
        try {
            const userDataArr = Array.isArray(userData) ? userData : [userData];
            return await UsersModel.bulkCreate(userDataArr);
        } catch (err) {
            throw err;
        }
    };

    const read = async (userData) => {
        try {
            return await UsersModel.findAll({
                where: userData
            });
        } catch (err) {
            throw err;
        }
    };

    const update = async (userData) => {
        return Promise.resolve(null);
    };

    const remove = async (userData) => {
        return Promise.resolve(null);
    };

    return {insert, read, update, remove};
};