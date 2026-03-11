import { useState, useEffect } from "react"

import axios from "axios"
import ProductCard from "../components/ProductCard"

export default function Products() {

  const [productsData, setProductsData] = useState([])

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then(res => {
        setProductsData(res.data)
        console.log(productsData)
        console.log(res.data)
      })

      // .catch(alert("Server Problem"))
  }, [])



  return (
    <div className="container">
      {productsData.map(singleProduct => (
        <ProductCard  singleProduct={singleProduct} />
       
      ))}
    </div>
  ) 
}