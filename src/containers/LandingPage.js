import "./LandingPage.css";
import NavbarPage from"./NavbarPage.js"
import { Button, Container, ListGroup, ListGroupItem, Table, Col} from 'reactstrap';
import React, { Component } from "react";
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import axios from 'axios';
import SearchField from "react-search-field";




const Row=({name,date, place})=>
  <tr>
    <td>{name}</td>
    <td>{date}</td>
    <td>{place}</td>
    <td><Button>take part</Button></td>

  </tr>



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
      console.log(events);
      this.setState({events});
      console.log("fetchEvent", this.state.fetchEvent);
    })
    .catch((error) => {
      console.log(error);
    });
  }


  render() {
    const {events}=this.state;
    let filtredEvents=this.props.events.filter((event)=>{return event.name.indexOf(this.state.search)!==1}
    );
    return (

      <Table striped>>
        <thead>
        <tr>

          <th>Event title</th>
          <th>Date</th>
          <th>Place</th>
          <th>Take part</th>
          <th>Take part12</th>
        </tr>
        </thead>
        <tbody>
        {filtredEvents.map(Row)}
        </tbody>
      </Table>
    );
  }
}



export default class LandingPage extends Component {
  constructor() {
    super();
  }
  updateSearch(event) {
    this.setState({search: event.target.value.substr(0,20)})
  };

  render() {

    return (
      <React.Fragment>
        <NavbarPage  ></NavbarPage>
        <SearchField
          placeholder="Search..."
          value={this.state.search}
          onChange={this.updateSearch.bind(this)}
          searchText="This is initial search text"
          classNames="test-class"
        />
        <Event/>
      </React.Fragment>
    )
  }
}

