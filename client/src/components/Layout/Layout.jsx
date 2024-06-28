import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { IoIosArrowDown, IoIosArrowUp } from '../index';
import { items, titlesWithImages } from '../../constants';
import "../../App.css";

const Layout = () => {
    const carouselRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const scrollDown = () => {
        if (currentIndex < items.length - 2) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const scrollUp = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const handleWheel = (e) => {
        if (e.deltaY > 0) {
            scrollDown();
        } else {
            scrollUp();
        }
    };

    useEffect(() => {
        const carouselElement = carouselRef.current;

        gsap.fromTo(
            carouselElement.children,
            { y: '100%', scale: 0.5, opacity: 0 },
            { y: '0%', scale: 1, opacity: 1, duration: 0.8, stagger: 0.2, ease: 'elastic.out(1, 0.5)' }
        );

        carouselElement.addEventListener('wheel', handleWheel);

        return () => {
            carouselElement.removeEventListener('wheel', handleWheel);
        };
    }, [currentIndex]);

    return (
        <div className="flex flex-col top-0 border-b-2 md:flex-row p-4 sm:p-6 md:p-8 lg:p-4 h-full md:h-full items-center justify-center">
            <div className="grid max-w-7xl grid-cols-2 gap-4 md:grid-cols-4 flex-shrink">
                {titlesWithImages.map((item, index) => (
                    <div key={index} className="flex p-2 flex-col items-center">
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-golden-w h-golden-h rounded-3xl cursor-pointer"
                        />
                        <p className="mt-2 text-center text-sm font-semibold">{item.title}</p>
                    </div>
                ))}
            </div>
            <div className="ml-2 w-2 h-72 md:ml-4 lg:ml-6 border-l border-gray-300"></div>
            <div className="ml-2 md:ml-4 lg:ml-6 w-full md:w-1/4 min-h-full  flex flex-col justify-between">
                <div className="">
                    <div ref={carouselRef}>
                        {items.slice(currentIndex, currentIndex + 2).map((item, index) => (
                            <div key={index} className={`${item.color} w-full flex items-center rounded-3xl mb-4`}>
                                <div className={`h-8 w-w-12 p-2 flex justify-center items-center text-2xl ${item.color}`}>
                                    {<item.icon></item.icon>}
                                </div>
                                <div className={`${item.color}`}>
                                    <h3 className={`${item.color} font-montserrat font-semibold text-16 mb-2`}>{item.title}</h3>
                                    <p className={`${item.color} font-montserrat text-14 line-clamp-3`}>{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex w-full justify-center">
                    {currentIndex > 0 && (
                        <button onClick={scrollUp} className="absolute text-2xl top-0 p-2 rounded-full">
                            <IoIosArrowUp />
                        </button>
                    )}
                </div>
                <div className="bottom-4 flex w-full justify-center text-3xl">
                    {currentIndex < items.length - 2 && (
                        <button onClick={scrollDown} className="absolute bg-transparent flex justify-center items-center rounded-full">
                            <IoIosArrowDown />
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Layout;
