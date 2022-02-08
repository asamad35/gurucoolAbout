import React from "react";
import "./gif.styles.scss";
import twoRoads from "../../assests/images/two_roads.gif";

const Gif = () => {
  return (
    <div className="two-roads flex">
      <img src={twoRoads} alt="" />
    </div>
  );
};

export default Gif;
