import React from 'react'
import logo from '../../assets/images/logo.png'
import { format } from "date-fns";

const Header = () => {
  return (
    <div className='flex justify-content flex-col items-center gap-2 mt-4'>
        <img src={logo} alt="Logo" />
        <p className='text-2xl font-bold text-accent'>News Portal</p>
        <p className='text-semibold text-accent'>{format(new Date(), "EEEE, dd MMM yyyy")}</p>
    </div>
  )
}

export default Header