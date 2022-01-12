import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Navbar, Container, Nav, Row } from "react-bootstrap";

import { Menubar, Sidebar } from "./mainview";
import { EmployeeView } from "./employeeview";
import { DashboardView } from "./dashboardview";

export default function App() {
  return (
    <BrowserRouter>
      <Menubar />
      <Container fluid>
        <Row>
          <Sidebar />
          <div className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <Routes>
              <Route exact path="/" element={<DashboardView />} />
              <Route exact path="/mgmt" element={<EmployeeView />} />
              <Route exact path="/stats" element={<EmployeeView />} />
              <Route exact path="/notif" element={<EmployeeView />} />
              <Route exact path="/work" element={<EmployeeView />} />
              <Route exact path="/employee" element={<EmployeeView />} />
              <Route exact path="/wellbeing" element={<div>WellBeing</div>} />
              <Route exact path="/absence" element={<div>absence</div>} />
              <Route
                exact
                path="/recruitment"
                element={<div>recruitment</div>}
              />
              <Route
                exact
                path="/development"
                element={<div>development</div>}
              />
              <Route exact path="/induction" element={<div>induction</div>} />
              <Route
                exact
                path="/termination"
                element={<div>termination</div>}
              />
            </Routes>
          </div>
        </Row>
      </Container>
    </BrowserRouter>
  );
}
