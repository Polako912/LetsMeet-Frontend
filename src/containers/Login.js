import React, { Component } from "react";
import "./Login.css";
import { Auth } from "aws-amplify";
import {Breadcrumb} from 'react-bootstrap/lib/Breadcrumb'
import { Button , ButtonGroup, Label, FormGroup, Input, Col, Container, Form, FormFeedback} from 'reactstrap';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'email': '',
      'password': '',
      validate: {
        emailState: '',
      },
    }
      this.handleChange = this.handleChange.bind(this);
  }


  
  
   
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
  

  render() {
    return (
      <Container className="Login">
      <h2>Sign In</h2>
      <Form className="form"  onSubmit={ (e) => this.submitForm(e)} >
        
        <form onSubmit={this.handleSubmit}>
        <Col>
          <FormGroup controlId="email" bsSize="large">
            <Label>Email</Label>
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
        </Col>
        <Col>
          <FormGroup controlId="password" bsSize="large">
            <Label>Password</Label>
            <Input
              type="password"
            
              name="password"
              id="examplePassword"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </FormGroup>
          </Col>
          <ButtonGroup  aria-label="Basic example">
          <Button color="link" size="sm">
            Forgot password?
          </Button>
          </ButtonGroup>
          <Button color="link" size="sm">
            Don't have account?
          </Button>
          
          <Button color="primary" size="lg">Login</Button>
            
        </form>
        </Form>
      </Container>
    );
  }


}
