import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Nav, Navbar as NavbarBS } from "react-bootstrap";

export const Navbar = (): JSX.Element => (
    <React.Fragment>
        <NavbarBS className="bg-white shadow-sm mb-3">
            <Container>
                <Nav.Link to="/" as={NavLink}>Home</Nav.Link>
                <Nav.Link to="/about" as={NavLink}>About</Nav.Link>
                <Nav.Link to="/store" as={NavLink}>Store</Nav.Link>
            </Container>
        </NavbarBS>
    </React.Fragment>
);

