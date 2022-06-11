import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import MenuNavbar from "./MenuNavbar"
import "../css/debug.css"

class Dashboard extends React.Component {
  render() {
    return (
      <>
        <MenuNavbar />
        <Container fluid className="" style={{ minHeight: "90vh" }}> {/* TODO: DashboardContent component */}
          <p>Hi</p>
        </Container>
      </>
    )
  }
}

export default Dashboard
