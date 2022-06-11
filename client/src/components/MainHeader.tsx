import React from "react"
import { Container, Row } from "react-bootstrap"
import "../css/debug.css"
import "../css/animations.css"

class MainHeader extends React.Component {
  render() {
    return (
      <Container fluid>
        <Row 
          className="d-flex align-items-center justify-content-center text-center borderDebug"
          style={{ minHeight: "80vh" }}
        >
          <div>
            <p style={{ fontWeight: "bold", fontSize: "2em" }}>Hi <span className="wave">👋</span> I am</p>
            <h1 className="fadein duration2s" style={{ fontWeight: "bold", fontSize: "5em" }}>Sergio Rivera</h1>
            <p className="fadein delay2s" style={{ fontWeight: "bold", fontSize: "2em", marginTop: "30px" }}>Welcome to my Project Tracker</p>
          </div>
        </Row>
      </Container>
    )
  }
}

export default MainHeader
