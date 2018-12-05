/*
	*******************************************
	*
	*		JSON Patch Controller
	*
	*******************************************
*/


const JSONpatch = require('json-patch');
const Config = require('../config');

const JSONpatcher = (data, callback) => {
	const { jsonPayload, jsonPatch } = data;
	if ((!jsonPatch || !jsonPayload) ||
	(typeof jsonPatch !== 'object' || typeof jsonPayload !== 'object')) {
		callback(Config.errors.JSON_PATCH_ERROR);
	} else {
		const patchedJSON = JSONpatch.apply(jsonPayload, jsonPatch);
		callback(null, patchedJSON);
	}
};

module.exports = {
	JSONpatcher
};
