import React, { useState, useRef } from "react";
import { Items } from "../../constants";
import { SlArrowRight } from "react-icons/sl";
import { SlArrowDown } from "react-icons/sl";


const Solution = () => {
    const [selectedItem, setSelectedItem] = useState(Items[0]);
  
    const handleItemHover = (Items) => {
      setSelectedItem(Items);
    };
  
    const displayedItems = Items;
  
    return (
      <div className="min-h-screen bg-gray-100 p-8">
        <div className="flex justify-center items-start">
          <div className="bg-white rounded-b-3xl shadow-lg w-full h-4/5 max-w-6xl overflow-hidden relative">
            <div className="flex">
              <div className="w-3/4 p-7 relative">
                <div className="relative mb-16"> {/* Added relative positioning */}
                  <img
                    src={selectedItem.img}
                    alt={selectedItem.name}
                    className="absolute right-0 rounded-lg w-56 h-56 object-cover"
                  />
                  <div className="relative z-10">
                    <h2 className="text-5xl font-bold text-[#483d73]">
                      {selectedItem.name.split(" ")[0]}
                    </h2>
                    <h2 className="text-5xl font-bold text-red-600">
                      {selectedItem.name.split(" ").slice(1).join(" ")}
                    </h2>
                    <p className="text-sm mt-4 font-montserrat w-3/5">
                      {selectedItem.description}
                    </p>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-[79%] flex justify-end p-7"> {/* Fixed position at the bottom */}
                  <button className="px-2 p-2 bg-[#3a2a79] text-white rounded-full hover:bg-white hover:text-blue-900 hover:border-2 hover:border-blue-900 group text-sm flex delay-100">
                    Know More
                    <SlArrowRight className="bg-white rounded-full text-[#3a2a79] h-4 w-4 p-1 ml-2 mt-[2px] group-hover:bg-[#3a2a79] group-hover:text-white" />
                  </button>
                </div>
              </div>
              <div className="border-r border-gray-300"></div>
              <div className="w-1/4 p-4 bg-white">
                <div className="space-y-2 h-72 overflow-y-auto custom-scrollbar">
                  {displayedItems.map((item) => (
                    <p
                      key={item.id}
                      className={`cursor-pointer p-2 hover:text-[#483d73] ${
                        selectedItem.id === item.id ? "bg-white font-bold" : ""
                      }`}
                      onMouseEnter={() => handleItemHover(item)}
                    >
                      {item.name}
                    </p>
                  ))}
                  {Items.length > 7 && (
                    <div className="flex justify-center items-center mt-2 cursor-pointer">
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Solution;