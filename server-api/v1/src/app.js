// External Modules
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const path = require('path');

// Internal Modules
const config = require('./config');
const loaders = require('./loaders');

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
app.use('/static', express.static(path.join(__dirname, 'uploads')));
app.use(helmet());
app.use(cors());

// Start Server
const PORT = process.env.APP_API_PORT;
app.listen(PORT, async () => {
    const {routes} = await loaderVarsAsync();
    app.use("/api/users", routes.Users);
    app.use("/api/statuses", routes.Statuses);
    app.use("/api/products", routes.Products);
    app.use("/api/categories", routes.Categories);
    console.log(`Server-api is started on ${PORT}`);
});