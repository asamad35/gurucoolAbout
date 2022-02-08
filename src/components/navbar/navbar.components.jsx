import React, { useState } from "react";
import "./navbar.styles.scss";
import logo from "../../assests/images/logo.png";

import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const MyNav = () => {
  const [isPageActive, setPageActive] = useState("our-story");
  return (
    <div className="myNavbar flex">
      {/* <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="navlinks flex">
        <Link
          to={"/"}
          className={`navlink ${isPageActive == "our-story" ? "active" : ""} `}
          onClick={() => setPageActive("our-story")}
        >
          Our story
        </Link>
        <Link
          to={"people"}
          className={`navlink ${isPageActive == "people" ? "active" : ""} `}
          onClick={() => setPageActive("people")}
        >
          People
        </Link>
        <Link
          to={"tools"}
          className={`navlink ${isPageActive == "tools" ? "active" : ""} `}
          onClick={() => setPageActive("tools")}
        >
          Tools
        </Link>
        <Link
          to={"content"}
          className={`navlink ${isPageActive == "content" ? "active" : ""} `}
          onClick={() => setPageActive("content")}
        >
          Content
        </Link>
      </div> */}
      <Navbar bg="white" variant="light" expand="lg">
        <Navbar.Brand className="logo">
          <img src={logo} alt="" />
        </Navbar.Brand>

        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="navlinks flex">
            <Link
              to="/"
              onClick={() => setPageActive("our-story")}
              className={`navlink ${
                isPageActive == "our-story" ? "active" : ""
              } `}
            >
              Our Story
            </Link>
            <Link
              to={"people"}
              className={`navlink ${isPageActive == "people" ? "active" : ""} `}
              onClick={() => setPageActive("people")}
            >
              People
            </Link>
            <Link
              to={"tools"}
              className={`navlink ${isPageActive == "tools" ? "active" : ""} `}
              onClick={() => setPageActive("tools")}
            >
              Tools
            </Link>
            <Link
              to={"content"}
              className={`navlink ${
                isPageActive == "content" ? "active" : ""
              } `}
              onClick={() => setPageActive("content")}
            >
              Content
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default MyNav;
