import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Navbar, Container, Nav, Row } from "react-bootstrap";

import { Menubar, Sidebar } from "./mainview";
import { EmployeeView } from "./employeeview";

export default function App() {
  return (
    <BrowserRouter>
      <Menubar />
      <Container fluid>
        <Row>
          <Sidebar />
          <div className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <Routes>
              <Route exact path="/" element={<EmployeeView />} />
              <Route exact path="/mgmt" element={<EmployeeView />} />
              <Route exact path="/stats" element={<EmployeeView />} />
              <Route exact path="/notif" element={<EmployeeView />} />
              <Route exact path="/work" element={<EmployeeView />} />
            </Routes>
          </div>
        </Row>
      </Container>
    </BrowserRouter>
  );
}
