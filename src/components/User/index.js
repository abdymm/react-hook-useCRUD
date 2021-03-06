import React, { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import AddOrEdit from "./AddOrEdit";
import List from "./List";
import useCRUD from "../../hooks/useCRUD";

function User() {
  const initialUsers = [
    {
      id: 99,
      email: "abdymalikmulky@gmail.com",
      username: "abdymm",
      pass: 123456789
    },
    {
      id: 88,
      email: "anniswaz@gmail.com",
      username: "annisw",
      pass: 987654321
    }
  ];
  const initialUser = {
    id: 0,
    email: "",
    username: "",
    pass: ""
  };
  const [
    users,
    setUsers,
    user,
    setUser,
    onAddUser,
    onEditUser,
    onUpdateUser,
    onDeleteUser
  ] = useCRUD(initialUsers, initialUser);

  return (
    <Container>
      <h1>USER</h1>
      <Row>
        <Col>
          <AddOrEdit
            initialUser={initialUser}
            editedUser={user}
            onAddUser={onAddUser}
            onUpdateUser={onUpdateUser}
          />
        </Col>
        <Col>
          <List
            users={users}
            onEditUser={onEditUser}
            onDeleteUser={onDeleteUser}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default User;
