import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import React, { useEffect, useState } from "react";
import LoginForm from './loginForm.js'
import Link from 'next/link'

function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
            Logi sisse
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <LoginForm></LoginForm>
        </Modal.Body>
        <Modal.Footer>
            <p>Pole veel kasutaja? </p>
            <Link href="/">
                <a>Registreeru siin!</a>
            </Link>
        </Modal.Footer>
      </Modal>
    );
  }
  
  export default function LoginButton() {
    const [modalShow, setModalShow] = React.useState(false);
  
    return (
      <>
        <Button variant="primary" onClick={() => setModalShow(true)}>
          Logi sisse
        </Button>
  
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    );
  }