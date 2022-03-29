const ProductsController = require('./Products.controller');
const UsersController = require('./Users.controller');
const CategoriesController = require('./Categories.controller');

module.exports = (services) => ({
    Products: ProductsController(services.Products),
    Users: UsersController(),
    Categories: CategoriesController()
});