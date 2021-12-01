import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/modal'
import React, { useEffect, useState } from "react";
import Link from 'next/link'



export default function Basket(){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
        <div>
            <div onClick={handleShow} style={{padding:"10px", cursor:"pointer"}} variant="outline-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" 
                        width="30px" 
                        height="30px" 
                        fill="currentColor" 
                        class="bi bi-basket" 
                        viewBox="0 0 16 16">
                            <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 
                                    .858-.514L13.783 6H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v4.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 13.5V9a1 1 0 0 1-1-1V7a1 
                                    1 0 0 1 1-1h1.217L5.07 1.243a.5.5 0 0 1 .686-.172zM2 9v4.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9H2zM1 7v1h14V7H1zm3 
                                    3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 4 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 6 10zm2 0a.5.5 0 0 1 
                                    .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 8 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 
                                    0v-3a.5.5 0 0 1 .5-.5z"/>
                    </svg>
            </div>
            
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Ostukorv</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Sinu ostukorvis on 2 toodet.</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Sule
                    </Button>
                    <Link href="#">
                        <a style={{backgroundColor:"#0d6efd", textDecoration: "none", color:"white"}}>Vormista ost</a>
                    </Link>
                </Modal.Footer>
            </Modal>
        </div>
    )
}