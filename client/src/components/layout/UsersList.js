import React from "react";
import UserCard from "../UserCard";
import { Container, Row, Col } from "reactstrap";

const UsersList = () => {
  return (
    <Container>
      <Row>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((el, i) => (
          <Col key={i} xs="12" md="6" lg="4" className="mb-3">
            <UserCard />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default UsersList;
