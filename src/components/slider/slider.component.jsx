import "./slider.styles.scss";

import kid1 from "../../assests/images/parkind-kids1.webp";
import kid2 from "../../assests/images/parkind-kids2.jpg";
import kid3 from "../../assests/images/parkind-kids4.jpg";
import padhaai1 from "../../assests/images/padhaai-initiative-1.webp";
import padhaai2 from "../../assests/images/padhaai-initiative-2.webp";
import padhaai3 from "../../assests/images/padhaai-initiative-3.webp";
import padhaai4 from "../../assests/images/padhaai-initiative-4.webp";
import kids1 from "../../assests/images/kids-img1.webp";
import kids2 from "../../assests/images/kids-img2.webp";
import kids3 from "../../assests/images/kids-img3.webp";

import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 1,

      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="sliderContainer">
        <h1 className="sliderHeading"> Gurucool For Good</h1>
        <Slider {...settings}>
          {/* <div className="groupContainer flex-col"> */}
          {/* <h3 className="groupHeading">The Parking Kids Project</h3> */}
          {/* <div className="groupImages"> */}
          <div className="imageContainer">
            <img src={kid1} alt="" />
          </div>
          <div className="imageContainer">
            <img src={kid2} alt="" />
          </div>
          <div className="imageContainer">
            <img src={kid3} alt="" />
          </div>
          <div className="imageContainer">
            <img src={kids1} alt="" />
          </div>
          {/* </div> */}
          {/* </div> */}

          {/* <div className="groupContainer flex-col"> */}
          {/* <h3 className="groupHeading">Padhaai Initiative</h3> */}
          {/* <div className="groupImages"> */}
          <div className="imageContainer">
            <img src={padhaai1} alt="" />
          </div>
          <div className="imageContainer">
            <img src={padhaai2} alt="" />
          </div>
          <div className="imageContainer">
            <img src={padhaai3} alt="" />
          </div>
          <div className="imageContainer">
            <img src={padhaai4} alt="" />
          </div>
          {/* </div> */}
          {/* </div> */}

          {/* <div className="groupContainer flex-col"> */}
          {/* <h3 className="groupHeading">Khushiyon Ki Workshops</h3> */}
          {/* <div className="groupImages"> */}
          <div className="imageContainer">
            <img src={kids1} alt="" />
          </div>
          <div className="imageContainer">
            <img src={kids2} alt="" />
          </div>
          <div className="imageContainer">
            <img src={kids3} alt="" />
          </div>
          <div className="imageContainer">
            <img src={kids3} alt="" />
          </div>
          {/* </div> */}
          {/* </div> */}
        </Slider>
      </div>
    );
  }
}
