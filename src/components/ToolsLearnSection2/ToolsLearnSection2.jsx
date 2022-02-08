import React from "react";
import "./ToolsLearnSection2.scss";

import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import toolCard4 from "../../assests/images/tool-card4.png";
import toolCard5 from "../../assests/images/tool-card5.png";
import toolCard6 from "../../assests/images/tool-card6.png";
import mobile4 from "../../assests/images/mobile4.png";
import mobile5 from "../../assests/images/mobile5.png";
import mobile6 from "../../assests/images/mobile6.png";

const ToolsLearnSection2 = () => {
  return (
    <div className="toolsLearnSection">
      <h1>
        <span>Teach</span>in your own space and time
      </h1>
      <div className="learnCards flex">
        <Card className="cardContainer flex" style={{ width: "35rem" }}>
          <Card.Img
            variant="top"
            src={toolCard4}
            style={{ width: "10rem", margin: "auto", marginTop: "4.8rem" }}
          />
          <Card.Title className="heading">Teach Pro</Card.Title>
          <Card.Text className="textPara">
            Your own teaching platform.
          </Card.Text>
          <div>
            <Link className="link" to="">
              Get started
            </Link>
            <Link className="link" to="">
              Support
            </Link>
          </div>
          <Card.Img
            variant="top"
            src={mobile4}
            style={{ width: "30rem", margin: "auto", marginTop: "4.8rem" }}
          />
        </Card>

        <Card className="cardContainer flex" style={{ width: "35rem" }}>
          <Card.Img
            variant="top"
            src={toolCard5}
            style={{ width: "10rem", margin: "auto", marginTop: "4.8rem" }}
          />
          <Card.Title className="heading">Assessment</Card.Title>
          <Card.Text className="textPara">
            Assess your learners and get real-time feedback to enhance.
          </Card.Text>
          <div>
            <Link className="link" to="">
              Get started
            </Link>
            <Link className="link" to="">
              Support
            </Link>
          </div>
          <Card.Img
            variant="top"
            src={mobile5}
            style={{ width: "30rem", margin: "auto", marginTop: "4.8rem" }}
          />
        </Card>

        <Card className="cardContainer flex" style={{ width: "35rem" }}>
          <Card.Img
            variant="top"
            src={toolCard6}
            style={{ width: "10rem", margin: "auto", marginTop: "4.8rem" }}
          />
          <Card.Title className="heading">Content Pool</Card.Title>
          <Card.Text className="textPara">
            Get access to free courses, study material, test series etc.
          </Card.Text>
          <div>
            <Link className="link" to="">
              Get started
            </Link>
            <Link className="link" to="">
              Support
            </Link>
          </div>
          <Card.Img
            variant="top"
            src={mobile6}
            style={{ width: "30rem", margin: "auto", marginTop: "4.8rem" }}
          />
        </Card>
      </div>
    </div>
  );
};

export default ToolsLearnSection2;
