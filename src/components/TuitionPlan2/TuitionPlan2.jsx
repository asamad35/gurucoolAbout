import React from "react";
import "./TuitionPlan2.scss";

import { Link } from "react-router-dom";

import { Card } from "react-bootstrap";

import toolCard8 from "../../assests/images/tool-card8.png";
import tuitionBg from "../../assests/images/tuitionPlan2.jpg";

const TuitionPlan2 = () => {
  return (
    <div className="tuitionPlan2">
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
      <Card className="cardContainer flex" style={{ width: "35rem" }}>
        <Card.Img
          variant="top"
          src={toolCard8}
          style={{ width: "10rem", margin: "auto", marginTop: "4.8rem" }}
        />
        <Card.Title className="heading">Engagement Plus</Card.Title>
        <Card.Text className="textPara">
          Brand. Advertise. Monetise. Educators are influencers!
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
    </div>
  );
};

export default TuitionPlan2;
