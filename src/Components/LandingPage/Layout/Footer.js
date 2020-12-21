import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Logo from "./logo.svg";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterCircle,
} from "react-icons/ai";
import "./Footer.css";

const Footer = () => {
  const [status, setStatus] = useState("");
  const [hide, setHide] = useState(false);
  const submitForm = (ev) => {
    ev.preventDefault();
    setHide(true);
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        setStatus("SUCCESS");
      } else {
        setStatus("ERROR");
      }
    };
    xhr.send(data);
  };

  return (
    <section className="footer">
      <Container>
        <Row>
          <Col sm="12">
            <div className="web-subheading">
              <img src={Logo} className="footer-logo" alt="footer-logo" />
            </div>
          </Col>
        </Row>
        <Row className="footer-container">
          <Col xs="12" lg="4" className="contact-container text-white">
            <div className="footer-header">FIND US</div>
            <p className="footer-body">
              MAKO LEARNING HUB <br />
              2nd Floor,Royal Plaza ,<br /> Near Metro Station ,<br />{" "}
              Aluva,Ernakulam
              <br />
              <br /> E-Contact <br />
              support@makolearning.com <br />
              <br />
              Want A Job?
              <br /> job@makolearning.com <br />
              +91 8281 500 862
            </p>
          </Col>

          <Col xs="12" lg="4" className="contact-container text-white">
            <div className="footer-header">LEGAL</div>
            <br />
            <div className="footer-body-bold">
              Terms And Conditions
              <br />
              Privacy Policy
              <br />
              Refund Policy
              <br />
              <br />
            </div>
            <br />
            <div>
              {" "}
              <div className="social-icons">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.facebook.com/makogrp"
                >
                  <AiFillFacebook className="sc-icon" />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.instagram.com/mako.app"
                >
                  <AiFillInstagram className="sc-icon" />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.twitter.com/HubMako"
                >
                  <AiFillTwitterCircle className="sc-icon" />
                </a>
              </div>
            </div>
          </Col>
          <Col xs="12" lg="4" className="contact-container text-white">
            <div className="footer-header mb-5">
              subscribe to our newsletter
            </div>
            <form
              id="my-form"
              onSubmit={submitForm}
              action="https://formspree.io/f/mgepaqka"
              method="POST"
            >
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  placeholder="name"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="email"
                  required
                />
                <small id="emailHelp" className="mt-3 form-text text-white">
                  Stay upto date with our news and products. Don’t worry, you
                  email is safe with us. you will not be spammed.
                </small>
              </div>
              <div className="text-center">
                {status === "SUCCESS" ? (
                  <p className="web-subtitle text-white" id="my-form-status">
                    Successfully Subscribed !!!
                  </p>
                ) : (
                  !hide && (
                    <button type="submit" className="btn btn-footer my-2">
                      <div className="web-subtitle text-white">SUBSCRIBE</div>
                    </button>
                  )
                )}
                {status === "ERROR" && (
                  <p className="web-subtitle text-white">
                    Oops! There was an error...
                  </p>
                )}
              </div>
            </form>
          </Col>

          {/* <Col xs="6" lg="6" className="social-container">
            <div className="web-subheading">Social</div>
            <a href="https://www.twitter.com/HubMako" className="web-body">
              Twitter
            </a>
            <a href="https://www.facebook.com/makogrp" className="web-body">
              Facebook
            </a>
            <a href="https://www.instagram.com/mako.app" className="web-body">
              Instagram
            </a>
          </Col> */}
          {/* <Col xs="12" lg="3" className="logo-container">
            <img src={Logo} alt="logo" className="footer-logo" />
          </Col>
          <Col
            xs="12"
            lg="9"
            className="justify-content-end align-items-end d-flex"
          >
         
          </Col> */}
        </Row>
      </Container>
    </section>
  );
};

export default Footer;
