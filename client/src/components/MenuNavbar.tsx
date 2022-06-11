import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import "../css/debug.css"

class MenuNavbar extends React.Component {
  render() {
    return (
      <Container fluid 
        className="align-items-center flex-nowrap" 
        style={{borderBottom: "1px solid black"}}
      >
        <Row 
          className="align-items-center"
          style={{minHeight: "5vh"}}
        >
          <Col style={{ borderRight: "1px solid black" }}>
            <h1 className="sergiorivera">Sergio Rivera</h1>
          </Col>
          <Col 
            className="col-6" 
            style={{ borderRight: "1px solid black" }}
          >
            2 of 3
          </Col>
          <Col>
            3 of 3
          </Col>
        </Row>
      </Container>
    )
  }
}

export default MenuNavbar