const fs = require('fs');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const Controller = require('./controller');
const Config = require('./config');

const { TOKEN_NOT_PASSED } = Config.errors;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html>
            <head>
                <title>Backend Interview Task</title>
            </head>
            <body>
                <h1>Welcome To The Backend Interview Task</h1>
                <h3>Please check the documentation file</h3>
        </html>
    `);
});

app.get('/createThumbnail', (req, res) => {
    const { url } = req.query;
    const { auth } = req.headers;

    // Check if there is an auth header
    if (!auth) {
        res.status(TOKEN_NOT_PASSED.statusCode).json(TOKEN_NOT_PASSED);
    } else {
        // If there is an auth header. Proceed to call the loginController, verifyToken function 
        // to verify the JWT token
        Controller.loginController.verifyToken(auth, err => {
            if (err) {
                res.status(err.statusCode).json(err);
            } else {
                // If the token is valid, proceed to call the createThumbnailController,
                // createThumbnail function inorder to generate a thumbnail
                Controller.createThumbnailController.createThumbnail(url, (error, result) => {
                    if (error) {
                        res.status(error.statusCode).json(error);
                    } else {
                        const thumbnailPath = path.join(__dirname, result);
                        res.sendFile(thumbnailPath);
                        req.on('end', () => {
                            // once a thumbnail is generated proceed
                            // to delete it from the file system
                            fs.unlink(thumbnailPath);
                        });
                    }
                });
            }
        });
    }
});

app.post('/login', (req, res) => {
    const { body } = req;
    
    // @ Call the loginController signToken function with username and password 
    // as params in the request body.  
    Controller.loginController.signToken(body, (err, data) => {
        if (err) {
            res.status(err.statusCode).json(err);
        } else {
            res.send(data);
        }
    });
});

app.post('/jsonPatch', (req, res) => {
    const { body, headers } = req;
    const { auth } = headers;

    // Check if there is an auth header
    if (!auth) {
        res.status(TOKEN_NOT_PASSED.statusCode).json(TOKEN_NOT_PASSED);
    } else {
        // If there is an auth header. Proceed to call the loginController, verifyToken function 
        // to verify the JWT token
        Controller.loginController.verifyToken(auth, err => {
            if (err) {
                res.status(err.statusCode).json(err);
            } else {
                // If the token is valid, proceed to call the jsonPatchController, JSONpatcher
                // function inorder to patch the JSON object
                Controller.jsonPatchController.JSONpatcher(body, (error, patchedJSON) => {
                    if (error) {
                        res.status(error.statusCode).json(error);
                    } else {
                        res.send(patchedJSON);
                    }
                });
            }
        });
    }
});

app.listen(Config.constants.PORT);
console.log('Server running on port ', Config.constants.PORT);
