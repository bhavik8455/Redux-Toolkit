import React from "react";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



const Cards = (props) => {
    console.log(props)

    return (
        <Card style={{ margin: "1rem", border: "2px solid", width: "20rem" }}>
            <Card.Img variant="top" src={props.filename} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <h3>{props.price}</h3>
                <Button variant="primary">Add To Cart</Button>
            </Card.Body>
        </Card>

    );
};

export default Cards;