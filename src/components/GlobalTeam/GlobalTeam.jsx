import React from "react";
import "./GlobalTeam.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

import person6 from "../../assests/images/person-6.jpg";
import person1 from "../../assests/images/person-1.webp";
import person4 from "../../assests/images/person-4.webp";

const GlobalTeam = () => {
  return (
    <div className="globalTeam grid grid-cols-4 ">
      <div className="teamMember col-1">
        <h2 className="text">
          <span> great minds </span> from all over the globe
        </h2>
      </div>
      <div className="teamMember">
        <div className="imageContainer">
          <img src={person6} alt="" />
        </div>
        <div className="memberDetail flex ">
          <div className="nameAndId flex">
            <h3 className="name">Parvez Jasani</h3>
            <FontAwesomeIcon icon={faLinkedin} size="3x" />
          </div>
          <p className="designation">CEO,</p>
          <p className="company">Zulie Ventures Inc.</p>
        </div>
      </div>
      <div className="teamMember">
        <div className="imageContainer">
          <img src={person4} alt="" />
        </div>
        <div className="memberDetail flex ">
          <div className="nameAndId flex">
            <h3 className="name">Aaquib Hussain</h3>
            <FontAwesomeIcon icon={faLinkedin} size="3x" />
          </div>
          <p className="designation">Founding Partner,</p>
          <p className="company">FreeFlow Venture Builders</p>
        </div>
      </div>
      <div className="teamMember">
        <div className="imageContainer">
          <img src={person1} alt="" />
        </div>
        <div className="memberDetail flex ">
          <div className="nameAndId flex">
            <h3 className="name">Asif Iqbal</h3>
            <FontAwesomeIcon icon={faLinkedin} size="3x" />
          </div>
          <p className="designation">Founder,</p>
          <p className="company">Let's Scale Up</p>
        </div>
      </div>
    </div>
  );
};

export default GlobalTeam;
