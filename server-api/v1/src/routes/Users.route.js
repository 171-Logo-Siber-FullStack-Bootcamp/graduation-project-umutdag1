const express = require('express');
const router = express.Router();

// validation yapılacak

module.exports = ({create, login}) => {
    router.post('/create', create);
    router.post('/login', login);

    return router;
};