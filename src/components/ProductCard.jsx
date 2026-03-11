export default function ProductCard({singleProduct}) {
  return (
    <div className="d-flex box" key={singleProduct.id}>
      <div>
      <img className="productImage me-5" src={singleProduct.image} alt="" />
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