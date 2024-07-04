import React, { useState, useRef,useEffect } from "react";
import { Items } from "../../constants";
import { SlArrowRight } from "react-icons/sl";
import { SlArrowDown } from "react-icons/sl";
import { SlArrowUp } from "react-icons/sl";

const Solution = () => {
  const [selectedItem, setSelectedItem] = useState(Items[0]);
 const listRef=useRef();
 const itemRefs =useRef(); 

 useEffect(() => {
  itemRefs.current = new Array(Items.length);
}, [Items]);


  const handleItemHover = (Items) => {
    setSelectedItem(Items);
  };

  const scrollToItem = (index) => {
    if (itemRefs.current[index]) {
      itemRefs.current[index].scrollIntoView({ behavior: "smooth" });
      setSelectedItem(Items[index]);
    }
  };

  const handleScrollUp = () => {
    const currentIndex = Items.findIndex((item) => item.id === selectedItem.id);
    if (currentIndex > 0) {
      scrollToItem(currentIndex - 1);
    }
  };

  const handleScrollDown = () => {
    const currentIndex = Items.findIndex((item) => item.id === selectedItem.id);
    if (currentIndex < Items.length - 1) {
      scrollToItem(currentIndex + 1);
    }
  };


  const displayedItems = Items;

  return (
    <div className="flex justify-center items-start  w-full">
      <div className=" rounded-b-3xl shadow-lg h-4/5 w-full relative">
        <div className="flex ">
          <div className="  p-8 relative w-9/12">
            <div className="relative ">
              {" "}
              {/* Added relative positioning */}
              <img
                src={selectedItem.img}
                alt={selectedItem.name}
                className="absolute right-0 rounded-lg w-64 h-64 object-cover"
              />
            </div>
            <div className="relative z-10  w-4/5 ">
              <h2 className="text-5xl font-bold text-[#483d73]">
                {selectedItem.name.split(" ")[(0)]}
              </h2>
              <h2 className="text-5xl font-bold text-red-600 ">
                {selectedItem.name.split(" ").slice(1).join(" ")}
              </h2>
              <div className="w-3/4">
                <p className="text-sm mt-4 font-montserrat w-auto ">
                  {selectedItem.description}
                </p>
              </div>
            </div>

            <div className="absolute  bottom-0 left-0 right-[79%] flex justify-end p-7">
              <button className="px-2 p-2 bg-[#3a2a79] text-white rounded-full hover:bg-white hover:text-[#483d73] hover:border-2 hover:border-[#483d73] text-sm flex delay-100">
                Know More
                <SlArrowRight className=" rounded-full bg-white text-[#483d73] h-4 w-4 p-1 ml-2 mt-[2px] group-hover:bg-[#483d73] group-hover:text-white  " />
              </button>
            </div>
          </div>
          <div className="border-r border-gray-300"></div>
          <div className="w-2/6 p-4  ">
          <SlArrowUp className="ml-40  bounce-animation mt-1 cursor-pointer bg-red-400"  onClick={handleScrollUp} />
            <div ref={listRef} className="space-y-2 h-72 overflow-y-auto hide-scrollbar bg-yellow-200 ">
            
              {displayedItems.map((item,index) => (
                <p
                key={item.id}
                ref={(el) => (itemRefs.current[index] = el)}
                className={`p-2 hover:text-[#483d73] ${
                  selectedItem.id === item.id
                    ? "text-[#483d73] font-bold"
                    : "text-black"
                }`}
                onMouseEnter={() => handleItemHover(item)}
              >
                  {item.name}
                </p>
              ))}
            </div>
            <SlArrowDown className="ml-40  bounce-animation mt-1" onClick={handleScrollDown}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solution;
