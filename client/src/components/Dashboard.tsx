import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import MenuNavbar from "./MenuNavbar"

class Dashboard extends React.Component {
  render() {
    return (
      <Container fluid style={{borderBottom: "1px solid black"}}>
        <MenuNavbar />
      </Container>
    )
  }
}

export default Dashboard
