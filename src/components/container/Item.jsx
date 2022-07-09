import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Item = (prod) => {
    //console.log(prod)
    return (

        <div className="d-flex justify-content-evenly">
            <Card className="text-center d-flex " style={{ width: '18rem' }}>
                <Card.Header>{`${prod.marca}`}</Card.Header>
                <div style={{ width: '100%', }}>
                    <Card.Img variant="top" src={prod.img} style={{ width: 'auto', maxHeight: '280px' }} />
                </div>
                <Card.Body>
                    <Card.Title>{`${prod.name}`}</Card.Title>
                    <Card.Text>
                        {`${prod.precio}`}
                    </Card.Text>
                    <Link to={`/item/${prod.id}`}>
                        <Button variant="outline-warning">Comprar</Button>
                    </Link>
                </Card.Body>
                <Card.Footer className="text-muted">{`${prod.presentacion}`}</Card.Footer>
            </Card>
        </div>
    )
}

export default Item