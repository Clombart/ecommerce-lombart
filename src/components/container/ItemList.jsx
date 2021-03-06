import { memo } from "react"
import Item from "./Item"

const ItemList = memo(
    ({productos}) => {
    
        return (
            <div id="contenedor-Cards" className="flex-wrap">
               {productos.map(prod => <Item {...prod} key={prod.id}/>
        )}
            </div>
        )
    }
)



export default ItemList
