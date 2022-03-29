const getModelSchemas = (sequelize, DataTypes) => ({
    Tables: require('./Tables.model')(sequelize, DataTypes),
    Statuses: require('./Statuses.model')(sequelize, DataTypes),
    Users: require('./Users.model')(sequelize, DataTypes),
    Categories: require('./Categories.model')(sequelize, DataTypes),
    Colors: require('./Colors.model')(sequelize, DataTypes),
    Images: require('./Images.model')(sequelize, DataTypes),
    Sizes: require('./Sizes.model')(sequelize, DataTypes),
    Types: require('./Types.model')(sequelize, DataTypes),
    Products: require('./Products.model')(sequelize, DataTypes),
    ProductsFeatures: require('./ProductsFeatures.model')(sequelize, DataTypes),
    PaymentMethods: require('./PaymentMethods.model')(sequelize, DataTypes),
    Orders: require('./Orders.model')(sequelize, DataTypes),
    OrderProducts: require('./OrderProducts.model')(sequelize, DataTypes)
});

const createModelRelations = (modelSchemas) => {
    modelSchemas.Users.belongsTo(modelSchemas.Statuses, {
        foreignKey: 'status_id',
        targetKey: 'id'
    });
    modelSchemas.Categories.belongsTo(modelSchemas.Statuses, {
        foreignKey: 'status_id',
        targetKey: 'id'
    });
    modelSchemas.Products.belongsTo(modelSchemas.Categories, {
        foreignKey: 'category_id',
        targetKey: 'id'
    });
    modelSchemas.Products.belongsTo(modelSchemas.Statuses, {
        foreignKey: 'status_id',
        targetKey: 'id'
    });
    modelSchemas.ProductsFeatures.belongsTo(modelSchemas.Products, {
        foreignKey: 'product_id',
        targetKey: 'id'
    });
    modelSchemas.ProductsFeatures.belongsTo(modelSchemas.Sizes, {
        foreignKey: 'size_id',
        targetKey: 'id'
    });
    modelSchemas.ProductsFeatures.belongsTo(modelSchemas.Colors, {
        foreignKey: 'color_id',
        targetKey: 'id'
    });
    modelSchemas.ProductsFeatures.belongsTo(modelSchemas.Images, {
        foreignKey: 'image_id',
        targetKey: 'id'
    });
    modelSchemas.ProductsFeatures.belongsTo(modelSchemas.Types, {
        foreignKey: 'type_id',
        targetKey: 'id'
    });
    modelSchemas.ProductsFeatures.belongsTo(modelSchemas.Statuses, {
        foreignKey: 'status_id',
        targetKey: 'id'
    });
    modelSchemas.Orders.belongsTo(modelSchemas.Users, {
        foreignKey: 'user_id',
        targetKey: 'id'
    });
    modelSchemas.Orders.belongsTo(modelSchemas.PaymentMethods, {
        foreignKey: 'payment_method_id',
        targetKey: 'id'
    });
    modelSchemas.Orders.belongsTo(modelSchemas.Statuses, {
        foreignKey: 'status_id',
        targetKey: 'id'
    });
    modelSchemas.OrderProducts.belongsTo(modelSchemas.Users, {
        foreignKey: 'user_id',
        targetKey: 'id'
    });
    modelSchemas.OrderProducts.belongsTo(modelSchemas.Orders, {
        foreignKey: 'order_id',
        targetKey: 'id'
    });
};

module.exports = async ({sequelize, DataTypes}) => {
    try {
        const modelSchemas = getModelSchemas(sequelize, DataTypes);
        createModelRelations(modelSchemas);

        switch (process.env.NODE_ENV) {
            case "development" :
                await sequelize.sync({force: true});
                break;
            default :
                await sequelize.sync();
                break;
        }
        return modelSchemas;
    } catch (err) {
        throw err;
    }
};