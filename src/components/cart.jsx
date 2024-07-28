import React from "react";
import { useSelector } from "react-redux";

const Cart = (props) => {

    const items = useSelector((state) => state);
    console.log(items)
    const total = items.cart.reduce((a, b) => a + b.price, 0);

    return (
        <h1>TOTAL ITEMS {items.cart.length}  RS. {total} / -</h1 >
    );
};

export default Cart;