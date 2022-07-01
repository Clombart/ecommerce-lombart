import gFetch from "../../helpers/Promise";
import { useState } from "react";
import { useEffect } from "react";
import ItemList from "../ItemList"

import Spinner from 'react-bootstrap/Spinner';


const ItemListContainer = () => {
    const [listadoProductos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        gFetch
            .then(resp => setProductos(resp))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }, [])

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