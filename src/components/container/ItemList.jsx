import Item from "./Item"

const ItemList = ({productos}) => {
    
    return (
        <div id="contenedor-Cards" className=" w-100">
           {productos.map(prod => <Item {...prod} key={prod.id}/>
    )}
        </div>
    )
}

export default ItemList
