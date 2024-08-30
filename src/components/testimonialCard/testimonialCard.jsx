import React from "react";

const TestimonialCard = ({ imgSrc, text, name }) => {
  return (
    <>
      <div className="bg-[#f2f2f2] shadow-lg rounded-lg p-6 text-center min-w-[400px] relative hover:bg-[#e0f7ff] hover:shadow-2xl hover:shadow-[#0392ce] transition-all duration-300 ease-in-out">
        <div className="test-img-box mb-5">
          <img
            src={imgSrc}
            className="w-24 h-24 mx-auto rounded-full object-cover border-[10px] border-[#f2f2f2] absolute -top-[50px] left-[35%]"
            alt={name}
          />
        </div>
        <p className="text-gray-700 mb-4">{text}</p>
        <p className="mb-0 font-semibold text-gray-800">{name}</p>
      </div>
    </>
  );
};

export default TestimonialCard;
