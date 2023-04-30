const express = require('express');
const router = express.Router();
const Blog = require('../models/Blog');

// Get all blogs. Route: GET '/'
const getAllBlogs = async (req, res) => {
    Blog.find()
    .then((blogs) => {
      res.json(blogs);
    })
    .catch((error) => {
      console.error('Error getting blogs', error);
      res.status(500).json({ error: 'Error getting blogs' });
    });
}

// Get a single blog by id. Route: GET '/:id'
const getBlogById = async (req, res) => {
    const id = req.params.id;
    Blog.findById(id)
        .then((blog) => {
            if (blog) {
                res.json(blog);
            } else {
                res.status(404).json({ error: 'Blog not found' });
            }
        })
        .catch((error) => {
            console.error(`Error getting blog with id ${id}`, error);
            res.status(500).json({ error: `Error getting blog with id ${id}` });
        });
}

// Create a new blog. Route: POST '/'
const createBlog = async (req, res) => {
    const { image, title, description, address } = req.body;
    const newBlog = new Blog({ image, title, description, address });
    newBlog.save()
      .then(() => {
        res.json({ message: 'Blog created successfully' });
      })
      .catch((error) => {
        console.error('Error creating blog', error);
        res.status(500).json({ error: 'Error creating blog' });
      });
}


// Update a blog by id. Route: PUT '/:id'
const updateBlog = async (req, res) => {
    const id = req.params.id;
    const { image, title, description, address } = req.body;
    Blog.findByIdAndUpdate(id, { image, title, description, address })
      .then(() => {
        res.json({ message: `Blog with id ${id} updated successfully` });
      })
      .catch((error) => {
        console.error(`Error updating blog with id ${id}`, error);
        res.status(500).json({ error: `Error updating blog with id ${id}` });
      });   
}

// Delete a blog by id. Route: DELETE '/:id'
const deleteBlog = async (req, res) => {
    const id = req.params.id;
    Blog.findByIdAndDelete(id)
      .then(() => {
        res.json({ message: `Blog with id ${id} deleted successfully` });
      })
      .catch((error) => {
        console.error(`Error deleting blog with id ${id}`, error);
        res.status(500).json({ error: `Error deleting blog with id ${id}` });
      });    
}


module.exports = {
    getAllBlogs,
    getBlogById,
    createBlog,
    updateBlog,
    deleteBlog,
};
