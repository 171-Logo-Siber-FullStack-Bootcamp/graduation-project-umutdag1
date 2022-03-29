const cryptoJS = require('crypto-js');

const passwordToHash = (password) => {
    const firstLayerEncryptionStr = cryptoJS.HmacSHA1(password, process.env.PASSWORD_HASH_KEY).toString();
    return cryptoJS.HmacSHA256(password, firstLayerEncryptionStr).toString();
};

module.exports = {
    passwordToHash
};