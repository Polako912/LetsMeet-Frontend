import React, {Component} from "react";
import axios from 'axios';
import "./Sign.css";
import {Button, FormGroup, Input, Form, Container, Label, FormFeedback} from 'reactstrap';
import Auth from "../services/Auth.js";

export default class Sign extends Component {
  constructor(props) {
    super(props);

        this.state =
        {
          errors: {},
          email: "",
          lastName: "",
          firstName: "",
          age: "",
          password: "",
          city: "",
          validate: {
            emailState: '',
          },
        };
        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

  validateEmail(e) {
    const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const {validate} = this.state
    if (emailRex.test(e.target.value)) {
      validate.emailState = 'has-success'
    } else {
      validate.emailState = 'has-danger'
    }
    this.setState({validate})
  }

  handleChange = async (event) => {
    const {target} = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const {name} = target;
    await this.setState({
      [name]: value,
    });
  }


/*onSubmit = (event) => {
  event.preventDefault();
  const dane = {
    email: this.state.email,
    password: this.state.password,
    firstname: this.state.firstName,
    lastname: this.state.lastName,
    age: this.state.age,
    city: this.state.city
  };
  let config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
  axios.post('https://letsmeet.azurewebsites.net/api/users/register', {dane}, config)
  .then(res => {
    console.log(res);
    console.log(res.data);
  })
}*/

  onSubmit() {
    var http = new XMLHttpRequest();
    var url = 'https://letsmeet.azurewebsites.net/api/users';
    var dane = JSON.stringify(
      {
        "email": this.state.email,
        "password": this.state.password,
        "city": this.state.city,
        "age": this.state.age,
        "firstName": this.state.firstName,
        "lastName": this.state.lastName
      }
    );
    http.open("POST", url + '/register', true);
    http.setRequestHeader("Content-Type", "application/json");
    http.addEventListener('load', () => {
      if (http.status === 200) {
        this.setState({
          errors: {}
        });

        Auth.authenticateUser(http.response.token);

      } else {

        const errors = http.response.errors ? http.response.errors : {};
        errors.summary = http.response.message;

        this.setState({
          errors
        });
      }
    });
    http.send(dane);
  }

  render() {
    return (
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
              valid={this.state.validate.emailState === 'has-success'}
              invalid={this.state.validate.emailState === 'has-danger'}
              onChange={(e) => {
                this.validateEmail(e)
                this.handleChange(e)
              }}
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
              onChange={(e) => {
                this.handleChange(e)
              }}
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
            <FormGroup controlId="age" bsSize="large">
              <Input
                autoFocus
                type="age"
                name="age"
                placeholder="age"
                value={this.state.age}
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup controlId="city" bsSize="large">
              <Input
                autoFocus
                type="city"
                name="city"
                placeholder="city"
                value={this.state.city}
                onChange={this.handleChange}
              />
            </FormGroup>
            <Button  onClick={this.onSubmit} color="primary">
              Submit
            </Button>
          </FormGroup>
        </Form>
      </Container>
    );
  }
}
