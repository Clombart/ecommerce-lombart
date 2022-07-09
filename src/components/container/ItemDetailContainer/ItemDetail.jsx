import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


const ItemDetail = ({ item }) => {

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
                    <Button variant="outline-warning">Agregar</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ItemDetail