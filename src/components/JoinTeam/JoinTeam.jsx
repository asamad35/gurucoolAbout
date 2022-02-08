import React from "react";
import "./JoinTeam.scss";
import team from "../../assests/images/story1.webp";

const JoinTeam = () => {
  return (
    <div className="joinTeam">
      <h2 className="joinTeamHeading text-left">
        Join the <br /> <span>Fam!</span>
      </h2>
      <div className="joinTeamContainer ">
        <div className="imageContainer">
          <img src={team} alt="" />
        </div>
        <div className="textContainer">
          <p className="text-left">
            We have welcomed wholeheartedly anyone who believes in our values
            and vision and wants to work for the same. GuruFam is a mess. But it
            is your mess, it is our mess. It is a cool mess! Make mistakes
            within GuruFam and learn from them.
          </p>
          <div className="list flex">
            <div className="item">Workshops</div>
            <div className="item">Podcast</div>
            <div className="item">Articles</div>
            <div className="item">Impact</div>
            <div className="item">Guruship</div>
            <div className="item">Connect</div>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default JoinTeam;
