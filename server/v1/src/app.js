// External Modules
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

// Internal Modules
const config = require('./config');
const loaders = require("./loaders");
const authenticate = require('./middlewares/authenticate.middleware');

// Run First-Priority Modules
config();

// Loaders Variables
const loaderVarsAsync = async () => await loaders().catch(err => {
    console.error(err.toString());
    process.exit(1);
});

// Create Server
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(helmet());
app.use(cors());

// Start Server
const PORT = process.env.APP_PORT;
app.listen(PORT, async () => {
    const {routes} = await loaderVarsAsync();
    app.use('/users', routes.Users);
    app.use('/categories', routes.Categories);
    app.use(authenticate);
    app.use('/products', routes.Products);
    console.log(`Server is started on ${PORT}`);
});