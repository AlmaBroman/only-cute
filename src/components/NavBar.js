import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/logo.png";
import styles from "../styles/NavBar.module.css";
import { NavLink } from "react-router-dom";
import {
  useCurrentUser,
  useSetCurrentUser,
} from "../contexts/CurrentUserContext";
import Avatar from "./Avatar";
import axios from "axios";
import useClickOutsideToggle from "../hooks/useClickOutsideToggle";

const NavBar = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();

  const { expanded, setExpanded, ref } = useClickOutsideToggle();

  const handleSignOut = async () => {
    try {
      await axios.post("dj-rest-auth/logout/");
      setCurrentUser(null);
    } catch (err) {
      console.log(err);
    }
  };

  const addPostIcon = (
    <>
      <NavLink className={styles.NavLink} to="/saved_posts" onClick={() => {}}>
        <i className="fas fa-solid fa-star"></i>Saved
      </NavLink>
      <NavLink
        className={styles.NavLink}
        activeClassName={styles.Active}
        to="/posts/create"
      >
        <i className="fas fa-solid fa-square-plus"></i>Create
      </NavLink>
    </>
  );
  const loggedInIcons = (
    <>
      <NavLink
        className={styles.NavLink}
        to={`/profiles/${currentUser?.profile_id}`}
        onClick={() => {}}
      >
        <Avatar src={currentUser?.profile_image} text="Profile" height={30} />
      </NavLink>
      <NavLink className={styles.NavLink} to="/" onClick={handleSignOut}>
        <i className="fas fa-right-from-bracket"></i>Sign out
      </NavLink>
    </>
  );
  const loggedOutIcons = (
    <>
      <NavLink
        className={styles.NavLink}
        activeClassName={styles.Active}
        to="/register"
      >
        <i className="fas fa-user-plus"></i>Register
      </NavLink>
      <NavLink
        className={styles.NavLink}
        activeClassName={styles.Active}
        to="/signin"
      >
        <i className="fas fa-right-to-bracket"></i>Sign In
      </NavLink>
    </>
  );

  return (
    <Navbar
      expanded={expanded}
      className={styles.NavBar}
      expand="md"
      fixed="top"
    >
      <Container className={styles.NavContainer}>
        <NavLink to="/">
          <Navbar.Brand className={styles.NavBrand}>
            <img src={logo} alt="logo" />
          </Navbar.Brand>
        </NavLink>
        <Navbar.Toggle
          ref={ref}
          onClick={() => setExpanded(!expanded)}
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <div className={styles.NavLinksContainer}>
            <Nav className="text-left flex-column">
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
                to="/explore"
              >
                <i className="fas fa-user-astronaut"></i>Explore
              </NavLink>
              <NavLink
                className={styles.NavLink}
                activeClassName={styles.Active}
                to="/search"
              >
                <i className="fas fa-magnifying-glass"></i>Search
              </NavLink>
              {currentUser && addPostIcon}
            </Nav>
            <Nav className="mt-5 text-left flex-column">
              {currentUser ? loggedInIcons : loggedOutIcons}
            </Nav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
