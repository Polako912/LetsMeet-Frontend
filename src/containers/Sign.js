import React, { Component } from "react";

import "./Sign.css";
import { Button, FormGroup, Input, Form, Container, Label, FormFeedback} from 'reactstrap';

export default class Sign extends Component
{
    constructor(props)
    {
        super(props);

        this.state =
        {
            email: "",
            lastName: "",
            firstName: "",
            nick: "",
            password: "",
            confirmPassword: "",
            validate: {
                emailState: '',
              },
        }
        this.handleChange = this.handleChange.bind(this);

    }


   /* validateForm()
    {
        return this.state.email.length > 0 && this.state.nick.length > 0 && 
        this.state.password.length > 0 && this.state.confirmPassword.length > 0
    }*/
    
  validateEmail(e) {
    const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const { validate } = this.state
      if (emailRex.test(e.target.value)) {
        validate.emailState = 'has-success'
      } else {
        validate.emailState = 'has-danger'
      }
      this.setState({ validate })
    }

    handleChange = async (event) => {
      const { target } = event;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const { name } = target;
      await this.setState({
        [ name ]: value,
      });
    }
  
    submitForm(e) {
      e.preventDefault();
      console.log(`Email: ${ this.state.email }`)
      fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: this.state.email,
          password: this.state.password,
          confirmPassword: this.state.confirmPassword,
          firstName: this.state.firstName,
          lastName: this.state.lastName
        })
        
      })
      console.log(this.state.email);
      console.log(this.state.password);
      console.log(this.state.confirmPassword);
      console.log(this.state.firstName);
      console.log(this.state.lastName);

    }
  
    render()
    {
        return(
            <Container className="Sign">
            
            <Form onSubmit={this.handleChange}>
            <h2> Sign up</h2>
            <FormGroup controlId="email" bsSize="large">
            <Input
             type="email"
             name="email"
             id="examplemail"
             placeholder="Email"
             value={this.state.email}
             valid={ this.state.validate.emailState === 'has-success' }
             invalid={ this.state.validate.emailState === 'has-danger' }
             onChange={ (e) => {
               this.validateEmail(e)
               this.handleChange(e)
             } }
           />
           <FormFeedback valid>
           That's a tasty looking email you've got there.
           </FormFeedback>
           <FormFeedback invalid>
             Uh oh! Looks like there is an issue with your email. Please input a correct email.
           </FormFeedback>
            </FormGroup>
            <FormGroup controlId="username" bsSize="large">
            <Input
             autoFocus
             type="username"
             name="username"
             placeholder="Username"
             value={this.state.username}
             onChange={this.handleChange}
             />
            </FormGroup>
            <FormGroup controlId="first name" bsSize="large">
            <Input
             autoFocus
             type="firstName"
             name="firstName"
             placeholder="First name"
             value={this.state.firstName}
             onChange={ (e) => {this.handleChange(e)}}
             />
            </FormGroup>
            <FormGroup controlId="last name" bsSize="large">
            <Input
             autoFocus
             type="lastName"
             name="lastName"
             placeholder="Last name"
             value={this.state.lastName}
             onChange={this.handleChange}
             />
            </FormGroup>
            <FormGroup controlId="password" bsSize="large">
            <Input
             autoFocus
             type="password"
             name="password"
             placeholder="Password"
             value={this.state.password}
             onChange={this.handleChange}
             />
            </FormGroup>
            <FormGroup controlId="confirmPassword" bsSize="large">
            <Input
             autoFocus
             type="password"
             name="confirmPassword"
             placeholder="Confirm"
             value={this.state.confirmPassword}
             onChange={this.handleChange}
             />
            </FormGroup>
            <Button onClick={this.submitForm} to href='#' color="primary" >
            Submit
          </Button>
            </Form>
           </Container>
        );
    }
}