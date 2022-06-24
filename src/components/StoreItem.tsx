import React from "react";
import { Button, Card } from "react-bootstrap";
import { useCart } from "../context/SContext";
import { formatCur } from "../hooks/Currency";

type Props = {
    id: number,
    name: string,
    price: number,
    imgUrl: string
};

export const StoreItem = 
({ id, name, price, imgUrl }: Props) => {
    const { 
        getItemQuantity, increaseCartQty, 
        decreaseCartQty, removeFromCart 
    } = useCart();

    const quantity = getItemQuantity(id);
    
    return (
    <React.Fragment>
        <Card className="h-100">
            <Card.Img 
                variant="top" 
                src={imgUrl} 
                height="200px"
                style={{ objectFit: "cover" }}
            />
            <Card.Body className="d-flex flex-column">
                <Card.Title 
                    className="d-flex 
                        justify-content-between 
                        align-items-baseline">
                            <span className="fs-2">{name}</span>
                            <span 
                                className="ms-2 text-muted"
                                >{formatCur(price)}
                            </span>
                </Card.Title>
                <section className="mt-auto">
                    {quantity === 0 ? (
                        <Button 
                            className="w-100" 
                            onClick={() => increaseCartQty(id)}
                            >+ Add To Cart
                        </Button>
                    ) : 
                        <aside 
                            className="d-flex 
                            align-items-center 
                            flex-column" style={{ gap: ".5rem" }}>
                            <section 
                                className="d-flex 
                                    align-items-center 
                                    justify-content-center"
                                    style={{ gap: ".5rem" }}
                                >
                                <Button
                                    onClick={() => decreaseCartQty(id)}
                                    >-</Button>
                                <div>
                                    <span 
                                        className="fs-3"
                                        >{quantity}
                                    </span>in cart
                                </div>
                                <Button
                                    onClick={() => increaseCartQty(id)}
                                    >+
                                </Button>
                            </section>
                            <Button 
                                variant="danger" 
                                size="sm"
                                onClick={() => removeFromCart(id)}
                                >Remove
                            </Button>
                        </aside>}
                </section>
            </Card.Body>
        </Card>
    </React.Fragment>
    );
};



