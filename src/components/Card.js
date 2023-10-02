import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { PiBuildingsThin, PiBedThin, PiBathtubThin } from "react-icons/pi";
import { MdLocationSearching } from "react-icons/md";
import { GiSandsOfTime } from "react-icons/gi";
const Card = () => {
  return (
    <div className=" bg-white w-[500px] flex flex-col justify-center rounded-lg p-2 gap-4 relative cursor-pointer">
        <div className="absolute top-5 left-5">
            <h1 className="bg-white px-4 py-2 text-blue-800 font-semibold rounded-full">For sale</h1>
        </div>
      <img
        className="w-full h-[250px] rounded-lg"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBO3QUGvMdWv123inicOIILS0mYm84MmkFsg&usqp=CAU"
        alt="img"
      />
      <div className="flex flex-col justify-center rounded-md p-4 gap-4">
      <div className="flex items-center gap-2">
        <CiLocationOn className="text-green-600 text-lg" />
        <span className="font-semibold">8300 st.</span>
      </div>
      <h1 className="text-2xl font-bold">
        Big sa Title Hoga aur bhi bhotothot bada
      </h1>
      <div className="flex w-full justify-evenly border-b border-dashed ">
        <div className="flex flex-col items-center gap-2 border-r p-2 w-[25%] font-semibold text-xl  border-dashed m-2 ">
          <PiBuildingsThin className="text-2xl font-semibold text-black" />
          <p>2 Room</p>
        </div>
        <div className="flex flex-col items-center gap-2 border-r p-2 w-[25%] font-semibold text-xl  border-dashed m-2">
          <PiBedThin className="text-2xl font-semibold text-black" />
          <p>4 Beds</p>
        </div>
        <div className="flex flex-col items-center gap-2 border-r p-2 w-[25%] font-semibold text-xl border-dashed m-2">
          <PiBathtubThin className="text-2xl font-semibold text-black" />
          <p>1 bath</p>
        </div>
        <div className="flex flex-col  items-center gap-2 m-2 w-[25%] p-2 font-semibold text-xl">
          <MdLocationSearching className="text-2xl font-semibold text-black" />
          <p>732 sft</p>
        </div>
      </div>
     <div>
     <h3 className="text-blue-800 text-2xl font-semibold mt-2">$7,255<span className="text-black text-xl">/month</span></h3>
     </div>
      </div>
    </div>
  );
};

export default Card;
