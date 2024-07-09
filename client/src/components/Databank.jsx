import React, { useState, useRef, useEffect } from "react";
import { Itemslist } from "../constants";
import { SlArrowDown } from "react-icons/sl";
import { SlArrowUp } from "react-icons/sl";

const Databank = () => {
  const [selectedItem, setSelectedItem] = useState(Itemslist[0]);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const listRef = useRef(null);

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
    if (currentRef) {
      currentRef.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (currentRef) {
        currentRef.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const handleItemHover = (item) => {
    setHoveredItem(item.id);
    setSelectedItem(item);
  };

  const handleItemLeave = () => {
    setHoveredItem(null);
  };

  const displayedItem = hoveredItem
    ? Itemslist.find((item) => item.id === hoveredItem)
    : selectedItem;

  return (
    <div className="flex flex-col md:flex-row p-10 space-y-4 md:space-y-0 md:space-x-4 rounded-3xl -mt-5 mb-2">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-20 w-3/4 ">
        {displayedItem.images.map((image, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-purple-300 p-4 rounded-3xl h-28 w-56 mt-1 "
          >
            <img src={image.src} alt={image.alt} className="h-16 w-16" />
            <p className="text-sm  mt-9">{image.alt}</p>
          </div>
        ))}
      </div>

      <div className="border-r border-gray-300 p-9 mb-1 pt-1"></div>
      <div className="flex flex-col space-y-2  ">
        <SlArrowUp
          onClick={handleScrollUp}
          className={`text-black cursor-pointer ml-20 -mt-4 ${
            !isScrolled ? "invisible" : ""
          }`}
        />
        <div
          className="flex flex-col space-y-2 overflow-y-auto hide-scrollbar h-32"
          ref={listRef}
        >
          {Itemslist.map((item) => (
            <a
              key={item.id}
              href="#"
              className={`flex items-center hover:underline hover:decoration-red-500 hover:underline-offset-4 ${
                selectedItem.id === item.id || hoveredItem == item.id
                  ? "text-[#483d73] font-bold"
                  : "text-black"
              }hover:text-black hover:font-bold `}
              // className={`text-black flex items-center ${selectedItem.id === item.id ? 'font-bold' : ''}
              //  hover:text-[#483d73] hover:font-bold hover:underline hover:decoration-red-500 hover:underline-offset-4`}
              onClick={(e) => {
                e.preventDefault();
                setSelectedItem(item);
              }}
              onMouseEnter={() => handleItemHover(item)}
              onMouseLeave={handleItemLeave}
            >
              {<item.icon className="mr-2"></item.icon>}
              {item.name}
            </a>
          ))}
        </div>
        <SlArrowDown
          onClick={handleScrollDown}
          className="text-black cursor-pointer ml-20 "
        />
      </div>
    </div>
  );
};

export default Databank;
