import React from "react";
import { item } from "../../constants";
import { useState } from "react";

const Application = ({ onHover }) => {

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index, items) => {
    setHoveredIndex(index);
    onHover(items);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };
 

  return (
    <div className="grid grid-cols-6 gap-5 p-3 -mt-2">
      {item.map((items, index) => (
        <div
          key={index}
          className="relative w-30 h-24 rounded-md overflow-hidden"
          onMouseEnter={() => handleMouseEnter(index, items)}
          onMouseLeave={handleMouseLeave}
        >

          <img
            src={items.src}
            alt={items.alt}
            className={`object-cover w-full h-full transition-transform duration-300 ease-in-out hover:translate-y-[-20%] ${hoveredIndex === index ? "scale-105" : "scale-100"}`}
          />
           <div
            className={`absolute inset-0 flex items-center justify-center bg-slate-700 bg-opacity-0 transition-all duration-300 ease-in-out ${hoveredIndex === index ? "bg-gradient-to-t from-slate-700 " : "bg-transparent"}`}
          >
          <p
            onMouseEnter={() => onHover(items)}
            className={`text-white text-sm  text-center -mb-16 transition-opacity duration-300 ease-in-out  transform${hoveredIndex === index ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}`}>
            {items.name}
          </p>
          </div>
        </div>
        
      ))}
    </div>
  );
};

const ApplicationPage = () => {
  const [hoveredItem, setHoveredItem] = useState({
    src: item[0].src,
    name: "Paper Cups",
    description:
      "Paper cups are disposable containers made from paper and often lined with plastic or wax to prevent liquid leakage. They are widely used for beverages, particularly in the food and beverage industry.",
  
    });

  const handleHover = (items) => {
    setHoveredItem(items);
  };

  return (
    <div className="rounded-3xl h-auto flex justify-center items-start ">
      <div className="overflow-hidden  relative">
        <div className="flex">
          <div className="w-3/5 p-4 ">
            <Application onHover={handleHover} />
          </div>
          <div className="relative flex items-center">
            <div className="border-r border-gray-300 h-4/5 absolute left-10 transform -translate-x-1/3"></div>
          </div>
          <div className="w-1/3 ml-16 mt-24 relative">
            <div
              className="absolute inset-0 bg-cover bg-center h-56 w-56 mt-32 opacity-10 transition-opacity duration-300 ease-in-out ml-48"
              style={{ backgroundImage: `url(${hoveredItem.bgpic})` }}
            ></div>
            <div className="relative z-10 p-4 -mt-14">
              <h2 className="text-5xl font-montserrat font-bold text-[#483d73]">
                {hoveredItem.name.split(" ")[0]}
              </h2>
              <h2 className="text-5xl font-montserrat font-bold text-red-600">
                {hoveredItem.name.split(" ")[1]}
              </h2>
              <p className="text-lg mt-3">{hoveredItem.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationPage;
