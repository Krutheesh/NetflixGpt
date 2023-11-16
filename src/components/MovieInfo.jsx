import React from 'react'

const MovieInfo = ({title,overView}) => {
  return (
    <div className='absolute  bg-gradient-to-r from-black aspect-video flex w-[100%] justify-start items-center pt-5'>
      <div className='w-[50%] ml-10 space-y-5'>
      <h2 className='text-6xl text-white font-semibold '>{title}</h2>
      <p className='text-white text-lg'>{overView}</p>
      <div className=''>
        <button className='bg-opacity-50 px-12 py-3 rounded translate-x-0  bg-gray-200'>play</button>
        <button className=' bg-opacity-50 px-12  py-3 rounded mx-8 bg-gray-200'>More info</button>
      </div>

      </div>
      
    </div>
  )
}

export default MovieInfo
