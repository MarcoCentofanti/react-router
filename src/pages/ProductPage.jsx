import axios from "axios"
import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"





export default function ProductPage() {
  const [singleProduct, setSingleProduct] = useState({})
  const {id} = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(res => {
        // console.log(res)
        if (res.data === "") {
          navigate(-1)
          alert("Prodotto inesistente")

        } else {
          console.log("Status:", res.status)
          console.log("DATA:", res.data)
          console.log(id)
          setSingleProduct(res.data)
        }
      })
      .catch((err) => {
        console.error("ERRORE:", err)
        navigate(-1)
      }
    )

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