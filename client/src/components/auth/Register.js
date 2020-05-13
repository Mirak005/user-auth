import React, { Component } from "react";
import { connect } from "react-redux";
import { register } from "../../js/actions/authActions";

import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  NavLink
} from "reactstrap";

class RegisterModal extends Component {
  state = {
    modalOpen: false,
    name: "",
    email: "",
    password: ""
  };

  toggle = () => {
    //Clear Errors
    this.setState({ modalOpen: !this.state.modalOpen });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const { name, email, password } = this.state;
    this.props.register({ name, email, password });
  };

  render() {
    return (
      <div>
        <NavLink href="#" onClick={this.toggle}>
          Register
        </NavLink>
        <Modal isOpen={this.state.modalOpen} toggle={this.toggle}>
          <ModalHeader>Register</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="name">Name </Label>
                <Input
                  className="mb-3"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name "
                  onChange={this.onChange}
                />
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
                  Register{" "}
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default connect(null, { register })(RegisterModal);
