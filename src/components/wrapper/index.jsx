import React from "react";

const Wrapper = ({ children }) => {
  return (
    <div className="px-[20px] sm:px-[2%] w-full overflow-hidden">
      {children}
    </div>
  );
};

export default Wrapper;
