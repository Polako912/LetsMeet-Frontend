import React, { Component } from "react";
import "./Login.css";
import { Button , ButtonGroup,FormGroup, Input, Col, Container, Form, FormFeedback} from 'reactstrap';




export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      'email': '',
      'password': '',
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
    console.log(`Email: ${this.state.email}`);
    var http = new XMLHttpRequest();
    var url = 'https://letsmeet.azurewebsites.net/api/users';
    var dane = JSON.stringify(
      {
        "email": this.state.email,
        "password": this.state.password
      }
    );
    http.open("POST", url + '/login', true);
    http.setRequestHeader("Content-Type", "application/json");
    http.onreadysetchange = function () {
      if (http.readyState === 4 && http.status === 200) {
        alert(http.responseText);
      }
    };
    http.send(dane);
  }
  
  render() {
    return (
      <Container className="Login">
      <h2>Sign In</h2>
      <Form className="form"  onSubmit={ (e) => this.submitForm(e)} >
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
          <Button to href="/home" onClick={this.submitForm}>Login</Button>
        </form>
        </Form>
      </Container>
    );
  }
}
