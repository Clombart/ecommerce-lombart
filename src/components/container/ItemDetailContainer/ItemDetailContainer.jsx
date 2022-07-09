import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import gItems from '../../../helpers/gItems.jsx';

import Spinner from 'react-bootstrap/Spinner';

const ItemDetailContainer = () => {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        setTimeout(() => {
            gItems
                .then((resp) => setProductos(
                    resp.find((prod) => prod.id === Number(id)))
                )
                .catch((error) => {
                    console.log(error)
                })
                .finally(() => {
                    setLoading(false);
                });

        }, 2000)
    }, [id]);

    //console.log(id);

    return (
        <>
            {loading ? <Spinner className="position-absolute top-50 start-50" animation="border" variant="warning" role="status">
                <span className="visually-hidden">Cargando...</span>
            </Spinner>
                : <ItemDetail item={productos} />
            }
        </>
    )
}

export default ItemDetailContainer