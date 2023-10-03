import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCategory, addPage } from "../redux/categorySlice";

const Categories = () => {
  const categories = ["New York", "Mumbai", "Paris", "London"];
  const dispatch = useDispatch();

  const handleCategory = (cat) => {
    dispatch(addCategory(cat))
    dispatch(addPage(0))
  }

  const category = useSelector(store => store?.category?.category)
  return (
    <div className="p-6 mt-[30px] flex flex-wrap  ">
      {categories.map((cat, index) => {
        return (
          <div  key={index} >
            <h3
             
              className={` px-4 font-semibold py-2 rounded-full m-2 cursor-pointer ${category === cat ? "text-white bg-blue-800" : "text-black bg-blue-100"}`}
              onClick={() => handleCategory(cat)}
            >
              {cat}
            </h3>
          </div>
        );
      })}
    </div>
  );
};

export default Categories;
