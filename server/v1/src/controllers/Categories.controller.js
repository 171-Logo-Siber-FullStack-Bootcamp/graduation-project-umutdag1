// External Modules
const axios = require('axios');
const httpStatus = require("http-status");

// Internal Modules
const logger = require('../scripts/loggers/Categories.logger');

module.exports = () => {
    let errStatus = httpStatus.INTERNAL_SERVER_ERROR;

    const getAll = async (req, res) => {
        try {
            logger('info', `${req.route.path} is being executed.`);

            const {status, data} = await axios.get(
                process.env.API_URL + '/categories/getAll'
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

    return {getAll};
};