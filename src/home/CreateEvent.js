import NavbarPage from "./NavbarPage.js"
import React, { Component } from "react";
import {Container, Col, Form, FormGroup, Label, Imput, Button} from 'reactstrap';
import { Input } from "@material-ui/core";
import Auth from "../services/Auth.js";
import DateTime from "react-transition-group";

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
      'fullDate': "",
    };

    var date = new Date(this.state.startDate + 'T' + this.state.startTime);

    this.handleChange = this.handleChange.bind(this);
    this.submitEvent = this.submitEvent.bind(this);
  }

  handleChange = async (event) => {
    const {target} = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const {name} = target;
    await this.setState({
      [name]: value,
    });
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
          "date": this.state.startDate + 'T' + this.state.startTime,
          "place": this.state.location,
          "size": this.state.numbOfPeople,
          "paymentMethod": this.state.paymentType,
          "description": this.state.description,
          "Bearer": `${Auth.getToken()}`,
          "OwnerId": "testid",
        }),
    };
    return fetch(url, requestOptions)
    .then(function(response) {
      if(response.status === 201 && response.ok) {
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
    console.log(this.state.startDate)
    console.log(this.state.startTime)
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
                        value={this.state.eventTitle}
                        onChange={this.handleChange}
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
                        value={this.state.location}
                        onChange={this.handleChange}
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
                        placeholder="yyyy-mm-dd"
                        value={this.state.startDate}
                        onChange={this.handleChange}
                    />
                     <Input
                        type="startTime"
                        name="startTime"
                        id="startTime"
                        placeholder="13:00"
                        min="00:00"
                        max="24:00"
                        value={this.state.startTime}
                        onChange={this.handleChange}
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
                        value={this.state.description}
                        onChange={this.handleChange}
                    />
                </FormGroup>
            </Col>
            <Col>
            <FormGroup>
                <Label>Amount of people</Label>
                <Input
                        type="number"
                        min="0"
                        max="300"
                        name="numbOfPeople"
                        id="numbOfPeopleID"
                        placeholder="20"
                        value={this.state.numbOfPeople}
                        onChange={this.handleChange}
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
                        value={this.state.paymentType}
                        onChange={this.handleChange}
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
