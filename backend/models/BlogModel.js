const mongoose = require('mongoose');
const { Schema } = mongoose;
const validator = require("validator");
const bcrypt = require("bcryptjs");

const BlogSchema = new Schema({
  title:{
    type: String,
    required: [true, "Please Enter the Blog Title"],    
  },
  content: {
    type: String,
    required: [true, "Please Enter the Blog Content"],
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', 
  },
  category: {
    type: String,
required:[true,"Enter the Blog Category"]
  },
  tags: [String],
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Comment',
    },
  ],
  likes: {
    type: Number,
    default: 0, 
  },
  coverimage:{
    public_id:{
        type:String,
        required:true
    },
    url:{
        type:String,
        required:true
    }
  },
  createdAt: {
    type: Date,
    default: Date.now, 
  }
});

module.exports = mongoose.model("Blog", BlogSchema);
