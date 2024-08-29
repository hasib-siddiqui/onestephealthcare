import React from "react";
import { testData } from "../../data/data";

const Tests = () => {
  return (
    <>
      <h2
        className="text-[--bgBlue] text-center sm:text-5xl text-4xl my-20"
        id="tests"
      >
        Test by Health Risks & Conditions
      </h2>
      <div className="test-container flex flex-wrap items-center justify-between my-28 gap-5 max-sm:grid max-sm:grid-cols-2">
        {testData.map((item, index) => (
          <div
            key={index}
            className="test-box border-2 border-gray-100 px-5 py-5 rounded-md shadow-custom cursor-pointer mt-10 w-[185px] h-[185px]"
          >
            <div className="flex flex-col items-center gap-5">
              <img
                src={item.img}
                alt={item.testName}
                className="test-image w-[100px] test-image"
              />
              <span className="test-name font-bold text-sm">
                {item.testName}
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Tests;
