import React from 'react'

const NewsLetter = () => {
  return (
    <div class=" py-10">
    <div class="container mx-auto px-4 ">
      <div class="max-w-xl mx-auto">
        <div class="bg-white shadow-lg  px-6 py-8 border-t-8 border-yellow-500">
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">Subscribe to Our Newsletter</h2>
          <p class="text-gray-600 mb-6">Stay updated with our latest news and promotions.</p>
          <form action="#" method="POST" class="mb-4">
            <div class="flex items-center border border-gray-300  overflow-hidden">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                class="w-full px-4 py-3 focus:outline-none"
              />
              <button
                type="submit"
                class="bg-gray-800 text-white font-semibold px-4 py-3"
              >
                Subscribe
              </button>
            </div>
          </form>
          <p class="text-sm text-gray-500">
            By subscribing, you agree to receive our newsletters and agree to our
            <a href="#" class="text-blue-500 hover:underline">Privacy Policy</a>.
          </p>
        </div>
      </div>
    </div>
  </div>
  
  )
}

export default NewsLetter