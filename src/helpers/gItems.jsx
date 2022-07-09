import ItemListContainer from "../components/container/ItemListContainer.jsx";
import productos from "./arrayProductos.jsx";

const gItems = new Promise((resolve, reject) => {
    let condition = true;
    if (condition) {
        setTimeout(() => {
            resolve(productos)
        }, 2000);
    } else {
        reject('error de carga');
    }
});

export default gItems;
