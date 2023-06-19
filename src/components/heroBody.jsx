/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { FiLink2 } from "react-icons/fi";
import { GoPencil } from "react-icons/go";
import { RiGroupLine } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import { CiCalendarDate } from "react-icons/ci";
import { HiOutlineFilter } from "react-icons/hi";
import React, { useEffect, useState } from "react";
import { HiOutlineSquares2X2 } from "react-icons/hi2";

import { DragDropContext } from "react-beautiful-dnd";

import ProfilePicture from "./profilePicture";
import DropdownFilter from "./dropdownFilter";
import TaskContainer from "./taskContainer";
import { data } from "../data/data";

const HeroBody = ({ screenSize }) => {
  const [boardData, setBoardData] = useState(data);

  const invitePicture = [1, 2, 3, 4];

  const onDragEnd = (result) => {
    if (!result.destination) return;
    let newBoardData = boardData;
    const dragItem =
      newBoardData[parseInt(result.source.droppableId)].tasks[
        result.source.index
      ];
    newBoardData[parseInt(result.source.droppableId)].tasks.splice(
      result.source.index,
      1
    );
    newBoardData[parseInt(result.destination.droppableId)].tasks.splice(
      result.destination.index,
      0,
      dragItem
    );
    setBoardData(newBoardData);
  };

  return (
    <div className="mt-10">
      <div className="md:px-10 px-4 flex flex-col md:flex-row items-center justify-between text-[#5030E5] ">
        <div className="flex items-center justify-between gap-5 mt-10">
          <h1 className="text-[#0D062D] text-[27px] lg:text-[46px] font-bold">
            Mobile App
          </h1>
          <div
            style={{
              background: "rgba(80, 48, 229, 0.2)",
              padding: "4px",
              borderRadius: "6px",
            }}
          >
            <GoPencil />
          </div>
          <div
            style={{
              background: "rgba(80, 48, 229, 0.2)",
              padding: "4px",
              borderRadius: "6px",
            }}
          >
            <FiLink2 className="" />
          </div>
        </div>

        <div className="flex justify-between items-center gap-5">
          <div
            style={{
              background: "rgba(80, 48, 229, 0.2)",
              padding: "0 5px",
              borderRadius: "6px",
            }}
          >
            <p className="">+</p>
          </div>
          <p>Invite</p>
          <div className="flex items-center ">
            {invitePicture.map((item, index) => {
              return (
                <div key={index} className="-ml-2">
                  <ProfilePicture height="38px" width="38px" />
                </div>
              );
            })}

            <div className="w-[38px] h-[38px] rounded-full bg-[#F4D7DA] flex justify-center items-center border border-white -ml-2">
              <p className="text-[#D25B68]">+2</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex  md:flex-row flex-col items-center my-9 px-10 justify-between gap-3">
        <div className="flex items-center gap-4">
          <DropdownFilter
            icon1={<HiOutlineFilter />}
            icon2={<IoIosArrowDown />}
            text="Filter"
          />

          <DropdownFilter
            icon1={<CiCalendarDate />}
            icon2={<IoIosArrowDown />}
            text="Today"
          />
        </div>

        <div className="flex items-center gap-6">
          <DropdownFilter icon1={<RiGroupLine />} text="Share" />
          <div
            style={{
              width: "0px",
              height: "28px",

              border: "1px solid #787486",
            }}
          ></div>

          <div className="bg-[#5030E5] rounded-md w-10 h-10 flex flex-col justify-center items-center gap-1">
            <div className="bg-white w-3 h-[6px]"></div>
            <div className="bg-white w-3 h-[6px]"></div>
          </div>

          <HiOutlineSquares2X2 className="text-2xl" />
        </div>
      </div>

      <div className="md:px-10 px-4 flex gap-5 flex-wrap">
        <DragDropContext onDragEnd={onDragEnd}>
          {boardData.map((item, i) => {
            return (
              <div key={item.name}>
                <TaskContainer
                  key={i}
                  name={item.name}
                  tasks={item.tasks}
                  dotColor={item.dotColor}
                  lineColor={item.lineColor}
                  taskNumber={item.taskNumber}
                  icon={item.icon}
                  bIndex={i}
                />
              </div>
            );
          })}
        </DragDropContext>
      </div>
    </div>
  );
};

export default HeroBody;
