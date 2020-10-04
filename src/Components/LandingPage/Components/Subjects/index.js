import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import ScrollAnimation from "react-animate-on-scroll";
import CardMediaBG from "./CardMediaBG.svg";
import CardProfile from "./CardProfile.svg";
import ParticipationIcon from "./ParticipationIcon.svg";
import RatingIcon from "./RatingIcon.svg";
import "./Subjects.css";
const CardDetails = [
  {
    subject: "Physics",
    id: "physics",
    background: CardMediaBG,
    profile: CardProfile,
    tutor: "Dr. Shreeja",
    description:
      "Pulvinar facilisi non eget vulputate cras amet auctor consequat.",
    rating: "90%",
    participation: "2000+",
  },
  {
    subject: "Chemistry",
    id: "chemistry",
    background: CardMediaBG,
    profile: CardProfile,
    tutor: "Dr. Shreeja",
    description:
      "Pulvinar facilisi non eget vulputate cras amet auctor consequat.",
    rating: "90%",
    participation: "2000+",
  },
  {
    subject: "Maths",
    id: "maths",
    background: CardMediaBG,
    profile: CardProfile,
    tutor: "Dr. Shreeja",
    description:
      "Pulvinar facilisi non eget vulputate cras amet auctor consequat.",
    rating: "90%",
    participation: "2000+",
  },
];

const CardGenerator = ({
  id,
  subject,
  background,
  profile,
  tutor,
  description,
  rating,
  participation,
}) => {
  return (
    <Col xs="12" lg="4">
      <div className="subject-name">{subject}</div>
      <Card className="subject-card" id={id}>
        <Card.Img variant="top" src={background} className="card-background" />
        <img src={profile} alt="card-profile" className="card-profile" />
        <Card.Body>
          <Card.Title className="web-body-2">By {tutor}</Card.Title>
          <div className="web-body">
            <div className="card-description">{description}</div>
            <div className="card-rating">
              <img src={RatingIcon} alt="rating-icon" />
              Progression rating: {rating}
            </div>
            <div className="card-participation">
              <img src={ParticipationIcon} alt="participation-icon" />
              participation: {participation}
            </div>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

const Subjects = () => {
  return (
    <Container className="subjects">
      <div className="web-topic">Featured classes</div>
      <Row className="card-container">
        {CardDetails.map((item) => (
          <CardGenerator
            {...{
              subject: item.subject,
              id: item.id,
              background: item.background,
              profile: item.profile,
              tutor: item.tutor,
              description: item.description,
              rating: item.rating,
              participation: item.participation,
            }}
            key={item.id}
          />
        ))}
      </Row>
      <Row>
        <div
          className={`web-body ${
            window.innerWidth < 1024 ? "text-center" : ""
          }`}
        >
          We have over 4000+ courses and 100+ Industry recommended lucturers
          awaiting you
        </div>
      </Row>
      <Row>
        {/* <button className="more-course-btn text-white">
          Explore all courses
        </button> */}
      </Row>
      {/* <div className="subject-btn-rect-wrapper">
        <div className="subject-btn-rect"></div>
      </div> */}
    </Container>
  );
};

export default Subjects;
