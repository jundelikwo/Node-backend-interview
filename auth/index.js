/*
    ***************************************
    *
    *       AUTHENTICATION UTILITIES
    *
    ***************************************
*/

const Jwt = require('jsonwebtoken');
const Config = require('../config');


const options = {
    expiresIn: Config.constants.TOKEN_EXPIRATION_IN_SECONDS
};

const setToken = (data, callback) => {
    const { username, password } = data;
    if (!username || !password) {
        callback(Config.errors.TOKEN_GENERATION_ERROR);
    } else {
        Jwt.sign({ username, password }, 'shhhhh', options, (err, token) => {
            if (err) {
                callback(Config.errors.TOKEN_GENERATION_ERROR);
            } else {
                callback(null, token);
            }
        });
    }
};

const verifyToken = (token, callback) => {
	// @token - token for verification 
	Jwt.verify(token, 'shhhhh', (err, decoded) => {
		if (err) {
			callback(Config.errors.TOKEN_VERIFICATION_FAILED);
		} else {
			callback(null, decoded);
		}
	});
};

module.exports = {
    setToken,
    verifyToken
};
