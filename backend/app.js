const express = require('express');

const app = express();

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