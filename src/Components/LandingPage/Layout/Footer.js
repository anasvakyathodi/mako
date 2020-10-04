import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import Logo from "./logo.svg";
// import {
//   AiFillLinkedin,
//   AiFillFacebook,
//   AiFillInstagram,
// } from "react-icons/ai";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="footer">
      <Container>
        <Row>
          <div className="web-subheading">It's time to join Mako !!!</div>
        </Row>
        <Row className="footer-container">
          <Col xs="6" lg="6">
            <div className="web-subheading">Contact</div>
            <p className="web-body-2">
              Address:
              <br />
              Kochin, Kerala, India
            </p>
            <p className="web-body-2">
              Any Clarification?:
              <br />
              <a
                href="mailto:info@makolearning.com?subject=Need a Clarification"
                className="text-white"
              >
                info@makolearning.com
              </a>
            </p>
            <p className="web-body-2">
              Want a Job?:
              <br />
              <a
                href="mailto:job@makolearning.com?subject=Want a job in mako"
                className="text-white"
              >
                job@makolearning.com
              </a>
            </p>
          </Col>
          <Col xs="6" lg="6" className="social-container">
            <div className="web-subheading">Social</div>
            <a href="https://www.twitter.com/HubMako" className="web-body-2">
              Twitter
            </a>
            <a href="https://www.facebook.com/makogrp" className="web-body-2">
              Facebook
            </a>
            <a href="https://www.instagram.com/mako.app" className="web-body-2">
              Instagram
            </a>
          </Col>
          {/* <Col xs="12" lg="3" className="logo-container">
            <img src={Logo} alt="logo" className="footer-logo" />
          </Col>
          <Col
            xs="12"
            lg="9"
            className="justify-content-end align-items-end d-flex"
          >
            <div className="social-icons d-flex align-items-center justify-content-between">
              <a href="https://www.facebook.com/makogrp">
                <AiFillFacebook className="sc-icon" />
              </a>
              <a href="https://www.instagram.com/mako.app">
                <AiFillInstagram className="sc-icon" />
              </a>
              <a href="https://www.twitter.com/HubMako">
                <AiFillLinkedin className="sc-icon" />
              </a>
            </div>
          </Col> */}
        </Row>
        <Row>
          <div className="web-error">Mako Learning Hub | Privacy Policy</div>
        </Row>
      </Container>
    </section>
  );
};

export default Footer;
