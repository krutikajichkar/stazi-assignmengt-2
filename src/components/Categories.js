import React from "react";

const Categories = () => {
  const categories = ["New York", "Mumbai", "Paris", "London"];
  return (
    <div className="p-6 mt-[30px] flex flex-wrap  ">
      {categories.map((cat, index) => {
        return (
          <div >
            <h3
              key={index}
              className="bg-blue-800 text-white px-4 font-semibold py-2 rounded-full m-2 cursor-pointer"
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
