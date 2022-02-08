import React from "react";
import "./ContentCaring.scss";

import { Button } from "react-bootstrap";

const ContentCaring = () => {
  return (
    <div className="contentCare flex flex-col">
      <h1>Sharing is caring.</h1>
      <p>
        We encourage learners to engage in meaningful conversations and
        educators to share their knowledge freely and for free.
      </p>
      <Button variant="primary" size="lg">
        Find Out More
      </Button>
    </div>
  );
};

export default ContentCaring;
