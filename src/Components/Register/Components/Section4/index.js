import React, { useState } from "react";
import "./Carousel.css";
import { Container, Row, Media, Carousel, Image } from "react-bootstrap";
import ScrollAnimation from "react-animate-on-scroll";
import { GoPrimitiveDot } from "react-icons/go";
import nithya from "./nithya.jpg";
import anju from "./anju.jpg";
import hari from "./hari.jpg";
import jobin from "./jobin.jpg";
import vishnu from "./vishnu.jpg";
import jijin from "./jijin.png";

const feedbacks = [
  {
    id: "1",
    img: nithya,
    name: "Nithya Krishna Kumar",
    month: "9 months",
    description:
      ' The root of education will be bitter some times but the fruits will be always sweet" but for me, the root and the fruit were super delicious. So I am wishing you all the success in coming years thank you MAKO.',
  },
  {
    id: "2",
    img: anju,
    name: "Anju",
    month: "2 years",
    description:
      "Thank you mako for being a  part of my success. I have been a student at this institution for the past two years. Teachers here are highly qualified and passionate in their work. This was evident to me through my AISSCE result in 2018 by scoring 95%.",
  },
  {
    id: "3",
    img: jobin,
    name: "Nobin Joy",
    month: "2 years",
    description:
      "Excellent teaching and staffs.. impressed with their prompt service...I personally suggest all student to be a part of Mako Learning Hub. Thankz a lot..",
  },
  {
    id: "4",
    img: hari,
    name: "Hare K",
    month: "10 months",
    description:
      "Best coaching for NIOS......well qualified teaching staff....provides counselling for students....!!",
  },
  {
    id: "5",
    img: vishnu,
    name: "Vishnu KS",
    month: "a month",
    description:
      "I hated learning online. But the teachers at Mako made this enjoyable.I donno how they do it.You will love it,you have my word for that!! #gotMakofied ",
  },
  {
    id: "6",
    img: jijin,
    name: "Jijin J Dev",
    month: "a year",
    description:
      "One of the best institutions over Kerala. Good faculties and the best teaching methods. Appreciated!!",
  },
];

const CardGenerator = ({ img, name, month, description }) => {
  return (
    <Media className="carousel-card">
      <Image
        width={64}
        height={64}
        className="align-self-start d-inline"
        style={{ margin: "25px 19px 35px 35px" }}
        src={img}
        alt="customer photo"
      />
      <Media.Body style={({ margin: "0" }, { padding: "0" })}>
        <div className="web-title">{name}</div>
        <div className="web-overline">Joined {month} ago</div>
        <div className="web-quote">" {description} "</div>
      </Media.Body>
    </Media>
  );
};

const CarouselComponent = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <section className="section4 carousel-container">
      <Container>
        {/* <ScrollAnimation animateIn="animate__fadeInUp" animateOnce>
          <div className="web-topic">WE OFFER</div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="animate__fadeInUp" animateOnce>
          <div className="web-heading">
            Students and parents trust us from 2017. Now it's your turn to
            experience the Mako way of learning
          </div>
        </ScrollAnimation> */}
        <div className="feature-container">
          {/* <Row>
            {featurelist.map((feature) => (
              <Col lg="4" xs="12" key={feature.id.toString()}>
                <ScrollAnimation animateIn="animate__flipInX" animateOnce>
                  <Container className="feature">
                    <div className="feature-image">
                      <img src={feature.icon} alt="feature-icon" />
                    </div>
                    <div className="feature-content">
                      <div className="web-subheading feature-heading">
                        {feature.count}
                      </div>
                      <div className="web-topic feature-description">
                        {feature.text}
                      </div>
                    </div>
                  </Container>
                </ScrollAnimation>
              </Col>
            ))}
          </Row> */}
          <Row>
            <div
              className="web-topic mb-5"
              style={
                ({ textTransform: "uppercase" },
                { color: "var(--support-red)" })
              }
            >
              <ScrollAnimation animateIn="animate__fadeInUp">
                WHAT OUR USERS SAY
              </ScrollAnimation>
            </div>
          </Row>
        </div>
        <Container>
          <Carousel
            className="carousel-main"
            indicators={false}
            controls={false}
            interval={5000}
            activeIndex={index}
            onSelect={handleSelect}
          >
            {feedbacks.map((feedback) => (
              <Carousel.Item key={feedback.id}>
                <CardGenerator
                  {...{
                    img: feedback.img,
                    name: feedback.name,
                    month: feedback.month,
                    description: feedback.description,
                  }}
                />
              </Carousel.Item>
            ))}
          </Carousel>
          <div className="indicators">
            <span>
              <GoPrimitiveDot
                color={index === 0 ? "#FF6666" : "white"}
                onClick={() => setIndex(0)}
              />
            </span>
            <span>
              <GoPrimitiveDot
                color={index === 1 ? "red" : "white"}
                onClick={() => setIndex(1)}
              />
            </span>
            <span>
              <GoPrimitiveDot
                color={index === 2 ? "#FF6666" : "white"}
                onClick={() => setIndex(2)}
              />
            </span>
            <span>
              <GoPrimitiveDot
                color={index === 3 ? "#FF6666" : "white"}
                onClick={() => setIndex(3)}
              />
            </span>
            <span>
              <GoPrimitiveDot
                color={index === 4 ? "#FF6666" : "white"}
                onClick={() => setIndex(4)}
              />
            </span>
            <span>
              <GoPrimitiveDot
                color={index === 5 ? "#FF6666" : "white"}
                onClick={() => setIndex(5)}
              />
            </span>
          </div>
        </Container>
      </Container>
    </section>
  );
};

export default CarouselComponent;
