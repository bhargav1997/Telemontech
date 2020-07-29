const express = require('express');
var path = require("path");
const blogRouter = require('./routes/blogRouter')
var bodyParser = require('body-parser');

const app = express();

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'GET,POST,PATCH,DELETE');
    next();
});

const multipart = require('connect-multiparty');
const multipartMiddleware = multipart({
    uploadDir: './uploads/img'
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(express.static('uploads/img'));
app.use('/images', express.static(__dirname + '/uploads/img'));
app.use('/api/v1/blog', multipartMiddleware, blogRouter);

module.exports = app;
