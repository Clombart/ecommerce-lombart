import { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../../../context/CarritoContext';
import ItemCarrito from './ItemCarrito'

const Cart = () => {

  const {
    cart,
    vaciarCarrito,
    totalAPagar,
    cantidadTotal,

  } = useContext(CartContext)
  cantidadTotal()

  
  return (
    <div>
      <h1>Carrito</h1>
      {(cart.length)?
        
       <div className="d-flex flex-row w=100">
        <ul className="w-50">
          {cart.map((producto) =>   
            <ItemCarrito item={producto} key={producto.item.id}/>
          )}
        </ul>

        <div className="w-50">
          <div className=" d-flex flex-row w=100 justify-content-center px-2 mb-5">
            <h3 className="my-2">Cantidad de Productos:</h3>
            <h3 id="total" className="my-2">{cantidadTotal()}</h3>
          </div>
          <div className=" d-flex flex-row w=100 justify-content-evenly px-2 mb-5">
            <h3 className="my-2">Total</h3>
            <h3 id="total" className="my-2">${totalAPagar()}</h3>
          </div>

          <div className=" d-flex flex-row w=100 justify-content-evenly px-2 mb-5">
            <button onClick={vaciarCarrito}>Vaciar Carrito</button>
            <button>Terminar Compra</button>
          </div>
        </div>
      </div>

        : <>
          <h2>No hay productos en el carrito</h2>
          <Link to='/'><button> Elegir Productos</button></Link>
        </>
      }
    </div>
  )
}

export default Cart

{/*<ul className="w-50">
          {cart.map((producto,i) => {
            return (
              <>
                <li className="list-group" key={i} >
                  <ItemCarrito item={producto}  />
                </li>
              </>
            )
          })}
        </ul>


        {/* {
    totalAPagar() !==0 && totalAPagar()
  }  */}