
import { createContext } from "react";
import { useState } from 'react';

export const CartContext = createContext();

const CarritoContext = ({ children }) => {

  const [cart, setCart] = useState([])
  const agregarAlCarrito = (item) => {

    //traerCarritoEnProceso()

    // const indexProduct = cart.findIndex(prod => prod.id === item.id)

    // if (indexProduct == -1) {
    //   setCart([...cart, item])

    // } else {

    //   const cantidadVieja = cart[indexProduct].cantidad;
    //   cart[indexProduct].cantidad = cantidadVieja + item.cantidad
    //   setCart([...cart])

    // }

    if (estaEnCarrito(item.item.id)) {

      let prod = cart.find((i) => i.item.id === item.item.id);
      prod.cantidad += item.cantidad;
      setCart([...cart, item])

    } else {
      cart.push(item)
    }

    console.log(cart)
    
    
    //setLocalStorage()
  }

  const estaEnCarrito = (id) => {
    return (cart.find(item => item.item.id === id ? true : false))
  };

  const vaciarCarrito = () => {
    setCart([]);
  };

  const eliminarItem = (id) => {
    setCart(cart.filter((item) => item.item.id !== id));
  };

  const totalAPagar = () => {
    return cart.reduce((acumPrice, prod) => acumPrice + (prod.cantidad * prod.item.precio), 0)
  }

  const cantidadTotal = () => {
    return cart.reduce((contador, prodObj) => contador += prodObj.cantidad, 0)
  }

  // Guarda carrito en LS
  // const setLocalStorage = () => {
  //   const carritoJSON = JSON.stringify(cart);
  //   localStorage.setItem("carritoEnProceso", carritoJSON);
  // }

  // Trae carrito de LS

  // const traerCarritoEnProceso=()=> {
  //   const carritoEnLS = localStorage.getItem("carritoEnProceso");
  //   if (cart){
  //     JSON.parse(cart)
  //   }else{
  //  return []

  // }
  // const traerCarritoEnProceso = () => {
  //   const carritoEnLS = JSON.parse(localStorage.getItem("carritoEnProceso"));
  //   //carritoEnLS && (cart = carritoEnLS);
  // }

  return (
    <CartContext.Provider value={{
      cart,
      setCart,
      agregarAlCarrito,
      vaciarCarrito,
      eliminarItem,
      cantidadTotal,
      totalAPagar,
      //traerCarritoEnProceso,
      //setLocalStorage
    }}>
      {children}
    </CartContext.Provider>
  )
}


export default CarritoContext