import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
// import Image from 'next/image';
// import styles from '../../styles/Footer.module.css';
import "./Footer.scss";
import React, { useState } from "react";
const Footer = () => {
  // const [showMe, setShowMe] = useState(false);
  // function toggle(){
  //   setShowMe(!showMe);
  // }

  return (
    <>
      <footer className={"footer"}>
        <div className="container">
          <div className={"footerTop"}>
            <div className="row justify-content-between">
              <div className="col-xl-6 col-xxl-6 col-lg-6 col-md-8 col-sm-8">
                <ul className={"footerSocial"}>
                  <li className="me-2">Follow us</li>
                  <li className="me-2">
                    <a target="_blank" href="#">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li className="me-2">
                    <a target="_blank" href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li className="me-2">
                    <a target="_blank" href="#">
                      <i className="fab fa-facebook-square"></i>
                    </a>
                  </li>
                  <li className="me-2">
                    <a target="_blank" href="#">
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </li>
                  <li className="me-2">
                    <a target="_blank" href="#">
                      <i className="fab fa-quora"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-xl-6 col-xxl-6 col-lg-6 col-md-4 col-sm-4 text-sm-end">
                <ul className={"footerSocial"}>
                  <li className="me-2">
                    <a href="#" className="fs-5">
                      <i className="fas fa-globe"></i>
                    </a>
                  </li>
                  <li className="me-2">
                    <select className="form-select">
                      <option>English</option>
                      <option>हिंदी</option>
                    </select>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4">
              <h4 className="fw-medium">
                <span>More about us</span>{" "}
                <i className="fas fa-chevron-down d-block d-md-none"></i>
              </h4>
              <ul className={"footerLink"}>
                <li>
                  <a href="#" className="text-black">
                    Contact us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-black">
                    Supporters
                  </a>
                </li>
                <li>
                  <a href="#" className="text-black">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-black">
                    Locations
                  </a>
                </li>
                <li>
                  <a href="#" className="text-black">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-black">
                    Sail with Guruship
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4">
              <h4 className="fw-medium">
                <span>Help Center</span>{" "}
                <i className="fas fa-chevron-down d-block d-md-none"></i>
              </h4>
              <ul className={"footerLink"}>
                <li>
                  <a href="#" className="text-black">
                    Gurucool.xyz
                  </a>
                </li>
                <li>
                  <a href="#" className="text-black">
                    Padhaai
                  </a>
                </li>
                <li>
                  <a href="#" className="text-black">
                    Gurucool Coaching
                  </a>
                </li>
                <li>
                  <a href="#" className="text-black">
                    Home Tuition
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4">
              <h4 className="fw-medium">
                <span>Policy</span>{" "}
                <i className="fas fa-chevron-down d-block d-md-none"></i>
              </h4>
              <ul className={"footerLink"}>
                <li>
                  <a href="#" className="text-black">
                    Data Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-black">
                    Cookie Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-black">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="text-black">
                    Community Standards
                  </a>
                </li>
                <li>
                  <a href="#" className="text-black">
                    How our Business Works
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className={"footerBottom"}>
            <ul>
              <li className="d-inline-block">
                <a href="#" className="px-3">
                  {/* <Image src="/logo.png" alt="" width={120} height={35} /> */}
                </a>
              </li>
              <li className="d-inline-block">
                <a href="#" className="text-black px-2">
                  <i className="fas fa-question-circle"></i> Help
                </a>
              </li>
              <li className="d-inline-block">
                <a href="#" className="text-black px-2">
                  Privacy
                </a>
              </li>
              <li className="d-inline-block">
                <a href="#" className="text-black px-2">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
