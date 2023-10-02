import React from "react";

const Categories = ({setCategory , category , setPage}) => {
  const categories = ["New York", "Mumbai", "Paris", "London"];

  const handleCategory = (cat) => {
    setCategory(cat);
    setPage(0)
    console.log(category)
  }
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
