const ProductsRoutes = require('./Products.route');
const UsersRoutes = require('./Users.route');
const CategoriesRoutes = require('./Categories.route');

module.exports = (controllers) => ({
    Products: ProductsRoutes(controllers.Products),
    Users: UsersRoutes(controllers.Users),
    Categories: CategoriesRoutes(controllers.Categories)
});