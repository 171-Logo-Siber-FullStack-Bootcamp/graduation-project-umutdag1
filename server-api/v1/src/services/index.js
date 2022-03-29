const UsersService = require('./Users.service');
const StatusesService = require('./Statuses.service');
const CategoriesService = require('./Categories.service');
const ProductsService = require('./Products.service');

module.exports = (models) => ({
    Users: UsersService(models.Users),
    Statuses: StatusesService(models.Statuses),
    Categories: CategoriesService(models.Categories),
    Products: ProductsService(models.Products)
});