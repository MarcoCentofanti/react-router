import { useState, useEffect } from "react";
import { useBudget } from "../contexts/BudgetContext";

import axios from "axios";
import ProductCard from "../components/ProductCard";

export default function Products() {
  const { budgetMode, budgetLimit, setBudgetLimit, setMaxPrice } = useBudget();
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setProductsData(res.data);
      const prices = res.data.map((product) => product.price);
      const max = Math.ceil(Math.max(...prices));
      setMaxPrice(max);
      setBudgetLimit(max);
    });

    // .catch(alert("Server Problem"))
  }, [setMaxPrice, setBudgetLimit]);

  const filteredProduct = budgetMode
    ? productsData.filter((product) => product.price <= budgetLimit)
    : productsData;

  return (
    <div className="container">
      {filteredProduct.map((singleProduct) => (
        <ProductCard key={singleProduct.id} singleProduct={singleProduct} />
      ))}
    </div>
  );
}
