import { useState } from "react";
import { useEffect } from "react";
import { useParams } from 'react-router-dom';
import gFetch from "../../helpers/Promise";
import ItemList from "./ItemList"


import Spinner from 'react-bootstrap/Spinner';

const ItemListContainer = () => {

    const [listadoProductos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoriaId } = useParams();

    useEffect(() => {
        gFetch
            .then((resp) => {
                if (!categoriaId) {
                    setProductos(resp)
                } else {
                    setProductos(resp.filter(prod => prod.categoria === categoriaId))
                }
            })
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
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