import React from 'react';
import { Link } from 'react-router-dom';

const Article = ({blog}) => {

  return (
    <div className="p-4">
      <div className="border p-4 rounded">
        <img 
          src={blog.coverimage.public_id}
          alt="Article image"
          className="w-full rounded mb-4 h-80" 
        />

       <h1><Link to={`/article/${blog._id}`} className="text-lg font-bold mb-2">{blog.title}</Link></h1>
        <p>
          {blog.content.substring(0, 50)}...
        </p>
      </div>
    </div>
  );
}

export default Article;