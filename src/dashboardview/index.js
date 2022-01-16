import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";

import { Navbar, Container, Nav, Row } from "react-bootstrap";
import { Sidebar } from "./sidebar";
import { fetchHelloWorld } from "../actions";

function DashboardView({ person, helloWorld, fetchHelloWorld }) {
  useEffect(() => {
    fetchHelloWorld();
  }, []);

  return (
    <Row>
      <Sidebar />
      <div className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div>Dashboard</div>
      </div>
    </Row>
  );
}

function mapStateToProps(state) {
  return state;
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchHelloWorld: (password) => dispatch(fetchHelloWorld(password))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardView);
