import React from "react";
import Product from "./product/Product";
import Spinner from "../spinner/Spinner";

function Products({products, onAddToCart}) {
  if (!products.length) {
    return <Spinner/>
  }
  return (
    <div className="container">
      <div className="row">
        {products.map((product) => (
          <div className="col-sm-4 col-md-3 mb-3" key={product.id}>
            <Product product={product} onAddToCart={onAddToCart} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
