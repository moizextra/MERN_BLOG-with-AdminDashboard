import React, { useEffect } from 'react'
import { BsFacebook } from "react-icons/bs"
import { AiFillTwitterCircle } from "react-icons/ai"
import ReadNext from './ReadNext'
import NewsLetter from './NewsLetter'
import Hero from './Hero'
import {useDispatch,useSelector } from 'react-redux'
import Comment from './Comment'
import { useParams } from 'react-router-dom';
import { getBlogsDetails } from '../BlogSlices/BlogDetail'
const ArticleDetail = () => {
  const dispatch=useDispatch();
  let {id}=useParams();
useEffect(()=>{
  dispatch(getBlogsDetails(id));
},[dispatch,id])
const BlogDetail=useSelector((state)=>state.BlogDetail.BlogDetails);
if(!BlogDetail){return <h1>Loading...</h1>}
  return (
    <>
      <Hero />
      <div className='flex flex-col justify-center items-center'>
        <div class="bg-gray-100 p-4 rounded-lg shadow-md">
          <div class="flex items-center justify-between">
            <div class="flex items-center justify-between space-x-4">
              <img src="https://images.unsplash.com/photo-1618641986557-1ecd230959aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80" alt="Writer's Avatar" class="w-10 h-10 rounded-full" />
              <div>
                <p class="font-semibold text-lg font-mono">Ahmed Mughal</p>
                <p class="text-gray-600 font-mono">Apr 15 ,2020</p>
              </div>
              <div className='flex items-center justify-around space-x-4'>
                <BsFacebook size={35} />
                <AiFillTwitterCircle size={40} />
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className='container lg:mt-4 '>
        <p className='m-4 text-center'>{BlogDetail.content.substring(0,500)} </p>
        <img src={BlogDetail.coverimage.public_id}className='m-3 w-3/4 rounded-lg shadow-lg' alt="" />
        <p className='m-4 text-center'>{BlogDetail.content.substring(500)}</p>
      </div>
      <div className="flex justify-center items-center">
        <div >
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-l m-3">
            Share on Facebook
          </button>
          <button className="bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded-r m-3">
            Share on Twitter
          </button>
        </div>
      </div>
      <div>
        <div className='flex flex-col justify-center items-center border-b-4 border-yellow-500'>
          <p className='leading-9 m-4 text-center'>Tags:product design,culture,development</p>
        </div>
      </div>
      <Comment />
      <ReadNext />
      <NewsLetter />
    </>
  )
}

export default ArticleDetail