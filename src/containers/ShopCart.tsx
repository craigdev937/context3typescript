import React from "react";
import data from "../data/items.json";
import { Offcanvas, Stack } from "react-bootstrap";
import { useCart } from "../context/SContext";
import { CartItem } from "./CartItem";
import { formatCur } from "../hooks/Currency";

type Props = {
    isOpen: boolean
};

export const ShopCart = 
({isOpen}: Props): JSX.Element => {
    const { closeCart, cartItems } = useCart();

    return (
        <React.Fragment>
            <Offcanvas 
                show={isOpen} 
                placement="end"
                onHide={closeCart}
                >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Cart</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Stack gap={3}>
                        {cartItems.map((item) => (
                            <CartItem key={item.id} {...item} />
                        ))}
                        <aside className="ms-auto fw-bold fs-5">
                            Total {" "}
                            {formatCur(
                                cartItems.reduce((total, cartItem) => {
                                    const item = data.find((item) => item.id === cartItem.id)
                                    return total + (item?.price || 0) * cartItem.quantity
                                }, 0)
                            )}
                        </aside>
                    </Stack>
                </Offcanvas.Body>
            </Offcanvas>
        </React.Fragment>
    );
};


