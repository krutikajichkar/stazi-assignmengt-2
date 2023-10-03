import React from 'react'
import Categories from './Categories'
import { useParams } from 'react-router-dom'
const Header = () => {
  const {id} = useParams()
  return (
    <div className='flex justify-center flex-col items-center  fixed z-20 bg-[#e0f7fa] top-0 left-0 right-0'>
        <h1 className='text-3xl font-semibold w-[550px] text-center mt-[30px]'>Featured Listed Property</h1>
        <p className='mt-3 text-lg w-[550px] text-center leading-5'>Real estate can be bought, sold, leased, or rented and can be a valuable investment opportunity. The value of real estate can be...</p>
       {id ? "" : <div className='w-full px-36'> <Categories /></div>}
    </div>
  )
}

export default Header