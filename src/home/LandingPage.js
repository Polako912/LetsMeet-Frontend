import '../home/LandingPage.css'
import NavbarPage from '../home/NavbarPage.js'
import {
  Button,
  Container,
  ListGroup,
  ListGroupItem,
  Table,
  Col,
} from 'reactstrap'
import React, { Component } from 'react'
import '@trendmicro/react-sidenav/dist/react-sidenav.css'
import axios from 'axios';
import Auth from "../services/Auth.js";

const Row = ({ name, date, place }) =>
  <tr>
    <td>{name}</td>
    <td>{date}</td>
    <td>{place}</td>
  </tr>

class Event extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      events: [],
      fetchEvent: {
        'name': '',
        'date': '',
        'place': '',
        'size': '',
      },
    }
  }

  componentDidMount () {
    const requestOptions =
    axios.get('https://letsmeet.azurewebsites.net/api/meetings', {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${Auth.getToken()}`,
        }
    })
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

  render () {
    const { events } = this.state
    return (
      <Table striped>
        <thead>
        <tr>
          <th>Event title</th>
          <th>Date</th>
          <th>Place</th>
        </tr>
        </thead>
        <tbody>
        {events.map(Row)}
        </tbody>
      </Table>
    )
  }
}

export default class LandingPage extends Component {
  constructor () {
    super()
  }

  render () {

    return (
      <React.Fragment>
        <NavbarPage></NavbarPage>
        <Event></Event>
      </React.Fragment>

    )
  }
}
