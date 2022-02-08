import React from "react";
import "./WhyUs.scss";

import card1 from "../../assests/images/content-card-1.svg";
import card2 from "../../assests/images/content-card-2.svg";
import card3 from "../../assests/images/content-card-3.svg";
import downArrow from "../../assests/images/down-arrow.svg";

import { Card } from "react-bootstrap";

const WhyUs = () => {
  return (
    <section className="whyUs">
      <div className="imageContainer flex">
        <img src={downArrow} alt="" />
      </div>
      <h1 className="heading">
        Why Guru<span>cool</span> works
      </h1>
      <div className="cardContainer flex">
        <Card
          className="flex"
          style={{ width: "28rem", background: "#f9c933", border: "none" }}
        >
          <Card.Img
            style={{ width: "12rem", paddingBottom: "1rem" }}
            variant="top"
            src={card1}
          />
          <Card.Body>
            <Card.Title className="cardTitle">Accessible</Card.Title>
            <Card.Text className="cardPara">
              Almost all the great tools and content pools that Gurucool makes
              are available to all the learners and educators.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card
          className="flex"
          style={{ width: "28rem", background: "#f9c933", border: "none" }}
        >
          <Card.Img
            style={{ width: "12rem", paddingBottom: "1rem" }}
            variant="top"
            src={card2}
          />
          <Card.Body>
            <Card.Title className="cardTitle">Quality</Card.Title>
            <Card.Text className="cardPara">
              The best content from the best of open sources and educators in
              the world are aggregated and curated on Gurucool.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card
          className="flex"
          style={{ width: "28rem", background: "#f9c933", border: "none" }}
        >
          <Card.Img
            style={{ width: "12rem", paddingBottom: "1rem" }}
            variant="top"
            src={card3}
          />
          <Card.Body>
            <Card.Title className="cardTitle">Hyperlocal</Card.Title>
            <Card.Text className="cardPara">
              With more than 20+ regional and international languages, Gurucool
              is making hyperlocal education possible.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </section>
  );
};

export default WhyUs;
