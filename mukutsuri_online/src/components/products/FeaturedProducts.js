import React from "react";
import Featured from "./product/Featured";
import Spinner from "../spinner/Spinner";

function FeaturedProducts({products}) {
  if (!products.length) {
    return <Spinner />;
  }
  return (
    <div className="container p-0">
      <div className="row">
        {products.map((product) => (
          <div className="col-sm-6 col-md-4 mb-3" key={product.id}>
            <Featured product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturedProducts;
