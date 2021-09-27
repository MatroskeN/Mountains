import * as React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { ModalBase } from '../Modal/Modal';

export const ModalExample = (props) => {
  return (
    <ModalBase {...props}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={props.hideModal}>
          Close
        </Button>
        <Button variant='primary' onClick={props.hideModal}>
          Save Changes
        </Button>
      </Modal.Footer>
    </ModalBase>
  );
};
