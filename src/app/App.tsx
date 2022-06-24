import React from "react";
import "./App.css";
import { Main } from "../routes/Main";
import { CartProvider } from "../context/SContext";

export const App = (): JSX.Element => {
    return (
        <React.Fragment>
            <CartProvider>
                <section className="bg-secondary">
                    <Main />
                </section>
            </CartProvider>
        </React.Fragment>
    );
};


