import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { PiBuildingsThin, PiBedThin, PiBathtubThin } from "react-icons/pi";
import { MdLocationSearching } from "react-icons/md";

import { AiOutlineHeart } from "react-icons/ai";
const Card = ({receivedData}) => {
  return (
    <div className=" bg-white w-[500px] flex flex-col justify-center rounded-lg p-2 gap-4 relative cursor-pointer ">
        <div className="absolute top-5 left-5">
            <h1 className="bg-white px-4 py-2 text-blue-800 font-semibold rounded-full opacity-80">For {receivedData?.status.charAt(0).toUpperCase() + receivedData?.status.slice(1)}</h1>
        </div>
        <div className="absolute top-5 right-5">
            <h1 className="bg-white px-2 py-2 text-blue-800 font-semibold rounded-full opacity-80">< AiOutlineHeart className="text-2xl"/></h1>
        </div>
      <img
        className="w-full h-[250px] rounded-lg"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBO3QUGvMdWv123inicOIILS0mYm84MmkFsg&usqp=CAU"
        alt="img"
      />
      <div className="flex flex-col justify-center rounded-md p-4 gap-4">
      <div className="flex items-center gap-2">
        <CiLocationOn className="text-green-600 text-lg" />
        <span className="font-semibold">{receivedData?.location} st.</span>
      </div>
      <h1 className="text-2xl font-bold">
        {receivedData.Address}
      </h1>
      <div className="flex w-full justify-evenly border-b border-dashed ">
        <div className="flex flex-col items-center gap-2 border-r p-2 w-[25%] font-semibold text-xl  border-dashed m-2 ">
          <PiBuildingsThin className="text-2xl font-semibold text-black" />
          <p>{receivedData?.rooms} Room</p>
        </div>
        <div className="flex flex-col items-center gap-2 border-r p-2 w-[25%] font-semibold text-xl  border-dashed m-2">
          <PiBedThin className="text-2xl font-semibold text-black" />
          <p>{receivedData?.bed} Beds</p>
        </div>
        <div className="flex flex-col items-center gap-2 border-r p-2 w-[25%] font-semibold text-xl border-dashed m-2">
          <PiBathtubThin className="text-2xl font-semibold text-black" />
          <p>{receivedData?.bath} bath</p>
        </div>
        <div className="flex flex-col  items-center gap-2 m-2 w-[25%] p-2 font-semibold text-xl">
          <MdLocationSearching className="text-2xl font-semibold text-black" />
          <p>{receivedData?.square_ft} sft</p>
        </div>
      </div>
     <div className="flex justify-between">
     <h3 className="text-blue-800 text-2xl font-semibold mt-2">${receivedData?.rent}<span className="text-black text-xl">/month</span></h3>
     <button className="border-blue-800 border-2 text-blue-700 font-semibold px-4 py-2 rounded-full">Read More</button>
     </div>
      </div>
    </div>
  );
};

export default Card;

export const withPopularTag = (Card) => {
return (props) => {
  return(
    <div className="relative min-h-[400px]">
      <label className="absolute top-[240px] py-2 px-8 rounded-md text-white font-semibold bg-blue-800 -left-3 z-10">Popular</label>
      <div className="absolute top-[270px]  text-white bg-blue-800 -left-3 z-10 p-2 rounded-l-lg"></div>
    <Card {...props}/>
    </div>
  )
}
}