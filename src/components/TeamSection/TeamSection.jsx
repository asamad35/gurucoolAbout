import React from "react";
import "./TeamSection.scss";

import team from "../../assests/images/team.png";

const TeamSection = () => {
  return (
    <div className="teamSection">
      <h2 className="teamHeading">
        #<span>Guru</span>Fam
      </h2>
      <div className="teamContainer ">
        <div className="imageContainer">
          <img src={team} alt="" />
        </div>
        <div className="textContainer">
          <h3>
            We feel so proud to see #GuruFam community learning, growing and
            thriving continually.
          </h3>
          <p>
            Our story isn't a story of success. Our story is a story of
            struggle, survival and patience. Our story is a story of an unhazed
            dream and an unwavering faith to create a more learned and
            empathetic world!
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
