/*
	************************************************************************************************
	*
	*		Controller for Login Functionality.
	*
	*************************************************************************************************
*/

const auth = require('../auth');

const signToken = (data, callback) => {
	// @ Call the auth function with username and password as properties in the data object.
    auth.setToken(data, (err, res) => {
        if (err) {
            callback(err);
        } else {
            callback(null, res);
        }
    });
};

module.exports = {
    signToken
};
