import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';

import { doc, getDoc, getFirestore } from 'firebase/firestore';

import Spinner from 'react-bootstrap/Spinner';

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams({});


    useEffect(() => {
        const db = getFirestore();
        const queryProduct = doc(db, 'productos', id);
        getDoc(queryProduct) //trae un solo elemento, para traer muchos getDocs ... es una promesa
            .then(resp => setProducto({ id: resp.id, ...resp.data() }))
            .catch((error) => { console.log(error) })
            .finally(() => { setLoading(false) })
    }, [id])

    return (
        <>
            {loading ? <Spinner className="position-absolute top-50 start-50" animation="border" variant="warning" role="status">
                <span className="visually-hidden">Cargando...</span>
            </Spinner>
                : <ItemDetail item={producto} />
            }
        </>
    )
}

export default ItemDetailContainer