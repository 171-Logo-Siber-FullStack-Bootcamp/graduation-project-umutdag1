// External Modules
const axios = require('axios');
const httpStatus = require("http-status");

// Internal Modules
const logger = require('../scripts/loggers/Users.logger');
const {passwordToHash} = require('../helpers/password-hash.helper');
const {generateAccessToken, generateRefreshToken} = require('../helpers/token-generation.helper');

module.exports = () => {
    let errStatus = httpStatus.INTERNAL_SERVER_ERROR;

    const create = async (req, res) => {
        req.body.password = passwordToHash(req.body.password);
        try {
            logger('info', `${req.route.path} is being executed.`);

            const {status, data} = await axios.post(
                process.env.API_URL + '/users/create',
                req.body
            ).catch(async (err) => {
                const {status, data} = err.response;
                errStatus = status;
                await Promise.reject(new Error(data.error));
            });

            res.status(status).json(data);
        } catch (err) {
            logger('error', err);
            res.status(errStatus).json({error: err.message});
        } finally {
            logger('info', `Response is sent`);
            logger('info', `${req.route.path}'s execution is done`);
        }
    }

    const login = async (req, res) => {
        req.body.password = passwordToHash(req.body.password);
        try {
            logger('info', `${req.route.path} is being executed.`);

            const {status, data} = await axios.post(
                process.env.API_URL + '/users/login',
                req.body
            ).catch(async (err) => {
                const {status, data} = err.response;
                errStatus = status;
                await Promise.reject(new Error(data.error));
            });

            Object.assign(data, {
                tokens: {
                    access_token: generateAccessToken(data),
                    refresh_token: generateRefreshToken(data)
                }
            });
            delete data.password;

            res.status(status).json(data);
        } catch (err) {
            logger('error', err);
            res.status(errStatus).json({error: err.message});
        } finally {
            logger('info', `Response is sent`);
            logger('info', `${req.route.path}'s execution is done`);
        }
    }

    return {create, login};
};