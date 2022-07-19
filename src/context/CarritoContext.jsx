import { createContext } from "react";
import { useState } from 'react';

export const CartContext = createContext();

const CarritoContext = ({ children }) => {
  const [cart, setCart] = useState([])

  const agregarAlCarrito = (item) => {

    if (estaEnCarrito(item.item.id)) {
      let prod = cart.find((i) => i.item.id == item.item.id);
      console.log(prod)
      prod.quantity += item.quantity;
    } else {
      cart.push(item)
    }
    console.log(cart)
  }

  const estaEnCarrito = (id) => {
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].item.id === id) {
        return true;
      } else { return false }
    }
    /*return cart.find((item) => item.id === id) ? true : false;*/
  };

  const vaciarCarrito = (item) => {
    setCart([]);
  };

  const eliminarItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider value={[cart, setCart, agregarAlCarrito, estaEnCarrito, vaciarCarrito, eliminarItem]}>
      {children}
    </CartContext.Provider>
  )

}


export default CarritoContext