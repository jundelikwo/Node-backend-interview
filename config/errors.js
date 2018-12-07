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

const THUMBNAIL_URL_NOT_PROVIDED = {
    statusCode: 401,
    customMessage: 'Thumbnail Creation Failed. URL was not passed.',
    type: 'THUMBNAIL_URL_NOT_PROVIDED'
};

const THUMBNAIL_URL_NOT_AN_IMAGE = {
    statusCode: 401,
    customMessage: 'Thumbnail Creation Failed. URL provided is not an image.',
    type: 'THUMBNAIL_URL_NOT_AN_IMAGE'
};

const errorCreatingThumbnail = msg => {
    return {
        statusCode: 400,
        customMessage: `Thumbnail Creation Failed. ${msg}.`,
        type: msg.toUpperCase()
    };
};

module.exports = {
    errorCreatingThumbnail,
    JSON_PATCH_ERROR,
    THUMBNAIL_URL_NOT_AN_IMAGE,
    THUMBNAIL_URL_NOT_PROVIDED,
    TOKEN_GENERATION_ERROR,
    TOKEN_NOT_PASSED,
    TOKEN_VERIFICATION_FAILED
};
