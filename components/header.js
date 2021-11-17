import Navbar from 'react-bootstrap/Navbar'
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
                            <Nav.Link href="#kontakt">Kontakt</Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <LoginButton></LoginButton>
                        </Form> 

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

