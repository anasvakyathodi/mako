import React from "react";
import "./Publications.css";
import { Container, Row, Col } from "react-bootstrap";
import PublicationsSideBG from "./PublicationsSideBG.svg";
import BlogImg from "./BlogImg.svg";
import ScrollAnimation from "react-animate-on-scroll";

const blogDetails = [
  {
    name: "Anas Vakyathodi",
    number: "676504",
    description: "In America’s Most Segregated City, a Radical School..",
    date: "Dec 24 2017",
  },
  {
    name: "Steve Jobs",
    number: "12345",
    description: "In America’s Most Segregated City, a Radical School..",
    date: "Dec 24 2017",
  },
  {
    name: "Zukkerberg",
    number: "83292",
    description: "In America’s Most Segregated City, a Radical School..",
    date: "Dec 24 2017",
  },
];

const BlogGenerator = ({ name, number, description, date }) => {
  return (
    <>
      <div className="media">
        <img src={BlogImg} className="card-img" alt="Blog-profile" />
        <div className="media-body">
          <div className="web-body">
            {name},{number}: {description}
          </div>
          <p className="web-overline">Published on {date}</p>
        </div>
      </div>
      <div className="article-seperator"></div>
    </>
  );
};
const Publications = () => {
  return (
    <Container className="publications" id="blog">
      <ScrollAnimation animateIn="animate__fadeInUp" animateOnce>
        <div className="web-topic">Our blogs and publications</div>
      </ScrollAnimation>
      <Row>
        <Col sm="1"></Col>
        <Col>
          <Row>
            <Col lg="6" xs="12">
              <ScrollAnimation animateIn="animate__fadeInLeft" animateOnce>
                <img
                  src={PublicationsSideBG}
                  className="side-image"
                  alt="publications-boy-smile"
                />
              </ScrollAnimation>
            </Col>
            <Col lg="6" xs="12">
              <ScrollAnimation animateIn="animate__fadeInRight" animateOnce>
                <div className="article">
                  {blogDetails.map((blog) => (
                    <BlogGenerator
                      {...{
                        name: blog.name,
                        number: blog.number,
                        description: blog.description,
                        date: blog.date,
                      }}
                      key={blog.name}
                    />
                  ))}
                </div>
              </ScrollAnimation>
            </Col>
          </Row>
        </Col>
        <Col sm="1"></Col>
      </Row>
    </Container>
  );
};

export default Publications;
