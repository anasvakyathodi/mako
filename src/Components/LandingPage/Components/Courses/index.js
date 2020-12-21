import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
import "./Courses.css";
import CardImage from "./CardImage.svg";
import ScrollAnimation from "react-animate-on-scroll";

const Courses = () => {
  return (
    <section className="courses" id="features">
      <div className="container mt-5">
        <ScrollAnimation animateIn="animate__fadeInUp">
          <div className="web-topic">Learn anywhere anytime</div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="animate__fadeInUp">
          <div className="web-heading">
            Transforming the way our children learn with the aid of technology
          </div>
        </ScrollAnimation>
        <div className="underline" />
      </div>
      <Container className="cards">
        <Col xs="1"></Col>
        <Col>
          <Row>
            <Col lg="4" xs="12" className="card-wrapper">
              <ScrollAnimation animateIn="animate__fadeInUp">
                <div className="card">
                  <img
                    src={CardImage}
                    height="81.38"
                    width="81.38"
                    className="card-image"
                    alt="card-profile-1"
                  />
                  <div className="card-body">
                    <div className="web-title">
                      1-1 Live Interactive classes
                    </div>
                    <p className="web-body">
                      Studies say the attention span of students while attending
                      a classroom deviates regularly. This is the reason why
                      most of the parents prefer a home tutor. We have
                      translated home tuition to online personalized tuition
                      seamlessly with our live interaction sessions.
                    </p>
                    <Link to="/register" className="web-subtitle">
                      Know More <AiOutlineArrowRight width="15" />
                    </Link>
                  </div>
                </div>
              </ScrollAnimation>
            </Col>
            <Col lg="4" xs="12" className="card-wrapper">
              <ScrollAnimation animateIn="animate__fadeInUp">
                <div className="card">
                  <img
                    src={CardImage}
                    height="81.38"
                    width="81.38"
                    className="card-image"
                    alt="card-profile-2"
                  />
                  <div className="card-body">
                    <div className="web-title">Non Academic Courses</div>
                    <p className="web-body">
                      The newly released National Educational policy advocates
                      the addition of skill-based course into the curriculum.
                      Even before this reveal, we have offered our students a
                      collection of language and skill courses to choose from.
                    </p>
                    <Link to="/register" className="web-subtitle">
                      Know More <AiOutlineArrowRight width="15" />
                    </Link>
                  </div>
                </div>
              </ScrollAnimation>
            </Col>
            <Col lg="4" xs="12" className="card-wrapper">
              <ScrollAnimation animateIn="animate__fadeInUp">
                <div className="card">
                  <img
                    src={CardImage}
                    height="81.38"
                    width="81.38"
                    className="card-image"
                    alt="card-profile-3"
                  />
                  <div className="card-body">
                    <div className="web-title">
                      Interactive student platform
                    </div>
                    <p className="web-body">
                      What makes us different is our highly interactive platform
                      which acts as a backbone to student and teachers. The best
                      part of the platform is that it is ever-growing and in the
                      near future will turn out to be a social network for
                      students. The possibilities are endless.
                    </p>
                    <Link to="/register" className="web-subtitle">
                      Know More <AiOutlineArrowRight width="15" />
                    </Link>
                  </div>
                </div>
              </ScrollAnimation>
            </Col>
          </Row>
        </Col>
        <Col xs="1"></Col>
      </Container>
    </section>
  );
};

export default Courses;
