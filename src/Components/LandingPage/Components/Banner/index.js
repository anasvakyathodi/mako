import React, { useState } from "react";
// import $ from "jquery";
import { IoMdPlay } from "react-icons/io";
import { Link } from "react-router-dom";
import "./Banner.css";
import "animate.css";
import { Modal } from "react-bootstrap";
import popBG from "./popBG.svg";
import newBG from "./newBG.png";
import ScrollAnimation from "react-animate-on-scroll";

const Banner = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };

  return (
    <>
      <section id="main" className="banner">
        <Modal
          id="join-demo"
          className={`m-0 p-0 animate__animated ${
            show ? "animate__fadeInLeft" : "animate__fadeOutLeft"
          }`}
          show={show}
          onHide={handleShow}
        >
          <div className="card popup">
            <img src={popBG} className="card-img-top" alt="pop-bg" />
            <div className="card-body">
              <div className="web-title">Join our demo classes</div>
              <p className="web-body">
                Experience our lecturing sessions by participating in the demo
                class
              </p>
              <div className="d-flex w-100 align-items-center justify-content-center">
                <Link to="/register" className="btn popup-btn">
                  <div className="web-subtitle text-white">Join class</div>
                </Link>
              </div>
            </div>
          </div>
        </Modal>
        <div className="text-container container">
          <div className="row">
            <div className="col-lg-6 d-flex order-lg-2 col-12 justify-content-center align-items-center">
              <img
                src={newBG}
                className="banner-img"
                alt="bg"
                height={"100%"}
              />
            </div>
            <div className="col-lg-6 col-12">
              <ScrollAnimation animateIn="animate__fadeInLeft" animateOnce>
                <div className="web-heading">
                  Kerala's first 1 - 1 tutoring platform
                </div>
              </ScrollAnimation>
              <ScrollAnimation animateIn="animate__fadeInUp" animateOnce>
                <div className="subtitleText web-body-2">
                  The best-personalized way to learn during this global
                  pandemic. Get a personal mentor to help your kids excel
                  despite the conditions.
                </div>
              </ScrollAnimation>
              <ScrollAnimation
                animateIn="animate__fadeInBottomLeft"
                animateOnce
              >
                <div className="card">
                  <div className="row">
                    <div className="col-8 p-0">
                      <div className="card-body">
                        <h5 className="web-title">
                          Try out a free demo session
                        </h5>
                        <p className="web-body-2">
                          Experience the mako way of learning by attending a
                          free demo session. and decide if you want to hop
                          aboard.
                        </p>
                        <div className="card-rect-wrapper">
                          <div className="card-rect"></div>
                        </div>
                      </div>
                    </div>
                    <div className="col-4 p-0 d-flex align-items-center justify-content-center btn-container1">
                      <div className="btn-play-outer">
                        <button
                          type="button"
                          className="btn btn-play-inner"
                          onClick={handleShow}
                        >
                          <IoMdPlay className="btn-play" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
        <div className="arrow-wrapper d-none d-lg-block">
          <div className="arrow-img"></div>
        </div>
      </section>
    </>
  );
};

export default Banner;
