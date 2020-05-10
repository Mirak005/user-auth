import React, { Component } from "react";
import { connect } from "react-redux";
import { login, clearErrors } from "../../js/actions/authActions";

import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  NavLink,
  Alert
} from "reactstrap";

class Login extends Component {
  state = {
    modalOpen: false,
    email: "",
    password: ""
  };

  toggle = () => {
    //Clear Errors
    this.props.clearErrors();
    this.setState({ modalOpen: !this.state.modalOpen });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.login({
      email: this.state.email,
      password: this.state.password
    });
  };

  render() {
    const { errors, status } = this.props.errors;

    return (
      <div>
        <NavLink href="#" onClick={this.toggle}>
          Login
        </NavLink>
        <Modal isOpen={this.state.modalOpen} toggle={this.toggle}>
          
          {errors &&
            Array.isArray(errors) &&
            errors.map(el => <Alert color="danger"> {el} </Alert>)}

          <ModalHeader>Login</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="email">Email address </Label>
                <Input
                  className="mb-3"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email "
                  onChange={this.onChange}
                />
                <Label for="password">Password </Label>
                <Input
                  className="mb-3"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="**********"
                  onChange={this.onChange}
                />
                <Button color="primary" style={{ marginTop: "2rem" }}>
                  Login{" "}
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  errors: state.authReducer.errors
});

export default connect(mapStateToProps, { login, clearErrors })(Login);
