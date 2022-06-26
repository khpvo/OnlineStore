import React from "react";

function Featured({ product }) {
  return (
    <div className="card">
      <div className="row g-0">
        <div className="col-md-6">
          <img
            src={product.image.url}
            className="bd-placeholder-img"
            width="100%"
            height="100%"
            aria-label="Featured Product: Image"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          />
        </div>
        <div className="col-md-6">
          <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p
              className="card-text"
              dangerouslySetInnerHTML={{ __html: product.description }}
            />
            <p className="card-text">
              <small className="text-muted display-5">30% off sale</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
