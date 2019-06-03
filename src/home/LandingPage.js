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
  var url = 'https://letsmeet.azurewebsites.net/api/meetings/' + id + '/join';
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${Auth.getToken()}`,
    }
  };
  return fetch(url, requestOptions).then(function (response) {
    if (response.ok) {
      alert("Successfully joined event");
    } else {
      alert("You have already joined that event")
    }
  })
}

const handleLeaveEvent = ({id}) => {
  var url = 'https://letsmeet.azurewebsites.net/api/meetings/' + id + '/leave';
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${Auth.getToken()}`,
    }
  };
  return fetch(url, requestOptions)
  .then(function (response) {
    if(response.ok) {
      alert("Successfully left event");
    }
    else {
      alert("You have already left that event")
    }
  })
}

const Row = ({ name, date, place, id, size, description}) =>
  <tr>
    <td>{name}</td>
    <td>{date}</td>
    <td>{place}</td><br/>
    <td>{size}</td>
    <td>{description}</td>
    <td><Button color="success" onClick={ () => handleJoinEvent({id})}>Join</Button></td>
    <td><Button color="danger" onClick={ () => handleLeaveEvent({id})}>Leave</Button></td>
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

  onChange = e => {
    const { value } = e.target;
    this.setState({
      search: value
    });

    this.handleSearch(value);
  }

  handleSearch = search => {
    const requestOptions =
      axios.get('https://letsmeet.azurewebsites.net/api/meetings?name=' + search,
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

    return (
      <div
        style={{   textAlign: "center"}}
        >
        <input
          type="text"
          name="text"
          placeholder="Search.."
          ref={node => this.search = node}
          onChange={this.onChange}
          style={{width:"300px"}}


        />
         <div style={{textAlign: "center"}}>
            <Button color="success"
                    href="/createevent"
                    style={{width:"300px"}}>
          Create </Button>
         </div>

      <Table striped>
        <thead>
        <tr>
          <th>Event title</th>
          <th>Date</th>
          <th>Place</th><br/>
          <th>Size</th>
          <th>Description</th>


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
