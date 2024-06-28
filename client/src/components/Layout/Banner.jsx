import React, { useState, useEffect, useRef } from 'react';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from '../index';
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
import BlobAnimation from '../Blobanimation';

const AboutLayOut = () => {
  const [hoveredCategory, setHoveredCategory] = useState('All Products');
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
    .filter((car) => car.category.includes(hoveredCategory))
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
    <div className="w-full md:h-[63vh] flex flex-col justify-center items-center font-medium">
      <div className="w-full flex flex-col md:flex-row rounded-lg overflow-hidden">
        <div className="flex h-full justify-center items-center w-full md:w-3/4 relative px-16">
          {filteredCars.length > 3 && (
            <button
              onClick={handlePrev}
              className="absolute left-0 z-10 p-2 text-4xl ml-5"
            >
              <MdKeyboardArrowLeft />
            </button>
          )}
          <div className="flex overflow-hidden w-full" ref={containerRef}>
            {filteredCars.slice(currentIndex, currentIndex + 3).map((car, index) => (
              <div key={car.name} className="group mx-4 bg-transparent text-center p-2 w-1/3 relative">
                {index === 0 && (
                  <div className="absolute inset-0">
                    <BlobAnimation containerRef={containerRef} />
                  </div>
                )}
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-golden-w bg-transparent
                    h-golden-h object-cover rounded-lg relative"
                />
                <h3 className="text-lg bg-transparent font-bold mt-2">{car.name}</h3>
                <div className="flex justify-center space-x-4 mt-2">
                  <a
                    href={`${car.link}/learn`}
                    className="primary-button relative"
                  >
                    Book Now
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
              <MdKeyboardArrowRight />
            </button>
          )}
        </div>
        <div className="w-full md:w-1/4 p-6 md:space-y-2 lg:space-y-4 border-l border-gray-300 ml-4">
          {SidebarLinks.map((link) => (
            <div
              key={link.name}
              onMouseEnter={() => {
                setHoveredCategory(link.name);
                setCurrentIndex(0);
              }}
              className={`flex items-start justify-start space-x-4 text-lg text-gray-800 hover:text-black transition-colors duration-300 cursor-pointer ${hoveredCategory === link.name ? 'font-semibold' : 'font-normal'}`}
            >
              <span>
                <link.icon></link.icon>
              </span>
              <span>{link.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center w-full">
        <div className="flex justify-center space-x-2" style={{ width: '75%', marginLeft: '-15rem' }}>
          {filteredCars.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full mx-1 cursor-pointer ${currentIndex === index ? 'bg-black' : 'bg-gray-400'}`}
              onClick={() => setCurrentIndex(index)}
            >
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutLayOut;
