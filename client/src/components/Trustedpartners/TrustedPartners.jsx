import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Sample data for icons
const trustedByIcons = [
  '\src\Assests\mcdonald.png',
  '\src\Assests\wendys.jpeg',
  '\src\Assests\starbucks.png',
  
];

const partnerBrandsIcons = [
  'src\Assests\siemens.jpeg',
  'src\Assests\omron.png',
  'src\Assests\smc.png',
  // Add more paths to your icons
];

const TrustedPartners = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto p-6 bg-gray-100">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold mb-4">Trusted By</h2>
        <Slider {...settings}>
          {trustedByIcons.map((icon, index) => (
            <div key={index} className="px-2">
              <img src={icon} alt={`Trusted by ${index}`} className="mx-auto" />
            </div>
          ))}
        </Slider>
      </div>

      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold mb-4">Partner Brands</h2>
        <Slider {...settings}>
          {partnerBrandsIcons.map((icon, index) => (
            <div key={index} className="px-2">
              <img src={icon} alt={`Partner Brand ${index}`} className="mx-auto" />
            </div>
          ))}
        </Slider>
      </div>

      <div className="text-center">
        <p className="text-xl">
          Empowering sustainable packaging with advanced paper-based solutions. Our innovative machines drive global CO2 reduction,
          paving the way for a greener earth and elevating your packaging capabilities.
        </p>
      </div>
    </div>
  );
};

export default TrustedPartners;
