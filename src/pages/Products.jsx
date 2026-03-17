import { useState, useEffect } from "react"
import { useBudget } from "../contexts/BudgetContext";

import axios from "axios"
import ProductCard from "../components/ProductCard"

export default function Products() {
  const { budgetMode, setBudgetMode } = useBudget();
  const [productsData, setProductsData] = useState([])

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then(res => {
        setProductsData(res.data)

      })

      // .catch(alert("Server Problem"))
  }, [])



  return (
    <div className="container">
      {budgetMode?      
      <div>
      {productsData.map(singleProduct => 
       singleProduct.price > 30? null : 

        <ProductCard key={singleProduct.id}  singleProduct={singleProduct} />  
      
      )}
      </div>:
      <div>
      {productsData.map(singleProduct => (
        <ProductCard key={singleProduct.id}  singleProduct={singleProduct} />  
      ))}
      </div>}
    </div>
  ) 
}