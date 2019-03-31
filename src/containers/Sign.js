import React, { Component } from "react";

import "./Sign.css";
import { Button, FormGroup, Input, Form, Container, Label} from 'reactstrap';

export default class Sign extends Component
{
    constructor(props)
    {
        super(props);

        this.state =
        {
            email: "",
            nick: "",
            password: "",
            confirmPassword: ""
        };
    }


    validateForm()
    {
        return this.state.email.length > 0 && this.state.nick.length > 0 && 
        this.state.password.length > 0 && this.state.confirmPassword.length > 0
    }

    handleChange = event => 
    {
        this.setState({
          [event.target.id]: event.target.value
        });
      }

      handleSubmit = async event => {
        const { password, confirmPassword } = this.state;
        //event.preventDefaul();
        // perform all neccassary validations
        if (password !== confirmPassword) {
            alert("Passwords don't match");
        } else {
            alert("Account registered")
        }
    }

    render()
    {
        return(
            <Container className="Sign">
            <h2> Sign up</h2>
            <Form onSubmit={this.handleChange}>
            <FormGroup controlId="email" bsSize="large">
            <Label>Email</Label>
            <Input
             autoFocus
             type="email"
             value={this.state.email}
             onChange={this.handleChange}
             />
            </FormGroup>
            <FormGroup controlId="nick" bsSize="large">
            <Label>Nick</Label>
            <Input
             autoFocus
             type="nick"
             value={this.state.nick}
             onChange={this.handleChange}
             />
            </FormGroup>
            <FormGroup controlId="password" bsSize="large">
            <Label>Password</Label>
            <Input
             autoFocus
             type="password"
             value={this.state.password}
             onChange={this.handleChange}
             />
            </FormGroup>
            <FormGroup controlId="confirmPassword" bsSize="large">
            <Label> Confirm Password</Label>
            <Input
             autoFocus
             type="password"
             value={this.state.confirmPassword}
             onChange={this.handleChange}
             />
            </FormGroup>
            <Button color="primary" >
            Submit
          </Button>
            </Form>
           </Container>
        );
    }
}