import { useState } from "react"
import { useLoaderData } from "react-router-dom"
import { Link } from "react-router-dom"

function Item({ item, addToCart }) {
  let [amount, setAmount] = useState(1);
  const { id, price, image, title } = item

  return (
    <div className="item">
      <div className="image">
        <Link to={`${id}`} >
          <img src={image} alt={title} />
        </Link>
      </div>
      <div className="data">
        <p className="description">{title}</p>
        <p className="price">${price.toFixed(2)}</p>
        <div className="cartnumber">
          <input name="amount" type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
          <div className="cartcontainer">
            <div className="cart" onClick={() => addToCart(item, amount)}></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Items({ addToCart }) {
  const items = useLoaderData()

  return (
    <div className="items">
      {items && items.map(item => (
        <Item key={item.title} item={item} addToCart={addToCart} />
      ))}
    </div>
  )
}

export const itemsLoader = async () => {
  const response = await fetch('https://fakestoreapi.com/products')
  return response.json()
}