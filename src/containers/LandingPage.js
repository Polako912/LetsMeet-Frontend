import "./LandingPage.css";
import {
  Button,
  FormGroup,
  Input,
  Form,
  Container,
  Label,
  FormFeedback,
  ListGroup,
  ListGroupItem,
  Row,
  Col
} from 'reactstrap';
import React, {Component} from "react";
import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
  MDBDropdownToggle, MDBFormInline, MDBDropdownMenu, MDBDropdownItem, MDBIcon
} from "mdbreact";
// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import axios from 'axios';


class Event extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      events : [],
      fetchEvent: {
        'name': '',
        'date': '',
        'place': '',
        'size': '',
      }
    }

  }

  componentDidMount() {
    axios.get('https://letsmeet.azurewebsites.net/api/meetings')
      .then((response) => {
        console.log("response", response);
        const events = response.data;
        this.setState({events});
        console.log("fetchEvent", this.state.fetchEvent);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    //const event = this.props;
    return (

      <ListGroup>
        <ListGroupItem>
          <Container>
            <ListGroupItem>
              <Row>
                <Col>
                  <ul>
                    {this.state.events.map(event =><li> {event.name} </li>)}
                  </ul>
                </Col>
              </Row>
            </ListGroupItem>
            <ListGroupItem>
              <Row>
                <Col>
                  {this.state.events.map(events => {events.date})}
                </Col>
                <Col>
                  {this.state.events.map(events => {events.place})}
                </Col>
                <Col>
                  {this.state.events.map(events => {events.size})}
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

export default class LandingPage extends Component {
  constructor() {
    super();
  }

  state = {
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
        <Event></Event>
      </React.Fragment>
    );
  }
}
