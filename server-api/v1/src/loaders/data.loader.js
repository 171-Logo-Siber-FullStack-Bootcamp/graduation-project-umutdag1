const CategoriesData = require('../data/Categories.data.json');
const StatusesData = require('../data/Statuses.data.json');

module.exports = async (services) => {
    try {
        switch (process.env.NODE_ENV) {
            case "development" :
                await services.Statuses.insert(StatusesData);
                await services.Categories.insert(CategoriesData);
                break;
            default :
                break;
        }
    } catch (err) {
        throw err;
    }
}