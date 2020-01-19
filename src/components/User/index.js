import React, { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Add from "./Add";
import List from "./List";

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
  const [users, setUsers] = useState(initialUsers);
  const [user, setUser] = useState(initialUser);

  const onAddUser = user => {
    setUsers([...users, user]);
  };

  const onDeleteUser = id => {
    setUsers(users.filter(user => user.id !== id));
  };

  const onEditUser = user => {
    setUser(user);
  };

  const onUpdateUser = (id, updatedUser) => {
    setUsers(users.map(user => (user.id === id ? updatedUser : user)));
  };

  return (
    <Container>
      <h1>USER</h1>
      <Row>
        <Col>
          <Add initialUser={initialUser} user={user} onAddUser={onAddUser}  onUpdateUser={onUpdateUser} />
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
