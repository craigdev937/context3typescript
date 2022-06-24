import React from "react";
import cart2 from "/img/cart2.svg"
import { NavLink } from "react-router-dom";
import { Button, Container, Nav, 
    Navbar as NavbarBS } from "react-bootstrap";
import { useCart } from "../context/SContext";

export const Navbar = (): JSX.Element => {
    const { openCart, cartQty } = useCart();
    return (
        <React.Fragment>
        <NavbarBS sticky="top" className="bg-white shadow-sm mb-3">
            <Container>
                <Nav className="me-auto">
                    <Nav.Link to="/" as={NavLink}>Home</Nav.Link>
                    <Nav.Link to="/about" as={NavLink}>About</Nav.Link>
                    <Nav.Link to="/store" as={NavLink}>Store</Nav.Link>
                    <Button 
                        style={{ 
                            width: "3rem", 
                            height: "3rem", 
                            position: "relative"
                        }}
                        variant="outline-primary"
                        className="rounded-circle"
                        onClick={openCart}
                        >
                            <img 
                                width="30rem" height="30rem"
                                src={cart2} alt="cart" 
                            />
                            <aside className="rounded-circle 
                                bg-danger d-flex 
                                justify-content-center 
                                align-items-center"
                                style={{
                                    color: "white", 
                                    width: "1.5rem", 
                                    height: "1.5rem",
                                    position: "absolute",
                                    bottom: "0", 
                                    right: "0", 
                                    transform: "translate(25%, 25%)",
                                }}>{cartQty}
                            </aside>
                    </Button>
                </Nav>
            </Container>
        </NavbarBS>
        </React.Fragment>
    );
};



