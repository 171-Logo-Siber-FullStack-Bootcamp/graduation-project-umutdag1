const httpStatus = require('http-status');

module.exports = ({insert, read}) => {
    let errStatus = httpStatus.INTERNAL_SERVER_ERROR;

    const create = async (req, res) => {
        console.log("ProductController");
        try {
            const data = await read(req.body);
            console.log(data)

            if (data.length === 1) {
                errStatus = 409;
                await Promise.reject(new Error("Data is already exist"));
            }

            const response = await insert(req.body);
            res.status(httpStatus.CREATED).json(response);
        } catch (err) {
            console.log(err)
            res.status(errStatus).json(err.message);
        }
    };
    const getAll = async (req, res) => {
        console.log("ProductController");
        try {
            const data = await read({});
            //console.log(data);
            res.status(httpStatus.OK).json(data);
        } catch (err) {
            console.log(err)
            res.status(errStatus).json(err.message);
        }
    };

    return {create, getAll};
};