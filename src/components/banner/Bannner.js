import React from "react";
import "./banner.css";
import LeftSec from "../leftSection/LeftSec";
import RightSec from "../rightSection/RightSec";

const Bannner = () => {
  return (
    <div className="parent">
      <div className="left">
        <LeftSec />
      </div>
      <div className="right">
        <RightSec />
      </div>
    </div>
  );
};

export default Bannner;
