// src/AboutUs.js
import React from "react";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { data } from "../../constants";

const AboutUs = ({ heading, description, stats, cards }) => {
  return (
    <div className="flex flex-col items-center p-7 bg-gray-100">
      <div className="text-center w-full max-w-6xl ">
        <h1 className="text-4xl px-56 py-2 mt-20">
          {heading.split(" ").map((word, index) =>
            word === "Machine" ? (
              <span key={index} className="text-[#483d73]">
                {word}{" "}
              </span>
            ) : (
              word + " "
            )
          )}
        </h1>
        <div className="flex justify-between items-center w-full">
          <div className="text-center ">
            <h2 className="text-3xl font-bold text-[#483d73]">
              {stats.machinesSold}
            </h2>
            <p className="text-xl">Machines Sold</p>
          </div>
          <p className="text-lg mx-4 w-[62%] leading-5">{description}</p>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[#483d73] -mt-3">
              {stats.readyStockMachines}
            </h2>
            <p className="text-xl">Ready Stock Machines</p>
          </div>
        </div>
        <a
          href="#"
          className="text-[#483d73] mt-4 mr-16 inline-block underline-offset-3 underline"
        >
          Read more
        </a>
      </div>

      <div className="flex flex-wrap justify-around w-full mt-10">
        {cards.map((card, index) => (
          <div key={index} className="relative w-full md:w-[30%] p-2 group">
            <div className="relative overflow-hidden rounded-md transition-transform transform group-hover:scale-110">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-36 object-cover"
              />
              <div className="absolute bottom-0 left-0 p-2 flex items-center justify-between w-full">
                <a href={card.link} className="text-white text-md">
                  {card.title}
                </a>
                <BsBoxArrowUpRight className="text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const App = () => {
  return <AboutUs {...data} />;
};

export default App;
