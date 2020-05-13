import React from "react";
import { connect } from "react-redux";
import {deleteUser} from "../../js/actions/userActions"
import UserCard from "../UserCard";
import { Container, Row, Col } from "reactstrap";

const UsersList = ({users : { usersList, isLoading } , isAuth , authUser ,deleteUser}) => {
  return (
    <Container>
      {!isLoading && usersList ? (
        <Row>
          {usersList.map(el => (
            <Col key={el.id} xs="12" md="6" lg="4" className="mb-3 justify-content-stretch">
              <UserCard user={el} isAuth={isAuth} authUser={authUser} deleteUser={deleteUser} />
            </Col>
          ))}
        </Row>
      ) : <h1>Spinner ................</h1>   }
    </Container>
  );
};

const mapStateToProps = state => ({
  users: state.usersReducer,
  isAuth : state.authReducer.isAuth,
  authUser : state.authReducer.user
});

export default connect(mapStateToProps , { deleteUser})(UsersList);
