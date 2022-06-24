import React from "react";

type CartProps = {
   getItemQuantity: (id: number) => number,
   increaseCartQty: (id: number) => void,
   decreaseCartQty: (id: number) => void,
   removeFromCart: (id: number) => void,
};

const CartContext = React.createContext({} as CartProps);
export function useCart() {
    return React.useContext(CartContext);
};

type CartItem = {
    id: number,
    quantity: number
};

type Props = {
    children: React.ReactNode
};

export function CartProvider({ children }: Props) {
    const [cartItems, setCartItems] = 
        React.useState<CartItem[]>([]);

    function getItemQuantity(id: number) {
        return cartItems.find(
            (item) => item.id === id) ?.quantity || 0
    };

    function increaseCartQty(id: number) {
        setCartItems((curItems) => {
            if (curItems.find((item) => item.id === id) == null) {
                return [...curItems, { id, quantity: 1 }]
            } else {
                return curItems.map((item) => {
                    if (item.id === id) {
                        return {
                            ...item, 
                            quantity: item.quantity + 1
                        }
                    } else {
                        return item;
                    }
                })
            }
        });
    };

    function decreaseCartQty(id: number) {
        setCartItems((curItems) => {
            if (curItems.find((item) => item.id === id) 
            ?.quantity == 1) {
                return curItems.filter((item) => item.id !== 1);
            } else {
                return curItems.map((item) => {
                    if (item.id === id) {
                        return {
                            ...item, 
                            quantity: item.quantity - 1
                        }
                    } else {
                        return item;
                    }
                })
            }
        });
    };

    function removeFromCart(id: number) {
        setCartItems((curItems) => {
            return curItems.filter((item) => item.id !== id);
        })
    };

    return (
        <CartContext.Provider value={{
            getItemQuantity,
            increaseCartQty,
            decreaseCartQty,
            removeFromCart
        }}>
            { children }
        </CartContext.Provider>
    );
};



