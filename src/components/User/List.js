import React, { useState } from "react";
import { Container, Row, Table, ButtonToolbar, Button } from "react-bootstrap";
import Confirmation from "./Confirmation";

function List({ users, onEditUser, onDeleteUser }) {
  const [showModal, setShowModal] = useState(false);
  const [wantToDeleteUserId, setWantToDeleteUserId] = useState(0);

  const handleShowModal = (isShow, user) => {
    //set deleted user
    if (user != null) {
      setWantToDeleteUserId(user.id);
    }
    setShowModal(isShow);
  };

  const onConfirmDelete = () => {
    onDeleteUser(wantToDeleteUserId);
    setShowModal(false);
  };

  return (
    <Container>
      <h2>List User</h2>
      <Row>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>ID</th>
              <th>Email</th>
              <th>Username</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr key={user.id}>
                <td>{i + 1}</td>
                <td>{user.id}</td>
                <td>{user.email}</td>
                <td>{user.username}</td>
                <td>
                  <ButtonToolbar>
                    <Button
                      variant="info"
                      size="sm"
                      onClick={() => onEditUser(user)}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => handleShowModal(true, user)}
                    >
                      Delete
                    </Button>
                  </ButtonToolbar>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Row>
      <Confirmation
        show={showModal}
        onYes={onConfirmDelete}
        handleClose={() => handleShowModal(false, null)}
      />
    </Container>
  );
}

export default List;
