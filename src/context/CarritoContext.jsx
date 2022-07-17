import { createContext } from "react";
import { useState } from 'react';


export const CartContext = createContext();

const CarritoContext = ({ children }) => {
  const [cart, setCart] = useState([])

  const agregarAlCarrito = (item) => {
        
    if (estaEnCarrito(item.id)){
      //seguir intentando
      
    } else {
      setCart([...cart, item]);
      
    }
  }
  const estaEnCarrito = (id) => {
    return cart.find((item) => item.id === id) ? true : false;
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