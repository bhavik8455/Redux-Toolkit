import React from "react";
import { useDispatch } from "react-redux";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { addItem } from "../redux/Slice/cardSlice";



const Cards = (props) => {

    const dispatch = useDispatch();


    return (
        <Card style={{ margin: "1rem", border: "2px solid", width: "20rem" }}>
            <Card.Img variant="top" src={props.filename} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <h3>{props.price}</h3>
                <Button onClick={(e) => dispatch(addItem({ name: props.title, price: props.price }))}
                    variant="primary">Add To Cart</Button>
            </Card.Body>
        </Card>

    );
};

export default Cards;