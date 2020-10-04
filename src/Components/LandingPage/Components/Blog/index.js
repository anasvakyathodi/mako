import React, { useState, useEffect } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "./Blog.css";
//import BlogImage from "./BlogImage.svg";
import { Row, Col, Container } from "react-bootstrap";
import { useTransition, animated, config } from "react-spring";
import p1 from "./p1g.jpg";
import p2 from "./p2g.jpg";
import p3 from "./p3g.jpg";
const feedback = [
  {
    id: 0,
    url: p1,
    name: "Gayathri Mohanan",
    quote:
      "Mako learning hub has provided me with a way to pursue my passion for teaching by sitting at the comfort of my home. Thankyou Mako for being my lifesaver !!",
  },
  {
    id: 1,
    url: p2,
    name: "Shoaib Ali",
    quote:
      "The way Mako functions is just astonishing. I was a bit sceptical about the whole online learning at first. But Mako made it flawless.",
  },
  {
    id: 2,
    url: p3,
    name: "Sreekutty Kanimangalath",
    quote:
      "Mako is more than a team it's family. I am so grateful to be part of it. Mako provides that extra bit of care to students that others lack. Maybe that why students love to learn with us.",
  },
];
const Blog = () => {
  const [index, setIndex] = useState(0);
  const transitions = useTransition(feedback[index], feedback[index].id, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.Slow,
  });
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((state) => (state + 1) % feedback.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="container blog">
      <ScrollAnimation animateIn="animate__fadeInUp" animateOnce>
        <div className="web-topic">To teach is divine</div>
      </ScrollAnimation>
      <ScrollAnimation animateIn="animate__fadeInUp" animateOnce>
        <div className="web-heading">
          Top array of tutors accross the industry
        </div>
      </ScrollAnimation>
      <div className="blog-container">
        <Container>
          <Row>
            <Col className="card-container">
              {transitions.map(({ item, key }) => (
                <animated.div key={key} className="card">
                  <div className="image-container">
                    <img src={item.url} alt="blog-card" />
                  </div>
                  <div className="card-body">
                    <h5 className="web-subtitle">{item.name}</h5>
                    <p className="web-quote">“{item.quote} ”</p>
                  </div>
                </animated.div>
              ))}
            </Col>
            <Col className="d-none d-lg-block profile-container">
              <Row>
                <Col xs="4">
                  <div className="profile-image" id="p1"></div>
                </Col>
                <Col xs="4">
                  <div className="profile-image" id="p2"></div>
                </Col>
                <Col xs="4">
                  <div className="profile-image" id="p3"></div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        <div className="blog-rect-wrapper">
          <div className="blog-rect"></div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
