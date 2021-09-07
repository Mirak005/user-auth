import React, { Fragment } from "react";
import { connect } from "react-redux";
import { deleteUser } from "../../js/actions/userActions";
import UserCard from "../UserCard";
import { Container, Row, Col } from "reactstrap";

const UsersList = ({
  users: { usersList, isLoading, pages },
  isAuth,
  authUser,
  deleteUser,
  getUsers,
}) => {
  let p = [];
  for (let i = 1; i <= pages; i++) {
    p.push(i);
  }
  return (
    <Container>
      {!isLoading && usersList ? (
        <Fragment>
          <Row>
            {usersList.map((el, i) => (
              <Col
                key={i}
                xs="12"
                md="6"
                lg="4"
                className="mb-3 justify-content-stretch"
              >
                <UserCard
                  user={el}
                  isAuth={isAuth}
                  authUser={authUser}
                  deleteUser={deleteUser}
                />
              </Col>
            ))}
          </Row>
          <Row>
            {p.map((p, i) => (
              <button key={i} onClick={() => getUsers(p)}>
                {i + 1}
              </button>
            ))}
          </Row>
        </Fragment>
      ) : (
        <h1>Spinner ................</h1>
      )}
    </Container>
  );
};

const mapStateToProps = (state) => ({
  users: state.usersReducer,
  isAuth: state.authReducer.isAuth,
  authUser: state.authReducer.user,
});

export default connect(mapStateToProps, { deleteUser })(UsersList);
