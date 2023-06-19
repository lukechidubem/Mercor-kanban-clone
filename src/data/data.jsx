import onProgressSingle from "../assets/img/onProgressSingle.png";
import onProgressDouble1 from "../assets/img/onProgressDouble1.png";
import onProgressDouble2 from "../assets/img/onProgressDouble2.png";
import completed from "../assets/img/completed.png";

export const data = [
  {
    name: "To Do",
    dotColor: "#5030E5",
    lineColor: "#5030E5",
    taskNumber: 4,
    icon: true,
    tasks: [
      {
        id: 1,
        priority: "Low",
        title: "Brainstorming",
        comments: 12,
        files: 0,
        assignees: [1, 2, 3],
        description:
          "Brainstorming brings team members' diverse experience into play. ",
      },

      {
        id: 2,
        priority: "High",
        title: "Research",
        comments: 10,
        files: 3,
        assignees: [1, 2],
        description:
          "User research helps you to create an optimal product for users. ",
      },

      {
        id: 3,
        priority: "High",
        title: "Wireframes",
        comments: 10,
        files: 3,
        assignees: [1, 2],
        description:
          "Low fidelity wireframes include the most basic content and visuals. ",
      },
    ],
  },
  {
    name: "On Pregress",
    dotColor: "#FFA500",
    lineColor: "#FFA500",
    taskNumber: 3,
    icon: false,
    tasks: [
      {
        id: 4,
        priority: "Low",
        title: "Onboarding Illustrations ",
        comments: 14,
        files: 15,
        assignees: [1, 2, 3],
        image1: onProgressSingle,
      },

      {
        id: 5,
        priority: "Low",
        title: "Moodboard ",
        comments: 9,
        files: 10,
        assignees: [1],
        image1: onProgressDouble1,
        image2: onProgressDouble2,
      },
    ],
  },
  {
    name: "Done",
    dotColor: "#76A5EA",
    lineColor: "#8BC48A",
    taskNumber: 2,
    icon: false,
    tasks: [
      {
        id: 6,
        priority: "Completed",
        title: "Mobile App Design",
        comments: 12,
        files: 15,
        assignees: [1, 2],
        image1: completed,
      },
      {
        id: 7,
        priority: "Completed",
        title: "Design System",
        comments: 12,
        files: 15,
        assignees: [1, 2, 3],
        description: "It just needs to adapt the UI from what you did before ",
      },
    ],
  },
];
