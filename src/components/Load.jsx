import React from 'react'
import { Bars,ColorRing } from 'react-loader-spinner';
export const Bar = () => {
  return (
    <div>
  <Bars
  height="80"
  width="80"
  color="#FF0000"
  ariaLabel="bars-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/>
    </div>
  )
}

export const Ring = () => {
  return(
    <div className='flex justify-center items-center'>
  <ColorRing
  visible={true}
  height="50"
  width="50"
  ariaLabel="blocks-loading"
  wrapperStyle={{}}
  wrapperClass="blocks-wrapper"
  colors={['#FF0000', '#FF0000', '#FF0000', '#FF0000', '#FF0000']}
/>

    </div>
  )
}

