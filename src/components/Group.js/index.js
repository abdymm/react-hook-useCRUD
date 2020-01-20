import React, { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import AddOrEdit from "./AddOrEdit";
import List from "./List";
import useCRUD from "../../hooks/useCRUD";

function Group() {
  const initialUsers = [
    {
      id: 2,
      name: "ADMIN",
      description: "ADMIN of the system"
    },
    {
      id: 1,
      name: "SUPERADMIN",
      description: "Su things"
    }
  ];
  const initialUser = {
    id: 0,
    name: "",
    description: ""
  };
  const [
    users,
    setUsers,
    user,
    setUser,
    onAdd,
    onEdit,
    onUpdate,
    onDelete
  ] = useCRUD(initialUsers, initialUser);

  return (
    <Container>
      <h1>GROUP</h1>
      <Row>
        <Col>
          <AddOrEdit
            initialUser={initialUser}
            editedUser={user}
            onAdd={onAdd}
            onUpdate={onUpdate}
          />
        </Col>
        <Col>
          <List
            users={users}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Group;
