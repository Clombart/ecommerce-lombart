import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Item = (prod) => {
    //console.log(prod)
    return (
        <>
            <Card className='tarjeta p-3  d-flex justify-content-evenly flex-wrap m-2' border="danger" key={prod.id} style={{ width: '16rem' }}>
                <Card.Img variant="top" src={prod.img} />
                <Card.Body>
                    <Card.Title>{`${prod.name}`}</Card.Title>
                    <Card.Text>
                        {`${prod.marca}`}
                    </Card.Text>
                    <Card.Text>
                        {`${prod.precio}`}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </>
    )
}

export default Item