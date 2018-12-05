/*
    ***************************************
    *
    *       AUTHENTICATION UTILITIES
    *
    ***************************************
*/

const Jwt = require('jsonwebtoken');
const Config = require('../config');

const TOKEN_GENERATION_ERROR = {
    statusCode: 400,
    customMessage: 'Sorry!! Not able to generate token as username or password is invalid.',
    type: 'TOKEN_GENERATION_ERROR'
};

const options = {
    expiresIn: Config.TOKEN_EXPIRATION_IN_SECONDS
};

const setToken = (data, callback) => {
    const { username, password } = data;
    if (!username || !password) {
        callback(TOKEN_GENERATION_ERROR);
    } else {
        Jwt.sign({ username, password }, 'shhhhh', options, (err, token) => {
            if (err) {
                callback(TOKEN_GENERATION_ERROR);
            } else {
                callback(null, token);
            }
        });
    }
};

module.exports = {
    setToken
};
