import axios from "axios"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"




export default function ProductPage() {
  const [singleProduct, setSingleProduct] = useState({})
  const {id} = useParams()

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(res => {
        // console.log(res)
        console.log(id)
        setSingleProduct(res.data)

      })

      // .catch(alert("Server Problem"))
  }, [id])






  return (
    <div className="d-flex box" key={singleProduct.id}>
      <div>
        <img className="productImage me-5" src={singleProduct.image} alt="" />
        <button className="btn btn-secondary productButton">Scopri di più</button>
      </div>
      <div>
      <h3>{singleProduct.title} <span className="category">({singleProduct.category})</span></h3>

      <p>Price: {singleProduct.price}$</p>
      {/* <p>recensioni {singleProduct.rating.rate}/5 <span>({singleProduct.rating.count})</span></p> */}
      
      <p>Description:</p>
      <p>{singleProduct.description}</p>
      </div>
 
    </div>
  ) 
}