import React from "react";
import {
  Card,
  Button,
  CardHeader,
  CardBody,
  CardTitle,
  CardText
} from "reactstrap";

const UserCard = ({
  user: { name, email, _id },
  isAuth,
  authUser,
  deleteUser
}) => {
  return (
    <Card className="p-3">
      {isAuth && _id === authUser._id && (
        <span className="close" onClick={() => deleteUser(_id)}>
          &times;
        </span>
      )}
      <CardHeader className="text-center bg-white border-0">
        <span className="avatar">{name[0].toUpperCase()}</span>
      </CardHeader>
      <CardBody>
        <CardTitle>Name : {name.toUpperCase()}</CardTitle>
        <CardText>Email : {email}</CardText>
        {isAuth && _id === authUser._id && <Button>EDIT</Button>}
      </CardBody>
    </Card>
  );
};

export default UserCard;
