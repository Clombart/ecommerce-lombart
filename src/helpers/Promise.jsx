import productos from "./arrayProductos.jsx";

const gFetch = new Promise((resolve, reject) => {
    let condition = true;
    if (condition) {
        setTimeout(() => {
            resolve(productos);
        }, 2000);
    } else {
        reject('error de carga');
    }
});

export default gFetch;