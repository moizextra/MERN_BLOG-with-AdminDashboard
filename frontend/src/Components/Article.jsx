import React from 'react'
import {Link} from 'react-router-dom'
const Article = () => {
  return (
    <div className="p-4">
  <div className="border p-4 rounded">
    <img 
      src="https://images.unsplash.com/photo-1677442135703-1787eea5ce01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80"
      alt="Article image"
      className="w-full rounded mb-4" 
    />
    <Link to="/articleDetail" className="text-lg font-bold mb-2">Article title</Link>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos, consequuntur.
    </p>
  </div>
</div>
  )
}

export default Article