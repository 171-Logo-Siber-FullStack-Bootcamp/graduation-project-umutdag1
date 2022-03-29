const jwt = require('jsonwebtoken');

const generateAccessToken = (userData) => {
    return jwt.sign(userData, process.env.ACCESS_TOKEN_SECRET_KEY, {expiresIn: "1w"})
};

const generateRefreshToken = (userData) => {
    return jwt.sign(userData, process.env.REFRESH_TOKEN_SECRET_KEY, {expiresIn: "1w"})
};

module.exports = {
    generateAccessToken,
    generateRefreshToken
};