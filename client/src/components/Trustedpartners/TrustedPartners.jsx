import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const brandLogos = [
  { src: '/src/Assests/mcdonald.png', alt: 'Brand 1' },
  { src: '/src/Assests/starbucks.png', alt: 'Brand 2' },
  {src : '/src/Assests/kfc.png'} ,
  { src: '/src/Assests/mcdonald.png', alt: 'Brand 1' },
  { src: '/src/Assests/starbucks.png', alt: 'Brand 2' },
  {src : '/src/Assests/kfc.png'},
  { src: '/src/Assests/mcdonald.png', alt: 'Brand 1' },
  { src: '/src/Assests/starbucks.png', alt: 'Brand 2' },
  {src : '/src/Assests/kfc.png'},
  { src: '/src/Assests/mcdonald.png', alt: 'Brand 1' },
  { src: '/src/Assests/starbucks.png', alt: 'Brand 2' },
  {src : '/src/Assests/kfc.png'}
  // Add all your brand logos here
];

const partnerLogos = [
  { src: '/src/Assests/tessa.jpg'},
  { src: '/src/Assests/smc.png' },
  { src: '/src/Assests/siemens.jpeg' },
  { src: '/src/Assests/omron.png'},
  { src: '/src/Assests/innovance.jpg'},
  { src: '/src/Assests/tessa.jpg' },
  { src: '/src/Assests/smc.png' },
  { src: '/src/Assests/siemens.jpeg'},
  { src: '/src/Assests/omron.png' },
  { src: '/src/Assests/innovance.jpg'},
  { src: '/src/Assests/tessa.jpg' },
  { src: '/src/Assests/smc.png'},
  { src: '/src/Assests/siemens.jpeg' },
  { src: '/src/Assestsomron.png' },
  { src: '/src/Assests/innovance.jpg'},
  // Add a/l your partner logos here
];

const TrustedPartners = () => {
  return (
    <>
    <div className="space-y-11 mt-32  ">
      <div className="flex items-center space-x-10 ">
        <h2 className="text-2xl font-montserrat ml-14 ">Trusted By</h2>
        <div className="logo-container ">
          <div className="logo-scroll  gap-3">
            {brandLogos.concat(brandLogos).map((logo, index) => (
              <img key={index} src={logo.src} alt={logo.alt} className="logo" />
            ))}
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-5 ">
        <h2 className="text-2xl font-montserrat ml-14 ">Partner Brands</h2>
        <div className="logo-container2 ">
          <div className="logo-scroll2 gap-3">
            {partnerLogos.concat(partnerLogos).map((logo, index) => (
              <img key={index} src={logo.src} alt={logo.alt} className="logo" />
            ))}
          </div>
        </div>
      </div>
    </div>
    <div className="text-center my-32 ">
        <p className="text-3xl w-[65%] ml-[20%] font-montserrat">
          Empowering sustainable packaging with advanced paper-based solutions.
          Our innovative machines drive global CO2 reduction, paving the way for
          a greener earth and elevating your packaging capabilities.
        </p>
      </div>
</>
    
  );
};
export default TrustedPartners;
