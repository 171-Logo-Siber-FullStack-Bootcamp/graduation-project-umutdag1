const UsersController = require('./Users.controller');
const StatusesController = require('./Statuses.controller');
const CategoriesController = require('./Categories.controller');
const ProductsController = require('./Products.controller');

module.exports = (services) => ({
    Users: UsersController(services.Users),
    Statuses: StatusesController(services.Statuses),
    Categories: CategoriesController(services.Categories),
    Products: ProductsController(services.Products),
});