import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

export default function Details({ addToCart }) {
  const { item } = useParams()
  const [itemData, setItemData] = useState(null)
  const [amount, setAmount] = useState(1)

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${item}`)
      .then(response => response.json())
      .then(json => {
        //console.log(json)
        setItemData(json)
      })
  }, [])

  return (
    <div className="details">
      {itemData && <>
        <img src={itemData.image} alt="" />
        <div className="text">
          {/* <p>{itemData.category}</p> */}
          <p>{itemData.title}</p>
          <p>{itemData.description}</p>
          <p>{itemData.rating.rate}/5 stars, {itemData.rating.count} votes</p>
          <p>${itemData.price}</p>
          <div className="cartnumber">
            <input name="amount" type="number" value={amount} onChange={(e) => setAmount(Number(e.target.value))} />
            <div className="cartcontainer">
              <div className="cart" onClick={() => addToCart(itemData, amount)}></div>
            </div>
          </div>
          <Link to={-1}>Back </Link>
        </div>
      </>}
    </div>
  )
}