import React, { Component } from "react";
import "./LandingPage.css";
import { Button, FormGroup, Input, Form, Container, Label, FormFeedback, ListGroup, ListGroupItem, Row, Col} from 'reactstrap';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import SearchField from "react-search-field";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import avi from './download.png';
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

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
  }
  clickHandler(evt) {
    evt.preventDefault();
    this.props.onClickHandler(this.refs.searchBox.value);
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
        <NavBar></NavBar>
        <EventList events={this.state.events}/>


       </React.Fragment>
    
      );

    }
  }
  
  







