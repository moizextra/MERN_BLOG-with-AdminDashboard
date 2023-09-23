import React from 'react'

const Hero = () => {
  return (
    <div className=" py-16 ">
    <div className="max-w-7xl mx-auto px-4 py-2 border-b-2 border-gray-500 ">
      <div className="flex flex-col items-center text-center">

        <img 
          className="w-full max-w-lg mb-8 rounded-lg shadow-lg" 
          src="/Hero.png"
          alt="Hero Image"
        />

        <h1 className="text-3xl font-bold mb-4">A few words about this blog platform, Ghost, and how this site was made</h1>

        <p className="text-gray-700 max-w-md">
        Why Ghost (& Figma) instead of Medium, WordPress or other options?
        </p>

      </div>
    
    </div>
  </div>
  )
}

export default Hero