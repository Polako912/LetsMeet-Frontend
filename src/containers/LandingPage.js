import "./LandingPage.css";
import NavbarPage from "./NavbarPage.js"
import {Button, Container, ListGroup, ListGroupItem, Row, Col} from 'reactstrap';
import React, {Component} from "react";
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import axios from 'axios';
import ReactTable from 'react-table';
import EventList from "./EventList";

class Event extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
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
    return (
      <ListGroup>
        <ListGroupItem>
          <Container>
            <ListGroupItem>
              <Row>
                <Col>
                  <ul>
                    {this.state.events.map(event => <li> {event.name} </li>)}
                  </ul>
                </Col>
              </Row>
            </ListGroupItem>
            <ListGroupItem>
              <Row>
                <Col>
                  {this.state.events.map(events => <li>{
                    events.date
                  }</li>)}
                </Col>
                <Col>
                  {this.state.events.map(events => <li>{
                    events.place
                  }</li>)}
                </Col>
                <Col>
                  {this.state.events.map(events => <li>{
                    events.size
                  }</li>)}
                </Col>
              </Row>
            </ListGroupItem>
          </Container>
        </ListGroupItem>
      </ListGroup>
    );
  }
}


export default class LandingPage extends Component {
  constructor() {
    super();
  }

  render() {
    const post = this.props;
    return (
      <React.Fragment>
        <NavbarPage></NavbarPage>

        <EventList />
      </React.Fragment>

    )
  }
}
