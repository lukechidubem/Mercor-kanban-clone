/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import TaskCard from "./taskCard";
import { Droppable } from "react-beautiful-dnd";

const TaskContainer = ({
  tasks,
  name,
  dotColor,
  lineColor,
  taskNumber,
  icon,
  bIndex,
}) => {
  return (
    <Droppable droppableId={bIndex.toString()}>
      {(provided, snapshot) => (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          style={{
            width: "354px",

            padding: "20px",

            background: "#F5F5F5",
            borderRadius: "16px 16px 0px 0px",
          }}
        >
          <div
            className={`flex justify-between items-center gap-4 rounded-md ${
              snapshot.isDraggingOver && "bg-green-100"
            }`}
          >
            <div className="flex justify-start items-center gap-4">
              <div
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: `${dotColor}` }}
              ></div>
              <p className="text-[#0D062D] text-base">{name}</p>

              <div
                style={{
                  background: "rgba(80, 48, 229, 0.2)",
                  padding: "1.7px 8px",
                  borderRadius: "50%",
                }}
              >
                <p className="text-[#625F6D] text-sm">{taskNumber}</p>
              </div>
            </div>

            {icon && (
              <div
                style={{
                  background: "rgba(80, 48, 229, 0.2)",
                  padding: "0 6px",
                  borderRadius: "6px",
                  color: "#5030E5",
                  fontWeight: "bold",
                }}
              >
                <p className="">+</p>
              </div>
            )}
          </div>

          <div
            style={{
              width: "314px",
              height: "0px",

              background: "#800080",
              border: `3px solid ${lineColor}`,
              margin: "20px 0",
            }}
          ></div>

          <div className="flex flex-col gap-4 ">
            {tasks.map((item, index) => {
              return (
                <TaskCard
                  key={index}
                  title={item.title}
                  description={item?.description}
                  image1={item.image1}
                  image2={item.image2}
                  comments={item.comments}
                  files={item.files}
                  assignees={item.assignees}
                  priority={item.priority}
                  id={item.id}
                  index={index}
                />
              );
            })}
          </div>
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default TaskContainer;
