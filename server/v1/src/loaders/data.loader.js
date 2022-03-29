const axios = require("axios");

// esconfig dev,test,prod diye böl

const loadProducts = async (ProductsService) => {
    const {data} = await axios.get(process.env.API_URL + '/products/getAll');
    const totalProductsES = await ProductsService.totalCount();
    console.log("Total :", totalProductsES.count);
    if (totalProductsES.count > 0) {
        const removedIndicesProductsES = await ProductsService.remove(null, true);
        console.log(removedIndicesProductsES);
    }
    await ProductsService.insert(data);
}

module.exports = async (services) => {
    try {
        await loadProducts(services.Products);
    } catch (err) {
        throw err;
    }
}