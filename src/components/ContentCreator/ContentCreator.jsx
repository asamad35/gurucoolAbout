import React from "react";
import "./ContentCreator.scss";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";

const ContentCreator = () => {
  return (
    <div className="contentCreator">
      <div className="container flex flex-col">
        <h1 className="heading ">
          You can become a Guru <br /> Creator too!
        </h1>
        <p className="text">
          Share tour knowledge, live off passion and be your own boss
        </p>
        <Button variant="primary" size="lg">
          Find Out More
        </Button>
      </div>
    </div>
  );
};

export default ContentCreator;
