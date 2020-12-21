import React from "react";
// import $ from "jquery";
import { IoMdPlay } from "react-icons/io";
import { useHistory } from "react-router-dom";
import "./Banner.css";
import "animate.css";
// import newBG from "./newBG.png";
import ScrollAnimation from "react-animate-on-scroll";

const Banner = () => {
  const history = useHistory();
  const handleShow = () => {
    history.push("/register");
  };

  return (
    <>
      <section id="main" className="banner">
        <div className="text-container container">
          <div className="row">
            <div className="col-lg-6 d-flex order-lg-2 col-12 justify-content-center align-items-center">
              {/* <img
                src={newBG}
                className="banner-img"
                alt="bg"
                height={"100%"}
              /> */}
            </div>
            <div className="side-vector d-none d-lg-block"></div>
            <div className="col-lg-6 col-12">
              <ScrollAnimation animateIn="animate__fadeInLeft">
                <div className="web-heading">1 - 1 tutoring platform</div>
              </ScrollAnimation>
              <ScrollAnimation animateIn="animate__fadeInUp">
                <div className="subtitleText web-body-2">
                  The best-personalized way to learn during this global
                  pandemic. Get a personal mentor to help your kids excel
                  despite the conditions.
                </div>
              </ScrollAnimation>
              <ScrollAnimation animateIn="animate__fadeInBottomLeft">
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
