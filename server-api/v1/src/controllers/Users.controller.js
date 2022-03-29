const httpStatus = require('http-status');

module.exports = ({insert, read}) => {
    let errStatus = httpStatus.INTERNAL_SERVER_ERROR;

    const create = async (req, res) => {
        try {
            const {email} = req.body;
            const data = await read({email: email});
            if (data.length === 1) {
                errStatus = httpStatus.CONFLICT;
                await Promise.reject(new Error("Data is already exist"));
            }
            const response = await insert(req.body);
            res.status(httpStatus.CREATED).json(response);
        } catch (err) {
            console.log(err)
            res.status(errStatus).json({error: err.message});
        }
    };

    const login = async (req, res) => {
        try {
            const data = await read(req.body);
            if (data.length === 1) {
                res.status(httpStatus.OK).json(data[0]);
            } else {
                errStatus = httpStatus.NOT_FOUND;
                await Promise.reject(new Error("Data is not found"));
            }
        } catch (err) {
            console.log(err)
            res.status(errStatus).json({error: err.message});
        }
    };

    return {create, login};
};