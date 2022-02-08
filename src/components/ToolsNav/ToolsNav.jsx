import React from "react";
import "./ToolsNav.scss";
import { Link } from "react-router-dom";

const ToolsNav = () => {
  return (
    <div className="toolsNav">
      <Link to="/" className="link">
        Learn
      </Link>
      <Link to="/" className="link">
        Connect
      </Link>
      <Link to="/" className="link">
        Teach
      </Link>
      <Link to="/" className="link">
        Build
      </Link>
      <Link to="/" className="link">
        See all products
      </Link>
    </div>
  );
};

export default ToolsNav;
