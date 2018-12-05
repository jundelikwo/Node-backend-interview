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

const TOKEN_VERIFICATION_FAILED = {
    statusCode: 401,
    customMessage: 'Token Passed is Invalid',
    type: 'TOKEN_VERIFICATION_FAILED'
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

const verifyToken = (token, callback) => {
	// @token - token for verification 
	Jwt.verify(token, 'shhhhh', (err, decoded) => {
		if (err) {
            console.log('verifyToken', TOKEN_VERIFICATION_FAILED);
			callback(TOKEN_VERIFICATION_FAILED);
		} else {
            console.log('decoded', decoded);
			callback(null, decoded);
		}
	});
};

module.exports = {
    setToken,
    verifyToken
};
