import React from "react";
import data from "../data/items.json";
import { useCart } from "../context/SContext";
import { Button, Stack } from "react-bootstrap";
import { formatCur } from "../hooks/Currency";

type Props = {
    id: number,
    quantity: number
};

export const CartItem = 
({ id, quantity }: Props): JSX.Element | null => {
    const { removeFromCart } = useCart();
    const item = data.find((item) => item.id === id);
    if (item == null) return null;

    return (
        <React.Fragment>
            <Stack 
                direction="horizontal" 
                gap={2}
                className="d-flex align-items-center"
                >
                <img 
                    src={item.imgUrl} 
                    height="75px"
                    width="125px"
                    style={{ objectFit: "cover" }}
                />
                <aside className="me-auto">
                    <section>
                        {item.name} {" "}
                        {quantity > 1 && (
                            <span 
                                className="text-muted" 
                                style={{ fontSize: ".65rem"}}
                                >x{quantity}
                            </span>
                        )}
                    </section>
                    <section 
                        className="text-muted"
                        style={{ fontSize: ".75rem" }}>
                            {formatCur(item.price)}
                    </section>
                    <section>{formatCur(item.price * quantity)}</section>
                    <Button
                        variant="outline-danger"
                        size="sm"
                        onClick={() => removeFromCart(item.id)}
                        >&times;
                    </Button>
                </aside>
            </Stack>
        </React.Fragment>
    );
};


