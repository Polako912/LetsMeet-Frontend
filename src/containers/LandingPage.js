import React, { Component } from "react";
import "./LandingPage.css";
import { Button, FormGroup, Input, Form, Container, Label, FormFeedback, ListGroup, ListGroupItem, Row, Col} from 'reactstrap';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import SearchField from "react-search-field";

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
        <SideNav
        onSelect={(selected) => {
            // Add your code here
        }}
    >
        
        <SideNav.Toggle />
        <SideNav.Nav defaultSelected="home">
            <NavItem eventKey="home">
                <NavIcon>
                    <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                </NavIcon>
                <NavText>
                      Profile
                </NavText>
            </NavItem>
            <NavItem eventKey="charts">
                <NavIcon>
                    <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
                </NavIcon>
                <NavText>
                    Settings
                </NavText>
            </NavItem>
        </SideNav.Nav>
    </SideNav>
    
    <SearchBar/>
    
    <Button style={{marginLeft: 500, marginRight: 500, width: 100, height: 25}}>
            Create Event
    </Button>

    <EventList events={this.state.events}/>    
    </React.Fragment>
    
      );

    }
  }
  
  







