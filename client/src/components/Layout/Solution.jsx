import React, { useState, useRef, useEffect } from "react";
import { Items } from "../../constants/index";
import { SlArrowRight } from "react-icons/sl";
import { SlArrowDown } from "react-icons/sl";
import { SlArrowUp } from "react-icons/sl";

const Solution = () => {
  const [selectedItem, setSelectedItem] = useState(Items[0]);
  const [isScrolled, setIsScrolled] = useState(false);
    const listRef = useRef(null);
  const itemRefs = useRef([]);

  const handleScroll = () => {
    if (listRef.current.scrollTop > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  const handleScrollUp = () => {
    listRef.current.scrollTop -= 50; // Adjust scroll amount as needed
  };

  const handleScrollDown = () => {
    listRef.current.scrollTop += 50; // Adjust scroll amount as needed
  };

  useEffect(() => {
    const currentRef = listRef.current;
    currentRef.addEventListener('scroll', handleScroll);
    return () => currentRef.removeEventListener('scroll', handleScroll);
  }, []);

  const displayedItems = Items;

  return (
    <div className="flex justify-center items-start  w-full ">
      <div className=" rounded-b-5xl shadow-lg h-4/5 w-full relative ">
        <div className="flex ">
          <div className="  p-8 relative w-9/12 ">
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
                {selectedItem.name.split(" ")[0]}
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

            <div className="button-container">
  <button className="custom-button">
    Know More
    <SlArrowRight className="custom-icon" />
  </button>
</div>



          </div>
          <div className="border-r border-gray-300"></div>
          <div className="w-[30%] p-4  ">
            
          {isScrolled && (
          <SlArrowUp
            className="ml-[43%] font-extrabold cursor-pointer -mt-2"
            onClick={handleScrollUp}
          />
        )}
             
            <div
              ref={listRef}
              className="space-y-3 h-72 overflow-y-auto hide-scrollbar mt-2"
            >
              {displayedItems.map((item, index) => (
                <p
                  key={item.id}
                  ref={(el) => (itemRefs.current[index] = el)}
                  className={`p-1 hover:text-[#483d73] ${
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
            <div className="mt-3">
            <SlArrowDown
              className="ml-36 font-bold "
              onClick={handleScrollDown}
            />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solution;
