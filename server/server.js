const express = require('express');
const bodyParser = require('body-parser');
const exjwt = require('express-jwt');
const config = require('./config.json');
const errorHandler = require('./_helpers/error-handler');
const userLoginHandler = require('./login/userLogin.service');
const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Headers', 'Content-type,Authorization');
    next();
});

// Setting up bodyParser to use json and set it to req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// LOGIN ROUTE
app.post('/login', userLoginHandler);

app.use(errorHandler);

// Instantiating the express-jwt middleware
// I have no idea what we need it for, but I haven't deleted it yet. Just in case
/* const jwtMW = exjwt({
    secret: config.secret
});*/


/* app.get('/', jwtMW, (req, res) => {
    res.send('You are authenticated');
});  */

const PORT = 8080;
app.listen(PORT, () => {
    // eslint-disable-next-line
    console.log(`Magic happens on port ${PORT}`);
});
