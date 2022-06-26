import React from "react";

function CartItem({ item, handleUpdateCart, handleRemoveFromCart }) {
  const numberOfItemsUpdate = 1;
  return (
    <div className="card">
      <img
        src={item.image.url}
        className="bd-placeholder-img"
        width="100%"
        height="50%"
        aria-label="Featured Product: Image"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
      />

      <div className="card-body text-muted">
        <h5 className="card-title">{item.name}</h5>
        <p className="card-text d-flex justify-content-between">
          <span>Number:</span>
          <strong className="ml-5">{item.quantity}</strong>
        </p>
        <p className="card-text d-flex justify-content-between">
          <span>Price:</span>
          <strong className="ml-5">
            {item.line_total.formatted_with_symbol}
          </strong>
        </p>
      </div>

      <div className="card-body btn-group">
        <button
          className="btn btn-small btn-info"
          onClick={() =>
            handleUpdateCart(item.id, item.quantity - numberOfItemsUpdate)
          }
        >
          -
        </button>
        <button className="btn btn-small btn-secondary">{item.quantity}</button>
        <button
          className="btn btn-small btn-info"
          onClick={() =>
            handleUpdateCart(item.id, item.quantity + numberOfItemsUpdate)
          }
        >
          +
        </button>
      </div>
      <div className="card-body">
        <button
          className="btn btn-small btn-danger btn-block"
          onClick={() => handleRemoveFromCart(item.id)}
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default CartItem;
