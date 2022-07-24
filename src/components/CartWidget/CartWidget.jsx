import { useContext, useState } from 'react';
import { CartContext } from '../../context/CarritoContext';

import './cart.css';

const CartWidget = () => {
  
  return (
    <div className="carrito-container">
      <img src="https://www.ubolosoft.com/Carrito/images/carrito.png" alt="icono carrito" className="carrito-icono" />
    </div>
  )
}

export default CartWidget