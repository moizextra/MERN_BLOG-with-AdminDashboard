import React,{useEffect} from 'react'
import Article from './Article'
import Hero from './Hero'
import { getBlogs } from '../BlogSlices'
import {useDispatch,useSelector } from 'react-redux'
const Articles = () => {
  const dispatch = useDispatch();
  const Blogs=useSelector((state)=>state.Blog.Blogs);
useEffect(() => {
dispatch(getBlogs());
},[dispatch])

  return (
    <>
    <Hero/>
     <h1 class='font-bold text-xl text-center'>All Articles</h1>
    <section class="flex justify-center">
        <div class='container'>
          { Blogs && Blogs.map((blog)=>(
            <Article blog={blog}/>
          ))}
        </div>
    </section>
    </>
  )
}

export default Articles