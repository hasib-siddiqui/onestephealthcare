import React from "react";

const TestimonialCard = ({ imgSrc, text, name }) => {
  return (
    <>
      <div className="bg-[#f2f2f2] shadow-lg rounded-lg p-6 text-center min-w-[400px] relative">
        <div className="test-img-box mb-5">
          <img
            src={imgSrc}
            className="w-24 h-24 mx-auto rounded-full object-cover border-5 border-#f2f2f2 absolute -top-[50px] left-[35%] border-[10px] border-[#f2f2f2]"
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
