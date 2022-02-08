import React, { Component } from "react";
import Slider from "react-slick";

import "./our-journey.styles.scss";

export default class OurJourney extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
      ],
    };
    return (
      <section className="ourJourney">
        <h1> Our Journey </h1>
        <div className="overlay"></div>
        <Slider {...settings}>
          <div className="journeyContainer flex-col">
            <h4 className="journeyHeading">2 Feb 2019</h4>
            <h2 className="journeyPara">
              Gurucool Learning Cafe was inaugurated
            </h2>
          </div>
          <div className="journeyContainer flex-col">
            <h4 className="journeyHeading"> 4 Mar 2019</h4>
            <h2 className="journeyPara">
              Announced 'The Parking Kids Project'.
            </h2>
          </div>
          <div className="journeyContainer flex-col">
            <h4 className="journeyHeading"> 15 Mar 2019</h4>
            <h2 className="journeyPara">
              Launched India's first formalised Home tuition service.
            </h2>
          </div>
          <div className="journeyContainer flex-col">
            <h4 className="journeyHeading"> 22 June 2019</h4>
            <h2 className="journeyPara">
              Inaugurated Gurucool – India's Next Gen Coaching Classes.
            </h2>
          </div>
          <div className="journeyContainer flex-col">
            <h4 className="journeyHeading"> 11 Feb 2020</h4>
            <h2 className="journeyPara">
              Shot first podcast at Gurucool Studio.
            </h2>
          </div>
          <div className="journeyContainer flex-col">
            <h4 className="journeyHeading"> 24 Mar 2020</h4>
            <h2 className="journeyPara">
              Lockdown in India. All centers closed.
            </h2>
          </div>
          <div className="journeyContainer flex-col">
            <h4 className="journeyHeading"> 4 April 2020</h4>
            <h2 className="journeyPara">
              Co-Give 20: A call for sustainable and continuous help amidst the
              uncertainty of lockdown & fragile economy.
            </h2>
          </div>
        </Slider>
      </section>
    );
  }
}
