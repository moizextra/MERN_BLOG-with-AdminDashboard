import React from 'react'
import {BsFacebook} from "react-icons/bs"
import {AiFillTwitterCircle} from "react-icons/ai"
import ReadNext from './ReadNext'
import NewsLetter from './NewsLetter'
import Hero from './Hero'
import Comment from './Comment'
const ArticleDetail = () => {
  return (
    <>
<Hero/>
    <div className='flex flex-col justify-center items-center'>
<div class="bg-gray-100 p-4 rounded-lg shadow-md">
    <div class="flex items-center justify-between">
        <div class="flex items-center justify-between space-x-4">
            <img src="https://images.unsplash.com/photo-1618641986557-1ecd230959aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80" alt="Writer's Avatar" class="w-10 h-10 rounded-full"/>
            <div>
                <p class="font-semibold text-lg font-mono">Ahmed Mughal</p>
                <p class="text-gray-600 font-mono">Apr 15 ,2020</p>
            </div>
            <div className='flex items-center justify-around space-x-4'>
<BsFacebook size={35}/>
<AiFillTwitterCircle size={40}/>
            </div>
        </div>
       
    </div>
</div>
    </div>
    <div className='container lg:mt-4 '>
<p className='m-4 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita eos, animi praesentium veniam tempora odio! Dolores ad, officiis voluptatibus eum explicabo qui illum, nisi fuga distinctio nostrum eius deserunt? Optio maxim sed. Delectus et voluptate reprehenderit, esse velit vel aliquid vitae rerum quae magnam in exercitationem voluptates repellendus soluta quo cupiditate eius dolorem minima vero! Veniam nostrum sit laborum. Laboriosam iste ut quas harum impedit. Voluptatum quidem facere accusantium iste excepturi molestias corporis ea enim quos quas, sint reprehenderit, mollitia natus molestiae odio eos dignissimos nisi tempore quo facilis provident Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quis ullam nesciunt earum enim, recusandae id cupiditate fugiat fuga quisquam in sit ratione at laboriosam commodi. Rerum labore repudiandae officia, nostrum vel laudantium ullam at magni? Sapiente quis eveniet voluptatum odit reprehenderit! Nobis pariatur, neque quidem placeat id totam minus magnam perferendis aspernatur officiis delectus quasi harum minima cum sequi dolorem alias. Excepturi, cumque nobis error doloribus eveniet voluptates debitis dignissimos ipsam at! Voluptas, voluptatibus illo sit quod consequuntur facilis neque voluptate sed magnam architecto adipisci laboriosam enim inventore pariatur modi reiciendis quisquam eos laborum eveniet repellat. Voluptatem nisi repudiandae eos inventore optio dolore quod magnam. Consequatur minus nulla, commodi rem odio iure nesciunt blanditiis aliquam, impedit dolorum assumenda dolor ad quaerat fugit veritatis at voluptas dignissimos similique possimus in minima, eius qui vero? Excepturi et impedit iusto nostrum repellat, deleniti repellendus optio eos, modi, quo eveniet ipsa totam suscipit accusamus nemo harum itaque quibusdam architecto delectus ut nulla fugiat numquam quis saepe. Reiciendis itaque repellendus voluptas, mollitia, fugit asperiores atque dolorum voluptatem blanditiis iure in ab optio dignissimos eligendi veniam culpa! Expedita, minus in est fuga ullam excepturi minima enim voluptates qui, iste, doloribus dolorem. Sequi quas unde ipsum hic nulla eaque odit fugit voluptatibus, error, explicabo minima cum ratione aspernatur id modi. Quos a omnis perspiciatis veritatis mollitia quae iusto iure repellat. Rem a animi facere. Magni dignissimos non nisi expedita quod officia quos veniam eligendi delectus, harum iste officiis cumque porro voluptas, dolores, mollitia vel sapiente temporibus? Temporibus, aliquam fugit quasi voluptas, aut iusto iure hic asperiores nostrum praesentium odio quae quod dicta tenetur et, obcaecati aspernatur libero reiciendis! Deserunt ipsum odit quas, quo, vero illo suscipit itaque, consequuntur blanditiis ipsa quod ad dolor tenetur assumenda voluptate earum corrupti esse error. Omnis accusantium magni, inventore amet vel debitis qui delectus dicta consequatur nesciunt veritatis repudiandae harum voluptas aspernatur accusamus. Sunt, impedit eos aliquid, neque eligendi doloremque dolores modi omnis excepturi alias, corrupti iure eius repellendus ut delectus dolorum perferendis laborum maxime officiis inventore? Harum deleniti tenetur et recusandae perspiciatis eveniet animi impedit? </p>
    <img src="https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" className='m-3 w-3/4 rounded-lg shadow-lg' alt="" />
    <p className='m-4 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae accusantium assumenda illum animi sunt at facilis iusto magni rem, ullam, dignissimos, esse ab quis! Reiciendis, sapiente quasi voluptate odio natus laborum ipsam! Fugiat, aliquid.</p>
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
    <Comment/>
    <ReadNext/>
    <NewsLetter/>
    </>
  )
}

export default ArticleDetail