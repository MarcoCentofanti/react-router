import { Link } from "react-router-dom"


export default function ProductCard({singleProduct}) {


  return (
    <div className="box product-card" key={singleProduct.id}>
      <div className="product-media">
        <img  
          className="productImage me-5" 
          src={singleProduct.image} alt="" />
        <Link 
          to={`/Products/${singleProduct.id}`} 
          className="btn btn-secondary productButton">
            Scopri di più
        </Link>
      </div>
      <div>
      <h3>{singleProduct.title} <span className="category">({singleProduct.category})</span></h3>

      <p>Price: {singleProduct.price}$</p>
      <p>recensioni {singleProduct.rating.rate}/5 <span>({singleProduct.rating.count})</span></p>
      
      <p>Description:</p>
      <p>{singleProduct.description}</p>
      </div>
 
    </div>
  ) 
}