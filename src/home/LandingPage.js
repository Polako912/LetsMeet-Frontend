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
import SearchField from "react-search-field";

const handleJoinEvent = ({id}) => {
  const requestOptions =
    axios.post('https://letsmeet.azurewebsites.net/api/meetings/' + id + '/join', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${Auth.getToken()}`,
      }
    })
  return fetch('https://letsmeet.azurewebsites.net/api/meetings/' + id + '/join', requestOptions)
  .then(function (response) {
    if(response.ok) {
      alert("Successfully joined event");
    }
    else {
      alert("You have already joined that event")
    }
  })
}

const handleLeaveEvent = ({id}) => {
  const requestOptions =
    axios.post('https://letsmeet.azurewebsites.net/api/meetings/' + id + '/leave', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${Auth.getToken()}`,
      }
    })
  return fetch('https://letsmeet.azurewebsites.net/api/meetings/' + id + '/leave', requestOptions)
  .then(function (response) {
    if(response.ok) {
      alert("Successfully left event");
    }
    else {
      alert("You have already left that event")
    }
  })
}



const Row = ({ name, date, place, id }) =>
  <tr>
    <td>{name}</td>
    <td>{date}</td>
    <td>{place}</td>
    <td><Button onClick={ () => handleJoinEvent({id})}>Join</Button></td>
    <td><Button onClick={ () => handleLeaveEvent({id})}>Leave</Button></td>
  </tr>

class Event extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      events: [],
      search: '',
      fetchEvent: {
        'name': '',
        'date': '',
        'place': '',
        'size': '',
      },
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = async (event) => {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;
    await this.setState({
      [ name ]: value,
    });
  };

  handleSearch = ({name}) => {
    const requestOptions =
      axios.get('https://letsmeet.azurewebsites.net/api/meetings?name=' + name,
        {
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
    const { events } = this.state;
    const { search } = this.state;
    return (
      <div>
        <input
          type="text"
          name="text"
          placeholder="Search.."
          value={this.state.search}
          ref={node => this.search = node}
          onChange={this.handleChange}
        />
        <Button onClick={() => this.handleSearch({search})}>
          Search
        </Button>

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
      </div>
    )
  }
}

export default class LandingPage extends Component {
  constructor () {
    super()
    this.state = {
      search: '',
    }
  }
  updateSearch(event) {
    this.setState({search: event.target.value.substr(0,20)})
  };
  render () {

    return (
      <React.Fragment>
        <NavbarPage></NavbarPage>

        <Event></Event>
      </React.Fragment>

    )
  }
}
