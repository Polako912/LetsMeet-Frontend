import React, {Component} from "react";
import {
  MDBCollapse, MDBDropdown, MDBDropdownItem, MDBDropdownMenu, MDBDropdownToggle,
  MDBFormInline, MDBIcon,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBNavItem, MDBNavLink
} from "mdbreact";

class NavbarPage extends Component {
  state = {
    isOpen: false
  };

  toggleCollapse = () => {
    this.setState({isOpen: !this.state.isOpen});
  }

  render() {
    return (
      <MDBNavbar color="indigo" dark expand="md">
        <MDBNavbarBrand>
          <strong className="black-text" style={{color: 'black'}}>Let's Meet</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse}/>
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem>
              <MDBFormInline waves>
                <div className="md-form my-0">
                  <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"/>
                </div>
                <MDBNavLink to="#!" style={{color: 'black'}}>Create</MDBNavLink>
              </MDBFormInline>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light" to="#!" style={{color: 'black'}}>
                <MDBIcon fab icon="google-plus-g"/>
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret style={{color: 'black'}}>
                  <MDBIcon icon="user" style={{color: 'black'}}/>
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default" right>
                  <MDBDropdownItem href="#!">Profile</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Settings</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Log out</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}
export default NavbarPage;
