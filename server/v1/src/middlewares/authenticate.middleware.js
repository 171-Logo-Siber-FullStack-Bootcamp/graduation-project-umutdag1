const httpStatus = require("http-status");
const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
    const authHeader = req?.headers["authorization"];
    const token = authHeader?.split(" ")[1];
    // console.log(authHeader, token);
    if (!token) {
        return res.status(httpStatus.UNAUTHORIZED).json({error: "You first have to sign in"});
    }

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET_KEY, (err, data) => {
        if (err) return res.status(httpStatus.FORBIDDEN).json({error: "Token time is expired"});
        req.data = data;
        next();
    });
};

module.exports = authenticateToken;