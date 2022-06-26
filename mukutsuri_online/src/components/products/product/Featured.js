import React from "react";

function Featured({product}) {
  return (
    <div className="card">
      <div className="row g-0">
        <div className="col-md-4">
          <img
            className="bd-placeholder-img"
            width="100%"
            height="250"
            aria-label="Featured Product: Image"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">{product.description}</p>
            <p className="card-text">
              <small className="text-muted">30% off sale</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
