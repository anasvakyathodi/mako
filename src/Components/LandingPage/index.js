import React, { useEffect, useState } from "react";
// layouts
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
// import "./script";
// pages
import Banner from "./Components/Banner/";
import Courses from "./Components/Courses";
import Carousel from "./Components/Carousel";
import Blog from "./Components/Blog";
import Subjects from "./Components/Subjects";
import Publications from "./Components/Publications";
import ClosingStatement from "./Components/ClosingStatement";
import ReactLoading from "react-loading";

// import {
//   TiSocialTwitter,
//   TiSocialInstagram,
//   TiSocialFacebook,
// } from "react-icons/ti";

// css
import "./index.css";
const LandingPage = () => {
  useEffect(() => {
    loadFun();
  }, []);
  const loadFun = () => {
    window.onload = function () {
      setIsLoaded(true);
    };
    setTimeout(() => {
      setIsLoaded(true);
    }, 5000);
  };

  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <>
      {!isLoaded ? (
        <ReactLoading type="bars" className="bar" />
      ) : (
        <>
          <Header />
          <Banner />
          <div className="langing-page">
            <Courses />
            <Blog />
            <Carousel />
            <Subjects />
            <Publications />
            <ClosingStatement />
            <Footer />
          </div>
          {/* <div className="backdrop"></div>
          <div className="fab child" data-subitem="1">
            <a href="https://www.instagram.com/mako.app">
              <TiSocialInstagram />
            </a>
          </div>
          <div className="fab child" data-subitem="2">
            <a href="https://www.facebook.com/makogrp">
              <TiSocialFacebook />
            </a>
          </div>
          <div className="fab child" data-subitem="3">
            <a href="https://www.twitter.com/HubMako">
              <TiSocialTwitter />
            </a>
          </div> */}
          {/* <div className="fab" id="masterfab">
            <div>
              <BiLink />
            </div>
          </div> */}
        </>
      )}
    </>
  );
};

export default LandingPage;
