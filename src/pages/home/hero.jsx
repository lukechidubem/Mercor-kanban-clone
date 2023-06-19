/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Header from "../../components/header";
import HeroBody from "../../components/heroBody";

const Hero = ({ screenSize }) => {
  return (
    <div className="w-full">
      <Header screenSize={screenSize} />
      <HeroBody screenSize={screenSize} />
    </div>
  );
};

export default Hero;
