import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/logo.png";
import styles from "../styles/NavBar.module.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar className={styles.NavBar} expand="md" fixed="top">
      <Container className={styles.NavContainer}>
        <NavLink to="/">
          <Navbar.Brand className={styles.NavBrand}>
            <img src={logo} alt="logo" />
          </Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-left flex-column">
            <NavLink
              exact
              className={styles.NavLink}
              activeClassName={styles.Active}
              to="/"
            >
              <i className="fas fa-house-chimney"></i>Home
            </NavLink>
            <NavLink
              className={styles.NavLink}
              activeClassName={styles.Active}
              to="/signin"
            >
              <i className="fas fa-right-to-bracket"></i>Sign In
            </NavLink>
            <NavLink
              className={styles.NavLink}
              activeClassName={styles.Active}
              to="/register"
            >
              <i className="fas fa-user-plus"></i>Register
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
