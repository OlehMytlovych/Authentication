const jwt = require('jsonwebtoken');
const config = require('../config.json');

// MOCKING DB just for test
let users = [
    {
        id: 1,
        username: 'login1',
        password: 'pass1',
        name: 'Quentin',
        surname: 'Tarantino'
    },
    {
        id: 2,
        username: 'login2',
        password: 'pass2',
        name: 'Jack',
        surname: 'Sparrow'
    }
];

const userLoginHandler = (req, res) => {
    const { username, password } = req.body;
  
    // Use your DB ORM logic here to find user and compare password
  
    // Finds first username and password match in users array (assumes usernames are unique)
    const user = users.find(u => username == u.username && password == u.password);

    if (user) { // User credentials matched (are valid)
        // creating token and encoding id, username and expiration time
        let token = jwt.sign({ id: user.id, username: user.username }, config.secret, { expiresIn: 129600 }); // Signing the token
        
        // eslint-disable-next-line
        const { password, ...userData } = user; // not to send user's password in response

        // setting reponse that will be sent to login method of AuthService
        res.json({
            success: true,
            err: null,
            token,
            userData
        });
    } else { // User credentials did not match (are not valid) or no user with this username/password exists
        res.status(401).json({
            success: false,
            token: null,
            err: 'Username or password is incorrect'
        });
    }
};

module.exports = userLoginHandler;