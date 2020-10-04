import React, { useState } from "react";
// useContext
// import { Redirect } from "react-router";
import "./Register.css";
import Icon from "./Icon.svg";
import Arrow from "./Arrow.svg";
import { FaCheck } from "react-icons/fa";
import Header from "../LandingPage/Layout/Header";
import { Container, Row, Col } from "react-bootstrap";
// import api from "./../../api/api.js";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [fullname, setFullname] = useState("");
  const [physics, setPhysics] = useState(false);
  const [biology, setBiology] = useState(false);
  const [chemistry, setChemistry] = useState(false);
  const [registered, setRegistered] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  // const { currentUser } = useContext(AuthContext);

  // if (registered) {
  //   return <Redirect to="/login" />;
  // }

  return (
    <div className="reg">
      <Header />
      <div className="wrapper">
        <Container>
          <Row>
            <Col lg="6" xs="12" className="text-container">
              <div className="text-box">
                <img src={Icon} alt="icon" className="sample-icon" />
                <div className="web-heading">Join a demo session</div>
                <div className="web-body">
                  Experience the mako way of learning by attending a free demo
                  <br className="d-none d-lg-block" />
                  session. and decide if you want to hop aboard.
                </div>
              </div>
            </Col>
            <div className="arrow-container">
              <img src={Arrow} alt="arrow" className="arrow-pop" />
            </div>
            <Col lg="6" xs="12" className="pop-container">
              <div className="pop-box">
                <div className="web-title">Register to the demo class</div>
                <form
                  className="reg-form"
                  onSubmit={(e) => e.preventDefault() && false}
                >
                  <div className="form-group">
                    <label htmlFor="fullname" className="web-subtitle-2">
                      Full name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="fullname"
                      placeholder="Enter your full name"
                      value={fullname}
                      onChange={(e) => setFullname(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email" className="web-subtitle-2">
                      Email ID
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Enter your email id"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone" className="web-subtitle-2">
                      Mobile Number
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="phone"
                      placeholder="Enter your mobile number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password" className="web-subtitle-2">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Enter password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="web-subtitle-2">Choose a batch</div>
                  <div
                    style={{ width: "30%" }}
                    className={` form-check form-check-inline ${
                      physics ? "haha" : ""
                    }`}
                    onClick={() => setPhysics(!physics)}
                  >
                    <div className="float-left">
                      {physics ? <FaCheck /> : null}
                    </div>
                    <div className="float-right">
                      <div className={`web-topic ${physics ? "hihi" : ""}`}>
                        PHYSICS
                      </div>
                      <div className={`web-error ${physics ? "hihi" : ""}`}>
                        Sunday, 9:00 AM
                      </div>
                    </div>
                  </div>
                  <div
                    style={{ width: "30%" }}
                    className={` form-check form-check-inline ${
                      chemistry ? "haha" : ""
                    }`}
                    onClick={() => setChemistry(!chemistry)}
                  >
                    <div className="float-left">
                      {chemistry ? <FaCheck /> : null}
                    </div>
                    <div className="float-right">
                      <div className={`web-topic ${chemistry ? "hihi" : ""}`}>
                        <div className="chem-big d-none d-lg-flex">
                          CHEMISTRY
                        </div>
                        <div className="chem-small d-lg-none">CHEMISTRY</div>
                      </div>
                      <div className={`web-error ${chemistry ? "hihi" : ""}`}>
                        Sunday, 9:00 AM
                      </div>
                    </div>
                  </div>
                  <div
                    style={{ width: "30%" }}
                    className={` form-check form-check-inline ${
                      biology ? "haha" : ""
                    }`}
                    onClick={() => setBiology(!biology)}
                  >
                    <div className="float-left">
                      {biology ? <FaCheck /> : null}
                    </div>
                    <div className="float-right">
                      <div className={`web-topic ${biology ? "hihi" : ""}`}>
                        BIOLOGY
                      </div>
                      <div className={`web-error ${biology ? "hihi" : ""}`}>
                        Sunday, 9:00 AM
                      </div>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="btn w-100 btn-lgn1"
                    // onClick={register}
                  >
                    <div className="web-subtitle">
                      {submitted === true
                        ? "Please wait..."
                        : "Register to the demo class"}
                    </div>
                  </button>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );

  // async function register() {
  //   setSubmitted(true);
  //   const cred = {
  //     name: fullname,
  //     email: email,
  //     password: password,
  //     phoneno: phone,
  //     courses: [],
  //     usertype: "student",
  //   };
  //   if (physics) {
  //     cred["courses"].push("physics");
  //   }
  //   if (chemistry) {
  //     cred["courses"].push("chemistry");
  //   }
  //   if (biology) {
  //     cred["courses"].push("biology");
  //   }
  //alert("Under maintenance!!!")
  //   api
  //     .registerUser(cred, "/users")
  //     .then((resp) => {
  //       if (resp.status === 200) {
  //         resp.json().then((data) => {
  //           console.log(data);
  //         });
  //         alert("Successfully Registered!");
  //         setRegistered(true);
  //       } else {
  //         console.log(resp.status);
  //         resp.json().then((data) => {
  //           if (data.error) {
  //             alert(data.error);
  //           }
  //           console.log(data.error);
  //         });
  //       }
  //     })
  //     .catch((err) => console.log(err));
  // }
};

export default Register;
