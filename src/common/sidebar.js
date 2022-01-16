import React from "react";
import ReactDOM from "react-dom";

import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import {
  IconEmployees,
  IconShoppingCart,
  IconChart,
  IconEmptyDoc,
  IconFullDoc,
  IconPile
} from "./icons";

export const sidebar_table = [
  IconEmployees,
  { path: "/employee", title: "Employee", icon: "IconEmployees" },
  { path: "/wellbeing", title: "Wellbeing", icon: "IconChart" },
  { path: "/absence", title: "Absence", icon: "IconShoppingCart" },
  { path: "/recruitment", title: "Recruitment", icon: "IconEmptyDoc" },
  { path: "/development", title: "Development", icon: "IconFullDoc" },
  { path: "/induction", title: "Induction", icon: "IconFullDoc" },
  { path: "/termination", title: "Termination", icon: "IconPile" }
];

export function Sidebar({ table }) {
  return (
    <Nav
      bg="light"
      expand="md"
      className="d-none d-md-block col-md-3 col-lg-2 sidebar"
    >
      <div
        style={{
          position: "sticky",
          paddingTop: "1rem"
        }}
      >
        {table.map((row) => {
          return (
            <LinkContainer to="{row.path}">
              <Nav.Link>
                {console.log(row)}
                {row.icon === "IconEmployees" && <IconEmployees />}
                {row.icon === "IconShoppingCart" && <IconShoppingCart />}
                {row.icon === "IconChart" && <IconChart />}
                {row.icon === "IconEmptyDoc" && <IconEmptyDoc />}
                {row.icon === "IconFullDoc" && <IconFullDoc />}
                {row.icon === "IconPile" && <IconPile />}
                {row.title}
              </Nav.Link>
            </LinkContainer>
          );
        })}
      </div>
    </Nav>
  );
}
