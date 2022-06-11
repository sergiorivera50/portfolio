import React from "react"
import { Navbar, Container, Nav } from "react-bootstrap"

class MenuNavbar extends React.Component {
  render() {
    return (
      <Container fluid 
        className="d-flex align-items-center" 
        style={{minHeight: "10vh", borderBottom: "1px solid black"}}
      >
        <Navbar sticky="top" >
          <Container>
            <Navbar.Collapse>
              <Nav className="ms-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#projects">Projects</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    )
  }
}

export default MenuNavbar