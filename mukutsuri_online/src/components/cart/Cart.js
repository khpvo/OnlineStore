import React from "react";
import CartItem from "./cartitem/CartItem";
import Logo from "../../logo.svg";
import { Link } from "react-router-dom";

function Cart({
  cart,
  handleUpdateCart,
  handleRemoveFromCart,
  handleEmptyCart,
}) {
  const EmptyCart = () => (
    <div className="col-md-5 col-lg-4 order-md-center">
      <h4 className="d-flex justify-content-between align-items-center mb-3">
        <span className="text-primary">Your cart</span>
        <span className="badge bg-primary rounded-pill">0</span>
      </h4>
      <ul className="list-group mb-3">
        <li className="list-group-item d-flex justify-content-between lh-sm">
          <div>
            <h4 className="my-0">Cart is empty</h4>
            <hr className="my-4" />
            <Link className="w-100 btn btn-primary btn-lg" to="/">
              Go shopping
            </Link>
          </div>
          <span className="text-muted">$0</span>
        </li>
      </ul>
    </div>
  );

  const FilledCart = () => (
    <div>
      <h4 className="d-flex justify-content-between align-items-center mb-3">
        <span className="text-muted">Your cart</span>
        <span className="badge bg-secondary">{cart.line_items.length}</span>
      </h4>
      <hr className="text-muted" />
      <div className="row m-3">
        {cart.line_items.map((item) => (
          <div className="col-sm-4 col-md-3" key={item.id}>
            <CartItem
              item={item}
              handleUpdateCart={handleUpdateCart}
              handleRemoveFromCart={handleRemoveFromCart}
            />
          </div>
        ))}
      </div>
      <div className="my-3 list-group-item d-flex justify-content-between">
        <span>Subtotal (UGX)</span>
        <strong>{cart.subtotal.formatted_with_symbol}</strong>
      </div>
      <div className="btn-group btn-block">
        <button className="btn btn-danger" onClick={handleEmptyCart}>
          Empty Cart
        </button>
        <button className="btn btn-primary">Continue to checkout</button>
      </div>
    </div>
  );

  if (!cart.line_items) {
    return (
      <div class="my-3">
        <div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2 text-center"></div>
        <div class="">
          <div class="spinner-grow text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <div class="spinner-grow text-secondary" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <div class="spinner-grow text-success" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <div class="spinner-grow text-danger" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <div class="spinner-grow text-warning" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <div class="spinner-grow text-info" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <div class="spinner-grow text-light" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <div class="spinner-grow text-dark" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="container">
      <div className="row g-5">
        {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
      </div>
    </div>
  );
}

export default Cart;
