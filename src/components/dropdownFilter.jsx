/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const DropdownFilter = ({ icon1, icon2, text }) => {
  return (
    <div className="flex items-center border border-[#787486] rounded-[6px] gap-3 px-3 py-1 h-10">
      {icon1}
      <p>{text}</p>
      {icon2}
    </div>
  );
};

export default DropdownFilter;
