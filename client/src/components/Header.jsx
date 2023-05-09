import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./App.css";

export default function Header() {
  return (
    <div className="nav-section">
      <Navbar className="container-fluid" bg="dark" variant="dark">
        <Navbar.Brand style={{ fontSize: "25px" }} href="#home">
          <img
            className="img-responsive"
            src="https://www.logo.wine/a/logo/YouTube/YouTube-Icon-White-Dark-Background-Logo.wine.svg"
          />
          MOVIE APP
        </Navbar.Brand>
        <Nav className="ms-auto" style={{ fontSize: "18px" }}>
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/addCustomer">Customers</Nav.Link>
          <Nav.Link href="/adminLogin">Movie Admin</Nav.Link>
          <Nav.Link href="/sysAdminLogin">System Admin</Nav.Link>
          <Nav.Link href="/cartLogin">
            <ShoppingCartIcon />
            Movie Cart
          </Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}
