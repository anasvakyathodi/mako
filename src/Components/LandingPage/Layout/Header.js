import React from "react";
import logo from "./logo.svg";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import "./script";
// import { AuthContext } from "./../../../utils/authutils.js";

const Header = () => {
  // const { currentUser } = React.useContext(AuthContext);

  return (
    <Navbar
      collapseOnSelect
      id="mynav"
      className="navbar navbar-fixed-top"
      fixed="top"
      expand="lg"
    >
      <Navbar.Brand as={Link} to="/" className="logo">
        <img src={logo} alt="mako-logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="toggle-menu" />
      <Navbar.Collapse
        id="toggle-menu"
        className="nav-links"
        data-toggle="collapse"
      >
        <Nav className="menu">
          <Nav.Link className="links" href="/home/#">
            <div className="d-flex">Home</div>
            <div className="underline"></div>
          </Nav.Link>
          <NavDropdown className="links mb-1" title="Courses" id="courses">
            <NavDropdown.Item href="/home/#physics" eventKey={1}>
              Physics
            </NavDropdown.Item>
            <NavDropdown.Item href="/home/#chemistry" eventKey={2}>
              Chemistry
            </NavDropdown.Item>
            <NavDropdown.Item href="/home/#maths" eventKey={3}>
              Maths
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link className="links" href="/home/#blog" eventKey={4}>
            Blog<div className="underline"></div>
          </Nav.Link>
          <Nav.Link className="links" href="/home/#contact" eventKey={5}>
            <div className="d-flex">Contact us</div>
            <div className="underline"></div>
          </Nav.Link>
          <Nav.Link className="links" as={NavLink} to="/register" eventKey={6}>
            <div className="d-flex">Sign up</div>
            <div className="underline"></div>
          </Nav.Link>
          <Nav.Link className="links" as={Link} to="/login" eventKey={7}>
            <Button className="btn btn-login">
              {/* {currentUser ? <div>Dashboard</div> : <div>Login</div>} */}
              Login
            </Button>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
