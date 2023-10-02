import React,{useState} from 'react'
import Card, { withPopularTag } from './Card'
import { GiSandsOfTime } from "react-icons/gi";
import {data} from '../utils/data';

const CardContainer = ({category , page , setPage}) => {
 
  const PopularCard = withPopularTag(Card)
  return (
   
    <div>
      <div className='flex gap-6 justify-center items-center flex-wrap mt-[240px] p-2'>
        
        {
            data.filter((item) => item.city === category).slice(0,6+page).map((ele) => {
                return(
                 <>{ele.isPopular ? <PopularCard receivedData={ele} key={ele.id}/> : <Card receivedData={ele} key={ele.id}/>}</>
                )
            })
        }

       
    </div>
    <div className='mt-12 flex justify-center pb-12   text-xl text-white font-semibold'>
    { data.filter((item) => item.city === category).length <= page+6 ? "" : <div className=' bg-blue-800 flex items-center gap-2 py-2 px-4 rounded-full cursor-pointer'>
     <GiSandsOfTime/>
       <span onClick={() => setPage(page+3)}>Show More</span>
     </div>}
    </div>
    </div>
  )
}

export default CardContainer