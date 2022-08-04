
import { createContext } from "react";
import { useState } from 'react';

export const CartContext = createContext();

const CarritoContext = ({ children }) => {

  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0)

  const agregarAlCarrito = (producto) => {
    let newCarrito = [];
    //console.log(producto)

    if (estaEnCarrito(producto.item.id)) {
      let prod = cart.find((i) => i.item.id === producto.item.id);
      //console.log (prod)
      prod.cantidad += producto.cantidad;
      newCarrito = [...cart];

    } else {
      newCarrito = [...cart, producto];
    }
    setCart(newCarrito);
  }

  //console.log(cart)

  const estaEnCarrito = (id) => {
    // console.log('entroaestaencarrito')
    // console.log(id)
    // let prueba= cart.find((item) => item.item.id === id) ? true : false;
    // console.log(prueba)
    return cart.find((item) => item.item.id === id) ? true : false;
  };

  const eliminarItem = (id) => {
    setCart(cart.filter((item) => item.item.id !== id));
  };

  const vaciarCarrito = () => {
    setCart([]);
  };

  const totalAPagar = () => {
    return cart.reduce((acumPrice, prod) => acumPrice + (prod.cantidad * prod.item.precio), 0)
  }

  const cantidadTotal = () => {
    return cart.reduce((contador, prodObj) => contador += prodObj.cantidad, 0)
  }

  // AGREGO CANTIDAD A UN PRODucto EXISTENTE EN EL CART
  const sumaContador = (producto) => {
    let nuevoCarro;
    let index = cart.findIndex((el) => el.id === producto.item.id);
    cart[index].cantidad++;
    nuevoCarro = [...cart];
    setCart(nuevoCarro);
  };

  // RESTO CANTIDAD A UN PROF EXISTENTE E EL CART
  // const restaContador = (producto) => {
  //   let nuevoCarro;
  //   let index = cart.findIndex((el) => el.id === producto.item.id);
  //   if(cart[index].cantidad > 1){
  //     cart[index].cantidad-- 
  //   }else{
  //     null;
  //   } 
  //   nuevoCarro = [...cart];
  //   setCart(nuevoCarro);
  // };

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

//sgregar al carrito
// const indexProduct = cart.findIndex(prod => prod.id === item.id)

    // if (indexProduct == -1) {
    //   setCart([...cart, item])

    // } else {

    //   const cantidadVieja = cart[indexProduct].cantidad;
    //   cart[indexProduct].cantidad = cantidadVieja + item.cantidad
    //   setCart([...cart])

    // }