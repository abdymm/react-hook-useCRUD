import React, { useState, useEffect } from "react";
import { Form, Col, Row, Button, Container } from "react-bootstrap";

function AddOrEdit({ onAdd, onUpdate, editedUser, initialUser }) {
  const [group, setGroup] = useState(editedUser);

  useEffect(() => {
    setGroup(editedUser);
  }, [editedUser]);

  const onSubmit = () => {
    if (group.id === 0) {
      clearForm();
      group.id = Math.floor(Math.random() * 1000);
      onAdd(group);
    } else {
      onUpdate(group.id, group);
    }
  };

  const clearForm = () => {
    setGroup(initialUser);
  };

  return (
    <Container>
      <h2>Form Group</h2>
      <Form>
        <Form.Control type="hidden" value={group.id} readOnly={true} />
        <Form.Group as={Row} controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            Name
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              placeholder="Name"
              value={group.name}
              onChange={e => setGroup({ ...group, name: e.target.value })}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formHorizontalUsername">
          <Form.Label column sm={2}>
          Description
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              placeholder="Description"
              value={group.description}
              onChange={e => setGroup({ ...group, description: e.target.value })}
            />
          </Col>
        </Form.Group>

     
        <Form.Group as={Row}>
          <Col sm={{ span: 2, offset: 2 }}>
            <Button onClick={onSubmit}>
              {group.id === 0 ? `Add` : `Update`}
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
