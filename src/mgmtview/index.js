import React from "react";
import ReactDOM from "react-dom";

import { Navbar, Container, Nav, Row } from "react-bootstrap";
import { Sidebar } from "./sidebar";

export function ManagementView() {
  return (
    <Row>
      <Sidebar />
      <div className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div>Management</div>
      </div>
    </Row>
  );
}
