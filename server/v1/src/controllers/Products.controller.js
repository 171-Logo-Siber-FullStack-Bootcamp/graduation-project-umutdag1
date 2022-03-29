const httpStatus = require('http-status');

module.exports = ({read}) => {

    // database bağlantısı kontrolü ekle
    let errStatus = httpStatus.INTERNAL_SERVER_ERROR;

    const getAll = async (req, res) => {
        try {
            const ProductsES = await read(null);
            const data = ProductsES.hits.hits.map(doc => doc._source);
            res.status(httpStatus.OK).json(data);
        } catch (err) {
            console.log(err)
            res.status(errStatus).json(err.message);
        }
    }

    return {getAll};
};