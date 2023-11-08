import { NavLink } from "react-router-dom"

export default function Navbar({cart}) {
  
  return (
    <nav>
      <div className="left">
        <h1>Fake Shop</h1>
        <NavLink to="/" >Home</NavLink>
        <NavLink to="items">Items</NavLink>
      </div>
      <NavLink to="cart">
        <div className="right">
          <p>{cart} Items in Cart</p>
          <div className="cart"></div>
        </div>
      </NavLink>
    </nav>
  )
}