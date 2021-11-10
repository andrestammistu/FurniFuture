export default function Filter(){
    return(
        <Nav justify variant="tabs" defaultActiveKey="/home">
            {/* <Nav.Item>
                <Nav.Link href="/home">Active</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-1">Loooonger NavLink</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-2">Link</Nav.Link>
            </Nav.Item> */}
            <NavDropdown title="Filtreeri" id="nav-dropdown">
                <NavDropdown.Item eventKey="4.1">Kõrgem hind esiteks</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.2">Madalam hind esiteks</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.3">Tähestikulises järjekorras</NavDropdown.Item>
            </NavDropdown>
        </Nav>
    )
}