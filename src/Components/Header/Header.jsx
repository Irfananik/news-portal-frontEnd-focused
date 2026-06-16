import React from 'react'
import logo from '../../assets/images/logo.png'

const Header = () => {
  return (
    <div className='flex justify-content flex-col items-center gap-2 mt-4'>
        <img src={logo} alt="Logo" />
        <p className='text-2xl font-bold'>News Portal</p>
    </div>
  )
}

export default Header