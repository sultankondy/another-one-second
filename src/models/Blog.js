const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  image: {
    type: String,
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
  },
  address: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  author: {
    type: String,
  }
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
