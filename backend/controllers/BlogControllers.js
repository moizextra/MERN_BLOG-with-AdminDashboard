const ErrorHandler = require('../utils/ErrorHandler');
const Blog = require('../models/BlogModel');
const cloudinary = require('cloudinary');
const  Features =require("../utils/features")

// -- Create a Functions that Controls
exports.createBlog = async (req, res,next) => {
      try {
      req.body.author = req.user._id;                     
      const { title, content, category, tags } = req.body;
      const blog = new Blog({
      title,
      content,
      category,
      tags,
    });

    await blog.save();

    res.status(201).json({ message: 'Blog created successfully', blog });
  } catch (err) {
  return  next(new ErrorHandler(err.message, 500));
  }
}

  
  exports.getBlogs = async (req, res) => {
    try {
      const resultperpage = 5; // Setting the Blog per page
      const BlogCount = await Blog.countDocuments();
      // First argument query and second argument
      const apifeatures = new Features(Blog.find(), req.query)
          .search()
          .filter()
          .Pagination(resultperpage); 
  
      // Here we can also give our search thing to  Blog.find("samosa") but we will not bcz we require all the words such that samosamosa so thats why we class for handling it
      const Blogs = await apifeatures.query;
      res.status(200).json({
          message: 'Success',
          Blogs,
          BlogCount,
          resultperpage,
      });
  
      res.status(200).json(Blogs);
    } catch (err) {
      console.error(err);
      res.status(500).json({error: 'Error getting Blogs'});
    }  
  }
  
  exports.getBlogById = async (req, res, next) => {
    try {
      const blog = await Blog.findById(req.params.id);
  
      if (!blog) {
        return next(new ErrorHandler('Blog not found', 404));
      }
  
      res.status(200).json(blog);
  
    } catch (err) {
      next(new ErrorHandler(err.message, 500));
    }
  }
  
  exports.updateBlog = async (req, res, next) => {
    try {
      let blog = await Blog.findById(req.params.id);
  
      if (!blog) {
        return next(new ErrorHandler('Blog not found', 404));
      }
  
      blog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
      });
  
      res.status(200).json({
        success: true,
        message: 'Blog updated successfully',
        blog
      })
  
    } catch (err) {
      next(new ErrorHandler(err.message, 500));
    }
  }
  
  exports.deleteBlog = async (req, res, next) => {
    try {
      const blog = await Blog.findById(req.params.id);
  
      if (!blog) {
        return next(new ErrorHandler('Blog not found', 404));
      }
  
      await blog.remove();
  
      res.status(200).json({
        success: true,
        message: 'Blog deleted successfully'
      });
  
    } catch (err) {
      next(new ErrorHandler(err.message, 500)); 
    }
  }