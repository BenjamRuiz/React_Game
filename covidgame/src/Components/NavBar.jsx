import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {useAuth0} from '@auth0/auth0-react';

import ProfileButtons from "./ProfileButtons"

import "../App.css"

class NavBar extends React.Component {

  render() {
    return (
      <Navbar collapseOnSelect expand="lg" className="NavBar-Style" variant="dark">
        <Navbar.Brand className="NavBar-Title" href="/">Covid Games</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/game">Continue Game</Nav.Link>
          </Nav>
          <ProfileButtons/>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
export default NavBar;
