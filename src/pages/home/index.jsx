/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

import Hero from "./hero";
import SideBar from "../../components/sideBar";

const Home = () => {
  const getScreenSize = () => {
    const width = window.innerWidth;

    if (width >= 1280) {
      // Desktop view
      return "desktop";
    } else if (width >= 1024) {
      // Laptop view
      return "laptop";
    } else if (width >= 868) {
      // Tablet view
      return "tablet";
    } else {
      // Mobile view
      return "mobile";
    }
  };

  const [screenSize, setScreenSize] = useState(getScreenSize());

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(getScreenSize());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [window.innerWidth]);

  return (
    <div className="flex">
      <SideBar screenSize={screenSize} />
      <Hero screenSize={screenSize} />
    </div>
  );
};

export default Home;
