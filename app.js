const express = require('express');
const bodyParser = require('body-parser');
const Controller = require('./controller');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    console.log(`Request Method ${req.method}`);
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

app.post('/login', (req, res) => {
    const { body } = req;
    console.log(`Request Method ${req.method} Request Body ${JSON.stringify(body)}`);
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

app.listen(3001);
console.log('Server running on port 3001');
