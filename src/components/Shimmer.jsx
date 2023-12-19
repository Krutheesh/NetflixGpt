import React from 'react'
import ListShimmer from './ListShimmer'
import ShimmerHeader from './ShimmerHeader'
const Shimmer = () => {
  return (
   
<div className='bg-black h-[100vh] w-full'>

<ShimmerHeader/>
  <ListShimmer/>
  <ListShimmer/>
  <ListShimmer/>
  
  
</div>

  )
}

export default Shimmer
