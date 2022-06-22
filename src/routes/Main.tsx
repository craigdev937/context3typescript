import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Home } from "../components/Home";
import { About } from "../components/About";
import { Store } from "../components/Store";

export const Main = (): JSX.Element => (
    <BrowserRouter>
        <React.Fragment>
            <Container className="mb-4">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/store" element={<Store />} />
                </Routes>
            </Container>
        </React.Fragment>
    </BrowserRouter>
);


