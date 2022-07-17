import { useState } from "react"

import Button from 'react-bootstrap/Button';
import productos from "../../helpers/arrayProductos.jsx";

const ItemCount = ({ stock, onAdd, initial }) => {
    const [ count, setCount ] = useState(initial)

    const restar = () => {
        if (count > initial) {
            setCount(count - 1)
        }
    }
    const sumar = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }

    return (
        <div>
            <span onClick={restar}>-</span>
            <span>{count}</span>
            <span onClick={sumar}>+</span>
            <Button variant="outline-warning" disabled={count>stock} onClick ={()=>onAdd(count)}>Agregar</Button>
        </div>
    )
}

export default ItemCount