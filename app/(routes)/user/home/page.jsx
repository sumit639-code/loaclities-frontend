import Post from '@/app/components/Post'
import Write from '@/app/components/Write'
import React from 'react'

const page = () => {
  return (
    <div className="text-white p-4 flex flex-col items-center mb-14">
      <Write />
      <Post />
    </div>
  )
}

export default page