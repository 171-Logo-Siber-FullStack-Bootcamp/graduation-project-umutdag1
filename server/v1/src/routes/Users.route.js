// External Modules
const express = require('express');
const router = express.Router();

// Internal Modules
const validate = require('../middlewares/validate.middleware');
const {createValidation, loginValidation} = require('../validations/Users.validation');
const authenticate = require('../middlewares/authenticate.middleware');

module.exports = ({create, login}) => {
    router.route('/create').post(validate(createValidation), create);
    router.route('/login').post(validate(loginValidation), login);
    router.route('/auth').post(authenticate)

    return router;
};