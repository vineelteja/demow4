import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlusCircle, faMinusCircle} from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

function DisplayProducts(props) {
    const {products = []} = props
    const [show, setShow] = useState(false);
    const [showImge, setShowImge] = useState({});
    const handleClose = () => setShow(false);
    const handleShow = (product) => {
        setShow(true);
        setShowImge(product);
    }

    return (
        <div>
            <div>
                <form className="row align-item-center m-3">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                        <label class="visually-hidden" for="autoSizingSelect">Sort Price By:</label>
                        <select class="form-select w-25" id="autoSizingSelect" onChange={(e) => props.onSort(products, e.target.value)}>
                            <option value="def" selected>Normal</option>
                            <option value="asc">Lowest</option>
                            <option value="desc">Highest</option>
                        </select>
                    </div>
                    <div className="col-md-4"></div>
                </form>
            </div>
            {products.map(product => {
                return (
                    <div className="card" key={product.id}>
                        <h4 className="text-start mt-4 ms-5 me-4 mb-2">{product.desc} <span style={{color: "red"}}> ${product.price}</span></h4>
                        <div className="row p-2 align-middle">
                            <Button variant="" className="w-25" onClick={() => setShow(true)}>
                                <img alt={product.desc} src={product.image} width="50px" className="col-6 col-md-4 mt-1 ms-4 me-4 mb-2"
                                onClick={() => handleShow(product)} />
                            </Button>
                            
                            <p className="col-sm-6 col-md-8 align-self-center text-start">
                                <button className="btn btn-secondary mx-1 ps-3" onClick={() => props.onIncrement(product)}>         <FontAwesomeIcon className="me-1" icon={faPlusCircle} /> </button>
                                <button className="btn btn-secondary mx-1 ps-3" onClick={() => props.onDecrement(product)}> 
                                <FontAwesomeIcon className="me-1" icon={faMinusCircle} /></button>
                                <span className="p-3">{product.value}</span>
                                quantity
                            </p>
                        </div>
                    </div>
                )
            })}
            <Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title id="">{showImge.desc}</Modal.Title>
                </Modal.Header>
                    <Modal.Body>
                        <img alt={showImge.desc} src={showImge.image} width="350px" className="mx-5" />
                        <p>Ratings: {showImge.ratings}/5</p>
                    </Modal.Body>
                    {/* <Modal.Footer>
                        <Button onClick={props.onHide}>Close</Button>
                    </Modal.Footer> */}
            </Modal>
        </div>
    )
}

export default DisplayProducts;