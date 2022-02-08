import React, { Component } from "react";
import Slider from "react-slick";
import "./CardSlider.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import person2 from "../../assests/images/person-2.webp";
import person3 from "../../assests/images/person-3.webp";
import person5 from "../../assests/images/person-5.webp";
<FontAwesomeIcon icon={faLinkedin} size="3x" />;

export default class CardSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      //   autoplay: true,
      //   autoplaySpeed: 2000,
    };
    return (
      <div className="cardSlider">
        <Slider {...settings}>
          <div className="cardSlide flex">
            <div className="cardContainer flex flex-col">
              <div className="imageContainer">
                <img src={person2} alt="" />
              </div>
              <div className="textContainer">
                <div className="cardDetail">
                  <h1>Adil Meraj</h1>
                  <p>Founder & CEO</p>
                </div>
                <FontAwesomeIcon icon={faLinkedin} size="3x" />
              </div>
            </div>
            <h1 className="cardHeading">
              Rather than artificially flawless, we want Gurucool to be a
              <span> beautifully flawed </span>community.
            </h1>
          </div>

          <div className="cardSlide flex">
            <div className="cardContainer flex flex-col">
              <div className="imageContainer">
                <img src={person5} alt="" />
              </div>
              <div className="textContainer">
                <div className="cardDetail">
                  <h1>Khansa Fahad</h1>
                  <p>Co-Founder & COO</p>
                </div>
                <FontAwesomeIcon icon={faLinkedin} size="3x" />
              </div>
            </div>
            <h1 className="cardHeading">
              A <span>smart, fun and inspiring community</span> of people who
              believe in a learned and fair society- this is what we are
              building Gurucool into.
            </h1>
          </div>
          <div className="cardSlide flex">
            <div className="cardContainer flex flex-col">
              <div className="imageContainer">
                <img src={person3} alt="" />
              </div>
              <div className="textContainer">
                <div className="cardDetail">
                  <h1>Hussian Jasani</h1>
                  <p>Mentor & Strategic Advisor</p>
                </div>
                <FontAwesomeIcon icon={faLinkedin} size="3x" />
              </div>
            </div>
            <h1 className="cardHeading">
              Our <span>strength and striving </span> is for our vision.
              Hopefully soon, we will have fireworks for those who cheer for
              education!
              <span> beautifully flawed </span>community.
            </h1>
          </div>
        </Slider>
      </div>
    );
  }
}
