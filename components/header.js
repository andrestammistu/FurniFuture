import Navbar from 'react-bootstrap/Navbar'
import Link from 'next/link'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import LoginButton from './loginButton'


export default function Header(){
    return(
        <header>
            <Navbar>
                <Container fluid>
                    <Navbar.Brand href="/">
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
                            <Nav.Link href="/">Avaleht</Nav.Link>
                            <NavDropdown title="Mööbel" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="/products">Kontor</NavDropdown.Item>
                                <NavDropdown.Item href="/products" disabled>Elutuba</NavDropdown.Item>
                                <NavDropdown.Item href="/products" disabled>Magamistuba</NavDropdown.Item>
                                <NavDropdown.Item href="/products" disabled>Köök</NavDropdown.Item>
                                <NavDropdown.Item href="/products" disabled>Vannituba</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#" disabled>Something else here</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="/#contact">Kontakt</Nav.Link>
                        </Nav>
                        <Link href="#" className="d-flex">
                                <a style={{padding:"10px"}}>
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
                                </a>
                            </Link>
                        <Form className="d-flex">
                            <LoginButton></LoginButton>
                        </Form> 

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

