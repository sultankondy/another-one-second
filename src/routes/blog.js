const router = require('express').Router();
const blogController = require('../controllers/blogController');

router.route('/')
    .get(blogController.getAllBlogs)
    .post(blogController.createBlog);

router.route('/:id')
    .get(blogController.getBlogById)
    .put(blogController.updateBlog)
    .delete(blogController.deleteBlog);

module.exports = router;
