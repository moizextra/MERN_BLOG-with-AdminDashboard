// const ErrorHander = require('../utils/errorhandler');
const Blog = require('../models/BlogModel');
// const cloudinary = require('cloudinary');
// const sendGeneratedToken = require('../utils/sendtoken');
// const crypto = require('crypto');
// const sendEmail = require('../utils/sendemail');
// const asyncWrapper = require('../middleware/catchAsyncError1');

// -- Create a Functions that Controls
exports.createBlog = async (req, res) => {
    try {
      // create Blog logic here 
  
      res.status(201).json({message: 'Blog created successfully'});
    } catch (err) {
      console.error(err);
      res.status(500).json({error: 'Error creating Blog'});
    }
  }
  
  exports.getBlogs = async (req, res) => {
    try {
      // get Blogs logic here
  
      res.status(200).json(Blogs);
    } catch (err) {
      console.error(err);
      res.status(500).json({error: 'Error getting Blogs'});
    }  
  }
  
  exports.getBlogById = async (req, res) => {
    try {
      // get Blog by id logic here
      
      res.status(200).json(Blog);
    } catch (err) {
      console.error(err);
      res.status(500).json({error: 'Error getting Blog'});
    }
  }
  
  exports.updateBlog = async (req, res) => {
    try {
      // update Blog logic here
      
      res.status(200).json({message: 'Blog updated successfully'});
    } catch (err) {
      console.error(err);
      res.status(500).json({error: 'Error updating Blog'});
    }
  }
  
  exports.deleteBlog = async (req, res) => {
    try {
      // delete Blog logic here
      
      res.status(200).json({message: 'Blog deleted successfully'});
    } catch (err) {
      console.error(err);
      res.status(500).json({error: 'Error deleting Blog'});
    }
  }
