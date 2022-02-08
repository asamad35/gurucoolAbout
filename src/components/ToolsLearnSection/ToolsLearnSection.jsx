import React from "react";
import "./ToolsLearnSection.scss";

import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import toolCard1 from "../../assests/images/tool-card1.png";
import toolCard2 from "../../assests/images/tool-card2.png";
import toolCard3 from "../../assests/images/tool-card3.png";
import mobile1 from "../../assests/images/mobile1.png";
import mobile2 from "../../assests/images/mobile2.png";
import mobile3 from "../../assests/images/mobile3.png";

const ToolsLearnSection = () => {
  return (
    <div className="toolsLearnSection">
      <h1>
        <span>Learn</span> in your own space and time
      </h1>
      <div className="learnCards flex">
        <Card className="cardContainer flex" style={{ width: "35rem" }}>
          <Card.Img
            variant="top"
            src={toolCard1}
            style={{ width: "10rem", margin: "auto", marginTop: "4.8rem" }}
          />
          <Card.Title className="heading">Course</Card.Title>
          <Card.Text className="textPara">
            Browse more than 3000+ courses that are open, innovative and
            awesome.
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
            src={mobile1}
            style={{ width: "30rem", margin: "auto", marginTop: "4.8rem" }}
          />
        </Card>

        <Card className="cardContainer flex" style={{ width: "35rem" }}>
          <Card.Img
            variant="top"
            src={toolCard2}
            style={{ width: "10rem", margin: "auto", marginTop: "4.8rem" }}
          />
          <Card.Title className="heading">Ask</Card.Title>
          <Card.Text className="textPara">
            'Asking questions' is celebrated here! Ask anything. Answer anyone.
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
            src={mobile2}
            style={{ width: "30rem", margin: "auto", marginTop: "4.8rem" }}
          />
        </Card>

        <Card className="cardContainer flex" style={{ width: "35rem" }}>
          <Card.Img
            variant="top"
            src={toolCard3}
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
          <Card.Img
            variant="top"
            src={mobile3}
            style={{ width: "30rem", margin: "auto", marginTop: "4.8rem" }}
          />
        </Card>
      </div>
    </div>
  );
};

export default ToolsLearnSection;
