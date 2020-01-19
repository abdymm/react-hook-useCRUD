import React, { useState, useEffect } from "react";
import { Form, Col, Row, Button, Container } from "react-bootstrap";

function AddOrEdit({ onAddUser, onUpdateUser, editedUser, initialUser }) {
  const [user, setUser] = useState(editedUser);

  useEffect(() => {
    setUser(editedUser);
  }, [editedUser]);

  const onSubmit = () => {
    if (user.id === 0) {
      clearForm();
      user.id = Math.floor(Math.random() * 1000);
      onAddUser(user);
    } else {
      onUpdateUser(user.id, user);
    }
  };

  const clearForm = () => {
    setUser(initialUser);
  };

  return (
    <Container>
      <h2>Form User</h2>
      <Form>
        <Form.Control type="hidden" value={user.id} readOnly={true} />
        <Form.Group as={Row} controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            Email
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="email"
              placeholder="Email"
              value={user.email}
              onChange={e => setUser({ ...user, email: e.target.value })}
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
              value={user.username}
              onChange={e => setUser({ ...user, username: e.target.value })}
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
              value={user.pass}
              onChange={e => setUser({ ...user, pass: e.target.value })}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Col sm={{ span: 2, offset: 2 }}>
            <Button onClick={onSubmit}>
              {user.id === 0 ? `Add` : `Update`}
            </Button>
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

export default AddOrEdit;
