/* eslint-disable no-unused-vars */
import React from 'react'

const Button = ({label,iconURL}) => {
  return (
    <button className='flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-lime-500 rounded-full text-white border-lime-500'>
    {label}
    {iconURL && <img src={iconURL} alt='arrow right icon' className='ml-2 rounded-full w-5 h-5 '></img>}
    </button>
    
  )
}

export default Button