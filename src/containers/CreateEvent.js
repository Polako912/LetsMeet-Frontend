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
            <h1 style={{paddingRight:400}}>Create Event</h1>
         <Form className="form">
            <Col>
                <FormGroup>
                    <Label>Event title</Label>
                    <Input
                        type="text"
                        name="event title"
                        id="eventTitle"
                        placeholder="eg. Orange Warsaw Festival"
                    />
                </FormGroup>
            </Col>
            <Col>
                <FormGroup>
                    <Label>Location</Label>
                    <Autocomplete />
                </FormGroup>
            </Col>
              

         </Form>
        </Container>
        ) 
    };
}