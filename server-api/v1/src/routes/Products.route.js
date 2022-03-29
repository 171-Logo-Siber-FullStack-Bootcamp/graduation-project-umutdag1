const express = require('express');
const router = express.Router();

module.exports = ({create, getAll}) => {
    router.get('/getAll', getAll);

    return router;
};