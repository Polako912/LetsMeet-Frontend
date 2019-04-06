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
            <FormGroup controlId="nick" bsSize="large">
            <Input
             autoFocus
             type="nick"
             name="nick"
             placeholder="Nick"
             value={this.state.nick}
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
             placeholder="Password"
             value={this.state.confirmPassword}
             onChange={this.handleChange}
             />
            </FormGroup>
            <Button to href='/home' color="primary" >
            Submit
          </Button>
          </FormGroup>
            </Form>
           </Container>
        );
    }
}