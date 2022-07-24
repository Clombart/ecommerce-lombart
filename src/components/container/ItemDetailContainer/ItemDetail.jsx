import ItemCount from '../ItemCount.jsx';
import { useContext, useState } from 'react';
import { CartContext } from '../../../context/CarritoContext';
import { Link } from 'react-router-dom';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const ItemDetail = ({ item }) => {

    const {agregarAlCarrito, cantidadTotal}= useContext(CartContext)

    const [cantidad, setCantidad] = useState()

    const onAdd = (contador) => {
        setCantidad(contador)
        const producto = {item: item, cantidad: contador }
        agregarAlCarrito({ ...producto, cantidad: contador})
        
    }

    return (
        <div className="container-fluid">
            <Card className=" container-fluid d-flex flex-row align-items-center justify-items-center w-50 mx-auto mt-4" style={{ width: '50vw' }}>
                <Card.Img variant="top" src={item.img} style={{ width: '16rem' }} />
                <Card.Body className="">
                    <Card.Title>{`${item.nombre}`}</Card.Title>
                    <Card.Text>
                        {`${item.presentacion}`}
                    </Card.Text>
                    <Card.Text>
                        {`${item.marca}`}
                    </Card.Text>
                    <Card.Text>
                        {`$${item.precio}`}
                    </Card.Text>
                    <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
                   
                    <Link to="/cart"><Button variant="outline-warning">Terminar Compra</Button></Link>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ItemDetail