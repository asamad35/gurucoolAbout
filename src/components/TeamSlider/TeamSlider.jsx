import "./TeamSlider.scss";

import React, { Component } from "react";
import Slider from "react-slick";

export default class TeamSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      autoplay: false,
      speed: 500,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      pauseOnHover: false,
    };
    return (
      <div className="teamSlider ">
        <Slider {...settings}>
          <div className="slideContainer slide1">
            <div className="overlay"></div>
            <div className="textContainer flex flex-col">
              <h1>
                <span>Empathizing</span> with you.
              </h1>
              <h2>
                A safe and supportive space for you to learn, grow and thrive.
              </h2>
              <p>Learn More</p>
            </div>
          </div>
          <div className="slideContainer slide2">
            <div className="overlay"></div>
            <div className="textContainer flex flex-col">
              <h1>
                <span>Connecting </span> the world.
              </h1>
              <h2>
                An educational networking platform that connects learners and
                educators.
              </h2>
              <p>Learn More</p>
            </div>
          </div>
          <div className="slideContainer slide3">
            <div className="overlay"></div>
            <div className="textContainer flex flex-col">
              <h1>
                <span>Empathizing</span> with you.
              </h1>
              <h2>
                A safe and supportive space for you to learn, grow and thrive.
              </h2>
              <p>Learn More</p>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
