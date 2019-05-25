import React, { Component } from "react";
import "./Login.css";
import { Button , ButtonGroup,FormGroup, Input, Col, Container, Form, FormFeedback} from 'reactstrap';
import Auth from "../services/Auth.js";
import  { Redirect } from 'react-router-dom';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      'email': "",
      'password': "",
      'obj': '',
      validate: {
        emailState: '',
      },
    };
      this.validateForm = this.validateForm.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.submitForm = this.submitForm.bind(this);
      this.handleResponse = this.handleResponse.bind(this);
  }

  validateForm() {
    if (this.state.username.length === 0 && this.state.password.length === 0)
      return false;
    else {
      return true;
    }
  }


  validateEmail(e) {

    let emailRex;
    emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const { validate } = this.state;
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
    };

  handleResponse(response) {
    console.log('handling response');
    return response.text().then(text => {
      const data = JSON.stringify(text);
      if (!response.ok) {
        if (response.status === 404) {
          alert('Failed to login');
        }
      }
      return data;
    });
  }

  submitForm() {
    var url = 'https://letsmeet.azurewebsites.net/api/users/login';
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({
          "email": this.state.email,
          "password": this.state.password
        }),
    };
    return fetch(url, requestOptions)
      .then(function(response) {
        if(response.status === 200 && response.ok) {
          return response.json();
        }
        else {
          alert("Failed to login");
        }
    })
    .then(function(data) {
      console.log(data);
      var obj = data;
      var almostToken = JSON.stringify(obj.token);
      var goodToken = almostToken.replace(/['"]+/g, '');
      Auth.authenticateUser(goodToken);
      window.location.href = 'http://localhost:3000/home';
    })
  }
  
  render() {
    return (
      <Container className="Login">
      <h2>Sign In</h2>
      <Form className="form">
        <form>
        <Col>
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
                this.validateEmail(e);
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
          <Button to href='/signup' color="link" size="sm">
            Don't have account?
          </Button>
          <Button disabled={!this.validateForm} onClick={this.submitForm}>
            Login
          </Button>
        </form>
        </Form>
      </Container>
    );
  }
}
