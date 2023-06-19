/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React, { useState } from "react";
import { GrClose } from "react-icons/gr";
import { CiSearch } from "react-icons/ci";
import { CiCalendar } from "react-icons/ci";
import { AiOutlineMenu } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { BsChatSquareQuote } from "react-icons/bs";
import { IoIosNotificationsOutline } from "react-icons/io";

import ProfilePicture from "./profilePicture";

const Header = ({ screenSize }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleShowMenu = () => {
    setShowMobileMenu(true);
  };

  const handleCloseMenu = () => {
    setShowMobileMenu(false);
  };

  return (
    <div className="flex justify-between lg:items-center items-start px-2  lg:px-10">
      <div className="relative w-[300px] lg:w-[417px] h-[35px] lg:h-[44px]">
        <input
          type="text"
          placeholder="Search for anything..."
          className="lg:px-14 px-9 py-1 lg:py-3 w-full rounded-[6px] bg-[#F5F5F5]"
        />
        <CiSearch className="absolute text-2xl top-1 lg:top-3 left-2 lg:left-4" />
      </div>

      {screenSize !== "mobile" && (
        <div className="flex   items-center gap-12">
          <div className="flex items-center gap-5 text-[27px]">
            <CiCalendar />
            <BsChatSquareQuote className="text-2xl" />

            <div className="relative">
              <div className="bg-[#D8727D] w-[6px] h-[6px] right-1 top-1  absolute rounded-full"></div>

              <IoIosNotificationsOutline />
            </div>
          </div>

          <div className="flex items-center   gap-5">
            <div className="text-end">
              <p className="text-[#0D062D]">Anima Agrawal</p>
              <p>U.P, India</p>
            </div>

            <div className="flex items-center   gap-3">
              <ProfilePicture width="38px" height="38px" />
              <IoIosArrowDown className="text-2xl" />
            </div>
          </div>
        </div>
      )}

      {screenSize == "mobile" && showMobileMenu && (
        <div className="flex flex-col   items-end gap-4 z-20 -mt-5 p-5 -mb-36 bg-[#F5F5F5] rounded-lg">
          <div className="w-full items-start">
            <GrClose onClick={handleCloseMenu} />
          </div>
          <div className="flex items-end gap-5 text-[27px]">
            <CiCalendar />
            <BsChatSquareQuote className="text-2xl" />

            <div className="relative">
              <div className="bg-[#D8727D] w-[6px] h-[6px] right-1 top-1  absolute rounded-full"></div>

              <IoIosNotificationsOutline />
            </div>
          </div>

          <div className="flex items-end flex-col    gap-3">
            <div className="text-end">
              <p className="text-[#0D062D]">Anima Agrawal</p>
              <p>U.P, India</p>
            </div>

            <div className="flex items-start lg:items-center  gap-3">
              <ProfilePicture width="38px" height="38px" />
              <IoIosArrowDown className="text-2xl" />
            </div>
          </div>
        </div>
      )}

      {screenSize == "mobile" && !showMobileMenu && (
        <div className="text-3xl">
          <AiOutlineMenu onClick={handleShowMenu} />
        </div>
      )}
    </div>
  );
};

export default Header;
