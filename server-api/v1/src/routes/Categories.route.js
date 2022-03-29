const express = require('express');
const router = express.Router();

module.exports = ({getAll}) => {
    router.get('/getAll', getAll);

    return router;
};