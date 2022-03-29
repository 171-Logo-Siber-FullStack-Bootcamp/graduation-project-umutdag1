const httpStatus = require('http-status');

module.exports = ({read}) => {
    let errStatus = httpStatus.INTERNAL_SERVER_ERROR;

    const getAll = async (req,res) => {
        console.log("burda")
        try {
            const data = await read({});
            console.log(data);
            res.status(httpStatus.OK).json(data);
        } catch (err) {
            console.log(err)
            res.status(errStatus).json(err.message);
        }
    }

    return {getAll};
};