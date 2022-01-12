import React from "react";
import ReactDOM from "react-dom";

import { Navbar, Container, Nav, Row } from "react-bootstrap";

import { Menubar, Sidebar } from "./mainview";
import { EmployeeView } from "./employeeview";

export default function App() {
  return (
    <>
      <Menubar />
      <Container fluid>
        <Row>
          <Sidebar />
          <div className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <EmployeeView />
          </div>
        </Row>
      </Container>
    </>
  );
}
