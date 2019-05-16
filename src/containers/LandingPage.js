import "./LandingPage.css";
import {
  Container,
  ListGroup,
  ListGroupItem,
  Row,
  Col
} from 'reactstrap';
import React, {Component} from "react";
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import axios from 'axios';
import NavbarPage from 'NavbarPage';

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

export default class LandingPage extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <React.Fragment>
        <NavbarPage></NavbarPage>
        <Event></Event>
      </React.Fragment>
    );
  }
}
