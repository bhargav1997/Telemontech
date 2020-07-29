const mongoose = require('mongoose');
const blogSchema = new mongoose.Schema(
    {
        _id: Number,
        title: String,
        image: String,
        htmlContent: String
    }
);

const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;
