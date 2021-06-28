import React from "react";
import { Link } from "react-router-dom";
import {Button} from "react-bootstrap";

export default function Basket(props) {
    const {prods = []} = props
    return (
        <div className="block">
            <h2>Cart Items</h2>
            {prods.map((prod) => {
                if(prod.value > 0) {
                    return (
                        <div className="border d-flex align-items-start m-3 ps-5">
                            <img src={prod.image} alt={prod.desc} width='150' />
                            <p className="qty d-inline mx-5 mt-5 pt-3 justify-content-center">Quantity: {prod.value}</p>
                            <p className="px-4 pt-3 mt-5">{prod.desc}</p>
                        </div>
                    )
                }
            })}
            <CheckOutBtn totalValue={props.totalValue} />
        </div>
    );
}

const CheckOutBtn = ({totalValue}) => {
    return (
        totalValue > 0 ?
        <Link to="/signin">
            <Button className="mt-4">Check Out</Button>
        </Link>
        :
        <React.Fragment>
            <h4>There are {totalValue} items in your cart.</h4>
            <Link to="/">
                <Button className="mt-4 bg-success">Continue Shop</Button>
            </Link>
        </React.Fragment>
    )
}