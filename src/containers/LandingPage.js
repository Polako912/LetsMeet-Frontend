import "./LandingPage.css";
import { Button, FormGroup, Input, Form, Container, Label, FormFeedback, ListGroup, ListGroupItem, Row, Col} from 'reactstrap';
<<<<<<< HEAD
=======
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import SearchField from "react-search-field";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import avi from './download.png';
>>>>>>> 7f9a4323f75e7b41602b189ae1f7befd4e51d1c1
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

<<<<<<< HEAD
=======
class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
  }
  clickHandler(evt) {
    evt.preventDefault();
    this.props.onClickHandler(this.refs.searchBox.value);
  }
  state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-brand">
            {this.props.title}
          </div>
          <div className="collapse navbar-collapse">
            <form className="navbar-form navbar-left">
              <div className="form-group">
                <input type="text" ref="searchBox" className="form-control" placeholder={this.props.hint} />
                <button className="btn btn-info" onClick={this.clickHandler}>{this.props.buttonTxt}</button>
                <button className="btn btn-event" onClick={this.clickHandler}>{this.props.buttonTxt1}</button>
              </div>
            </form>
          </div>
        </div>
      </nav>
    );
  }
}

NavBar.propTypes = {
  title: React.PropTypes,
  hint: React.PropTypes,
  buttonTxt: React.PropTypes,
  buttonTxt1: React.PropTypes,
  onClickHandler: React.PropTypes
};

NavBar.defaultProps = {
  title: 'Let`s Meet',
  hint: 'Search event',
  buttonTxt: 'Search',
  buttonTxt1: 'Add event',
  
  onClickHandler: () => {}
};


>>>>>>> 7f9a4323f75e7b41602b189ae1f7befd4e51d1c1
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

<<<<<<< HEAD
=======
function SearchBar (){
  return(
  <div className="search"
        style={{marginLeft:500, marginRight:200, marginTop: 25}}>
   <SearchField
      style={{width: 400}}>
      placeholder="Search..."
      className="searchButton"
    </SearchField>
</div>
)}

>>>>>>> 7f9a4323f75e7b41602b189ae1f7befd4e51d1c1
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
<<<<<<< HEAD
       </React.Fragment>
=======


       </React.Fragment>
    
>>>>>>> 7f9a4323f75e7b41602b189ae1f7befd4e51d1c1
      );
    }
  }