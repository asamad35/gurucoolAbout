import React from "react";
import "./SmartLearning.scss";
import mobileImg from "../../assests/images/smart-learning.png";
import googleSearch from "../../assests/images/google-search.png";
import { Link } from "react-router-dom";

import Slider from "react-slick";

import { Card } from "react-bootstrap";

const SmartLearning = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="smartLearning">
      <Slider {...settings} style={{ width: "48rem" }}>
        <Card className="cardContainer flex" style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src={mobileImg}
            style={{ width: "18rem", margin: "auto", marginTop: "4.8rem" }}
          />
          <div>
            <Link className="link" to="">
              Get started
            </Link>
            <Link className="link" to="">
              Support
            </Link>
          </div>
          <Card.Text className="textPara">
            Speak, scan, type, or draw to translate in over 100 languages.
          </Card.Text>
          <Card.Title className="heading">Search</Card.Title>
          <img className="google" src={googleSearch} alt="" />
        </Card>
        <Card className="cardContainer flex" style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src={mobileImg}
            style={{ width: "18rem", margin: "auto", marginTop: "4.8rem" }}
          />
          <div>
            <Link className="link" to="">
              Get started
            </Link>
            <Link className="link" to="">
              Support
            </Link>
          </div>
          <Card.Text className="textPara">
            Speak, scan, type, or draw to translate in over 100 languages.
          </Card.Text>
          <Card.Title className="heading">Search</Card.Title>
          <img className="google" src={googleSearch} alt="" />
        </Card>
        <Card className="cardContainer flex" style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src={mobileImg}
            style={{ width: "18rem", margin: "auto", marginTop: "4.8rem" }}
          />
          <div>
            <Link className="link" to="">
              Get started
            </Link>
            <Link className="link" to="">
              Support
            </Link>
          </div>
          <Card.Text className="textPara">
            Speak, scan, type, or draw to translate in over 100 languages.
          </Card.Text>
          <Card.Title className="heading">Search</Card.Title>
          <img className="google" src={googleSearch} alt="" />
        </Card>
      </Slider>
      <div className="textContainer">
        <h1>
          Learning is <br /> <span>Smart</span>
        </h1>
      </div>
    </div>
  );
};

export default SmartLearning;
