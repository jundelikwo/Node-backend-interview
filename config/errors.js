const JSON_PATCH_ERROR = {
    statusCode: 400,
    customMessage: 'Sorry!! Not able to patch JSON data as jsonPayload or jsonPatch is invalid.',
    type: 'JSON_PATCH_ERROR'
};

const TOKEN_GENERATION_ERROR = {
    statusCode: 400,
    customMessage: 'Sorry!! Not able to generate token as username or password is invalid.',
    type: 'TOKEN_GENERATION_ERROR'
};

const TOKEN_VERIFICATION_FAILED = {
    statusCode: 401,
    customMessage: 'Authentication Failed. Token Passed is Invalid',
    type: 'TOKEN_VERIFICATION_FAILED'
};

const TOKEN_NOT_PASSED = {
    statusCode: 401,
    customMessage: 'Authentication Failed. Token was not passed.',
    type: 'TOKEN_NOT_PASSED'
};

module.exports = {
    JSON_PATCH_ERROR,
    TOKEN_GENERATION_ERROR,
    TOKEN_NOT_PASSED,
    TOKEN_VERIFICATION_FAILED
};
