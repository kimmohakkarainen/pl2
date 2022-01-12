import React from "react";
import ReactDOM from "react-dom";

import { Navbar, Container, Nav, Row } from "react-bootstrap";

import { Menubar, Sidebar } from "./mainview";

export default function App() {
  return (
    <>
      <Menubar />
      <Container fluid>
        <Row>
          <Sidebar />
        </Row>
      </Container>
    </>
  );
}
