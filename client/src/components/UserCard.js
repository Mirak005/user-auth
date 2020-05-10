import React from "react";
import {
  Card,
  Button,
  CardHeader,
  CardBody,
  CardTitle,
  CardText
} from "reactstrap";

const UserCard = ({ name = "Karim Gharbi", email = "Karim@gmail.com" }) => {
  return (
    <Card className="p-3">
      <span className="close">&times;</span>
      <CardHeader className="text-center bg-white border-0">
        <span className="avatar">{name[0].toUpperCase()}</span>
      </CardHeader>
      <CardBody>
        <CardTitle>Name : {name.toUpperCase()}</CardTitle>
        <CardText>Email : {email}</CardText>
        <Button>EDIT</Button>
      </CardBody>
    </Card>
  );
};

export default UserCard;
