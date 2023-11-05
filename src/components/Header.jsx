import React from 'react'
import logo from '../assets/logo.png'
const Header = () => {
  return (
    <div>
      <div className='z-10 absolute p-1 mx-2'>
        <img className='h-[5.5rem]' src={logo} alt="logo" />
      </div>
    </div>
  )
}

export default Header
