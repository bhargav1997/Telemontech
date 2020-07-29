const express = require('express');
const blogController = require('./../controller/blogController');

const router = express.Router();

router
    .route('/')
    .get(blogController.getAllPost)
    .post(blogController.createPost)

module.exports = router;