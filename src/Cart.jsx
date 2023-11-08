import { Link } from "react-router-dom";

function CartItem({ item, changeCart }) {
  
  return (
    <div className="cartbox" >
      <Link to={`../items/${item.id}`}><img src={item.image} alt="" /></Link>
      <div className="data">
        <p>{item.title}: ${item.price}</p>
        <input name="amount" type="number" value={item.amount} onChange={(e) => changeCart(item, Number(e.target.value))} />
        <p>pcs: total ${(item.amount * item.price).toFixed(2)}</p>
      </div>
    </div>
  )
}

export default function Cart({ cart, changeCart }) {

  return (
    <div className="shoppingcart">
      <h2>Shopping cart {Object.values(cart).length < 1 && "is empty!"}</h2>
      {Object.values(cart).map(item => <CartItem key={item.id} item={item} changeCart={changeCart} />)}
      <div className="cartbox">
        <input type="button" value="Checkout"/>
        <p>Total: ${Object.values(cart).reduce((total, item) => total + (item.amount * item.price), 0).toFixed(2)}</p>
      </div>
    </div>
  )
}