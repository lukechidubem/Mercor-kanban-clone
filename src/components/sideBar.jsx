/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
import { BsThreeDots } from "react-icons/bs";
import { CiSquarePlus } from "react-icons/ci";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { BsChatSquareDots } from "react-icons/bs";
import { FaTasks } from "react-icons/fa";
import { RiGroupLine } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";

import Logo from "../assets/img/kanban-logo.png";
import Light from "../assets/img/Vector.png";
import LightCover from "../assets/img/Ellipse20.png";

const navItem = [
  {
    name: "Home",
    icon: <HiOutlineSquares2X2 />,
  },
  {
    name: "Messages",
    icon: <BsChatSquareDots />,
  },
  {
    name: "Tasks",
    icon: <FaTasks />,
  },
  {
    name: "Members",
    icon: <RiGroupLine />,
  },
  {
    name: "Settings",
    icon: <IoSettingsOutline />,
  },
];

const projectList = [
  {
    name: "Mobile App",
    color: "#7AC555",
    threeDpts: true,
  },
  {
    name: "Website Redesign",
    color: "#FFA500",
    threeDpts: false,
  },
  {
    name: "Design System",
    color: "#E4CCFD",
    threeDpts: false,
  },
  {
    name: "Wireframe",
    color: "#76A5EA",
    threeDpts: false,
  },
];

const SideBar = ({ screenSize }) => {
  const [showSideBar, setShowSideBar] = useState(
    `${screenSize == "mobile" ? false : true}`
  );

  const handleShowSidebar = () => {
    setShowSideBar(true);
  };

  const handleCloseSidebar = () => {
    setShowSideBar(false);
  };

  return (
    <div>
      {showSideBar && (
        <div className="max-w-[280px] border-r">
          <div className="flex justify-between items-center px-8  pb-1 pt-3 mb-10">
            <div className="flex gap-4 items-center">
              <img src={Logo} alt="Logo" />
              <h2 className="text-xl font-semibold text-black">Project M.</h2>
            </div>
            <div>
              <HiChevronDoubleLeft
                className="text-2xl"
                onClick={handleCloseSidebar}
              />
            </div>
          </div>

          <div
            className="border border-b w-full mx-auto"
            style={{ boxSizing: "border-box", position: "absolute" }}
          ></div>

          <div className="flex flex-col justify-start gap-6 px-8 mt-20">
            {navItem.map((item, i) => {
              return (
                <div
                  key={i}
                  className="flex justify-start gap-4 items-center text-base text-[#787486]"
                >
                  <div className="text-2xl">{item.icon}</div>
                  <p>{item.name}</p>
                </div>
              );
            })}
          </div>

          <div className="border border-b w-[90%] my-10 mx-auto "></div>

          <div className="px-8 ">
            <div className="flex justify-between text-sm mb-5 font-bold">
              <p className="F">MY PROJECTS</p>
              <CiSquarePlus className="text-lg" />
            </div>

            <div className="flex flex-col justify-start  gap-6 ">
              {projectList.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex justify-between items-center gap-4 rounded-md"
                    style={{
                      padding: `${item.threeDpts ? "8px" : ""}`,
                      color: `${item.threeDpts ? "black" : ""}`,
                      background: `${
                        item.threeDpts ? "rgba(80, 48, 229, 0.08)" : ""
                      }`,
                    }}
                  >
                    <div className="flex justify-start items-center gap-4">
                      <div
                        className="h-2 w-2 rounded-full"
                        style={{ backgroundColor: `${item.color}` }}
                      ></div>
                      <p>{item.name}</p>
                    </div>
                    {item.threeDpts && <BsThreeDots />}
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col py-6 px-5 relative bg-[#C4C4C4] w-[206px] h-[200px] text-center mt-20 rounded-2xl">
              <div
                className="absolute lightCover -top-8 rounded-full w-[66px] h-[66px] bg-[#C4C4C4]  right-[35%] flex justify-center items-center"
                style={{ backgroundImage: `url(${LightCover})` }}
              >
                <img src={Light} alt="light" className="" />
              </div>

              <p className="py-2 text-black">Thought Time</p>
              <p className="text-xs text-[#787486] mb-3">
                We don’t have any notice for you, till then you can share your
                thoughts with your peers.
              </p>
              <p className="p-2 bg-white text-black rounded-[4px]">
                Write a message
              </p>
            </div>
          </div>
        </div>
      )}
      {!showSideBar && (
        <div>
          <HiChevronDoubleRight
            className="text-2xl mb-16"
            onClick={handleShowSidebar}
          />

          <div
            className="border border-b w-full"
            style={{ boxSizing: "border-box", position: "absolute" }}
          ></div>
        </div>
      )}
    </div>
  );
};

export default SideBar;
