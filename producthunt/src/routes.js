
const express = require('express');
const routes = express.Router();

routes.get('/', (req, res) => {
    // Product.create({
    //     title: 'React Native',
    //     description: 'Build native apps with',
    //     url: 'http://github.com/facebook/react-native'
    // });
    res.send('Hello node');
});

module.exports = routes;