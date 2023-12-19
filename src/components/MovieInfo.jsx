import React from 'react'

const MovieInfo = ({title,overView}) => {
  return (
    <div className='absolute   bg-gradient-to-r from-black aspect-video flex w-[100%] justify-start  items-center pt-[3rem] pb-[1rem] md:pt-[2rem] md:pb-[4rem]'>
      <div className='w-[50%]  ml-7 md:ml-10 space-y-3 md:space-y-5'>
      <h2 className='md:text-6xl   font-semibold text-[1.5rem] text-gray-300'>{title}</h2>
      <p className='text-white md:text-lg hidden md:block'>{overView}</p>
      <div className=''>
        <button className='bg-opacity-50 md:px-12 md:py-3  px-3 py-1 rounded translate-x-0 text-[0.8rem] md:text-[1rem] bg-gray-200'>play</button>
        <button className=' bg-opacity-50  md:px-12  md:py-3 px-3 py-1 rounded md:mx-8 mx-2 text-[0.8rem] md:text-[1rem] bg-gray-200'>More info</button>
      </div>

      </div>
      
    </div>
  )
}

export default MovieInfo
