import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import CardMediaBG1 from "./CardBG1.png";
import CardMediaBG2 from "./CardBG2.png";
import CardMediaBG3 from "./CardBG3.png";
import CardProfile1 from "./Pr1.svg";
import CardProfile2 from "./Pr2.svg";
import CardProfile3 from "./Pr3.svg";
import ParticipationIcon from "./ParticipationIcon.svg";
import RatingIcon from "./RatingIcon.svg";
import "./Subjects.css";
import { useHistory } from "react-router-dom";
const CardDetails = [
  {
    subject: "Vedic maths",
    id: "vedic_maths",
    background: CardMediaBG1,
    profile: CardProfile1,
    tutor: "Mr. Ajmal Yoosuf",
    description:
      "Transform yourself into a super computer with the power of Vedas.",
    rating: "90%",
    participation: "100+",
  },
  {
    subject: "Spoken English",
    id: "spoken_english",
    background: CardMediaBG2,
    profile: CardProfile2,
    tutor: "Miss. Seetha  Satheesh",
    description:
      "Increase your self-esteem by mastering the language  of the world.",
    rating: "90%",
    participation: "50+",
  },
  {
    subject: "Coding",
    id: "coding",
    background: CardMediaBG3,
    profile: CardProfile3,
    tutor: "Mr .Manit Malhotra",
    description:
      "Learn how to build from scratch a coded chatbot in under 10 days.",
    rating: "90%",
    participation: "50+",
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
  const history = useHistory();
  const handleClick = () => {
    history.push("/register");
  };

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
        <button onClick={handleClick} className="more-course-btn text-white">
          Explore all courses
        </button>
      </Row>
    </Container>
  );
};

export default Subjects;
