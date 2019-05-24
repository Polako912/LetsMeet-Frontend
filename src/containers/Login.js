import React, { Component } from "react";
import "./Login.css";
import { Button , ButtonGroup,FormGroup, Input, Col, Container, Form, FormFeedback} from 'reactstrap';
import Auth from "./Auth.js";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      'email': '',
      'password': '',
      'obj': '',
      validate: {
        emailState: '',
      },
    };
      this.handleChange = this.handleChange.bind(this);
      this.submitForm = this.submitForm.bind(this);
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

  submitForm() {
    var dane = JSON.stringify(
      {
        "email": this.state.email,
        "password": this.state.password
      }
    );
    //console.log(`Email: ${this.state.email}`);
    var url = 'https://letsmeet.azurewebsites.net/api/users/login';
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(
        {
          "email": this.state.email,
          "password": this.state.password
        }),
    };
    return fetch(url, requestOptions)
      .then(function(response) {
        return response.json();
        //res.authdata = window.btoa(this.state.email + ':' + this.state.password);
        //localStorage.setItem('token', this.state.token);

        //Auth.authenticateUser(JSON.stringify(this.state.token));
        //console.log(this.state.token);
    //return this.state.token;
      })
    .then(function(data) {
      console.log(data);
      var obj = data;
      var almostToken = JSON.stringify(obj.token);
      var goodToken = almostToken.replace(/['"]+/g, '');
      Auth.authenticateUser(goodToken);
      //var token = data.token;
     /* const obj = data.Object;
      this.setState({obj});
      Auth.authenticateUser(this.state.obj.map(obj =>{obj.token}));*/
    });
    /*http.open("POST", url + '/login', true);
    http.setRequestHeader("Content-Type", "application/json");
    http.onreadysetchange = function () {
      if (http.readyState === 4 && http.status === 200) {
        alert(http.responseText).then(res => res.json()).then(res => {
          let token = res.token;
          console.log("token: ", token);
          Auth.authenticateUser(token);
        });
      };
    }
  http.send(dane);*/
  }
  
  render() {
    return (
      <Container className="Login">
      <h2>Sign In</h2>
      <Form className="form">
        <form onSubmit={this.handleSubmit}>
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
          <Button onClick={this.submitForm}>Login</Button>
        </form>
        </Form>
      </Container>
    );
  }
}
