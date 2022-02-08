import React from "react";
import "./TuitionPlan.scss";

import { Link } from "react-router-dom";

import { Card } from "react-bootstrap";

import toolCard7 from "../../assests/images/tool-card7.png";
import tuitionBg from "../../assests/images/tution-bg.jpg";

const TuitionPlan = () => {
  return (
    <div className="tuitionPlan">
      <Card className="cardContainer flex" style={{ width: "35rem" }}>
        <Card.Img
          variant="top"
          src={toolCard7}
          style={{ width: "10rem", margin: "auto", marginTop: "4.8rem" }}
        />
        <Card.Title className="heading">Classroom</Card.Title>
        <Card.Text className="textPara">
          Just like our real classroom.
        </Card.Text>
        <div>
          <Link className="link" to="">
            Get started
          </Link>
          <Link className="link" to="">
            Support
          </Link>
        </div>
      </Card>
      <div className="imageContainer">
        <img src={tuitionBg} alt="" />
        <div className="overlay"></div>
        <div className="textContainer">
          <h1>
            Create your tuition plan with suited recommendations & 0%
            commission.
          </h1>
          <Link className="link" to="">
            Learn more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TuitionPlan;
