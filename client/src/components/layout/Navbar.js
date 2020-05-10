import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { logout } from "../../js/actions/authActions";

import Register from "../auth/Register";
import Login from "../auth/Login";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from "reactstrap";

class AppNavbar extends Component {
  state = {
    isOpen: false
  };
  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    const { isAuth , isLoading , user   } = this.props.auth;
    return (
      <div>
        <Navbar color="dark" dark expand="sm" className="mb-5">
          <Container>
            <NavbarBrand href="/">Users List </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                {isAuth && !isLoading ? (
                  <Fragment>
                    <NavItem>
                      <NavLink href="#" onClick={this.toggle}>
                        {`Welcome ${user.name}`}
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="#" onClick={() => this.props.logout()}>
                        Logout
                      </NavLink>
                    </NavItem>
                  </Fragment>
                ) : (
                  <Fragment>
                    <NavItem>
                      <Register />
                    </NavItem>
                    <NavItem>
                      <Login />
                    </NavItem>
                  </Fragment>
                )}

                <NavItem>
                  <NavLink href="/">Github Link</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.authReducer
});

export default connect(mapStateToProps, { logout })(AppNavbar);
