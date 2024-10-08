import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import { heroData } from "../../data/data";

const Hero = () => {
  return (
    <div className="py-10 px-6 font-sans gradient-background mt-28">
      <div className="flex flex-col items-center sm:gap-5 gap-4">
        <h1 className="sm:text-5xl text-[30px] font-bold mb-2">
          <span className="text-white">{heroData.title.main}</span>
          <br />
          <span className="text-white">{heroData.title.sub}</span>
        </h1>
        <div className="bg-[gradient-background] text-cyan-500 font-bold p-4 rounded-lg w-full text-center">
          <p className="text-3xl">{heroData.pricing.text}</p>
          <p className="font-bold text-7xl sm:my-5">
            {heroData.pricing.price}
            <span className="text-3xl">{heroData.pricing.subtext}</span>
          </p>
        </div>
        <div className="space-y-2 text-white font-semibold text-xl">
          {heroData.features.map((feature, index) => (
            <p key={index} className="flex items-center">
              {feature.icon === "check" ? (
                <svg
                  className="w-5 h-5 mr-2 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              ) : (
                <BsWhatsapp className="w-5 h-5 mr-2 text-green-500" />
              )}
              {feature.text}
            </p>
          ))}
        </div>
        <div className="flex flex-wrap justify-between items-start mt-8 text-center sm:text-xl text-md text-white gap-5">
          {heroData.serviceHighlights.map((highlight, index) => (
            <div key={index} className="flex-1 min-w-[120px] mb-4">
              <highlight.icon className="w-8 h-8 mx-auto mb-2" />
              <p>{highlight.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
