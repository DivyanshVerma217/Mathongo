import React from 'react'
import icon1 from '../img/Untitled.png'

function Navbar() {
  return (
    <div className='p-2'>

        <div className='flex items-center'>
            <img className='h-16 w-16' src = {icon1} alt=""/>
            <h1 className='text-xl font-bold '>OVERPAY.</h1>
            
        </div>


    </div>
  )
}

export default Navbar