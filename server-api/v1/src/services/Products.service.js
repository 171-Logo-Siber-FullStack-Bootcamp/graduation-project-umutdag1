module.exports = (ProductsModel) => {
    const insert = async (productData) => {
        try {
            const productDataArr = Array.isArray(productData) ? productData : [productData];
            return await ProductsModel.bulkCreate(productDataArr);
        } catch (err) {
            throw err;
        }
    };

    const read = async (productData) => {
        try {
            // burayı kontrol et
            return await ProductsModel.findAll({
                where: productData
            });
        } catch (err) {
            throw err;
        }
    };

    const update = async (productData) => {
        return Promise.resolve(null);
    };

    const remove = async (productData) => {
        return Promise.resolve(null);
    };

    const executeFirstQueries = async () => {
        try {
            const productData = [
                {
                    category_id: 1,
                    name: "Kadın Saks Mavi Yakası Fırfırlı Bağlamalı Dokuma Viscon Elbise",
                    price_per_product: 199.99,
                    type_id: 2,
                    status_id: 1
                },
                {
                    category_id: 1,
                    name: "Ipek Ve Kaşmir Balıkçı Yaka Uzun Kollu Aleyna Triko",
                    price_per_product: 1997.00,
                    type_id: 2,
                    status_id: 1
                },
                {
                    category_id: 2,
                    name: "Siyah Erkek Slim Fit Balıkçı Yaka Fitilli Örgü Kazak",
                    price_per_product: 74.99,
                    type_id: 2,
                    status_id: 1
                },
                {
                    category_id: 2,
                    name: "ERKEK PARFÜM 709 ORİENTAL 50 ML",
                    price_per_product: 80.00,
                    type_id: 2,
                    status_id: 1
                },
                {
                    category_id: 3,
                    name: "Bebek Bezi 4 Beden Maxi Ekstra Fırsat Paketi 240 Adet",
                    price_per_product: 335.99,
                    type_id: 3,
                    status_id: 1
                },
                {
                    category_id: 3,
                    name: "Balıkçı Yaka Tişört Uzun Kollu",
                    price_per_product: 41.99,
                    type_id: 2,
                    status_id: 1
                },
                {
                    category_id: 4,
                    name: "Sleep Balance DHT Yaylı Seri Yatak",
                    price_per_product: 1178.70,
                    type_id: 4,
                    status_id: 1
                },
            ];
            return await insert(productData);
        } catch (err) {
            throw err;
        }
    };

    return {insert, read, update, remove, executeFirstQueries};
};