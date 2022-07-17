import ItemCount from '../ItemCount.jsx';
import { useContext , useState} from 'react';
import { CartContext } from '../../../context/CarritoContext';
import { Link } from 'react-router-dom';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const ItemDetail = ({ item }) => {
    const [cart, setCart, agregarAlCarrito] = useContext(CartContext);
    const [cantidad, setCantidad] = useState()

    const fContador = (contador) => {
        setCantidad(contador)
        const producto = {item, quantity: contador }
        agregarAlCarrito(producto)
    }

    return (
        <div className="container-fluid">
            <Card className=" container-fluid d-flex flex-row align-items-center justify-items-center w-50 mx-auto mt-4" style={{ width: '50vw' }}>
                <Card.Img variant="top" src={item.img} style={{ width: '16rem' }} />
                <Card.Body className="">
                    <Card.Title>{`${item.name}`}</Card.Title>
                    <Card.Text>
                        {`${item.presentacion}`}
                    </Card.Text>
                    <Card.Text>
                        {`${item.marca}`}
                    </Card.Text>
                    <Card.Text>
                        {`$${item.precio}`}
                    </Card.Text>
                    {/*<ItemCount stock={item.stock} initial={1} onAdd={fContador} />} ---> esta comentado porq segun la consigna hay que hacer lo de abajo, aunque no le veo mucho sentido ya que no permite seguir agrgando*/}
                    {cantidad ?<Link to="/cart"><Button variant="outline-warning">Terminar Compra</Button></Link>: <ItemCount stock={item.stock} initial={1} onAdd={fContador} /> }
                </Card.Body>
            </Card>
        </div>
    )
}

export default ItemDetail