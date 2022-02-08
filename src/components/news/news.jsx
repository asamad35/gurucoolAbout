import React from "react";
import "./news.scss";

import company1 from "../../assests/images/company-1.jpg";
import company2 from "../../assests/images/company-2.png";
import company3 from "../../assests/images/company-3.png";
import company4 from "../../assests/images/company-4.svg";
import company5 from "../../assests/images/company-5.webp";
import company6 from "../../assests/images/company-6.jpg";
import company7 from "../../assests/images/company-7.png";
import company8 from "../../assests/images/company-8.png";
import company9 from "../../assests/images/company-9.png";

const News = () => {
  return (
    <section className="newsSection">
      <h1>In The News</h1>
      <div className="companyContainer">
        <div className="companyImg">
          <img src={company1} alt="" />
        </div>
        <div className="companyImg">
          <img src={company2} alt="" />
        </div>
        <div className="companyImg">
          <img src={company3} alt="" />
        </div>
        <div className="companyImg">
          <img src={company4} alt="" />
        </div>
        <div className="companyImg">
          <img src={company5} alt="" />
        </div>
        <div className="companyImg">
          <img src={company6} alt="" />
        </div>
        <div className="companyImg">
          <img src={company7} alt="" />
        </div>
        <div className="companyImg">
          <img src={company8} alt="" />
        </div>
        {/* <div className="companyImg">
          <img src={company9} alt="" />
        </div> */}
      </div>
    </section>
  );
};

export default News;
