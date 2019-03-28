import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Sign.css";

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
            <div className="Sign">
            <form onSubmit={this.handleChange}>
            <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Email</ControlLabel>
            <FormControl
             autoFocus
             type="email"
             value={this.state.email}
             onChange={this.handleChange}
             />
            </FormGroup>
            <FormGroup controlId="nick" bsSize="large">
            <ControlLabel>Nick</ControlLabel>
            <FormControl
             autoFocus
             type="nick"
             value={this.state.nick}
             onChange={this.handleChange}
             />
            </FormGroup>
            <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
             autoFocus
             type="password"
             value={this.state.password}
             onChange={this.handleChange}
             />
            </FormGroup>
            <FormGroup controlId="confirmPassword" bsSize="large">
            <ControlLabel> Confirm Password</ControlLabel>
            <FormControl
             autoFocus
             type="password"
             value={this.state.confirmPassword}
             onChange={this.handleChange}
             />
            </FormGroup>
            <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
            >
            Submit
          </Button>
            </form>
           </div>
        );
    }
}