const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader("Acces-Control-Allow-Method", "GET, POST, PATCH, DELETE, OPTIONS");
    next();
});

app.post("/api/posts", (req, res, next) => {
    const post = req.body;
    console.log(post);
    res.status(201).json({
        message: 'Post Added Successfuly.'
    });
});

app.get('/api/posts', (req, res, next) => {
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
