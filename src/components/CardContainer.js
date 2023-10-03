import React, { useState } from "react";
import Card, { withPopularTag } from "./Card";
import { GiSandsOfTime } from "react-icons/gi";
import { data } from "../utils/data";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addPage } from "../redux/categorySlice";

const CardContainer = () => {
  const dispatch = useDispatch();
  const PopularCard = withPopularTag(Card);
 
  const category = useSelector(store => store?.category?.category)
  const page = useSelector(store => store?.category?.page)
  return (
    <div>
      <div className="flex gap-6 justify-center items-center flex-wrap mt-[240px] p-2">
        {data
          .filter((item) => item.city === category)
          .slice(0, 6+page )
          .map((ele) => {
            return (
                <div key={ele.id}>{ele.isPopular ? <Link to={`/product/${ele.id}`} key={ele.id}><PopularCard receivedData={ele} /></Link> : <Link to={`/product/${ele.id}`} key={ele.id}><Card receivedData={ele} /></Link>}</div>
              // <>
              //   {ele.isPopular ? (
              //     <PopularCard receivedData={ele} />
              //   ) : (
              //     <Card receivedData={ele} />
              //   )}
              // </>
            );
          })}
      </div>
      <div className="mt-12 flex justify-center pb-12   text-xl text-white font-semibold">
        {data.filter((item) => item.city === category).length === page + 6 ? (
          ""
        ) : (
          <div onClick={() => dispatch(addPage(1))} className=" bg-blue-800 flex items-center gap-2 py-2 px-4 rounded-full cursor-pointer">
            <GiSandsOfTime />
            <span  >Show More</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default CardContainer;
