import React, { Component } from "react";
import "./LandingPage.css";
import { Button, FormGroup, Input, Form, Container, Label, FormFeedback, ListGroup, ListGroupItem, Row, Col} from 'reactstrap';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import SearchField from "react-search-field";

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';


export default class LandingPage extends Component {
  constructor(){
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
    
    <SearchField>
      placeholder="Search..."
      className="searchButton"
    </SearchField>
    
    <Button>
        Create Event
    </Button>
    <ListGroup>
        <ListGroupItem>
            <Container>
            <ListGroupItem>
              <Row>
                <Col>
                    Event Pic
                </Col>
                </Row>
                </ListGroupItem>
                <ListGroupItem>
                <Row>
                  <Col>
                    People Attending
                  </Col>
                  <Col>
                    Localization
                  </Col>
                  <Col>
                    Time
                  </Col>
                  </Row>
                  </ListGroupItem>
            </Container>
        </ListGroupItem>
    </ListGroup>
    </React.Fragment>
    
      );

    }
  }
  
  







