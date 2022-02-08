import React from "react";
import "./ContentLearn.scss";

import { Button } from "react-bootstrap";

import card1 from "../../assests/images/learn-card1.svg";
import card2 from "../../assests/images/learn-card2.svg";
import card3 from "../../assests/images/learn-card3.svg";
import card4 from "../../assests/images/learn-card4.svg";
import card5 from "../../assests/images/learn-card5.svg";

const ContentLearn = () => {
  return (
    <div className="contentLearn">
      <div className="textContainer flex">
        <h1 className="heading ">Start learning with Gurucool</h1>
        <p className="text">
          Get unlimited access to structured courses & doubt clearing sessions
        </p>
        <Button variant="primary" size="lg">
          Start Learning
        </Button>
      </div>

      <div className="learnCardContainer flex">
        <div className="learnCard">
          <div className="cardText">
            <p>Cool categories</p>
            <h1>
              60 <span>+</span>
            </h1>
          </div>
          <div className="cardImage">
            <img src={card5} alt="" />
          </div>
        </div>

        <div className="learnCard">
          <div className="cardText">
            <p>Campus</p>
            <h1>
              14K <span>+</span>
            </h1>
          </div>
          <div className="cardImage">
            <img src={card1} alt="" />
          </div>
        </div>

        <div className="learnCard">
          <div className="cardText">
            <p>Daily live classes</p>
            <h1>
              1.5k <span>+</span>
            </h1>
          </div>
          <div className="cardImage">
            <img src={card2} alt="" />
          </div>
        </div>

        <div className="learnCard">
          <div className="cardText">
            <p>Video lessons</p>
            <h1>
              1M <span>+</span>
            </h1>
          </div>
          <div className="cardImage">
            <img src={card3} alt="" />
          </div>
        </div>
        <div className="learnCard">
          <div className="cardText">
            <p>Community</p>
            <h1>
              3.2B <span>+</span>
            </h1>
          </div>
          <div className="cardImage">
            <img src={card4} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentLearn;
