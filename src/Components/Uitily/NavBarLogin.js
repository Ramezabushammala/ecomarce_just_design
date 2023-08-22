
import React from "react";
import { Navbar, Nav, Container, FormControl } from "react-bootstrap";
import logo from "../../images/logo.png";
import login from "../../images/login.png";
import cart from "../../images/cart.png";
 import { Link } from "react-router-dom";

function NavBarLogin() {
  return (
    <Navbar className="sticky-top bg-black p-2 text-white" variant="dark" expand="sm">
    <Container>
      <Navbar.Brand>
        <a href="/">
          <img src={logo} className="logo" alt="sfvs" />
        </a>
      </Navbar.Brand>
      {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav"> */}
        <FormControl
          type="search"
          placeholder="Search..."
          className="me-2 w-100 text-center"
          aria-label="Search"
        />
        <Nav className="me-auto">
          <Nav.Link
            href="/login"
            className="nav-text d-flex mt-3 justify-content-center">
            <img src={login} className="login-img" alt="sfvs" />

            <p className="ms-1" style={{ color: "white" }}>Login</p>
          </Nav.Link>
          <Nav.Link
            href="/car"
            className="nav-text d-flex mt-3 justify-content-center"
            style={{ color: "white" }}>
            <img src={cart} className="login-img" alt="sfvs" />
            <p className="ms-1" style={{ color: "white" }}>Car</p>
          </Nav.Link>
        </Nav>
      {/* </Navbar.Collapse> */}
    </Container>
  </Navbar>   
  )
}

export default NavBarLogin
