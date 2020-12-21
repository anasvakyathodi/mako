import React from "react";
import Side1 from "./side1.png";
import Side2 from "./side2.png";
import Side3 from "./side3.png";
import "./style.css";
import ScrollAnimation from "react-animate-on-scroll";
const Section3 = () => {
  return (
    <section className="section3">
      <div className="container">
        <div className="text-center">
          <ScrollAnimation animateIn="animate__fadeInUp">
            <div className="web-topic mx-auto">WHAT WE OFFER</div>
          </ScrollAnimation>
        </div>
        <div className="row">
          <div className="col-lg-6 col-12 d-flex flex-column align-items-center order-lg-2">
            <ScrollAnimation animateIn="animate__fadeInRight">
              <div className="web-subheading">
                Recreating one-on-one interaction effectively through technology
              </div>
              <div className="web-body">
                Arcu at velit dictum risus pretium elit. Massa semper vitae elit
                ullamcorper amet felis dui ut. Gravida et, venenatis, consequat
                id tincidunt risus lectus integer aliquam
              </div>
            </ScrollAnimation>
          </div>
          <div className="col-lg-6 col-12 order-lg-1">
            <ScrollAnimation animateIn="animate__fadeInLeft">
              <img
                alt="side-screenshot"
                src={Side1}
                className="w-100 sideImage"
              />
            </ScrollAnimation>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-12 d-flex flex-column align-items-center order-lg-1">
            <ScrollAnimation animateIn="animate__fadeInLeft">
              <div className="web-subheading">
                Recreating one-on-one interaction effectively through technology
              </div>

              <div className="web-body">
                Arcu at velit dictum risus pretium elit. Massa semper vitae elit
                ullamcorper amet felis dui ut. Gravida et, venenatis, consequat
                id tincidunt risus lectus integer aliquam
              </div>
            </ScrollAnimation>
          </div>
          <div className="col-lg-6 col-12 order-lg-2">
            <ScrollAnimation animateIn="animate__fadeInRight">
              <img
                alt="side-screenshot"
                src={Side2}
                className="w-100 sideImage"
              />
            </ScrollAnimation>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-12 d-flex flex-column align-items-center order-lg-2">
            {" "}
            <ScrollAnimation animateIn="animate__fadeInRight">
              <div className="web-subheading">
                Recreating one-on-one interaction effectively through technology
              </div>
              <div className="web-body">
                Arcu at velit dictum risus pretium elit. Massa semper vitae elit
                ullamcorper amet felis dui ut. Gravida et, venenatis, consequat
                id tincidunt risus lectus integer aliquam
              </div>
            </ScrollAnimation>
          </div>
          <div className="col-lg-6 col-12 order-lg-1">
            <ScrollAnimation animateIn="animate__fadeInLeft">
              <img
                alt="side-screenshot"
                src={Side3}
                className="w-100 sideImage"
              />
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
