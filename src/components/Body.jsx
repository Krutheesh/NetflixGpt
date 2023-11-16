import React from 'react'
import Header from './Header'
import Forms from './Forms'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div className=''>
     
      <Header/>
     <Forms/>
    </div>
  )
}

export default Body
