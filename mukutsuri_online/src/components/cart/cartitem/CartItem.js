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
        <p className="card-text"><strong>Number:</strong>{item.quantity}</p>
        <p className="card-text"><strong>Price:</strong>{item.line_total.formatted_with_symbol}</p>
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
