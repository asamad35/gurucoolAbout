import React from "react";
import "./ToolsHero.scss";

import { Link } from "react-router-dom";
import toolsHero from "../../assests/images/tools-hero.png";

const ToolsHero = () => {
  return (
    <div className="toolsHero">
      <div className="textContainer">
        <h1>
          Tools are made for the <span> people.</span>
        </h1>
        <p>
          We are empowering educators like schools and colleges to go online and
          build their own digital infrastructure for learners to find, connect
          and learn from them.
        </p>
        <Link className="link" to="/">
          Learn More
        </Link>
      </div>
      <div className="imageContainer">
        <img src={toolsHero} alt="" />
      </div>
    </div>
  );
};

export default ToolsHero;
