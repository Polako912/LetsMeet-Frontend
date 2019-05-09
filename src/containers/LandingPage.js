import "./LandingPage.css";
import { Button, FormGroup, Input, Form, Container, Label, FormFeedback, ListGroup, ListGroupItem, Row, Col} from 'reactstrap';
import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBFormInline, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";
// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

const data = [
  {id: 1, loc: "Wroclaw", number: 2, time: 12},
  {id: 2, loc: "Warszawa", number: 5, time: 20},
  {id: 3, loc: "Olawa", number: 10, time: 21}
];

const EventList = (props) => (
  <div>
      {props.events.map(event => <Event {...event}/>)}
  </div>
);

class Event extends React.Component {
  render() {
    const event = this.props;
    return(
      <ListGroup>
      <ListGroupItem>
          <Container>
          <ListGroupItem>
            <Row>
              <Col>
                  {event.id}
              </Col>
              </Row>
              </ListGroupItem>
              <ListGroupItem>
              <Row>
                <Col>
                  {event.number}
                </Col>
                <Col>
                  {event.loc}
                </Col>
                <Col>
                  {event.time}
                </Col>
                </Row>
                </ListGroupItem>
          </Container>
      </ListGroupItem>
  </ListGroup>
    );
  }
}

class NavbarPage extends Component {
  state = {
    isOpen: false
  };
  
  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }
  
  render() {
    return (
      <MDBNavbar color="indigo" dark expand="md">
        <MDBNavbarBrand>
          <strong className="black-text" style={{color: 'black'}}>Let's Meet</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
        <MDBNavbarNav left>
        <MDBNavItem>
              <MDBFormInline waves>
                <div className="md-form my-0">
                  <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                </div>
                <MDBNavLink to="#!" style={{color: 'black'}}>Create</MDBNavLink>
              </MDBFormInline>
            </MDBNavItem>
        </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light" to="#!" style={{color: 'black'}}>
                <MDBIcon fab icon="google-plus-g" />
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

export default class LandingPage extends Component {
  constructor(){
    super();
  }
      state = {
      events: data,  
      sideNavLeft: false,
      sideNavRight: false
    }
   
  sidenavToggle = sidenavId => () => {
    const sidenavNr = `sideNav${sidenavId}`
    this.setState({
      [sidenavNr]: !this.state[sidenavNr]
    });
  };

  render() {
      const post = this.props;
      return (
        <React.Fragment>
        <NavbarPage></NavbarPage>
        <EventList events={this.state.events}/>
       </React.Fragment>
      );
    }
  }