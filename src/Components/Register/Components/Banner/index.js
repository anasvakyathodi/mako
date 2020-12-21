import React, { useState } from "react";
import axios from "axios";
import "./Register.css";
import Icon from "./Icon.svg";
import "react-select/dist/react-select.min.css";
import Arrow from "./Arrow.svg";
import Header from "../../../LandingPage/Layout/Header";
import { Container, Row, Col } from "react-bootstrap";
import CallingCodes from "./CallingCodes";
import ScrollAnimation from "react-animate-on-scroll";
import Select from "react-select";
import { PhoneNumberUtil } from "google-libphonenumber";
const ScrollToTop = () => {
  document.getElementById("top-pos").scrollIntoView();
};

const Register = () => {
  React.useEffect(() => {
    ScrollToTop();
  }, []);
  // const [registered, setRegistered] = useState(false);

  const [submitted, setSubmitted] = useState(false);
  const [val, setVal] = useState(false);
  const initialFormData = {
    parent: "",
    mobile: "",
    student: "",
    syllabus: "",
    standard: "",
    subject: "",
    country_dig: "",
    country: "",
  };

  const [formData, updateFormData] = useState(initialFormData);
  const handleChange = (e) => {
    updateFormData({
      ...formData,

      // Trimming any whitespace
      [e.target.name]: e.target.value,
    });
  };

  const handleCountry = (e) => {
    if (e !== null) {
      updateFormData({
        ...formData,
        country_dig: e.value,
        country: e.country,
      });
    } else {
      updateFormData({
        ...formData,
        country_dig: "",
        country: "",
      });
    }
  };
  const validatePhoneNumber = (phoneNumber) => {
    /*
    Phone number validation using google-libphonenumber
    */
    let valid = false;
    try {
      const phoneUtil = PhoneNumberUtil.getInstance();
      valid = phoneUtil.isValidNumber(phoneUtil.parse(phoneNumber));
    } catch (e) {
      valid = false;
    }
    return valid;
  };

  const handleError = () => {
    if (
      formData.parent.length < 6 ||
      formData.student.length < 6 ||
      formData.parent.length > 15 ||
      formData.student.length < 6
    ) {
      alert("Name Must be between 6 and 15 characters");
      return false;
    } else if (
      // formData.mobile.length !== 10 ||
      // isNaN(formData.mobile) ||
      // formData.mobile < 0
      !validatePhoneNumber("+" + formData.country_dig + formData.mobile)
    ) {
      alert("Invalid Phone Number");
      return false;
    } else if (
      formData.syllabus.length <= 0 ||
      formData.standard.length <= 0 ||
      formData.subject.length <= 0
    ) {
      alert("Invalid or Empty Academic values");
      return false;
    } else {
      return true;
    }
  };

  const ThankYou = () => {
    return (
      <>
        <div className="web-subtitle-2 tac mp m-3">
          Successfully Submitted !!!
          <p>We will contact soon...</p>
          <p>Refresh the page for submitting another subject</p>
        </div>
      </>
    );
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let element = document.getElementById("btn-rg");
    const res = handleError();
    setVal(res);
    if (res === true) {
      element.setAttribute("disabled", "true");
      const newMobile = "+" + formData.country_dig + " " + formData.mobile;
      const scriptURL =
        "https://script.google.com/macros/s/AKfycbxw4rZfDPe55WpoiODjpbli7Fq0Fr6r1D8S6aBPhk612Sh-iTK7/exec";
      document.getElementById("btn-txt").innerHTML = "<div>Loading...</div>";
      axios
        .post(
          `${scriptURL}?parent=${encodeURIComponent(
            formData.parent
          )}&mobile=${encodeURIComponent(
            newMobile
          )}&student=${encodeURIComponent(
            formData.student
          )}&syllabus=${encodeURIComponent(
            formData.syllabus
          )}&standard=${encodeURIComponent(
            formData.standard
          )}&subject=${encodeURIComponent(
            formData.subject
          )}&country=${encodeURIComponent(formData.country)}`
        )
        .then((res) => {
          setSubmitted(true);
          updateFormData(initialFormData);
        })
        .catch((err) => console.log(err));
      setVal(false);
    }
  };

  return (
    <div className="reg">
      <div id="top-pos" />
      <Header />
      <div className="wrapper">
        <Container>
          <Row>
            <Col lg="6" xs="12" className="text-container">
              <div className="text-box">
                <img src={Icon} alt="icon" className="sample-icon" />
                <ScrollAnimation animateIn="animate__fadeInLeft">
                  <div className="web-heading">Join a demo session</div>
                </ScrollAnimation>
                <ScrollAnimation animateIn="animate__fadeInLeft">
                  <div className="web-body">
                    Experience the mako way of learning by attending a free demo
                    <br className="d-none d-lg-block" />
                    session. and decide if you want to hop aboard.
                  </div>
                </ScrollAnimation>
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
                  name="submit-to-google-sheet"
                  onSubmit={handleSubmit}
                  noValidate={!val}
                >
                  <div className="form-group">
                    <label htmlFor="parent" className="web-subtitle-2">
                      Parent's name *
                    </label>
                    <input
                      type="text"
                      name="parent"
                      className="form-control"
                      id="parent"
                      value={formData.parent}
                      placeholder="Enter your parent's full name"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="phone-number">
                    {/* <label htmlFor="mobile" className="web-subtitle-2">
                      Mobile Number*
                    </label> */}
                    <div className="phone-number--country">
                      <Select
                        value={formData.country_dig}
                        name="country"
                        onChange={handleCountry}
                        placeholder="country code"
                        options={CallingCodes}
                        labelKey="country"
                        valueKey="value"
                        valueRenderer={(country) => country.value}
                      ></Select>
                    </div>
                    <div className="phone-number--number">
                      <input
                        type="tel"
                        name="mobile"
                        className="form-control"
                        id="mobile"
                        placeholder="Enter your mobile number"
                        onChange={handleChange}
                        value={formData.mobile}
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="student" className="web-subtitle-2">
                      Student's name *
                    </label>
                    <input
                      type="text"
                      name="student"
                      className="form-control"
                      id="student"
                      placeholder="Enter your full name"
                      onChange={handleChange}
                      value={formData.student}
                      required
                    />
                  </div>
                  <div className="web-subtitle-2">Choose a batch</div>
                  <div className="row justify-content-between">
                    <div className="col">
                      <select
                        className={`form-check`}
                        name="syllabus"
                        id="syllabus"
                        value={formData.syllabus}
                        onChange={handleChange}
                        required
                      >
                        <option value="null" defaultValue>
                          Syllabus
                        </option>
                        <option value="STATE">STATE</option>
                        <option value="ISCE">ISCE</option>
                        <option value="CBSE">CBSE</option>
                        <option value="NIOS">NIOS</option>
                        <option value="IGCSE">IGCSE</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div className="col">
                      <select
                        className={`form-check`}
                        name="standard"
                        id="standard"
                        value={formData.standard}
                        onChange={handleChange}
                        required
                      >
                        <option value="null" defaultValue>
                          Class
                        </option>
                        <option value="1-4">1-4</option>
                        <option value="5-7">5-7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">+1</option>
                        <option value="12">+2</option>
                      </select>
                    </div>
                    <div className="col">
                      <select
                        className={`form-check`}
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      >
                        <option value="null" defaultValue>
                          Subject
                        </option>
                        <option value="Home Tution">Home Tution</option>
                        <option value="Crash Course">Crash Course</option>
                        <option value="Spoken English">Spoken English</option>
                        <option value="English">English</option>
                        <option value="Hindi">Hindi</option>
                        <option value="Malayalam">Malayalam</option>
                        <option value="Physics">Physics</option>
                        <option value="Chemistry">Chemistry</option>
                        <option value="Biology">Biology</option>
                        <option value="Mathematics">Mathematics</option>
                        <option value="Economics">Economics</option>
                        <option value="ComputerScience">ComputerScience</option>
                        <option value="History">History</option>
                        <option value="Geography">Geography</option>
                        <option value="Home Sciece">Home Science (NIOS)</option>
                        <option value="Mass Communication">
                          Mass Communication (NIOS)
                        </option>
                        <option value="Data Entry">
                          Data Entry Operations (NIOS)
                        </option>
                        <option value="Political Science">
                          Political Science (NIOS)
                        </option>
                        <option value="Languages">Languages</option>
                        <option value="Others">Others</option>
                      </select>
                    </div>
                  </div>
                  {submitted ? (
                    <ThankYou />
                  ) : (
                    <button
                      type="submit"
                      className="btn w-100 btn-lgn1"
                      id="btn-rg"
                    >
                      <div
                        className="btn-text text-white web-subtitle"
                        id="btn-txt"
                      >
                        Register Now
                      </div>
                    </button>
                  )}
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
