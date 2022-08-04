import React from 'react'
import { useContext, useState } from 'react';

import { CartContext } from '../../../context/CarritoContext';
import Card from 'react-bootstrap/Card';

const ItemCarrito = ({ item }) => {
    const { agregarAlCarrito, eliminarItem, totalAPagar } = useContext(CartContext)
    const [count, setCount] = useState(item.cantidad)
    //const [total, setTotal] = useState(0)

    const restar = () => {
        if (count > 1) {
            setCount(count - 1)
        }
        //setTotal(totalAPagar())
    }
    const sumar = () => {
        if (count <item.item.stock) {
            setCount(count + 1)
        }
        //setTotal(totalAPagar())
    }
    
    return (
        <li className="list-group">
            <Card className="container-fluid d-flex flex-row align-items-center justify-items-center justify-content-evenlyw-100 mx-auto mt-4" style={{ width: '50vw' }}>
                <Card.Img variant="top" src={item.item.img} style={{ width: '5rem' }} />
                <Card.Body className="d-flex flex-row  align-items-center">
                    <Card.Title className="d-block  ">{`${item.item.nombre}`}</Card.Title>
                    <button className="btn btn-outline-secondary" type="button" onClick={restar}>-</button>
                    <Card.Title className="d-block ">{`${count}`}</Card.Title>
                    <button className="btn btn-outline-secondary" type="button"onClick={sumar}>+</button>   
                    <Card.Title className="d-block">{`${(item.item.precio*count)}`}</Card.Title>
                    <button onClick={()=>eliminarItem(item.item.id)}>X</button>
                </Card.Body>
            </Card>
        </li>
    )
}

export default ItemCarrito