import React from "react"
import { Container, Row } from "react-bootstrap"
import "../css/debug.css"

class MainHeader extends React.Component {
  render() {
    return (
      <Container fluid>
        <Row 
          className="d-flex align-items-center justify-content-center text-center borderDebug"
          style={{ minHeight: "80vh" }}
        >
          <div>
            <p style={{ fontWeight: "bold", fontSize: "4vh" }}>I am</p>
            <h1 style={{ fontWeight: "bold", fontSize: "10vh" }}>Sergio Rivera</h1>
            <p style={{ fontWeight: "bold", fontSize: "4vh", marginTop: "30px" }}>Welcome to my portfolio</p>
          </div>
        </Row>
      </Container>
    )
  }
}

export default MainHeader
