const UsersRoutes = require('./Users.route');
const StatusesRoutes = require('./Statuses.route');
const CategoriesRoutes = require('./Categories.route');
const ProductsRoutes = require('./Products.route');

module.exports = (controllers) => ({
    Users: UsersRoutes(controllers.Users),
    Statuses: StatusesRoutes(controllers.Statuses),
    Categories: CategoriesRoutes(controllers.Categories),
    Products: ProductsRoutes(controllers.Products),
});