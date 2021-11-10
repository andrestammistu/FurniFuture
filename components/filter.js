import { Nav } from "react-bootstrap";

export default function Filter(){
    return(
        <Nav justify variant="tabs" defaultActiveKey="/home">
            <NavDropdown title="Hinnavahemik" id="nav-dropdown">
            </NavDropdown>
            <NavDropdown title="Sorteeri" id="nav-dropdown">
                <NavDropdown.Item eventKey="4.1">Kõrgem hind esiteks</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.2">Madalam hind esiteks</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.3">Tähestikulises järjekorras</NavDropdown.Item>
            </NavDropdown>
        </Nav>
    )
}