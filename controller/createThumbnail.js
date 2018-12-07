/*
	*******************************************
	*
	*		Create Thumbnail Controller
	*
	*******************************************
*/


const fs = require('fs');
const request = require('request');
const im = require('imagemagick');
const uuid = require('uuid/v1');

const Config = require('../config');


const createThumbnail = (url, callback) => {
	let isImage = false;
    let fileName = `thumbnails/${uuid()}.`;

    if (!url) {
        callback(Config.errors.THUMBNAIL_URL_NOT_PROVIDED);
        return;
    }

    try {
        const test = request
        .get(url)
        .on('error', (err) => {
            callback(Config.errors.errorCreatingThumbnail(err.message));
        })
        .on('response', (response) => {
            const contentType = response.headers['content-type'].toLowerCase().split('/');
            isImage = contentType[0] === 'image';
            
            if (contentType[1].match(/^[a-zA-Z0-9]{4}/)) {
                fileName += contentType[1].match(/^[a-zA-Z0-9]{4}/)[0];
            } else if (contentType[1].match(/^[a-zA-Z0-9]{3}/)) {
                fileName += contentType[1].match(/^[a-zA-Z0-9]{3}/)[0];
            } else {
                fileName += 'jpg';
            }

            if (isImage) {
                test.pipe(fs.createWriteStream(fileName));
            } else {
                callback(Config.errors.THUMBNAIL_URL_NOT_AN_IMAGE);
            }
        })
        .on('end', () => {
            if (isImage) {
                // im.convert([fileName, '-resize', '50x50', fileName]);
                // callback(null, fileName);
                im.convert([fileName, '-resize', '50x50', fileName], err => {
                    if (err) {
                        callback(Config.errors.errorCreatingThumbnail(err.message));
                    } else {
                        callback(null, fileName);
                    }
                });
            }
        });
    } catch (err) {
        callback(Config.errors.errorCreatingThumbnail(err.message));
    }
};

module.exports = {
	createThumbnail
};
