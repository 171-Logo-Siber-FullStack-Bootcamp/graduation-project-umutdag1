const {channel, host, port} = require('../config/es.config');
const {Client} = require('@elastic/elasticsearch');

const connectElasticSearch = () => {
    console.log(`${channel}://${host}:${port}`)
    return new Client({node: `${channel}://${host}:${port}`});
};

module.exports = async () => {
    try {
        const esClient = connectElasticSearch();
        await esClient.info();
        console.log("Connected to Elastic Search Client");
        return esClient;
    } catch (err) {
        throw err;
    }
};