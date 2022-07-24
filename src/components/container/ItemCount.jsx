import { useState } from "react"

import Button from 'react-bootstrap/Button';



const ItemCount = ({ stock, onAdd, initial }) => {
    const [count, setCount] = useState(initial)

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
            <div className="input-group mb-3">
                <button className="btn btn-outline-secondary" type="button" onClick={restar}>-</button>
                <input type="number" className="form-control" placeholder={count}></input>
                <button className="btn btn-outline-secondary" type="button"onClick={sumar}>+</button>    
            </div>
            <Button variant="outline-warning" disabled={count > stock} onClick={() => onAdd(count)}>Agregar</Button>
            
        </div>
    )
}

export default ItemCount