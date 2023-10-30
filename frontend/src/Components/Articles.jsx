import React from 'react'
import Article from './Article'
import Hero from './Hero'
const Articles = () => {
  return (
    <>
    <Hero/>
     <h1 class='font-bold text-xl text-center'>All Articles</h1>
    <section class="flex justify-center">
        <div class='container'>
           <Article/>
           <Article/>
           <Article/>
           <Article/>
        </div>
    </section>
    </>
  )
}

export default Articles