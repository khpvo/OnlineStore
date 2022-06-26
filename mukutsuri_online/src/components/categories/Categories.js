import React from "react";
import Featured from "../products/product/Featured";
import Spinner from "../spinner/Spinner";

function Categories({ categories }) {
  if (!categories?.length) {
    return <Spinner />;
  }
  return (
    <div className="container">
      <div className="row">
        {categories.map((category) => (
          <div className="col-sm-4 col-md-3 mb-3" key={category.id}>
            <Featured />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
