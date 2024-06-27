import React, { useState, useEffect, useRef } from 'react';
import { IoIosArrowRoundForward, IoMdArrowBack } from '../index';
import { cars, SidebarLinks } from '../../constants';
import {
  first,
  second,
  i1,
  i2,
  i3,
  i4,
  i5,
  i6,
  i7,
  i8,
} from '../../Assests';

const CarShowcase = () => {
  const [hoveredCategory, setHoveredCategory] = useState('Paper Cup Machine');
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);

  const images = {
    first,
    second,
    i1,
    i2,
    i3,
    i4,
    i5,
    i6,
    i7,
    i8,
  };

  const filteredCars = cars
    .filter((car) => car.category === hoveredCategory)
    .map((car) => ({
      ...car,
      image: images[car.image],
    }));

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex + 1) % filteredCars.length
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + filteredCars.length) % filteredCars.length
    );
  };

  useEffect(() => {
    setCurrentIndex(0);
  }, [hoveredCategory]);

  return (
    <div className="w-full md:h-[60vh] flex flex-col items-center font-medium">
      <div className="w-full max-w-7xl flex flex-col md:flex-row rounded-lg overflow-hidden">
        <div className="flex h-full justify-center items-center w-full md:w-3/4 relative px-16">
          {filteredCars.length > 3 && (
            <button
              onClick={handlePrev}
              className="absolute left-0 z-10 p-2 text-4xl ml-5"
            >
              <IoMdArrowBack />
            </button>
          )}
          <div className="flex overflow-hidden w-full" ref={containerRef}>
            {filteredCars.slice(currentIndex, currentIndex + 3).map((car, index) => (
              <div key={car.name} className="group mx-2 mt-10 text-center p-2 w-1/3">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-golden-w h-golden-h object-cover rounded-lg"
                />
                <h3 className="text-lg font-bold mt-2">{car.name}</h3>
                <div className="flex justify-center space-x-4 mt-2">
                  <a
                    href={`${car.link}/learn`}
                    className="text-gray-600 hover:text-gray-800 transition-colors duration-300 relative"
                  >
                    Learn
                    <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gray-800 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                  </a>
                  <a
                    href={`${car.link}/order`}
                    className="text-gray-600 hover:text-gray-800 transition-colors duration-300 relative"
                  >
                    Order
                    <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gray-800 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                  </a>
                </div>
              </div>
            ))}
          </div>
          {filteredCars.length > 3 && (
            <button
              onClick={handleNext}
              className="absolute right-0 z-10 p-2 text-4xl mr-5"
            >
              <IoIosArrowRoundForward />
            </button>
          )}
        </div>
        <div className="w-full md:w-1/4 p-10 border-l border-gray-300 ml-8">
          <div className="space-y-6">
            {SidebarLinks.map((link) => (
              <div
                key={link.name}
                onMouseEnter={() => {
                  setHoveredCategory(link.name);
                  setCurrentIndex(0);
                }}
                className={`flex items-center justify-start space-x-4 text-lg text-gray-800 hover:text-black transition-colors duration-300 cursor-pointer ${hoveredCategory === link.name ? ' font-semibold' : ' font-normal'}`}
              >
                {link.icon}
                <span>{link.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-[-10px] w-full">
        <div className="flex justify-center space-x-2" style={{ width: '75%', marginLeft: '-15rem' }}>
          {filteredCars.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full mx-1 cursor-pointer ${currentIndex === index ? 'bg-black' : 'bg-gray-400'}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarShowcase;
