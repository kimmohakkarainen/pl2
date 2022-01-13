import React from "react";
import ReactDOM from "react-dom";

import { Navbar, Container, Nav, Row } from "react-bootstrap";
import { Sidebar } from "./sidebar";

export function WorkView() {
  return (
    <Row>
      <Sidebar />
      <div className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div>Work</div>
      </div>
    </Row>
  );
}
