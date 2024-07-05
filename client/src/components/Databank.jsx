// import React, { useState, useRef, useEffect } from "react";


// const Databank = () => {

//   return (
//     <div className="flex justify-center items-start  w-full bg-red-300 ">
//       <div className=" rounded-b-5xl shadow-lg h-4/5 w-full relative bg-yellow-200 ">
//         <div className="flex bg-orange-300">
//           <div className="  p-8 relative w-9/12  ">
           
//           <div className="border-r border-gray-300 p-4 mb-7 mt-5"></div>

//         </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Databank;

import React, { useState,useRef,useEffect } from 'react';
import faqIcon1 from '../Assests/faqicon.png';  // Adjust the path to your image
import productIcon2 from '../Assests/producticon.png';  // Adjust the path to your image
import machineIcon3 from '../Assests/machineicon.png';  // Adjust the path to your image
import businessIcon4 from '../Assests/ideaicon.png';  // Adjust the path to your image
import { SlArrowDown } from "react-icons/sl";
import { SlArrowUp } from "react-icons/sl";
import { GiLightBulb } from "react-icons/gi";
import { TbLogs } from "react-icons/tb";
import { MdOutlineSettingsInputComposite } from "react-icons/md";
import { AiOutlineApartment } from "react-icons/ai";


const items = [
    {
        id: 1,
        name: 'Knowledge Centre',
        images: [faqIcon1, productIcon2, machineIcon3, businessIcon4],
        icon:<GiLightBulb className='mr-2'/>
    },
  
  {
    id: 2,
    name: 'Blogs',
    images: [faqIcon1, productIcon2, machineIcon3, businessIcon4],
    icon :<TbLogs className='mr-2' />
},
  {
    id: 3,
    name: 'Clientele',
    images: [faqIcon1, productIcon2, machineIcon3, businessIcon4],
    icon:<MdOutlineSettingsInputComposite className='mr-2' />
  },
  {
    id: 4,
    name: 'Business',
    images: [faqIcon1, productIcon2, machineIcon3, businessIcon4],
    icon:<AiOutlineApartment className='mr-2'/>
  },
  {
    id: 5,
    name: 'Business',
    images: [faqIcon1, productIcon2, machineIcon3, businessIcon4],
    icon:<MdOutlineSettingsInputComposite className='mr-2' />
  },
  {
    id: 6,
    name: 'Business',
    images: [faqIcon1, productIcon2, machineIcon3, businessIcon4],
    icon:<TbLogs className='mr-2'/>
  },
  {
    id: 7,
    name: 'Business',
    images: [faqIcon1, productIcon2, machineIcon3, businessIcon4],
    icon:<TbLogs className='mr-2'/>
  },
  {
    id: 8,
    name: 'Media Room',
    images: [faqIcon1, productIcon2, machineIcon3, businessIcon4],
    icon:<TbLogs className='mr-2'/>
  },
  
];

const Databank = () => {
    const [selectedItem, setSelectedItem] = useState(items[0]);
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
  
    const displayedItem = hoveredItem ? items.find(item => item.id === hoveredItem) : selectedItem;
  
    return (
      <div className="flex flex-col md:flex-row p-7 space-y-4 md:space-y-0 md:space-x-4 ">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 w-3/4  mt-5">
          {displayedItem.images.map((image, index) => (
            <div key={index} className="flex flex-col items-center bg-purple-300 p-4 rounded-3xl h-28 w-56 ">
              <img src={image} alt={displayedItem.name} className="h-16 w-16" />
              <p className="text-sm  mt-9">{displayedItem.name}</p>
            </div>
          ))}
        </div>
        <div className="border-r border-gray-300 p-10 mb-7 mt-5"></div>
        <div className="flex flex-col space-y-2  ">
          <SlArrowUp onClick={handleScrollUp} className={`text-black cursor-pointer ml-20 -mt-2  ${!isScrolled ? 'invisible' : ''}`} />
          <div className="flex flex-col space-y-2   overflow-y-auto hide-scrollbar" ref={listRef} style={{ height: '150px' }}>
            {items.map((item) => (
              <a
                key={item.id}
                href="#"
                className={`flex items-center hover:underline hover:decoration-red-500 hover:underline-offset-4 ${
                    selectedItem.id === item.id || hoveredItem ==item.id
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
               {item.icon}{item.name}
              </a>
            ))}
          </div>
          <SlArrowDown onClick={handleScrollDown} className="text-black cursor-pointer ml-20" />
        </div>
      </div>
    );
  };
  
  export default Databank;
