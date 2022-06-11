import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import "../css/debug.css"
import "../css/animations.css"
import Preloader from "./Preloader"

class LoadingScreen extends React.Component {
  render() {
    return (
      <Container fluid 
        className="d-flex align-items-center justify-content-center text-center" 
        style={{ minHeight: "100vh" }}
      >
        <Col>
          <Row className="justify-content-center">
            <p className="fadeinAnimation duration2s" style={{ fontSize: "2em" }}>
              Hi <span className="waveAnimation">👋</span> I am
            </p>
          </Row>
          <Row className="justify-content-center">
            <h1 className="sergiorivera fadeinAnimation duration2s delay0p5s" style={{ fontSize: "5em" }}>
              Sergio Rivera
            </h1>
          </Row>
          <Row className="justify-content-center" style={{ marginBottom: "35px" }}>
            <p className="fadeinAnimation delay2s" style={{ fontSize: "2em", marginTop: "30px" }}>
              Welcome to my Project Tracker
            </p>
          </Row>
          <Row className="justify-content-center">
            <Preloader />
          </Row>
        </Col>
      </Container>
    )
  }
}

export default LoadingScreen
