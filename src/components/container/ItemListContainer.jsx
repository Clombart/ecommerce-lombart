import { useState } from "react";
import { useEffect } from "react";
import { useParams } from 'react-router-dom';
import ItemList from "./ItemList"
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';

import Spinner from 'react-bootstrap/Spinner';

const ItemListContainer = () => {

    const [listadoProductos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoriaId } = useParams();

    //productos filtrados
    useEffect(() => {
        const db = getFirestore();
        if (categoriaId) {
            const queryCollection = collection(db, 'productos');
            const queryCollectionFilter = query(queryCollection, where('categoria', '==', categoriaId));
            getDocs(queryCollectionFilter)
                .then(resp => setProductos(resp.docs.map(prod => ({ id: prod.id, ...prod.data() }))))
                .catch(err => console.log(err))
                .finally(() => setLoading(false))
        } else {
            const queryCollection = collection(db, 'productos');
            getDocs(queryCollection)
                .then(resp => setProductos(resp.docs.map(prod => ({ id: prod.id, ...prod.data() }))))
                .catch(err => console.log(err))
                .finally(() => setLoading(false))
        }
    }, [categoriaId])

    return (
        <>
            {loading ? <Spinner className="position-absolute top-50 start-50" animation="border" variant="warning" role="status">
                <span className="visually-hidden">Cargando...</span>
            </Spinner>
                : <ItemList productos={listadoProductos} />
            }
        </>
    )
}

export default ItemListContainer