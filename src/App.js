import React from "react";
import ReactDOM from "react-dom";

import { Navbar, Container, Nav, Row } from "react-bootstrap";

export default function App() {
  return (
    <>
      <Navbar sticky="top" bg="light" expand="md">
        <Container fluid>
          <Navbar.Brand className="col-md-3 col-md-2 d-md-block">
            PL2
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>Daily Dashboard</Nav.Link>
              <Nav.Link>Managemement</Nav.Link>
              <Nav.Link>Statistics</Nav.Link>
              <Nav.Link>Notifications</Nav.Link>
              <Nav.Link>Work</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container fluid>
        <Row>
          <Nav
            bg="light"
            expand="md"
            className="col-md-3 col-lg-2 col-md-block sidebar"
          >
            <div style={{ position: "sticky", paddingTop: "1rem" }}>
              <Nav.Link>Employee</Nav.Link>
              <Nav.Link>Wellbeing</Nav.Link>
              <Nav.Link>Absence</Nav.Link>
              <Nav.Link>Recruitment</Nav.Link>
              <Nav.Link>Development</Nav.Link>
              <Nav.Link>Induction</Nav.Link>
              <Nav.Link>Termination</Nav.Link>
            </div>
          </Nav>
        </Row>
      </Container>
    </>
  );
}
