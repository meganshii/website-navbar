// src/StackCardLayout.js
import React from 'react';

const cards = [
  {
    id: 1,
    image: '/src/Assests/team.jpg', // Replace with your image path
    title: '40+ years of Experince',
    description: 'With over 40 years of industry expertise, Nessco India has a rich history of innovation and reliability. Our extensive experience allows us to deliver high-quality, cutting-edge packaging solutions tailored to our clients needs. Trust our proven track record and deep industry knowledge to provide exceptional products and services.',
  },
  {
    id: 2,
    image: '/src/Assests/strength.jpeg', // Replace with your image path
    title: 'Card 2 Title',
    description: 'Description for card 2.',
  },
  {
    id: 3,
    image: '/src/Assests/ourmachine.jpg', // Replace with your image path
    title: 'Card 3 Title',
    description: 'Description for card 3.',
  },
  {
    id: 4,
    image: '/src/Assests/team.jpg', // Replace with your image path
    title: 'Card 4 Title',
    description: 'Description for card 4.',
  },
  {
    id: 5,
    image: '/src/Assests/team.jpg', // Replace with your image path
    title: 'Card 5 Title',
    description: 'Description for card 5.',
  },
];

const Card = () => {
    return (
        <div className="h-screen overflow-y-auto snap-y snap-mandatory">
          {cards.map((card) => (
            <div
              key={card.id}
              className="flex flex-col justify-center items-center h-screen snap-center p-6 shadow-md animate-fadeIn"
            >
              <div className='relative flex flex-row bg-[#0d222a] h-[85%] w-[90%] rounded-3xl ml-5'>
                <div className="absolute p-4 top-0 left-0 bg-[#0d222a] rounded-t-3xl rounded-br-3xl  text-white flex items-center h-48 w-60">
                  <p className='text-white font-bold font-montserrat text-lg'>{card.title}</p>
                </div>
                <div className="flex items-center justify-center mt-8">
                  <img src={card.image} className="h-[96%] w-[50%]  rounded-3xl -mt-5  bg-yellow-600" alt={card.title} />
                  <div className=" text-white  w-96 text-xl font-montserrat leading-10  ml-[10%]">
                    <p className="text-center ml-5">{card.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      );
    };

export default Card;
