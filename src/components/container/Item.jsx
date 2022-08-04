import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { memo } from 'react';

const Item = memo(
    ({products}) => {
        //console.log(products)
        const { img, nombre,marca, precio, presentacion, id } = products;
        return (
            <div className="d-flex justify-content-evenly">
                <Card className="text-center d-flex " style={{ width: '18rem' }}>
                    <Card.Header>{marca}</Card.Header>
                    <div style={{ width: '100%', }}>
                        <Card.Img variant="top" src={img} style={{ width: 'auto', maxHeight: '280px' }} />
                    </div>
                    <Card.Body>
                        <Card.Title>{`${nombre}`}</Card.Title>
                        <Card.Text>
                            {`$${precio}`}
                        </Card.Text>
                        <Link to={`/item/${id}`}>
                            <Button variant="outline-warning">Comprar</Button>
                        </Link>
                    </Card.Body>
                    <Card.Footer className="text-muted">{`${presentacion}`}</Card.Footer>
                </Card>
            </div>
        )
    }
)

export default Item