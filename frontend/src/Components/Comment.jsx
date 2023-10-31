import React from 'react'

const Comment = () => {
  return (
    <div class="px-4 py-8">
    <h1 class="text-2xl  mb-4 font-bold">Leave a Comment</h1>
    <div class="md:w-1/2 mx-auto">
        <form class="bg-white p-4 rounded shadow">
            <div class="mb-4">
                <label for="name" class="block text-gray-600 text-sm font-semibold mb-2">Your Name</label>
                <input type="text" id="name" name="name" class="w-full py-2 px-3 border rounded"/>
            </div>
            <div class="mb-4">
                <label for="comment" class="block text-gray-600 text-sm font-semibold mb-2">Your Comment</label>
                <textarea id="comment" name="comment" class="w-full h-32 py-2 px-3 border rounded"></textarea>
            </div>
            <div class="mb-4">
                <button type="submit" class="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-800">Submit Comment</button>
            </div>
        </form>
    </div>
</div>
  )
}

export default Comment