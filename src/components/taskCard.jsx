/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { Draggable } from "react-beautiful-dnd";
import { BsChatSquareDots } from "react-icons/bs";

import ProfilePicture from "./profilePicture";

const TaskCard = ({
  title,
  description,
  image1,
  image2,
  comments,
  files,
  assignees,
  priority,
  id,
  index,
}) => {
  return (
    <Draggable draggableId={id.toString()} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={{
            // width: "314px",
            // height: "177px",

            background: "#FFFFFF",
            borderRadius: "16px",
            padding: "20px",
            fontSize: "13px",
            // marginBottom: "8px", // Optional: Add some spacing between the cards
            ...provided.draggableProps.style, // Required: Apply draggable styles
          }}
        >
          <div className="flex justify-between items-center">
            <div
              style={{
                // width: "36px",
                height: "23px",

                borderRadius: "4px",

                backgroundColor: `${
                  priority == "Low"
                    ? "rgba(223, 168, 116, 0.2)"
                    : priority == "High"
                    ? "rgba(216, 114, 125, 0.1)"
                    : "rgba(131, 194, 157, 0.2)"
                }`,
              }}
            >
              <p
                className=" text-center px-2"
                style={{
                  color: `${
                    priority == "Low"
                      ? "#D58D49"
                      : priority == "High"
                      ? "#D8727D"
                      : "#68B266"
                  }`,
                }}
              >
                {priority}
              </p>
            </div>

            <BsThreeDots className="font-bold text-xl text-black" />
          </div>

          <p className="text-xl text-black font-bold">{title}</p>
          {/* <p className="mt-1 mb-5">
        Brainstorming brings team members' diverse experience into play.{" "}
      </p> */}

          <div className="mt-1 mb-5 flex justify-between">
            {description && <p> {description}.</p>}
            {image1 && <img src={image1} alt="" />}
            {image2 && <img src={image2} alt="" />}
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center ">
              {assignees.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="-ml-2"
                    style={{ zIndex: `${assignees.length - index}` }}
                  >
                    <ProfilePicture height="24px" width="24px" />
                  </div>
                );
              })}
            </div>

            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <BsChatSquareDots />
                <p>{comments}</p>
                <p>comments</p>
              </div>
              <div className="flex items-center gap-1">
                <BsChatSquareDots />
                <p>{files}</p>
                <p>files</p>
              </div>{" "}
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default TaskCard;
