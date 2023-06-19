/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { faker } from "@faker-js/faker";

const ProfilePicture = ({ width, height }) => {
  const imageUrl = faker.image.avatar();

  return (
    <img
      src={imageUrl}
      alt="Profile Picture"
      className=" rounded-full border border-white"
      style={{
        width: `${width}`,
        height: `${height}`,
      }}
    />
  );
};

export default ProfilePicture;
