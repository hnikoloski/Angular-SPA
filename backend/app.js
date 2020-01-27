const express = require('express');

const app = express();

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader("Acces-Control-Allow-Method", "GET, POST, PATCH, DELETE, OPTIONS");
    next();
});

app.use('/api/posts', (req, res, next) => {
    const posts = [{
            id: 'fid123123',
            title: 'First Server side post',
            content: 'Server side content'
        },
        {
            id: '12erfdvs3',
            title: 'Second Server side post',
            content: 'Server side content.'
        }
    ];
    res.status(200).json({
        message: 'Posts fetches succesfully.',
        posts: posts
    });
});

module.exports = app;