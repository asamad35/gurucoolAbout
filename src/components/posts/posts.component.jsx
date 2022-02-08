import React from "react";
import "./posts.styles.scss";
import img1 from "../../assests/images/Gurucool.webp";
import img2 from "../../assests/images/entracker.webp";
import img3 from "../../assests/images/story-1.webp";
import img4 from "../../assests/images/story1.webp";
import img5 from "../../assests/images/story3.webp";
import img6 from "../../assests/images/parkind-kids1.webp";

const Posts = () => {
  return (
    <div className="posts flex">
      <div className="post">
        <h1>
          <span>BW BusinessWorld</span> Gurucool Secures Pre-Seed Funding Of
          $1,50,000
        </h1>
        <img src={img1} alt="" />
        <small>1 Minute Read</small>
      </div>
      <div className="post">
        <h1>
          <span>ENTRACKR</span> Gurucool scoops up $150k pre-seed funding
        </h1>
        <img src={img2} alt="" />
        <small>1 Minute Read</small>
      </div>
      <div className="post">
        <h1>
          <span>STARTUPPEDIA</span> Startuppedia announces Brand Partnership
          with Gurucool
        </h1>
        <img src={img3} alt="" />
        <small>1 Minute Read</small>
      </div>
      <div className="post">
        <h1>
          <span>ANNOUNCEMENT</span> Re-emergence: Gurucool opens its first
          'India's Next Gen Coaching Classes' since the pandemic
        </h1>
        <img src={img4} alt="" />
        <small>1 Minute Read</small>
      </div>
      <div className="post">
        <h1>
          <span>BUCKETBUFF</span> How Gurucool's 'Padhaai' is making quality
          education free and hyperlocal in India
        </h1>
        <img src={img5} alt="" />
        <small>1 Minute Read</small>
      </div>
      <div className="post">
        <h1>
          <span>AWARESHALA</span> Gurucool – From Café with Love
        </h1>
        <img src={img6} alt="" />
        <small>1 Minute Read</small>
      </div>
    </div>
  );
};

export default Posts;
