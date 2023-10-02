import React from 'react'
import Card from './Card'


const CardContainer = () => {
  return (
    <div className='flex gap-6 justify-center items-center flex-wrap mt-[240px] p-2'>
        
        {
            Array(6).fill().map((ele) => {
                return(
                    <Card/>
                )
            })
        }
    </div>
  )
}

export default CardContainer