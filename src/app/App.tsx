import React from "react";
import "./App.css";
import { Main } from "../routes/Main";

export const App = (): JSX.Element => {
    return (
        <React.Fragment>
            <section className="bg-secondary">
                <Main />
            </section>
        </React.Fragment>
    );
};


