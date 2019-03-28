import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import Routes from "./containers/Routes";
import { LinkContainer } from "react-router-bootstrap";
import { Nav, Navbar, NavItem, NavDropdown, Form, FormControl, Button } from "react-bootstrap";

class App extends Component {
  constructor(props)
  {
    super(props);
    this.state=
    {
      isAuthenticated: false
    };
  }

  userHasAuthenticated = authenticated => {
    this.setState({ isAuthenticated: authenticated });
  }

  render() {
    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      userHasAuthenticated: this.userHasAuthenticated
    };
    return (
      <div className="App container">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Collapse>
          <Nav pullLeft>
          <NavItem href="/login">Home</NavItem>
          </Nav>
          <Nav pullRight>
            <NavItem href="/signup">Sign Up</NavItem>
            </Nav>
            <Nav pullRight>
            <NavItem href="/login">Login</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Routes />
    </div>
    );
  }
}

export default App;
