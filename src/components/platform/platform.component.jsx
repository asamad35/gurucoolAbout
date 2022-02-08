import React from "react";
import "./platform.styles.scss";
import platform from "../../assests/images/platform.webp";

import Button from "react-bootstrap/Button";

const Platform = () => {
  return (
    <div className="platform primary-bg-color">
      <div className="platform-image primary-bg-color">
        <img src={platform} alt="" />
      </div>

      <div className="explore flex">
        <h3>
          Gurucool offers a suite of phygital tools to connect learners and
          educators in an eduverse.
        </h3>
        <div className="explore-btn">EXPLORE</div>
      </div>
    </div>
  );
};

export default Platform;
