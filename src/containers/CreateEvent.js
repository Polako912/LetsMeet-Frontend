import NavbarPage from"./NavbarPage.js"
import React, { Component } from "react";
import {Container, Col, Form, FormGroup, Label, Imput, Button} from 'reactstrap';
import { Input } from "@material-ui/core";
import Autocomplete from "./Autocomplete.js";
import Auth from "./Auth.js";

export default class CreateEvent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      'eventTitle': "",
      'location': "",
      'startDate': "",
      'startTime': "",
      'description': "",
      'host': "",
      'numbOfPeople': "",
      'paymentType': "",
    };

    this.submitEvent = this.submitEvent.bind(this);
  }

  submitEvent(){
    var url = 'https://letsmeet.azurewebsites.net/api/meetings';
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${Auth.getToken()}`,
      },
      body: JSON.stringify({
          "name": this.state.eventTitle,
          "date": this.state.startDate+"T"+this.state.startTime,
          "place": this.state.location,
          "size": this.state.numbOfPeople,
          "paymentMethod": this.state.paymentType,
          "description": this.state.description
        }),
    };
    return fetch(url, requestOptions)
    .then(function(response) {
      if(response.status === 200 && response.ok) {
        return response.json();
      }
      else {
        alert("Failed to create event");
      }
    })
    .then(function(data) {
      console.log(data);
      window.location.href = 'http://localhost:3000/home';
    })
  }
    render(){
        return(
         <Container className = "CreateEvent">
         <NavbarPage></NavbarPage>
            <h1>Create Event</h1>
         <Form className="form" >
            <Col>
                <FormGroup>
                    <Label>Event title</Label>
                    <Input
                        type="eventTitle"
                        name="eventTitle"
                        id="eventTitle"
                        placeholder="eg. Orange Warsaw Festival"
                        required="true"
                    />
                </FormGroup>
            </Col>
            <Col>
                <FormGroup>
                    <Label>Location</Label>
                    <Input
                        type="location"
                        name="location"
                        id="locationId"
                        placeholder="xDemon"
                        />
                    
                </FormGroup>
            </Col>
            <Col>
                <FormGroup>
                    <Label>Starts</Label>
                    <Input
                        type="startDate"
                        name="startDate"
                        id="startDate"
                        placeholder="dd-mm-yyyy"
                        />
                     <Input
                        type="startTime"
                        name="startTime"
                        id="startTime"
                        placeholder="13:00"
                        min="00:00"
                        max="24:00"
                     />
                </FormGroup>
            </Col>
            <Col>
            <FormGroup>
            <Label>Description</Label>
                    <Input
                        type="description"
                        name="description"
                        id="descriptionID"
                        placeholder="Description"
                        />
                </FormGroup>
            </Col>
            <Col>
            <FormGroup>
                <Label>Host</Label> 
                <Input
                        type="host"
                        name="host"
                        id="hostID"
                        placeholder="eg. Jan Kowalski"
                        />
            </FormGroup>
            </Col>
            <Col>
            <FormGroup>
                <Label>Amount of people</Label>
                <Input
                        type="number"
                        min="0"
                        max="500"
                        name="numbOfPeople"
                        id="numbOfPeopleID"
                        placeholder="20"
                        />
            </FormGroup>
            </Col>
            <Col>
            <FormGroup>
                <Label>Payment method</Label>
                <Input
                        type="paymentType"
                        name="paymentType"
                        id="paymentID"
                        placeholder="PayPal"
                        />
            </FormGroup>
            </Col>
            <Col>
            <Button onClick={this.submitEvent}>
              Create
            </Button>
            </Col>
         </Form>
        </Container>
        ) 
    };
}
