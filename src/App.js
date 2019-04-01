import React, { Component } from "react";
import "./App.css";
import Routes from "./containers/Routes";
import { LinkContainer } from "react-router-bootstrap";
import { Nav, Navbar, NavItem, NavLink,Collapse, NavbarBrand, NavbarToggler } from "reactstrap";

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
      <div >
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/login">Home</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink to href='/login'>Login</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to href='/signup'>Sign up</NavLink>
              </NavItem>

            </Nav>
          </Collapse>
        </Navbar>
        <Routes/>
      </div>
    );
  }
}

export default App;
