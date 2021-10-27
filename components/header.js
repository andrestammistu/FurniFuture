import Link from 'next/link'
import Image from 'next/image'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import LoginButton from './loginButton'


export default function Header(){
    return(
        <header>
            <Navbar>
                <Container fluid>
                    <Navbar.Brand href="#home">
                        <img
                        alt="FurniFuture" 
                        height="80"
                        width="100%"
                        src="/images/logo.png"
                        className="d-inline-block align-top"
                        />{' '}
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="mr-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px', justifyContent: 'center', flex: 1 }}
                            navbarScroll
                            >
                            <Nav.Link href="#action1">Avaleht</Nav.Link>
                            <NavDropdown title="Mööbel" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">Kontor</NavDropdown.Item>
                                <NavDropdown.Item href="#action4" disabled>Elutuba</NavDropdown.Item>
                                <NavDropdown.Item href="#action4" disabled>Magamistuba</NavDropdown.Item>
                                <NavDropdown.Item href="#action4" disabled>Köök</NavDropdown.Item>
                                <NavDropdown.Item href="#action4" disabled>Vannituba</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5" disabled>Something else here</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#kontakt">Kontakt</Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            {/* <Button variant="outline-success">Logi sisse</Button> */}
                            <LoginButton></LoginButton>
                        </Form> 

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

