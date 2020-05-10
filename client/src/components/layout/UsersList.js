import React from "react";
import { connect } from "react-redux";
import UserCard from "../UserCard";
import { Container, Row, Col } from "reactstrap";

const UsersList = ({users : { usersList, isLoading } , isAuth , authUser}) => {
  return (
    <Container>
      {!isLoading && usersList ? (
        <Row>
          {usersList.map(el => (
            <Col key={el.id} xs="12" md="6" lg="4" className="mb-3">
              <UserCard user={el} isAuth={isAuth} authUser={authUser} />
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

export default connect(mapStateToProps)(UsersList);
