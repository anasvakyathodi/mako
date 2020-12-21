import React from "react";
import "./ClosingStatement.css";
import { Container, Row, Col } from "react-bootstrap";
import ScrollAnimation from "react-animate-on-scroll";
import Arrow from "./Arrow.svg";
const ClosingStatement = () => {
  return (
    <div className="closing" id="contact">
      <Container>
        <Row>
          <Col lg="6" xs="12">
            <ScrollAnimation animateIn="animate__fadeInLeft">
              <div className="web-body">Winners take action</div>
              <div className="web-subheading">
                Want to try out MAKO? Join to our demo session
              </div>
            </ScrollAnimation>
          </Col>
          <Col lg="6" xs="12">
            <img src={Arrow} alt="arrow" id="arrow-img" />
            <ScrollAnimation animateIn="animate__fadeInUp">
              <button
                className="btn enroll-btn d-flex justify-content-center align-items-center"
                onClick={() => window.scrollTo(0, 0)}
              >
                <div className="web-subtitle">Join to demo class</div>
              </button>
            </ScrollAnimation>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ClosingStatement;
