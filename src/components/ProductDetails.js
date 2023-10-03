import React from 'react'
import { useParams } from 'react-router-dom';
import Card, { withPopularTag } from './Card';
import {data} from '../utils/data'
const ProductDetails = () => {
    const {id} = useParams();
    
    const PopularCard = withPopularTag(Card)
  return (
    <div className='mt-[250px] h-full flex justify-center'>
        {
            data.filter((item) => item.id == id).map((ele) => {
                return(
                   <>{ele.isPopular ? <PopularCard receivedData={ele}/>  : <Card receivedData={ele}/>}</>
                )
            })
        }
    </div>
  )
}

export default ProductDetails