import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import React, { useState } from "react"

import Home from "./Home"
import Items, { itemsLoader } from "./Items"
import Navbar from "./Navbar"
import Details from "./Details"
import Cart from "./Cart"

function App() {
  const [cart, setCart] = useState({})
  const cartAmount = Object.values(cart).reduce((total, item) => total += item.amount, 0)

  function addToCart(item, amount) {
    //console.log('addToCart', item, amount)
    const tempCart = { ...cart }
    tempCart[item.id] = { ...item, "amount": cart[item.id] != undefined ? cart[item.id].amount + Number(amount) : Number(amount) }
    setCart(tempCart)
  }

  function changeCart(item, amount) {
    //console.log('changeCart', item, amount)
    const tempCart = { ...cart }
    amount > 0 ? tempCart[item.id] = {...item, "amount": amount} : delete tempCart[item.id]    
    setCart(tempCart)
  }

  const router = createBrowserRouter([{
    path: "/",
    element: (
      <>
        <Navbar cart={cartAmount} />
        <Outlet />
      </>
    ),
    children: [
      { path: "/", element: <Home /> },
      { path: "items", element: <Items addToCart={addToCart} />, loader: itemsLoader },
      { path: "items/:item", element: <Details addToCart={addToCart} /> },
      { path: "cart", element: <Cart cart={cart} changeCart={changeCart}/> }
    ],
  }])

  return (
    <RouterProvider router={router} />
  )
}

export default App