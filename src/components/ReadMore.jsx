import React, { useState } from 'react'

const ReadMore = ({content}) => {
  const [isFullComment, setIsFullComment] = useState(false)
  return (
    <div>
      {
        isFullComment?<p className='pl-1 py-2 text-gray-300'>{content} <button onClick={() => setIsFullComment(false)} className='text-blue-500 px-5' >   show less</button></p>
        :<p className='pl-1 py-2 text-gray-300'>{content.substring(0,350)} <button onClick={() => setIsFullComment(true)} className='text-blue-500' >....  read more</button></p> 

      }
    </div>
  )
}

export default ReadMore
