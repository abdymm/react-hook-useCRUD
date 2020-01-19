import React, { useState, useEffect } from "react";
import { Form, Col, Row, Button, Container } from "react-bootstrap";

function Add({ onAddUser, onUpdateUser, user, initialUser }) {
  const [addedUser, setAddedUser] = useState(user);

  useEffect(() => {
    setAddedUser(user);
    console.log("User", user);
    console.log("UserAdd", addedUser);
  }, [user]);

  const onSubmit = () => {
    console.log("UserId", addedUser.id);
    if (addedUser.id === 0) {
      console.log("UserAdd", addedUser);
      clearForm();
      addedUser.id = Math.floor(Math.random() * 1000);
      onAddUser(addedUser);
    } else {
      console.log("UserUpdate", addedUser);
      onUpdateUser(addedUser.id, addedUser);
    }
  };

  const clearForm = () => {
    setAddedUser(initialUser);
  };

  return (
    <Container>
      <h2>Form User</h2>
      <Form>
        <Form.Control type="hidden" value={addedUser.id} readOnly={true} />
        <Form.Group as={Row} controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            Email
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="email"
              placeholder="Email"
              value={addedUser.email}
              onChange={e =>
                setAddedUser({ ...addedUser, email: e.target.value })
              }
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formHorizontalUsername">
          <Form.Label column sm={2}>
            Username
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              placeholder="Username"
              value={addedUser.username}
              onChange={e =>
                setAddedUser({ ...addedUser, username: e.target.value })
              }
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formHorizontalPassword">
          <Form.Label column sm={2}>
            Password
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="password"
              placeholder="Password"
              value={addedUser.pass}
              onChange={e =>
                setAddedUser({ ...addedUser, pass: e.target.value })
              }
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Col sm={{ span: 2, offset: 2 }}>
            <Button onClick={onSubmit}>Save</Button>
          </Col>

          <Col>
            <Button onClick={clearForm} variant="danger">
              Clear
            </Button>
          </Col>
        </Form.Group>
      </Form>
    </Container>
  );
}

export default Add;
