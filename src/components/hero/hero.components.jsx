import React from "react";

import "./hero.styles.scss";

const Hero = () => {
  return (
    <div className="hero flex">
      <h1>
        Our vision is to <span className="primary-color"> personalize </span>{" "}
        the world’s education and make it{" "}
        <span className="primary-color"> universally accessible </span> and{" "}
        <span className="primary-color"> empathetic</span>.
      </h1>
    </div>
  );
};

export default Hero;
