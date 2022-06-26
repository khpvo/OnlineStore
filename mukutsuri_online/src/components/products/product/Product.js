import React from "react";

function Product({ product, onAddToCart }) {
  const numberOfItemsToAdd = 1;
  return (
    <div className="card">
      <img className="bd-placeholder-img card-img-top" src={product.image.url} width="100%" height="180" aria-label="Product: Image cap" />
      <div className="card-content">
        <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.price.formatted_with_symbol}</p>
        <p className="card-text text-muted" dangerouslySetInnerHTML={{__html: product.description}}/>
        <button className="btn btn-primary card-action" onClick={()=>onAddToCart(product.id, numberOfItemsToAdd)}>Add to cart</button>
        </div>
      </div>
    </div>
  );
}

export default Product;
