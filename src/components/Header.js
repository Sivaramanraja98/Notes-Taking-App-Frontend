import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import './style.css'

const Header = () => {
  return (
    <Navbar expand="lg"  >
      <Container>
        <Navbar.Brand className="header" href="#home">
          Notes Application
        </Navbar.Brand>
        <Navbar.Toggle className="toggler" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto left">
            <Nav.Link>
              <b className="nank"><Link to="/">Home</Link></b>
            </Nav.Link>
            <Nav.Link >
              <b className="nank"><Link to="/login">LogIn</Link></b>
            </Nav.Link>
            <Nav.Link >
              <b className="nank"><Link to="/signup">SignUp</Link></b>
            </Nav.Link>
            <Nav.Link href="#project">
              <b className="nank">
          <Link to="/logout">logout</Link></b>
            </Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
