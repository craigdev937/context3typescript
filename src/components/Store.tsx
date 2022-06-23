import React from "react";
import data from "../data/items.json";
import { Row, Col } from "react-bootstrap";
import { StoreItem } from "./StoreItem";

export const Store = (): JSX.Element => {
    return (
        <React.Fragment>
            <h1>Store</h1>
            <Row md={2} xs={1} lg={3} className="g-3">
                {data.map((item) => (
                    <Col key={item.id}>
                        <StoreItem {...item}/>
                    </Col>
                ))}
            </Row>
        </React.Fragment>
    );
};


