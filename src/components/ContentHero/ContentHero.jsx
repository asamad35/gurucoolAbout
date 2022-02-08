import React from "react";
import "./ContentHero.scss";

import { Button } from "react-bootstrap";

import hero from "../../assests/images/content-hero.webp";

const ContentHero = () => {
  return (
    <div className="contentHero grid grid-cols-3">
      <div className="heading">
        Content is the <span> Queen </span>
      </div>
      <div className="imageContainer">
        <img src={hero} alt="" />
      </div>
      <div className="textContainer flex">
        <p className="para">
          Creativity and psychosis often go hand in hand. Or, for that matter,
          genius and madness. Or, for that matter, creation and curation.
        </p>
        <Button variant="primary" size="lg">
          Our Gambit
        </Button>
      </div>
    </div>
  );
};

export default ContentHero;
