import NavbarPage from"./NavbarPage.js"
import React, { Component } from "react";
import {Container, Col, Form, FormGroup, Label, Imput, Button} from 'reactstrap';
import { Input } from "@material-ui/core";
import Autocomplete from "./Autocomplete.js";

export default class CreateEvent extends React.Component{
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
                        type="text"
                        name="event title"
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
                        type="text"
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
                        type="data"
                        name="startDate"
                        id="startDate"
                        placeholder="dd-mm-yyyy"
                        />
                     <Input
                        type="time"
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
                        type="text"
                        name="descryption"
                        id="descriptionID"
                        placeholder="Description"
                        />
                </FormGroup>
            </Col>
            <Col>
            <FormGroup>
                <Label>Host</Label> 
                <Input
                        type="text"
                        name="host"
                        id="hostID"
                        placeholder="eg. Jan Kowalski"
                        />
            </FormGroup>
            </Col>
            <Col>
            <FormGroup>
                <Label>Amound of people</Label> 
                <Input
                        type="number"
                        name="numbOfPeople"
                        id="numbOfPeopleID"
                        placeholder="20"
                        />
            </FormGroup>
            </Col>
            <Col>
            <FormGroup>
                <Label>Payment type</Label> 
                <Input
                        type="text"
                        name="paymentType"
                        id="paymentID"
                        placeholder="PayPal"
                        />
            </FormGroup>
            </Col>
            <Col>
            <Button>Create</Button>
            </Col>
         </Form>
        </Container>
        ) 
    };
}
