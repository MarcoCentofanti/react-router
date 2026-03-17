import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function ProductPage() {
  const [singleProduct, setSingleProduct] = useState({});
  const { id } = useParams();
  const productId = Number(id)
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setLoader(true);
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => {
        // console.log(res)
        if (res.data === "") {
          navigate(-1);
          alert("Prodotto inesistente");
        } else {
          setSingleProduct(res.data);
        }
      })
      .catch((err) => {
        console.error("ERRORE:", err);
        navigate(-1);
      })
      .finally(() => setLoader(false));

    // .catch(alert("Server Problem"))
  }, [productId, navigate]);

  function goPrev() {
    if (productId > 1) {
      navigate(`/Products/${productId - 1}`)
  }}

  function goNext() {
    navigate(`/Products/${productId + 1}`)
  }

  return (
    <div className="d-flex box container" key={singleProduct.id}>
      <div>
        {loader ? (
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        ) : (
          <img className="productImage me-5" src={singleProduct.image} alt="" />
        )}

        <div className="d-flex row">
          <button
            onClick={() => goPrev()}
            className="btn btn-secondary col-5"
            disabled={id === 1}
          >
            ←
          </button>
          <button
            onClick={() => goNext()}
            className="btn btn-secondary col-5"
          >
            →
          </button>
        </div>
      </div>
      <div>
        <h3>
          {singleProduct.title}{" "}
          <span className="category">({singleProduct.category})</span>
        </h3>

        <p>Price: {singleProduct.price}$</p>
        {/* <p>recensioni {singleProduct.rating.rate}/5 <span>({singleProduct.rating.count})</span></p> */}

        <p>Description:</p>
        <p>{singleProduct.description}</p>
      </div>
    </div>
  );
}
