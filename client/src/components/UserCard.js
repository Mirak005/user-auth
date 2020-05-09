import React from "react";
import {
  Card,
  Button,
  CardHeader,
  CardFooter,
  CardBody,
  CardTitle,
  CardText
} from "reactstrap";

const UserCard = ({ name = "Karim Gharbi", email = "Karim@gmail.com" }) => {
  return (
    <div>
      <Card className="col-md-3  col-sm-12">
        <CardHeader className="d-flex justify-content-around">
          <span className="avatar">{name[0].toUpperCase()}</span>{" "}
          <span className="close">&times;</span>
        </CardHeader>
        <CardBody>
          <CardTitle>Name : {name.toUpperCase()}</CardTitle>
          <CardText>Email : {email}</CardText>
          <Button>EDIT</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default UserCard;
