import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import MenuNavbar from "./MenuNavbar"
import "../css/debug.css"

class Dashboard extends React.Component {
  render() {
    return (
      <>
        <MenuNavbar />
        <Container fluid className="d-flex justify-content-center align-items-center" style={{ minHeight: "90vh" }}> {/* TODO: DashboardContent component */}
          <p>Project Dashboard Content</p>
        </Container>
      </>
    )
  }
}

export default Dashboard
